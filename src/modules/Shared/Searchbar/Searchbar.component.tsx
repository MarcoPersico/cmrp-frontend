import * as React from 'react';

// Components
import { Icon } from '../../../assests/Icons/Icons';

// Styles
import { SearchbarStyled } from './Searchbar.styles';

interface SearchBarProps {
  value: string,
  placeholder: string,
  className?: string,
  onSubmit: (event: React.SyntheticEvent) => void,
  onChange: (value: string) => void,
}

export default function SearchBar(props: SearchBarProps) {
  return (
    <SearchbarStyled
      className={props.className}
      onSubmit={(event: React.SyntheticEvent) => props.onSubmit(event)}
    >
      <input
        className="CMRP_SearchBar_input"
        type="text"
        value={props.value}
        placeholder={props.placeholder}
        onChange={(event) => props.onChange(event.target.value)}
        required
      />
      <div className="CMRP_SearchBar_divider" />
      <button type="submit" className="CMRP_SearchBar_action">
        <Icon.Search />
      </button>
    </SearchbarStyled>
  );
}
