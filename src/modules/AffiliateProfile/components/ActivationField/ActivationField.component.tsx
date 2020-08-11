/* eslint-disable no-nested-ternary */
import React from 'react';
import { ActivationFieldStyles } from './ActivationField.styles';

type Props = {
  onActivation: (value: string) => Promise<unknown>;
  className?: string;
  actionLabel: string;
  noReason?: boolean;
};

const ActivationField = ({
  onActivation,
  className,
  actionLabel,
  noReason,
}: Props) => {
  const [fieldVisible, setFieldVisible] = React.useState(false);
  const [inactiveReason, setInactiveReason] = React.useState('');
  const activationField = React.createRef<HTMLInputElement>();

  React.useEffect(() => {
    activationField.current?.focus();
  }, [activationField]);

  return (
    <ActivationFieldStyles
      className={fieldVisible
        ? `${className} CMRP_AffiliateProfile_memberFooterOnOpen`
        : className}
      onSubmit={(event) => {
        event.preventDefault();
        onActivation(inactiveReason)
          .finally(() => setFieldVisible(false));
      }}
    >
      {fieldVisible
        ? (
          <input
            ref={activationField}
            type="text"
            placeholder="Razon de baja"
            required
            className="CMRP_animations_fadeIn CMRP_ActivationField_input"
            value={inactiveReason}
            onChange={(event) => setInactiveReason(event.target.value)}
          />
        ) : null}
      <div className="CMRP_ActivationField_buttonGroup">
        {fieldVisible
          ? (
            <>
              <button
                key="fieldVisible1"
                type="button"
                className="CMRP_animations_fadeIn CMRP_simple_button"
                onClick={() => setFieldVisible(!fieldVisible)}
              >
                Cancelar
              </button>
              <button
                key="fieldVisible2"
                type="submit"
                className="CMRP_animations_fadeIn CMRP_simple_button"
              >
                Confirmar
              </button>
            </>
          ) : (
            noReason
              ? (
                <button
                  key="fieldVisible0"
                  type="submit"
                  className="CMRP_animations_fadeIn CMRP_simple_button"
                >
                  {actionLabel}
                </button>
              ) : (
                <button
                  key="fieldVisible0"
                  type="button"
                  className="CMRP_animations_fadeIn CMRP_simple_button"
                  onClick={() => setFieldVisible(!fieldVisible)}
                >
                  {actionLabel}
                </button>
              )
          )}
      </div>
    </ActivationFieldStyles>
  );
};

export default ActivationField;
