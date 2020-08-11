/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import { InputFileStyles } from './InputFile.styles';
import { Icon } from '../../../assests/Icons/Icons';

type Props = {
  id: string;
  onChange: (value: File | null) => void;
  extensions: Array<string>
  className?: string;
  required?: boolean;
  label: string;
};

const InputFile = ({
  id,
  onChange,
  className,
  extensions,
  required,
  label,
}: Props) => {
  const [isInvalid, setIsInvalid] = React.useState<boolean>(false);
  const [hasFilled, setHasFilled] = React.useState<boolean>(false);
  const [fileName, setFileName] = React.useState<string>('');

  const validateFileType = (value: string) => {
    if (extensions.some((ext) => value.includes(ext))) return true;
    return false;
  };

  const handleFileUploaded = (event: React.ChangeEvent<HTMLInputElement>) => {
    event.preventDefault();
    setIsInvalid(false);
    setHasFilled(false);
    setFileName('');

    if (
      event.target.files?.length
      && validateFileType(event.target.files[0].name)
    ) {
      onChange(event.target.files[0]);
      setFileName(event.target.files[0].name);
      setHasFilled(true);
    } else {
      setIsInvalid(true);
      onChange(null);
    }
  };

  return (
    <InputFileStyles className={className}>
      <label
        htmlFor={id}
        className={
          `CMRP_InputFile_label
          ${isInvalid ? '--invalid' : ''}
          ${hasFilled ? '--filled' : ''} 
          `
        }
      >
        <div className="CMRP_InputFile_label_container">
          <Icon.Upload />
          <span className="CMRP_animations_fadeIn">
            {label}
          </span>
        </div>
        {fileName
          ? <p className="CMRP_animations_fadeIn CMRP_InputFile_name">{fileName}</p>
          : null}
        {isInvalid
          ? (
            <p className="CMRP_animations_fadeIn CMRP_InputFile_name --invalid">
              Archivo no valido intente nuevamente
            </p>
          ) : null}
      </label>
      <input
        required={required}
        onChange={handleFileUploaded}
        id={id}
        type="file"
      />
      <span className="CMRP_InputFile_headerLabel">{label}</span>
    </InputFileStyles>
  );
};

export default InputFile;
