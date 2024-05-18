import React from "react";
import Card from "../Card";
import { SearchResultsContainer } from "./index.styled";

const SearchResults = ({
  data,
  search,
  activeOption,
  handleKeyDown,
  setActiveOption,
}) => {
  return (
    <SearchResultsContainer onKeyDown={handleKeyDown}>
      {data.map((item, index) => (
        <Card
          key={index}
          data={item}
          search={search}
          activeOption={activeOption}
          index={index}
          setActiveOption={setActiveOption}
        />
      ))}
    </SearchResultsContainer>
  );
};

export default SearchResults;
