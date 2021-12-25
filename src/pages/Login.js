import PropTypes from 'prop-types';
import React from 'react';
import md5 from 'crypto-js/md5';
import { connect } from 'react-redux';
import { getPlayerToken, userLogin } from '../redux/actions';
import {
  MainContainer,
  Titulo,
  SettingsButton,
  FormElements,
  SettingsImg,
  Input,
  PlayButton,
  FormContainer,
  FormElementsContainer } from './styles/LoginStyles';
import ImageSettings from './img/Settings.png';

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
    this.FormElementsRender = this.FormElementsRender.bind(this);
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
    const { requestToken, setInfo, history } = this.props;
    const { inputEmail, inputName } = this.state;
    const convertEmail = md5(inputEmail).toString();
    const userIcon = `https://www.gravatar.com/avatar/${convertEmail}`;
    const payload = {
      name: inputName,
      email: inputEmail,
      userIcon,
    };
    requestToken();
    setInfo(payload);
    history.push('/game');
  }

  FormElementsRender() {
    const { inputName, inputEmail, isButtonDisabled } = this.state;
    return (
      <FormElements>
        <Titulo>Login</Titulo>
        <Input
          id="input-name"
          type="text"
          name="inputName"
          value={ inputName }
          data-testid="input-player-name"
          onChange={ this.handleChange }
          placeholder="Username"
        />
        <Input
          id="input-email"
          type="email"
          name="inputEmail"
          value={ inputEmail }
          data-testid="input-gravatar-email"
          placeholder="Email"
          onChange={ this.handleChange }
        />
        <PlayButton
          type="submit"
          data-testid="btn-play"
          disabled={ isButtonDisabled }
          onClick={ this.handleSubmit }
        >
          Jogar
        </PlayButton>
      </FormElements>);
  }

  render() {
    const { history } = this.props;
    return (
      <MainContainer>
        <FormContainer>
          <SettingsButton type="button" onClick={ () => history.push('/settings') }>
            <SettingsImg
              src={ ImageSettings }
              alt="Setting Button"
              data-testid="btn-settings"
              width="50px"
            />
          </SettingsButton>
          <FormElementsContainer>
            { this.FormElementsRender() }
          </FormElementsContainer>
        </FormContainer>
      </MainContainer>);
  }
}

Login.propTypes = {
  requestToken: PropTypes.func.isRequired,
  setInfo: PropTypes.func.isRequired,
  history: PropTypes.shape({
    push: PropTypes.func.isRequired,
  }).isRequired,
};

const mapDispatchToProps = (dispatch) => ({
  setInfo: (payload) => dispatch(userLogin(payload)),
  requestToken: () => dispatch(getPlayerToken()),
});

export default connect(null, mapDispatchToProps)(Login);
