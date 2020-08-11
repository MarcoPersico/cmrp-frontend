import React from 'react';
import { Shared } from '../../../Shared';
import ProfileField from '../ProfileField';
import { Member } from '../../../../services/affiliate.service';

type Props = {
  member: Member;
  onMemberUpdate: (value: string, value2: string, value3: number) => (
    Promise<unknown>
  );
  activationField: React.ReactNode;
  isAffiliateActive: boolean;
};

const MemberCard = ({
  member,
  onMemberUpdate,
  activationField,
  isAffiliateActive,
}: Props) => (
  <div className="CMRP_AffiliateProfile_memberCard">
    <Shared.Card>
      <ProfileField
        label="Nombre"
        value={member.name}
        field="name"
        fieldType="text"
        editable
        onFieldSave={(value: string, field: string) => (
          onMemberUpdate(value, field, member.id)
        )}
      />
      <ProfileField
        label="Fecha de Nacimiento"
        value={member.birthday?.toString() || ''}
        field="birthday"
        fieldType="date"
        editable
        onFieldSave={(value: string, field: string) => (
          onMemberUpdate(value, field, member.id)
        )}
      />
      <ProfileField
        label="Documento"
        value={member.dni?.toString() || ''}
        field="dni"
        fieldType="number"
        editable
        onFieldSave={(value: string, field: string) => (
          onMemberUpdate(value, field, member.id)
        )}
      />
      <ProfileField
        label="Parentezco"
        value={member.relation?.toString() || ''}
        field="relation"
        fieldType="text"
        editable
        onFieldSave={(value: string, field: string) => (
          onMemberUpdate(value, field, member.id)
        )}
      />
      <ProfileField
        label="Cuota"
        value={`$${member.fee.value}`}
        field="member.fee.value"
        fieldType="number"
      />
      <ProfileField
        label="Estado"
        value={member.active ? 'Alta' : 'Baja'}
        field="member.active"
        fieldType="number"
        valueClass={member.active
          ? 'CMRP_AffiliateProfile_active'
          : 'CMRP_AffiliateProfile_inactive'}
        tooltip={member.inactiveReason}
      />
      {isAffiliateActive
        ? activationField
        : (
          <span className="CMRP_AffiliateProfile_disclaimer">
            *Para dar de baja/alta los familiares a cargo
            el afiliado debe estar en estado ALTA
          </span>
        )}
    </Shared.Card>
  </div>
);

export default MemberCard;
