import React, { useState, useRef, useEffect, act } from "react";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import SearchBar from "../SearchBar";
import { StyledContainer } from "./index.styled";
import SearchResults from "../SearchResults";

const ScrollSearch = () => {
  const [search, setSearch] = useState("");
  const [searchedResults, setSearchedResults] = useState([]);
  const [activeOption, setActiveOption] = useState(-1);

  // Access the client
  const queryClient = useQueryClient();

  // Queries
  const { data, isLoading, isError } = useQuery({
    queryKey: [],
    queryFn: async () => {
      const response = await fetch(
        "https://fe-take-home-assignment.s3.us-east-2.amazonaws.com/Data.json"
      );
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      return response.json();
    },
  });

  useEffect(() => {
    if (data && search !== "") {
      setSearchedResults(
        data.filter(
          (item) =>
            item.id.toLowerCase().includes(search) ||
            item.name.toLowerCase().includes(search) ||
            item.address.toLowerCase().includes(search) ||
            item.pincode.toLowerCase().includes(search) ||
            item.items.find((item) => item.toLowerCase().includes(search)) !==
              undefined
        )
      );
    } else setSearchedResults([]);
  }, [data, search]);

  // Scrollintoview for the active element using the method
  useEffect(() => {
    if (activeOption > -1) {
      const element = document?.getElementById(activeOption);
      element?.scrollIntoView({
        behavior: "smooth",
      });
    }
  }, [activeOption]);

  const handleKeyDown = (e) => {
    if (activeOption < searchedResults.length) {
      if (e.key === "ArrowDown" && activeOption < searchedResults.length - 1) {
        setActiveOption((prev) => prev + 1);
      } else if (e.key === "ArrowUp" && activeOption > 0) {
        setActiveOption((prev) => prev - 1);
      } else if (e.key === "Enter" && activeOption >= 0) {
        e.preventDefault();
      }
    } else setActiveOption(-1);
  };

  return (
    <>
      {isLoading ? (
        <header>Loading...</header>
      ) : (
        <StyledContainer onKeyDown={handleKeyDown}>
          <SearchBar setSearch={setSearch} />
          <SearchResults
            data={searchedResults}
            search={search}
            activeOption={activeOption}
            setActiveOption={setActiveOption}
          />
        </StyledContainer>
      )}
    </>
  );
};

export default ScrollSearch;
