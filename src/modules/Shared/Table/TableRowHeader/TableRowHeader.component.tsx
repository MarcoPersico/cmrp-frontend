/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { ReactElement } from 'react';

type Props = {
  children: ReactElement[] | ReactElement;
  startingSort?: number;
};

const TableRowHeader = ({ children, startingSort }: Props) => {
  const [activeColumn, setActiveColumn] = React.useState(startingSort || 0);
  const setActive = (column: number) => setActiveColumn(column);

  const childs = React.Children
    .map(children, (child) => (
      child.type !== 'th'
        ? (React.cloneElement(child, {
          onActionTriggered: (column: number) => setActive(column),
          activeColumn,
          columnIndex: child.key,
        }))
        : child
    ));

  return (
    <tr>
      {childs}
    </tr>
  );
};

export default TableRowHeader;
