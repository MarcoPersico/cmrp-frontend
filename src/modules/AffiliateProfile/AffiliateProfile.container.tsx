/* eslint-disable react-hooks/exhaustive-deps */
import React from 'react';
import { useParams } from 'react-router-dom';
import AffiliateProfile from './components/AffiliateProfile';
import { AffiliateService, Member } from '../../services/affiliate.service';
import { useConfirmation } from '../../services/confirmation.service';
import MemberCard from './components/MemberData/Member.component';
import AffiliateData from './components/AffiliateData';
import ActivationField from './components/ActivationField/ActivationField.component';
import { Shared } from '../Shared';
import PayRegistryCard from './components/PayRegistryCard';

const AffiliateProfileContainer = () => {
  type AffiliateParam = { id: string };
  const params = useParams<AffiliateParam>();
  const affiliateService = React.useContext(AffiliateService);
  const confirmation = useConfirmation();
  const [newMemberFormVisible, setNewMemberFormVisible] = React.useState(false);

  React.useEffect(() => {
    if (parseInt(params.id, 10).toString() === params.id) {
      affiliateService.getAffiliate(parseInt(params.id, 10));
    }
  }, [params.id]);

  const toggleAffiliateActivation = (reason: string) => confirmation({
    catchOnCancel: true,
    title: '⚠️ Atencion',
    description: affiliateService.affiliate.active
      ? `
      Al dar de baja el afiliado la fecha de afiliacion sera removida
      al igual que su servicio de sepelio y
      todos los familiares a cargo seran dados de baja
      ¿Confirma el cambio?
      `
      : `¿Confirma dar de alta el afiliado ${affiliateService.affiliate.name}?`,
  })
    .then(() => affiliateService
      .onMemberOrAffiliateActivation(
        affiliateService.affiliate.active ? '0' : '1',
        reason,
        'affiliate',
      ))
    .catch(() => null);

  const toggleMemberActivation = (
    reason: string,
    member: Member,
  ) => confirmation({
    catchOnCancel: true,
    title: 'Atencion',
    description: `¿Confirma dar de ${member.active ? 'BAJA' : 'ALTA'} el familiar ${member.name}?`,
  })
    .then(() => affiliateService
      .onMemberOrAffiliateActivation(
        member.active ? '0' : '1',
        reason,
        'member',
        member.id,
      ))
    .catch(() => null);

  const toggleAffiliateFuneralActivation = () => confirmation({
    catchOnCancel: true,
    title: 'Atencion',
    description: `¿Confirma dar de ${hasFuneralService() ? 'BAJA' : 'ALTA'} 
      el servicio de Sepelio de el afiliado
      ${affiliateService.affiliate.name}?`,
  })
    .then(() => affiliateService
      .onAffiliateFuneralServiceActivation(hasFuneralService()))
    .catch(() => null);

  const onMemberCreation = (
    formData: {
      name: string,
      birthday: string,
      dni: string,
      relation: string,
      fee: string,
    },
  ) => confirmation({
    catchOnCancel: true,
    title: 'Atencion',
    description: `¿Confirma la alta del Familiar a cargo ${formData.name} ?`,
  })
    .then(() => affiliateService.createMember(formData));

  const calculateTotal = () => {
    let total = 0;
    total = affiliateService.affiliate.active
      ? affiliateService.affiliate.fee
      : 0;

    affiliateService.affiliate.members.forEach((member) => {
      if (member.active) total += member.fee.value;
    });

    return total;
  };

  const calculateAffiliateFee = () => {
    let total = 0;
    total = affiliateService.affiliate.active
      ? affiliateService.affiliate.fee
      : 0;

    affiliateService.affiliate.members.forEach((member) => {
      if (member.self && member.active && affiliateService.affiliate.active) {
        total += member.fee.value;
      }
    });

    return total;
  };

  const hasFuneralService = () => {
    let hasService = false;

    affiliateService.affiliate.members.forEach((member) => {
      if (member.active && member.self) {
        hasService = true;
      }
    });
    return hasService;
  };

  const hasMembers = () => affiliateService
    .affiliate.members.some((member) => !member.self);

  return (
    affiliateService.affiliate.id
      ? (
        <AffiliateProfile
          isAffiliateActive={affiliateService.affiliate.active}
          affiliateName={affiliateService.affiliate.name}
          membersLength={affiliateService.affiliate.members.length}
          hasMembers={hasMembers}
          hasPayRegistry={!!affiliateService.affiliate.payRegistries.length}
          newMemberFormVisible={newMemberFormVisible}
          toggleNewMemberFormVisibility={() => (
            setNewMemberFormVisible(!newMemberFormVisible)
          )}
          activationField={
            <ActivationField
              onActivation={toggleAffiliateActivation}
              actionLabel={`Dar de ${affiliateService.affiliate.active ? 'BAJA' : 'ALTA'} Afiliado`}
              noReason={!affiliateService.affiliate.active}
            />
          }
          funeralActivationField={
            <ActivationField
              onActivation={toggleAffiliateFuneralActivation}
              actionLabel={`Dar de ${hasFuneralService() ? 'BAJA' : 'ALTA'} Servicio de Sepelio`}
              noReason
            />
          }
          affiliates={
            <AffiliateData
              onAffiliateUpdate={affiliateService.onAffiliateUpdate}
              affiliate={affiliateService.affiliate}
              calculateTotal={calculateTotal}
              calculateAffiliateFee={calculateAffiliateFee}
              hasFuneralService={hasFuneralService}
            />
          }
          payRegistries={affiliateService.affiliate.payRegistries.map(
            (payRegistry) => (
              <PayRegistryCard payRegistry={payRegistry} key={payRegistry.id} />
            ),
          )}
          members={affiliateService.affiliate.members.map((member) => (
            member.self
              ? null
              : (
                <MemberCard
                  onMemberUpdate={affiliateService.onMemberUpdate}
                  key={member.id}
                  member={member}
                  isAffiliateActive={affiliateService.affiliate.active}
                  activationField={
                    <ActivationField
                      className="CMRP_AffiliateProfile_memberFooter"
                      onActivation={(value: string) => (
                        toggleMemberActivation(value, member))}
                      actionLabel={`Dar de ${member.active ? 'BAJA' : 'ALTA'}`}
                      noReason={!member.active}
                    />
                  }
                />
              )
          ))}
          newMemberForm={
            <Shared.NewMemberForm
              onMemberCreation={(formData) => onMemberCreation(formData)}
              onCancelNewMember={() => (
                setNewMemberFormVisible(!newMemberFormVisible)
              )}
            />
          }
        />
      )
      : null
  );
};

export default AffiliateProfileContainer;
