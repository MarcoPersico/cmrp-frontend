import React from 'react';
import { useLocation } from 'react-router-dom';
import { HeaderStyles } from './Header.styles';
import { Icon } from '../../../../assests/Icons/Icons';

type Props = {
  isMenuVisible: boolean,
  onHeaderAction: () => void,
};

const Header = ({ isMenuVisible, onHeaderAction }: Props) => {
  const location = useLocation();

  return (
    <HeaderStyles className={isMenuVisible ? '--hideShadow' : ''}>
      {location.pathname === '/dashboard'
        ? <div />
        : (
          <button type="button" className="CMRP_Header_button" onClick={onHeaderAction}>
            {isMenuVisible
              ? <Icon.Close />
              : <Icon.Hamburger />}
          </button>
        )}
      <h3>CMRP APP</h3>
    </HeaderStyles>
  );
};

export default Header;
