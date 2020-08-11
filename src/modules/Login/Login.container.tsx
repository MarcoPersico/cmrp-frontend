import React from 'react';
import Login from './Login.component';
import { UserService, UserFormData } from '../../services/user.service';

const LoginModule = () => {
  const userService = React.useContext(UserService);
  const [formData, setFormData] = React.useState<UserFormData>({
    username: '',
    password: '',
  });

  /**
   * This function handles the input change of the login form.
   * @param value value of the input.
   * @param key string key to handle where the value is save.
   */
  function handleFormDataChange(value: string | number, key: string) {
    return setFormData({ ...formData, [key]: value });
  }

  function handleLogin(event: React.SyntheticEvent) {
    event.preventDefault();
    userService.loginService(formData);
  }

  return (
    !userService.isAuth
      ? (
        <Login
          onFormDataChange={handleFormDataChange}
          onLoginFormSubmit={handleLogin}
          username={formData.username}
          password={formData.password}
        />
      ) : null
  );
};

export default LoginModule;
