import React from "react";
import { StyledInput } from "./index.styled";

const SearchBar = ({ setSearch }) => {
  
  return (
    <StyledInput
      placeholder="Search by name/ address/ pincode / items/ id"
      onChange={(e) => setSearch(e.target.value.toLowerCase())}
    />
  );
};

export default SearchBar;
