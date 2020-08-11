import React from 'react';
// eslint-disable-next-line @typescript-eslint/camelcase
import jwt_decode from 'jwt-decode';
import { HttpService, Request } from './http.service';
import { LoginResponse } from '../../typings/api';

const initialState = {
  loginService: (_formdata: UserFormData) => { },
  isAuth: false,
  logout: () => { },
};

export const UserService = React.createContext(initialState);

type Props = {
  children: React.ReactNode,
  onFailAuth: (reason: string) => void,
};

export type UserFormData = {
  username: string;
  password: string;
};

const UserServiceProvider = ({ children, onFailAuth }: Props) => {
  const httpService = React.useContext(HttpService);
  const [token, setToken] = React.useState(localStorage.usertoken);
  const [isAuth, setIsAuth] = React.useState((false));
  const [startData, setStartData] = React.useState(true);

  React.useEffect(() => {
    decodeToken(token);
    setIsAuth(!!token);
    setStartData(false);
  }, [token]);

  async function loginService(formdata: UserFormData) {
    const loginCofig: Request = {
      requestType: 'post',
      url: '/user/login',
      configData: {
        data: {
          username: formdata.username,
          password: formdata.password,
        },
      },
    };

    const response = await httpService.ApiService(loginCofig);
    authenticate(response.data);
  }

  function authenticate(user: LoginResponse) {
    if (user.token) {
      localStorage.setItem('usertoken', user.token);
      setToken(user.token);

      return null;
    }

    return onFailAuth(user.message);
  }

  function decodeToken(value: string) {
    if (value) {
      const decoded: { exp: number } = jwt_decode(value);

      return decoded.exp !== 0;
    }
    return false;
  }

  function logout() {
    localStorage.removeItem('usertoken');
    setToken('');
  }

  return (
    <UserService.Provider value={{ loginService, isAuth, logout }}>
      {
        startData
          ? null
          : children
      }
    </UserService.Provider>
  );
};

export default UserServiceProvider;
