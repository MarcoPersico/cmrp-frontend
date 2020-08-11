/* eslint-disable react/no-array-index-key */
import React from 'react';
import { TableStyles } from './Table.styles';

type Props = {
  data: React.ReactNode;
  columns: React.ReactNode;
  className?: string;
};

const Table = ({
  data,
  columns,
  className,
}: Props) => (
  <TableStyles className={`CMRP_animations_fadeIn ${className}`}>
    <table>
      <thead>
        {columns}
      </thead>
      <tbody>
        {data}
      </tbody>
    </table>
  </TableStyles>
);

export default Table;
