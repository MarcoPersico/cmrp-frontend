import React from 'react';
import { LoginStyles } from './Login.styles';
import { Shared } from '../Shared';

type Props = {
  /** username value for input  */
  username: string,
  /** password value for input */
  password: string,
  /** handler for onChange event for input */
  onFormDataChange: (value: string | number, key: string) => void,
  /** handler for onSubmit event for form  */
  onLoginFormSubmit: (event: React.SyntheticEvent) => void,
};

const Login = ({
  onFormDataChange, onLoginFormSubmit, username, password,
}: Props) => (
  <LoginStyles className="CMRP_animations_fadeIn">
    <div className="CMRP_Login_background" />
    <form className="CMRP_Login_loginContainer" onSubmit={onLoginFormSubmit}>
      <div className="CMRP_Login_loginContainer_header">
        <h1 className="CMRP_headerTitle">Iniciar Sesion</h1>
      </div>
      <div className="CMRP_Login_loginContainer_body">
        <Shared.Input
          id="userInput"
          value={username}
          name="username"
          placeholder="Ingrese el usuario"
          label="Usuario"
          type="text"
          required
          onChange={(value) => onFormDataChange(value, 'username')}
        />
        <Shared.Input
          id="passwordInput"
          value={password}
          name="password"
          placeholder="●●●●●●●●●"
          label="Contraseña"
          type="password"
          required
          onChange={(value) => onFormDataChange(value, 'password')}
        />
      </div>
      <div className="CMRP_Login_loginContainer_footer">
        <button type="submit" className="CMRP_primary_button CMRP_Login_loginContainer_button">Iniciar Sesion</button>
      </div>
    </form>
  </LoginStyles>
);

export default Login;
