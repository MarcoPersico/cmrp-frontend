import React from 'react';
import { AffiliateProfileStyles } from './AffiliateProfile.styles';
import { Shared } from '../../../Shared';

type Props = {
  isAffiliateActive: boolean;
  affiliateName: string;
  membersLength: number;
  activationField: React.ReactNode,
  members: React.ReactNode;
  affiliates: React.ReactNode;
  payRegistries: React.ReactNode;
  funeralActivationField: React.ReactNode;
  newMemberForm: React.ReactNode;
  hasMembers: () => boolean;
  hasPayRegistry: boolean;
  newMemberFormVisible: boolean;
  toggleNewMemberFormVisibility: () => void;
};

const AffiliateProfile = ({
  isAffiliateActive,
  affiliateName,
  membersLength,
  members,
  affiliates,
  payRegistries,
  activationField,
  funeralActivationField,
  hasMembers,
  hasPayRegistry,
  newMemberFormVisible,
  newMemberForm,
  toggleNewMemberFormVisibility,
}: Props) => {
  const [membersVisbible, setMembersVisible] = React.useState(false);
  const [payRegistryVisbible, setPayRegistryVisbible] = React.useState(true);

  React.useEffect(() => {
    setMembersVisible(true);
  }, [membersLength]);

  return (
    <AffiliateProfileStyles className="CMRP_animations_fadeIn">
      <div className="CMRP_AffiliateProfile_header">
        <h2 className="CMRP_headerTitle">{affiliateName}</h2>
        <Shared.ActionGroup>
          {isAffiliateActive
            ? (
              <>
                <button
                  className="CMRP_simple_button"
                  type="button"
                  disabled={newMemberFormVisible}
                  onClick={() => {
                    toggleNewMemberFormVisibility();
                    setMembersVisible(true);
                    document.body.scrollTo(100000, 0);
                  }}
                  title={newMemberFormVisible
                    ? 'Ya existe un formulario abierto para esta opcion'
                    : undefined}
                >
                  Agregar Familiar
                </button>
                {funeralActivationField}
              </>
            ) : null}
          {activationField}
        </Shared.ActionGroup>
      </div>
      <div className="CMRP_AffiliateProfile_cardContainer">
        {affiliates}
      </div>
      {hasPayRegistry
        ? (
          <>
            <div className="CMRP_AffiliateProfile_sectionHeader">
              <button
                type="button"
                onClick={() => setPayRegistryVisbible(!payRegistryVisbible)}
              >
                <span role="img" aria-label="unicode">{payRegistryVisbible ? '➖' : '➕'}</span>
                <h3>Registros de Pago</h3>
              </button>
            </div>
            <Shared.Animated
              listener={payRegistryVisbible}
              transitionTime={200}
              animation="slideWithOpacity"
              unmountOnEnd
            >
              <div className="CMRP_AffiliateProfile_sectionContainer">
                {payRegistries}
              </div>
            </Shared.Animated>
          </>
        ) : null}
      {hasMembers() || newMemberFormVisible
        ? (
          <>
            <div className="CMRP_AffiliateProfile_sectionHeader">
              <button
                type="button"
                onClick={() => {
                  setMembersVisible(!membersVisbible);
                  if (newMemberFormVisible) toggleNewMemberFormVisibility();
                }}
              >
                <span role="img" aria-label="unicode">{membersVisbible ? '➖' : '➕'}</span>
                <h3>Familiares a cargo</h3>
              </button>
            </div>
            <Shared.Animated
              listener={membersVisbible}
              transitionTime={200}
              animation="slideWithOpacity"
              unmountOnEnd
            >
              <div className="CMRP_AffiliateProfile_memberCardContainer CMRP_animations_fadeIn">
                {members}
                {membersVisbible && !newMemberFormVisible
                  ? (
                    <button
                      type="button"
                      className="CMRP_AffiliateProfile_memberCard_add"
                      onClick={() => {
                        toggleNewMemberFormVisibility();
                        setMembersVisible(true);
                      }}
                    >
                      +
                    </button>
                  ) : null}
                {newMemberFormVisible ? newMemberForm : null}
              </div>
            </Shared.Animated>
          </>
        ) : null}
    </AffiliateProfileStyles>
  );
};

export default AffiliateProfile;
