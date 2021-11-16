import React, { Component } from 'react';
import { checkTheDate, checkTheEmail, checkTheNameAndSurname, checkTheMsg } from './functionsValidation';


function FormHOC(WrappedComponent) {
  return class extends Component {
    state = {
      valueNameAndSurname: '',
      valueEmail: '',
      valueMsg: '',
      valueDate: '',
      emailIsRequired: true,
      nameAndSurnameIsRequired: true,
      msgIsRequired: true,
      dateIsRequired: true
    }

    onChangeNameAndSurname = (e) => {
      this.setState({ valueNameAndSurname: e.target.value });
    }

    onChangeEmail = (e) => {
      this.setState({ valueEmail: e.target.value });
    }

    onChangeMsg = (e) => {
      this.setState({ valueMsg: e.target.value });
    }

    onChangeDate = (e) => {
      this.setState({ valueDate: e.target.value });
    }

    validation = () => {
      if (checkTheDate(this.state)) {
        this.setState({ dateIsRequired: true });
      } else this.setState({ dateIsRequired: false });

      if (checkTheEmail(this.state)) {
        this.setState({ emailIsRequired: true });
      } else this.setState({ emailIsRequired: false });

      if (checkTheNameAndSurname(this.state)) {
        this.setState({ nameAndSurnameIsRequired: true });
      } else this.setState({ nameAndSurnameIsRequired: false });

      if (checkTheMsg(this.state)) {
        this.setState({ msgIsRequired: true });
      } else this.setState({ msgIsRequired: false });
    }

    onSubmit = (e) => {
      e.preventDefault();
      this.validation();

      fetch(`https://${process.env.REACT_APP_CONTACT}`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: {},
      })
        .then(response => {
          if (!response.ok) {
            console.log('success');
          }
        });
    }

    render() {
      const {
        valueNameAndSurname,
        valueEmail,
        valueMsg,
        valueDate,
        dateIsRequired,
        emailIsRequired,
        nameAndSurnameIsRequired,
        msgIsRequired } = this.state;

      return <WrappedComponent
        {...this.props}
        onChangeNameAndSurname={this.onChangeNameAndSurname}
        valueNameAndSurname={valueNameAndSurname}
        nameAndSurnameIsRequired={nameAndSurnameIsRequired}
        onChangeEmail={this.onChangeEmail}
        valueEmail={valueEmail}
        emailIsRequired={emailIsRequired}
        onChangeMsg={this.onChangeMsg}
        valueMsg={valueMsg}
        msgIsRequired={msgIsRequired}
        onChangeDate={this.onChangeDate}
        valueDate={valueDate}
        dateIsRequired={dateIsRequired}
        onSubmit={this.onSubmit}
      />
    }
  }
}

export default FormHOC;
