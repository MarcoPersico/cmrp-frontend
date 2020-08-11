import * as React from 'react';
// import * as ReactDOM from 'react-dom';

// Styles
import { AlertStyled } from './Alert.styles';

/** props for AlertProps */
interface AlertProps {
  /** Message dipslayed in the alert */
  message: string,
  /** Handler click for alert */
  onClick: () => void,
}

/**
 * This component is the Alert
 * @param props alert props
 */
export default function Alert(props: AlertProps) {
  React.useEffect(() => document.getElementById('alert-action')?.focus());

  React.useEffect(() => {
    document.body.style.overflowY = 'hidden';
    const scrollNormal = () => { document.body.style.overflowY = 'auto'; };
    return () => scrollNormal();
  });

  return (
    <AlertStyled>
      <div className="CMRP_alert CMRP_animations_fadeIn">
        <p className="CMRP_alert_message">
          {props.message}
        </p>
        <button
          id="alert-action"
          type="button"
          className="CMRP_primary_button"
          onClick={props.onClick}
        >
          Aceptar
        </button>
      </div>
    </AlertStyled>
  );
}
