import React from 'react';
import { NewMemberCardStyles } from './NewMemberCard.styles';
import { Shared } from '../../../Shared';
import ProfileField from '../../../AffiliateProfile/components/ProfileField';
import { MemberFormData } from '../../../../services/affiliate.service';

type Props = {
  member: MemberFormData;
  feeValue: string;
  onMemberDelete: (id: number) => void;
};

const NewMemberCard = ({ member, feeValue, onMemberDelete }: Props) => (
  <NewMemberCardStyles>
    <Shared.Card className="CMRP_NewMemberCard_body">
      <ProfileField
        label="Nombre"
        value={member.name}
        field="name"
        noPadding
      />
      <ProfileField
        label="Fecha de Nacimiento"
        value={member.birthday}
        field="birthdate"
        noPadding
      />
      <ProfileField
        label="Documento"
        value={member.dni}
        field="dni"
        noPadding
      />
      <ProfileField
        label="Parentezco"
        value={member.relation}
        field="relation"
        noPadding
      />
      <ProfileField
        label="Cuota"
        value={`$${feeValue}`}
        field="relation"
        noPadding
      />
      <div className="CMRP_NewMemberCard_actionContainer">
        <button
          type="button"
          className="CMRP_simple_button"
          onClick={() => onMemberDelete(member.id || 0)}
        >
          Eliminar
        </button>
      </div>
    </Shared.Card>
  </NewMemberCardStyles>
);

export default NewMemberCard;
