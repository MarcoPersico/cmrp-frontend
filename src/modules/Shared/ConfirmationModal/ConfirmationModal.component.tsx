import React from 'react';
import { AlertStyled } from '../Alert/Alert.styles';

export interface ConfirmationOptions {
  catchOnCancel: boolean;
  title: string;
  description: string;
}

interface ConfirmationDialogProps {
  open: boolean;
  onSubmit: () => void;
  onClose: () => void;
  title: string;
  description: string;
}

export const ConfirmationDialog = ({
  open,
  title,
  description,
  onSubmit,
  onClose,
}: ConfirmationDialogProps) => {
  const buttonConfirmation = React.createRef<HTMLButtonElement>();

  React.useEffect(() => {
    buttonConfirmation.current?.focus();
  }, [buttonConfirmation]);

  React.useEffect(() => {
    if (description) document.body.style.overflowY = 'hidden';
    const scrollNormal = () => { document.body.style.overflowY = 'auto'; };
    return () => scrollNormal();
  });

  return (
    open
      ? (
        <AlertStyled>
          <div className="CMRP_alert CMRP_animations_fadeIn">
            <div className="CMRP_alert_header">
              <h2 id="alert-dialog-title">
                {title}
              </h2>
            </div>
            <p className="CMRP_alert_message">
              {description}
            </p>
            <div className="CMRP_alert_buttonContainer">
              <button type="button" className="CMRP_primary_button" onClick={onClose}>
                Cancelar
              </button>
              <button ref={buttonConfirmation} type="button" className="CMRP_primary_button" onClick={onSubmit}>
                Aceptar
              </button>
            </div>
          </div>
        </AlertStyled>
      ) : null
  );
};
