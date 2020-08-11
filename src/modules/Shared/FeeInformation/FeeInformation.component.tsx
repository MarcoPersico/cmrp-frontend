/* eslint-disable react-hooks/exhaustive-deps */
import React from 'react';
import { FeeInformationStyles } from './FeeInformation.styles';

const FeeInformation = ({ additionalInfo }: { additionalInfo?: string }) => (
  <FeeInformationStyles>
    <p>
      Las cuotas de los afilidos y/o Familiares a cargo
      tienen los siguientes valores.
    </p>
    <p>Las cuotas se calculan en base a la fecha de nacimiento.</p>
    <ul>
      <li>Sepelio menores a 60 años: $260</li>
      <li>Sepelio menores a 70 años: $350</li>
      <li>Sepelio menores a 80 años: $450</li>
      <li>Sepelio mayores a 80 años: $500</li>
      <li>
        Cuota de Afiliacion: La cuota de afiliacion no puede
        ser calculada desde aqui.
      </li>
    </ul>
  </FeeInformationStyles>
);

export default FeeInformation;
