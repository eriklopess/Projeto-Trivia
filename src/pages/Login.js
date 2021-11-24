import React from 'react';
import { connect } from 'react-redux';

class Login extends React.Component {
  constructor() {
    super();
    this.state = {
      inputName: '',
      inputEmail: '',
      isButtonDisabled: true,
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.validEmail = this.validEmail.bind(this);
    this.verifyFormDatas = this.verifyFormDatas.bind(this);
  }

  // consegui criar a função validEmail com a ajuda do site: https://www.horadecodar.com.br/2020/09/13/como-validar-email-com-javascript/

  validEmail(email) {
    const re = /\S+@\S+\.\S+/;
    return re.test(email);
  }

  verifyFormDatas() {
    const { inputName, inputEmail } = this.state;
    const validEmail = this.validEmail(inputEmail);
    const validName = inputName.length > 0;
    const enableButton = !(validName && validEmail);
    this.setState({
      isButtonDisabled: enableButton,
    });
  }

  handleChange({ target }) {
    const { name, value } = target;
    this.setState({
      [name]: value,
    }, this.verifyFormDatas);
  }

  handleSubmit(e) {
    e.preventDefault();
  }

  render() {
    const { inputName, inputEmail, isButtonDisabled } = this.state;
    return (
      <main className="main-container">
        <form method="POST">
          <label htmlFor="input-name">
            Name:
            <input
              id="input-name"
              type="text"
              name="inputName"
              value={ inputName }
              data-testid="input-player-name"
              onChange={ this.handleChange }
            />
          </label>
          <label htmlFor="input-email">
            Email:
            <input
              id="input-email"
              type="email"
              name="inputEmail"
              value={ inputEmail }
              data-testid="input-gravatar-email"
              onChange={ this.handleChange }
            />
          </label>
          <button
            type="submit"
            data-testid="btn-play"
            disabled={ isButtonDisabled }
            onClick={ this.handleSubmit }
          >
            Jogar
          </button>
        </form>
      </main>
    );
  }
}

export default connect(null, null)(Login);
