import React from 'react';
import { useLocation } from 'react-router-dom';
import Header from './components/Header';
import Menu from './components/Menu';
import { ContextUI } from '../../context/ui.context';
import { UserService } from '../../services/user.service';

const HeaderModule = () => {
  const location = useLocation();
  const UIContext = React.useContext(ContextUI);
  const userService = React.useContext(UserService);
  const [menuVisible, setMenuVisible] = React.useState(location.pathname === '/dashboard');

  React.useEffect(() => {
    if (location.pathname === '/dasboard') {
      setMenuVisible(true);
    }

    setMenuVisible(location.pathname === '/dashboard');
  }, [location]);

  React.useEffect(() => {
    if (menuVisible) {
      document.body.style.overflowY = 'hidden';
    } else {
      document.body.style.overflowY = 'auto';
    }
  }, [menuVisible]);

  return (
    <div className="CMRP_animations_fadeIn">
      <Header
        isMenuVisible={menuVisible}
        onHeaderAction={() => setMenuVisible(!menuVisible)}
      />
      <Menu
        isMenuVisible={menuVisible}
        onThemeChange={
          (value: boolean) => UIContext.handleTheme(value)
        }
        isDarkTheme={UIContext.darkThemeVisible}
        onLogout={userService.logout}
        onNavigateAction={() => setMenuVisible(!menuVisible)}
      />
    </div>
  );
};

export default HeaderModule;
