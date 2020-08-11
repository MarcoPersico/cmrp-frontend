import React from 'react';
import ReactTooltip from 'react-tooltip';
import { NewMemberFormStyles } from './NewMemberForm.styles';
import { Icon } from '../../../assests/Icons/Icons';
import Card from '../Card';
import Input from '../Input';
import FeeInformation from '../FeeInformation';

type Props = {
  onCancelNewMember: () => void;
  onMemberCreation: ({
    name,
    birthday,
    dni,
    relation,
    fee,
  }: {
    name: string,
    birthday: string,
    dni: string,
    relation: string,
    fee: string,
  }) => Promise<unknown>;
  customSubmitLabel?: string;
};

const NewMemberForm = ({
  onCancelNewMember,
  onMemberCreation,
  customSubmitLabel,
}: Props) => {
  const [fee, setFee] = React.useState(0);
  const [newMemberFormData, setNewMemberFormData] = React.useState({
    name: '',
    birthday: '',
    dni: '',
    relation: '',
    fee: '',
  });

  const calculateAge = (birthday: Date) => {
    const diffMs = Date.now() - birthday.getTime();
    const ageDt = new Date(diffMs);

    return Math.abs(ageDt.getUTCFullYear() - 1970);
  };

  const handleInputChange = (value: string | number, field: string) => {
    setNewMemberFormData({ ...newMemberFormData, [field]: value });
  };

  const calculateFee = (birthday: string | number) => {
    const age = calculateAge(new Date(birthday));
    if (age < 60) {
      setFee(260);
      return 1;
    } if (age < 70) {
      setFee(350);
      return 2;
    } if (age < 80) {
      setFee(450);
      return 3;
    } if (age > 80) {
      setFee(500);
      return 4;
    }
    setFee(0);
    return 0;
  };

  const handleMultipleChanges = (birthday: string | number, feeId: number) => {
    setNewMemberFormData({
      ...newMemberFormData,
      birthday: birthday.toString(),
      fee: feeId.toString(),
    });
  };

  return (
    <Card className="CMRP_NewMemberForm_card">
      <NewMemberFormStyles
        className="CMRP_animations_fadeIn CMRP_animations_blink"
        onSubmit={(event) => {
          event.preventDefault();
          onMemberCreation(newMemberFormData)
            .then(() => onCancelNewMember());
        }}
      >
        <div className="CMRP_NewMemberForm_body">
          <Input
            label="Nombre"
            type="text"
            placeholder="Ingrese el nombre completo"
            value={newMemberFormData.name}
            onChange={(value) => handleInputChange(value, 'name')}
            required
            className="CMRP_NewMemberForm_body_field"
            focusOnMount
            id="memberName"
          />
          <Input
            label="Fecha de Nacimiento"
            type="date"
            value={newMemberFormData.birthday}
            onChange={(birthday) => {
              const feeId = calculateFee(birthday);
              handleMultipleChanges(birthday, feeId);
            }}
            required
            className="CMRP_NewMemberForm_body_field"
            id="memberBirthday"
          />
          <Input
            label="Documento"
            type="number"
            placeholder="Ingrese el DNI"
            value={newMemberFormData.dni || ''}
            onChange={(value) => handleInputChange(value, 'dni')}
            required
            className="CMRP_NewMemberForm_body_field"
            id="memberDni"
          />
          <Input
            label="Parentezco"
            type="text"
            placeholder="Ingrese el parentezco con el afiliado"
            value={newMemberFormData.relation}
            onChange={(value) => handleInputChange(value, 'relation')}
            className="CMRP_NewMemberForm_body_field"
            id="memberRelation"
          />
          <span
            data-tip
            data-for="newMemberFeePolicy"
            className="CMRP_NewMemberForm_body_staticField"
          >
            Valor de Cuota: ${fee}
            <Icon.Info />
          </span>
          <ReactTooltip
            className="CMRP_ProfileField_tooltip_body"
            effect="solid"
            place="right"
            type="info"
            id="newMemberFeePolicy"
            delayHide={500}
          >
            <FeeInformation
              additionalInfo="Las cuotas se calculan en base a la fecha de nacimiento."
            />
          </ReactTooltip>
        </div>
        <div className="CMRP_NewMemberForm_footer">
          <button
            className="CMRP_simple_button"
            type="button"
            onClick={onCancelNewMember}
          >
            Cancelar
          </button>
          <button
            className="CMRP_simple_button"
            type="submit"
          >
            {customSubmitLabel || 'Crear'}
          </button>
        </div>
      </NewMemberFormStyles>
    </Card>
  );
};

export default NewMemberForm;
