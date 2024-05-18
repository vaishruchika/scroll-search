import styled from "styled-components";

export const style = { color: "blue" };


export const StyledCard = styled.div`
  border: 1px solid black;
  margin: 5px 5px 5px 7px;

  &:hover {
    background-color: lightblue;
  }

  &.option-active {
    background-color: lightblue;
  }

  &.no-hover {
    pointer-events: none;
  }
`;
