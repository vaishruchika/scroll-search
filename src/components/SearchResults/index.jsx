import React from "react";
import Card from "../Card";
import { SearchResultsContainer } from "./index.styled";

const SearchResults = ({ data, search, activeOption }) => {
  return (
    <SearchResultsContainer>
      {data.map((item, index) => (
        <Card
          key={index}
          data={item}
          search={search}
          activeOption={activeOption}
          index={index}
        />
      ))}
    </SearchResultsContainer>
  );
};

export default SearchResults;
