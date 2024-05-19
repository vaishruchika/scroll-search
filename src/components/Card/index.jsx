import React, { useRef } from "react";
import { capitalizeFirstLetter } from "../../utils";
import { StyledCard, style } from "./index.styled";

const Card = ({ data, search, index, activeOption, setActiveOption }) => {
  const scrollRef = useRef();
  // highlight the queried string
  const strColor = (str) => {
    const regex = new RegExp(search, "gi");
    const parts = str.split(regex);
    return (
      <div>
        {parts.map((part, i) =>
          i === parts.length - 1 ? (
            <span>{part}</span>
          ) : (
            <>
              <span>{part}</span>
              <span style={style}>
                {part.charAt(part.length - 1) === " " || part === ""
                  ? capitalizeFirstLetter(search)
                  : search}
              </span>
            </>
          )
        )}
      </div>
    );
  };

  return (
    <StyledCard
      className={activeOption === index ? `option-active` : ""}
      id={index}
      ref={scrollRef}
      onMouseEnter={(e) => {
        e.stopPropagation();
        scrollRef?.current?.scrollIntoView({
          behavior: "smooth",
        });
        setActiveOption(index);
      }}
    >
      <div>{strColor(data.id)}</div>
      <div>{strColor(data.name)}</div>
      {data.items.find((item) => item.toLowerCase().includes(search)) !==
      undefined ? (
        <div>
          {/* html unicode for bullet and space */}
          <span>&#x2022;&emsp;</span>
          <span style={style}>{search}</span> found in Items
        </div>
      ) : (
        <br />
      )}
      <div>{strColor(data.address)}</div>
      <div>{strColor(data.pincode)}</div>
    </StyledCard>
  );
};

export default Card;
