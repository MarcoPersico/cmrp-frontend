import * as React from 'react';

// Styles
import { SpinnerStyled } from './Spinner.styles';
import { Icon } from '../../../assests/Icons/Icons';

/**
 * This componente is the button component for the app.
 * @param props of type ButtonProps
 */
export default function Spinner() {
  React.useEffect(() => {
    document.body.style.overflowY = 'hidden';
    const scrollNormal = () => { document.body.style.overflowY = 'auto'; };
    return () => scrollNormal();
  });

  return (
    <SpinnerStyled>
      <Icon.Spinner />
    </SpinnerStyled>
  );
}
