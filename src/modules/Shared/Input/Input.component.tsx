/* eslint-disable react-hooks/exhaustive-deps */
import * as React from 'react';

// Styles
import { InputStyled } from './Input.styles';

/** Props for Input component */
interface InputProps {
  /** id for input element */
  id?: string,
  /** label to be displayed at top of input */
  label?: string,
  /** placeholder for input element */
  placeholder?: string,
  /** type for input element */
  type: string,
  /** name for input element */
  name?: string,
  /** value for input element */
  value?: string | number,
  /** required for input element */
  required?: boolean,
  /** onChange event callback for input element */
  onChange?: (value: string | number) => void,
  /** className for InputStyled component */
  className?: string,
  focusOnMount?: boolean,
  pattern?: string,
  readonly?: boolean,
}

/**
 * This componente is the input for the whole application and default for whole app.
 * @param props of type InputProps.
 */
export const Input = (props: InputProps) => {
  const inputRef = React.createRef<HTMLInputElement>();
  React.useEffect(() => {
    if (props.focusOnMount) {
      inputRef.current?.scrollIntoView();
    }
  }, []);

  return (
    <InputStyled className={props.className}>
      {props.type !== 'date'
        ? (
          <input
            ref={inputRef}
            id={props.id}
            value={props.value}
            onChange={(event) => (
              props.onChange ? props.onChange(event.target.value) : null
            )}
            placeholder={props.placeholder}
            name={props.name}
            type={props.type}
            autoComplete="nope"
            required={props.required}
            pattern={props.pattern}
            readOnly={props.readonly}
          />
        ) : (
          <input
            ref={inputRef}
            id={props.id}
            value={props.value}
            onChange={(event) => (
              props.onChange ? props.onChange(event.target.value) : null
            )}
            placeholder={props.placeholder}
            name={props.name}
            type="date"
            max={new Date().toISOString().split('T')[0]}
            min="1910-01-01"
            autoComplete="nope"
            required={props.required}
            readOnly={props.readonly}
          />
        )}
      <label htmlFor={props.id}>{props.label}</label>
    </InputStyled>
  );
};
