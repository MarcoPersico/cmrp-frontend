/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import { NewAffiliateStyles } from './NewAffiliate.styles';

type Props = {
  newAffiliateForm: React.ReactNode;
  newMemberForm: React.ReactNode;
  membersAdded: React.ReactNode;
  hasMembersAdded: boolean;
  onAffiliateCreation: () => void;
};

const NewAffiliate = ({
  newAffiliateForm,
  newMemberForm,
  membersAdded,
  hasMembersAdded,
  onAffiliateCreation,
}: Props) => (
  <NewAffiliateStyles>
    <div className="CMRP_NewAffiliate_header">
      <h2 className="CMRP_headerTitle">Agregar Nuevo Afiliado</h2>
    </div>
    <form
      className="CMRP_NewAffiliate_cardContainer"
      onSubmit={(ev) => {
        ev.preventDefault();
        onAffiliateCreation();
      }}
    >
      {newAffiliateForm}
      <input type="submit" hidden id="submitAffiliate" />
    </form>
    {hasMembersAdded
      ? (
        <>
          <div className="CMRP_NewAffiliate_header">
            <h3>Familiares a cargo Agregados</h3>
          </div>
          <div className="CMRP_NewAffiliate_membersAdded">
            {membersAdded}
          </div>
        </>
      ) : null}
    <div className="CMRP_NewAffiliate_header">
      <h3>Agregar Familiar a cargo</h3>
    </div>
    <div className="CMRP_NewAffiliate_memberCard_container">
      {newMemberForm}
    </div>
    <div className="CMRP_NewAffiliate_footer">
      <label
        htmlFor="submitAffiliate"
        className="CMRP_simple_button"
      >
        Crear Afiliado
      </label>
    </div>
  </NewAffiliateStyles>
);

export default NewAffiliate;
