import React from 'react';
import { Shared } from '../../../Shared';
import ProfileField from '../ProfileField';
import { AffiliateData } from '../../../../services/affiliate.service';

type Props = {
  affiliate: AffiliateData;
  onAffiliateUpdate: (value: string, value2: string) => Promise<unknown>;
  calculateTotal: () => number;
  calculateAffiliateFee: () => number;
  hasFuneralService: () => boolean;
};

const AffiliateDataCard = ({
  affiliate,
  onAffiliateUpdate,
  calculateTotal,
  calculateAffiliateFee,
  hasFuneralService,
}: Props) => (
  <>
    <Shared.Card className="card1">
      <ProfileField
        label="Nombre"
        value={affiliate.name}
        editable
        field="name"
        fieldType="text"
        onFieldSave={onAffiliateUpdate}
      />
      <ProfileField
        label="Fecha de Nacimiento"
        value={affiliate.birthday?.toString() || ''}
        editable
        field="birthday"
        fieldType="date"
        onFieldSave={onAffiliateUpdate}
      />
      <ProfileField
        label="Documento"
        value={affiliate.identity?.toString() || ''}
        editable
        field="identity"
        fieldType="number"
        onFieldSave={onAffiliateUpdate}
      />
      <ProfileField
        label="Total por mes"
        value={`$${calculateTotal().toString()}`}
        field="law"
        fieldType="number"
        tooltip="Cuota de afiliacion no contemplada"
        valueClass="CMRP_AffiliateProfile_active"
      />
    </Shared.Card>
    <Shared.Card className="card2">
      <ProfileField
        label="Direccion"
        value={affiliate.address?.toString() || ''}
        editable
        field="address"
        fieldType="text"
        onFieldSave={onAffiliateUpdate}
      />
      <ProfileField
        label="Barrio"
        value={affiliate.district?.toString() || ''}
        editable
        field="district"
        fieldType="text"
        onFieldSave={onAffiliateUpdate}
      />
      <ProfileField
        label="Ciudad"
        value={affiliate.city?.toString() || ''}
        editable
        field="city"
        fieldType="text"
        onFieldSave={onAffiliateUpdate}
      />
      <ProfileField
        label="Departamento"
        value={affiliate.department?.toString() || ''}
        editable
        field="department"
        fieldType="text"
        onFieldSave={onAffiliateUpdate}
      />
      <ProfileField
        label="Provincia"
        value={affiliate.state}
        field="state"
        fieldType="text"
      />
      <ProfileField
        label="Telefono"
        value={affiliate.contact ? affiliate.contact.number.toString() : ''}
        field="phone"
        fieldType="number"
        editable
        onFieldSave={onAffiliateUpdate}
        tooltip={affiliate.contact?.data ? `Info Adicional: ${affiliate.contact.data}` : ''}
      />
    </Shared.Card>
    <Shared.Card className="card3">
      <ProfileField
        label="Numero de Socio"
        value={affiliate.affiliate.toString()}
        field="affiliate"
        fieldType="number"
      />
      <ProfileField
        label="Fecha de Afiliacion"
        value={affiliate.registeredAt?.toString()}
        field="registeredAt"
        fieldType="date"
      />
      <ProfileField
        label="Ley/Carnet"
        value={`${affiliate.law.toString()}/${affiliate.license.toString()}`}
        field="law"
        fieldType="number"
      />
      <ProfileField
        label="Servicio de Sepelio"
        value={hasFuneralService() ? 'SI' : 'NO'}
        field=""
        fieldType="text"
      />
      <ProfileField
        label={`Cuota Afiliacion ${hasFuneralService() ? ' y Sepelio' : ''}`}
        value={`$${calculateAffiliateFee().toString()}`}
        field="law"
        fieldType="number"
        tooltip="Cuota de afiliacion no contemplada"
        valueClass="CMRP_AffiliateProfile_active"
      />
      <ProfileField
        label="Estado"
        value={affiliate.active ? 'Alta' : 'Baja'}
        field="active"
        fieldType="text"
        valueClass={affiliate.active
          ? 'CMRP_AffiliateProfile_active'
          : 'CMRP_AffiliateProfile_inactive'}
        tooltip={affiliate.inactiveReason}
      />
    </Shared.Card>
  </>
);

export default AffiliateDataCard;
