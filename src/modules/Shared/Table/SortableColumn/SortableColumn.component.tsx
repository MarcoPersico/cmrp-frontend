import React from 'react';
import { SortableColumnStyles } from './SortableColumn.styles';

type Props = {
  value: string;
  onChange: (value: string, column: string) => void;
  column: string;
};

const SortableColumn = ({
  value,
  onChange,
  column,
}: Props) => {
  const [sort, setSort] = React.useState<'ASC' | 'DESC' | null>(null);

  const renderIcon = () => {
    switch (sort) {
      case null: {
        return null;
      }
      case 'ASC': {
        return <span className="CMRP_Table_sortable_arrow" role="img" aria-label="unicode">🠗</span>;
      }
      case 'DESC': {
        return <span className="CMRP_Table_sortable_arrow" role="img" aria-label="unicode">🠕</span>;
      }
      default: return null;
    }
  };

  return (
    <SortableColumnStyles>
      <button
        type="button"
        className="CMRP_Table_sortable"
        onClick={() => {
          switch (sort) {
            case null:
              setSort('ASC');
              onChange('ASC', column);
              break;
            case 'ASC': {
              setSort('DESC');
              onChange('DESC', column);
              break;
            }
            case 'DESC': {
              setSort(null);
              onChange('', column);
              break;
            }
          }
        }}
      >
        {value}
        {renderIcon()}
      </button>
    </SortableColumnStyles>
  );
};

export default SortableColumn;
