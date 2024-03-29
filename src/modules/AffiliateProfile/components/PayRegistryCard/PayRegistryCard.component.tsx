import React from 'react';
import { Link } from 'react-router-dom';
import { Shared } from '../../../Shared';

import { PayRegistryCardStyles } from './PayRegistryCard.styles';
import { PayRegistry } from '../../../../services/affiliate.service';
import ProfileField from '../ProfileField';

type Props = {
  payRegistry: PayRegistry,
  identity: number,
};

const PayRegistryCard = ({ payRegistry, identity }: Props) => (
  <PayRegistryCardStyles>
    <Link to={`/dashboard/pay-registry/selected/${payRegistry.periodCode}?selected=${identity}`}>
      <Shared.Card className="CMRP_PayRegistry_cardContainer">
        <ProfileField
          label="Periodo"
          value={payRegistry.period.toString()}
          field="period"
          noPadding
        />
        <ProfileField
          label="Código"
          value={payRegistry.code.toString()}
          field="code"
          noPadding
        />
        <ProfileField
          label="Importe"
          value={`$${payRegistry.import.toString()}`}
          field="import"
          noPadding
        />
        <ProfileField
          label="Beneficio"
          value={payRegistry.benefit.toString()}
          field="benefit"
          noPadding
        />
        <ProfileField
          label="Documento"
          value={payRegistry.identity.toString()}
          field="document"
          noPadding
        />
      </Shared.Card>
    </Link>
  </PayRegistryCardStyles>
);

export default PayRegistryCard;
