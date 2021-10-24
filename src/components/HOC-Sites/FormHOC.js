import React, { Component } from 'react';


function FormHOC(WrappedComponent) {
  return class extends Component {
    state = {
      valueNameAndSurname: '',
      valueEmail: '',
      valueMsg: '',

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

    validation = () => {
      if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(this.state.valueEmail)) {
        console.log("error email");
      }
      if (!this.state.valueMsg) {
        console.log('error msg');
      }
      if (!this.state.valueNameAndSurname) {
        console.log('error valueNameAndSurname')
      }
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
      const { valueNameAndSurname, valueEmail, valueMsg } = this.state;
      return <WrappedComponent
        {...this.props}
        onChangeNameAndSurname={this.onChangeNameAndSurname}
        valueNameAndSurname={valueNameAndSurname}
        onChangeEmail={this.onChangeEmail}
        valueEmail={valueEmail}
        onChangeMsg={this.onChangeMsg}
        valueMsg={valueMsg}
        onSubmit={this.onSubmit}
      />
    }
  }
}

export default FormHOC;
