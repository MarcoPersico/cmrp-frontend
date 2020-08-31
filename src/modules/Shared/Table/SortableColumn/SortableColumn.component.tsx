import React from 'react';
import { SortableColumnStyles } from './SortableColumn.styles';

type Props = {
  value: string;
  onChange: (value: string, column: string) => void;
  column: string;
  onActionTriggered?: (column: number) => void;
  columnIndex?: number;
  activeColumn?: number;
};

const SortableColumn = ({
  value,
  onChange,
  column,
  onActionTriggered,
  columnIndex,
  activeColumn,
}: Props) => {
  const [sort, setSort] = React.useState<'ASC' | 'DESC' | null>(activeColumn?.toString() === columnIndex ? 'ASC' : null);

  const renderIcon = () => {
    if (activeColumn?.toString() === columnIndex) {
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
    }
    return null;
  };

  const handleSortAction = () => {
    switch (sort) {
      case null:
        setSort('ASC');
        onChange('ASC', column);
        if (onActionTriggered && columnIndex) onActionTriggered(columnIndex);
        break;
      case 'ASC': {
        setSort('DESC');
        onChange('DESC', column);
        if (onActionTriggered && columnIndex) onActionTriggered(columnIndex);
        break;
      }
      case 'DESC': {
        setSort(null);
        onChange('', column);
        if (onActionTriggered && columnIndex) onActionTriggered(columnIndex);
        break;
      }
    }
  };

  return (
    <SortableColumnStyles>
      <button
        type="button"
        className="CMRP_Table_sortable"
        onClick={handleSortAction}
      >
        {value}
        {renderIcon()}
      </button>
    </SortableColumnStyles>
  );
};

export default SortableColumn;
