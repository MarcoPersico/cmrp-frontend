/* eslint-disable jsx-a11y/label-has-associated-control */
import * as React from 'react';

// Styles
import { SwitchInputStyled } from './SwitchInput.styles';

interface SwitchInputProps {
  label: string,
  id: string,
  isChecked: boolean,
  onSwitchChange: () => void,
}

export default function SwitchInput(props: SwitchInputProps) {
  return (
    <SwitchInputStyled>
      <label htmlFor={props.id}>{props.label}</label>
      <div className="onoffswitch">
        <input
          checked={props.isChecked}
          onChange={props.onSwitchChange}
          type="checkbox"
          name="onoffswitch"
          className="onoffswitch-checkbox"
          id={props.id}
        />
        <label className="onoffswitch-label" htmlFor={props.id} />
      </div>
    </SwitchInputStyled>
  );
}
