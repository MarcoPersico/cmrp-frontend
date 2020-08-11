/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { ReactText } from 'react';
import Select, { ValueType } from 'react-select';
import ProfileField from '../../../AffiliateProfile/components/ProfileField';
import { Shared } from '../../../Shared';
import { AffiliateFormData } from '../../../../services/affiliate.service';

type Props = {
  states: { value: number, label: string }[];
  onFieldChange: (
    value: ReactText | ValueType<{ value: number; label: string; }>,
    field: string
  ) => void;
  affiliateFormData: AffiliateFormData,
  totalFee: () => number;
};

const NewAffiliateForm = ({
  states,
  onFieldChange,
  affiliateFormData,
  totalFee,
}: Props) => {
  const selectRef = React.createRef<HTMLInputElement>();

  return (
    <>
      <Shared.Card className="CMRP_NewAffiliate_body card1">
        <Shared.Input
          label="Nombre y Apellido"
          type="text"
          placeholder="Ingrese el nombre completo"
          value={affiliateFormData.name}
          onChange={(value) => onFieldChange(value, 'name')}
          required
          focusOnMount
          id="affiliateName"
          className="CMRP_NewAffiliate_body_inputField"
        />
        <Shared.Input
          label="Fecha de Nacimiento"
          type="date"
          value={affiliateFormData.birthday}
          onChange={(value) => onFieldChange(value, 'birthday')}
          required
          id="affiliateDate"
          className="CMRP_NewAffiliate_body_inputField"
        />
        <Shared.Input
          label="Documento"
          type="number"
          placeholder="Ingrese el D.N.I"
          value={affiliateFormData.identiy}
          onChange={(value) => onFieldChange(value, 'identiy')}
          required
          id="affiliateDni"
          className="CMRP_NewAffiliate_body_inputField"
        />
        <ProfileField
          label="Total a pagar por mes"
          tooltip="Cuota de afiliado no contemplada"
          value={`$${totalFee().toString()}`}
          field="total"
          valueClass="CMRP_NewAffiliate_body_field"
          noPadding
        />
      </Shared.Card>
      <Shared.Card className="CMRP_NewAffiliate_body card2">
        <Shared.Input
          label="Direccion"
          type="text"
          placeholder="Ingrese la direccion"
          value={affiliateFormData.address}
          onChange={(value) => onFieldChange(value, 'address')}
          id="affiliateAddres"
          className="CMRP_NewAffiliate_body_inputField"
        />
        <Shared.Input
          label="Barrio"
          type="text"
          placeholder="Ingrese el barrio"
          value={affiliateFormData.district}
          onChange={(value) => onFieldChange(value, 'district')}
          id="affiliateDistrict"
          className="CMRP_NewAffiliate_body_inputField"
        />
        <Shared.Input
          label="Ciudad"
          type="text"
          placeholder="Ingrese la ciudad"
          value={affiliateFormData.city}
          onChange={(value) => onFieldChange(value, 'city')}
          id="affiliateCity"
          className="CMRP_NewAffiliate_body_inputField"
        />
        <Shared.Input
          label="Departamento"
          type="text"
          placeholder="Ingrese el departamento"
          value={affiliateFormData.department}
          onChange={(value) => onFieldChange(value, 'department')}
          id="affiliateDepartment"
          className="CMRP_NewAffiliate_body_inputField"
        />
        <div className="CMRP_NewAffiliate_select">
          <span className="CMRP_NewAffiliate_select_label">Provincia</span>
          <Select
            className="CMRP_NewAffiliate_select"
            classNamePrefix="select"
            placeholder="Provincia"
            isClearable
            isSearchable
            name="state"
            options={states}
            onChange={(state) => {
              if (selectRef.current) {
                selectRef.current.value = state?.toString() || '';
                onFieldChange(state, 'state');
              }
            }}
          />
          <input ref={selectRef} hidden id="selectValue" required />
        </div>
        <Shared.Input
          label="Telefono"
          type="number"
          placeholder="Ingrese el telefono"
          value={affiliateFormData.phone}
          onChange={(value) => onFieldChange(value, 'phone')}
          id="affiliatePhone"
          className="CMRP_NewAffiliate_body_inputField"
        />
      </Shared.Card>
      <Shared.Card className="CMRP_NewAffiliate_body card3">
        <ProfileField
          label="Numero de Afiliado"
          value="-"
          field="affiliateCode"
          valueClass="CMRP_NewAffiliate_body_field"
          tooltip="Campo generado automaticamente"
          noPadding
        />
        <ProfileField
          label="Fecha de Afiliacion"
          value="-"
          field="registeredAt"
          valueClass="CMRP_NewAffiliate_body_field"
          tooltip="Campo generado automaticamente"
          noPadding
        />
        <Shared.Input
          label="Ley"
          type="number"
          placeholder="Ley"
          value={affiliateFormData.law}
          onChange={(value) => onFieldChange(value, 'law')}
          required
          id="affiliateLaw"
          className="CMRP_NewAffiliate_body_inputField"
        />
        <Shared.Input
          label="Carnet"
          type="number"
          placeholder="Carnet"
          value={affiliateFormData.license}
          onChange={(value) => onFieldChange(value, 'license')}
          required
          id="affiliateLicense"
          className="CMRP_NewAffiliate_body_inputField"
        />
        <div className="CMRP_radioGroup">
          <span>Servicio de Sepelio</span>
          <div className="CMRP_radioGroup_inputs">
            <div className="CMRP_radioGroup_inputs_container">
              <input
                type="radio"
                id="yes"
                name="funeralService"
                value="yes"
                required
                onChange={(ev) => onFieldChange(ev.target.value, 'funeralService')}
              />
              <label htmlFor="yes">SI</label>
            </div>
            <div className="CMRP_radioGroup_inputs_container">
              <input
                type="radio"
                id="no"
                name="funeralService"
                value="no"
                required
                onChange={(ev) => onFieldChange(ev.target.value, 'funeralService')}
              />
              <label htmlFor="no">NO</label>
            </div>
          </div>
        </div>
        <ProfileField
          label="Cuota de Afiliado"
          value="$500"
          field="total"
          valueClass="CMRP_NewAffiliate_body_field"
          noPadding
        />
      </Shared.Card>
    </>
  );
};

export default NewAffiliateForm;
