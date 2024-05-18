import React from "react";
import { StyledInput } from "./index.styled";

const SearchBar = ({ setSearch, handleKeyDown }) => {
  
  return (
    <StyledInput
      placeholder="Search by name/ address/ pincode / items/ id"
      onChange={(e) => setSearch(e.target.value)}
      onKeyDown={handleKeyDown}
    />
  );
};

export default SearchBar;
