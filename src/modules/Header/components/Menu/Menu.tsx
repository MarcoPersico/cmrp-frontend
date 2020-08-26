import React from 'react';
import { Link } from 'react-router-dom';
import { MenuStyles } from './Menu.styles';
import { Shared } from '../../../Shared';
import { Icon } from '../../../../assests/Icons/Icons';

type Props = {
  isDarkTheme: boolean,
  onThemeChange: (value: boolean) => void,
  onLogout: () => void,
  isMenuVisible: boolean,
  onNavigateAction: () => void,
};

const Menu = ({
  isDarkTheme,
  onThemeChange,
  onLogout,
  isMenuVisible,
  onNavigateAction,
}: Props) => {
  const [settingsOpen, setSettingsOpen] = React.useState(false);

  return (
    <Shared.Animated
      listener={isMenuVisible}
      transitionTime={400}
      animation="slide"
      unmountOnEnd
    >
      <MenuStyles>
        <div
          className={`CMRP_Menu_body
            ${isMenuVisible
            ? 'CMRP_animations_slideUp'
            : 'CMRP_animations_fadeOut'}`}
        >
          <h1>MENU</h1>
          <div className="CMRP_Menu_body_hr" />
          <Link
            onClick={onNavigateAction}
            to="/dashboard/affiliate-search"
          >
            <Icon.Search />
            <p>consultar afiliado</p>
          </Link>
          <Link
            onClick={onNavigateAction}
            to="/dashboard/add"
          >
            <Icon.AddUser />
            <p>agregar afiliado</p>
          </Link>
          {/* <Link
            onClick={onNavigateAction}
            to="/dashboard/affiliate-census"
          >
            <Icon.UserGroup />
            <p>padron de afiliados</p>
          </Link> */}
          <Link
            onClick={onNavigateAction}
            to="/dashboard/pay-registry/results"
          >
            <Icon.Charts />
            <p>consultar registros de pago</p>
          </Link>
          <Link
            onClick={onNavigateAction}
            to="/dashboard/pay-registry/generate-pay-register"
          >
            <Icon.Dollar />
            <p>generar registro de pago</p>
          </Link>
          <button type="button" onClick={() => setSettingsOpen(!settingsOpen)}>
            <Icon.Options />
            <p>configuracion</p>
          </button>
          <Shared.Animated
            listener={settingsOpen}
            transitionTime={200}
            animation="slide"
            unmountOnEnd
          >
            <div className="CMRP_Menu_body_settingsContainer">
              {isDarkTheme
                ? <Icon.Sun />
                : <Icon.Moon />}
              <Shared.SwitchInput
                isChecked={isDarkTheme}
                id="switchTheme"
                label={`modo ${isDarkTheme ? 'claro' : 'nocturno'}`}
                onSwitchChange={() => onThemeChange(!isDarkTheme)}
              />
            </div>
          </Shared.Animated>
          <div className="CMRP_Menu_body_hr" />
          <button type="button" onClick={onLogout}><h1>SALIR</h1></button>
        </div>
      </MenuStyles>
    </Shared.Animated>
  );
};

export default Menu;
