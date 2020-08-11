import React from 'react';
import { CardStyles } from './Card.styles';

type Props = {
  children: React.ReactNode,
  className?: string,
};

const Card = ({ children, className }: Props) => (
  <CardStyles className={className}>
    {children}
  </CardStyles>
);

export default Card;
