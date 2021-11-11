import React, { Component } from 'react';
import { checkTheDate, checkTheValue } from './functionsValidation';


function FormHOC(WrappedComponent) {
  return class extends Component {
    state = {
      valueNameAndSurname: '',
      valueEmail: '',
      valueMsg: '',
      valueDate: '',
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
      checkTheDate(this.state);
      checkTheValue(this.state);
    }

    onSubmit = (e) => {
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
      e.preventDefault();
    }

    render() {
      const { valueNameAndSurname, valueEmail, valueMsg, valueDate } = this.state;
      return <WrappedComponent
        {...this.props}
        onChangeNameAndSurname={this.onChangeNameAndSurname}
        valueNameAndSurname={valueNameAndSurname}
        onChangeEmail={this.onChangeEmail}
        valueEmail={valueEmail}
        onChangeMsg={this.onChangeMsg}
        valueMsg={valueMsg}
        onChangeDate={this.onChangeDate}
        valueDate={valueDate}
        onSubmit={this.onSubmit}
      />
    }
  }
}

export default FormHOC;
