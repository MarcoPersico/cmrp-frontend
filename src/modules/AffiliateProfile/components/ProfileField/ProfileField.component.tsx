/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import ReactTooltip from 'react-tooltip';
import { ProfileFieldStyles } from './ProfileField.styles';
import { Icon } from '../../../../assests/Icons/Icons';

type Props = {
  label: string;
  value: string;
  editable?: boolean;
  field: string;
  fieldType?: 'text' | 'date' | 'number';
  onFieldSave?: (value: string, value2: string) => Promise<unknown>;
  valueClass?: string;
  tooltip?: string;
  noPadding?: boolean;
};

const ProfileField = ({
  label,
  value,
  editable,
  field,
  fieldType,
  onFieldSave,
  valueClass,
  tooltip,
  noPadding,
}: Props) => {
  const [editMode, setEditMode] = React.useState(false);
  const [editValue, setEditValue] = React.useState(value || '');
  const inputEditRef = React.createRef<HTMLInputElement>();

  React.useEffect(() => {
    if (editMode && inputEditRef.current) {
      inputEditRef.current.focus();
    }
  }, [editMode, inputEditRef]);

  return (
    <ProfileFieldStyles
      noPadding={noPadding}
    >
      <span className="CMRP_ProfileField_title">{label}</span>
      <div className="CMRP_ProfileField_container">
        {editMode && editable
          ? (
            <form
              onSubmit={(event) => {
                event.preventDefault();
                return onFieldSave
                  ? onFieldSave(editValue, field)
                    .then(() => setEditMode(false))
                  : null;
              }}
            >
              <input
                ref={inputEditRef}
                type={fieldType}
                value={editValue.toString()}
                className="CMRP_animations_fadeIn CMRP_ProfileField_edit"
                onChange={(event) => setEditValue(event.target.value)}
              />
              <input type="submit" hidden id={value} />
            </form>
          ) : (
            <span
              className={`CMRP_animations_fadeIn CMRP_ProfileField_container_label ${valueClass}`}
            >
              {value || 'n/a'}
              {tooltip
                ? (
                  <>
                    <button
                      type="button"
                      className="CMRP_ProfileField_tooltip_icon"
                      data-tip
                      data-for={value}
                    >
                      <Icon.Info />
                    </button>
                    <ReactTooltip
                      className="CMRP_ProfileField_tooltip_body"
                      effect="solid"
                      place="right"
                      id={value}
                      delayHide={500}
                    >
                      <p>{tooltip}</p>
                    </ReactTooltip>
                  </>
                ) : null}
            </span>)}
        <div className="CMRP_ProfileField_buttonContainer">
          {editMode && editable
            ? (
              <label htmlFor={value}>
                <Icon.Check />
              </label>
            ) : null}
          {editable
            ? (
              <button
                type="button"
                onClick={() => {
                  setEditValue(value);
                  setEditMode(!editMode);
                }}
              >
                {editMode
                  ? <Icon.Close />
                  : <Icon.Edit />}
              </button>
            ) : null}
        </div>
      </div>
    </ProfileFieldStyles>
  );
};

export default ProfileField;
