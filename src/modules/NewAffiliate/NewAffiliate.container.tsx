/* eslint-disable react-hooks/exhaustive-deps */
import React, { ReactText } from 'react';
import { ValueType } from 'react-select';
import NewAffiliate from './components/NewAffiliate';
import { AffiliateService, AffiliateFormData, MemberFormData } from '../../services/affiliate.service';
import NewMemberForm from '../Shared/NewMemberForm';
import NewAffiliateForm from './components/NewAffiliateForm';
import NewMemberCard from './components/NewMemberCard';
import { useConfirmation } from '../../services/confirmation.service';

const NewAffiliateModule = () => {
  const confirmation = useConfirmation();
  const affiliateService = React.useContext(AffiliateService);
  const [states, setStates] = React
    .useState<{ value: number, label: string }[]>([]);
  const [newMemberFormVisible, setNewMemberFormVisible] = React.useState(false);
  const [newAffFormData, setNewAffFormData] = React.useState<AffiliateFormData>(
    {
      name: '',
      birthday: '',
      identiy: '',
      address: '',
      district: '',
      city: '',
      department: '',
      state: { value: 0, label: '' },
      phone: '',
      law: '',
      license: '',
      funeralService: '',
      members: [],
      funeralFee: 0,
    },
  );

  React.useEffect(() => {
    affiliateService.getStates()
      .then((data: { value: number, label: string }[]) => setStates(data))
      .finally(() => null);
  }, []);

  const handleFieldChange = (
    value: ReactText | ValueType<{ value: number; label: string; }>,
    field: string,
  ) => {
    setNewAffFormData({ ...newAffFormData, [field]: value });
  };

  const handleMemberAddition = (member: MemberFormData) => {
    const after = new Promise((resolve) => resolve());
    const memberFormatted = member;
    memberFormatted.id = newAffFormData.members.length + 1;

    setNewAffFormData(
      {
        ...newAffFormData,
        members: [...newAffFormData.members, memberFormatted],
      },
    );

    return after;
  };

  const handleMemberDeletion = (id: number) => {
    const filteredMembers = newAffFormData.members.filter(
      (member) => member.id !== id,
    );

    setNewAffFormData({ ...newAffFormData, members: filteredMembers });
  };

  const getMemberFeeValue = (id: string) => {
    if (parseInt(id, 10) === 1) return 260;
    if (parseInt(id, 10) === 2) return 350;
    if (parseInt(id, 10) === 3) return 450;
    if (parseInt(id, 10) === 4) return 500;

    return 0;
  };

  const calculateAge = (birthday: Date) => {
    const diffMs = Date.now() - birthday.getTime();
    const ageDt = new Date(diffMs);

    return Math.abs(ageDt.getUTCFullYear() - 1970);
  };

  const calculateAffiliateFuneralService = () => {
    const age = calculateAge(new Date(newAffFormData.birthday));

    if (age < 60) return 260;
    if (age < 70) return 350;
    if (age < 80) return 450;
    if (age > 60) return 500;

    return 0;
  };

  React.useEffect(() => {
    if (newAffFormData.birthday && newAffFormData.funeralService === 'yes') {
      handleFieldChange(calculateAffiliateFuneralService(), 'funeralFee');
    }
    if (newAffFormData.funeralService === 'no' || !newAffFormData.funeralService) {
      handleFieldChange(0, 'funeralFee');
    }
  }, [newAffFormData.birthday, newAffFormData.funeralService]);

  const calculateTotalFee = () => {
    let total = 0;
    if (newAffFormData.funeralService === 'yes' && newAffFormData.birthday) {
      total += calculateAffiliateFuneralService();
    }
    newAffFormData.members.forEach((member) => {
      total += getMemberFeeValue(member.fee);
    });

    return total;
  };

  const handleFormSubmit = () => {
    confirmation({
      catchOnCancel: true,
      title: '⚠️ Atencion',
      description: `¿Confirma crear el afiliado ${newAffFormData.name}?
      `,
    })
      .then(() => affiliateService.createAffiliate(newAffFormData))
      .catch(() => null);
  };

  return (
    <NewAffiliate
      onAffiliateCreation={handleFormSubmit}
      hasMembersAdded={!!newAffFormData.members.length}
      newAffiliateForm={
        <NewAffiliateForm
          totalFee={calculateTotalFee}
          affiliateFormData={newAffFormData}
          onFieldChange={handleFieldChange}
          states={states}
        />
      }
      membersAdded={newAffFormData.members.map((member) => {
        const memberFeeValue = getMemberFeeValue(member.fee);

        return (
          <NewMemberCard
            onMemberDelete={(memberId) => handleMemberDeletion(memberId)}
            key={member.id}
            member={member}
            feeValue={memberFeeValue.toString()}
          />
        );
      })}
      newMemberForm={
        newMemberFormVisible
          ? (
            <NewMemberForm
              onMemberCreation={
                (member: MemberFormData) => handleMemberAddition(member)
                  .then(() => setNewMemberFormVisible(false))
              }
              onCancelNewMember={() => setNewMemberFormVisible(false)}
              customSubmitLabel="Agregar"
            />
          ) : (
            <button
              type="button"
              className="CMRP_NewAffiliate_memberCard_add"
              onClick={() => setNewMemberFormVisible(true)}
            >
              +
            </button>)
      }
    />
  );
};

export default NewAffiliateModule;
