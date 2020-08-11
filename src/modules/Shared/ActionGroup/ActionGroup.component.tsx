import React from 'react';
import { ActionGroupStyles } from './ActionGroup.styles';
import { Icon } from '../../../assests/Icons/Icons';

type Props = {
  children?: React.ReactNode;
};

const ActionGroup = ({ children }: Props) => {
  const [isOpen, setIsOpen] = React.useState<boolean>(true);

  return (
    <ActionGroupStyles isOpen={isOpen}>
      <div className="CMRP_ActionGroup_toggleContainer">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="CMRP_ActionGroup_toggleContainer_action"
          type="button"
        >
          <Icon.Arrow />
        </button>
      </div>
      <div className="CMRP_ActionGroup_childrenContainer">
        {children}
      </div>
    </ActionGroupStyles>
  );
};

export default ActionGroup;
