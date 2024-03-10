import styled from "@emotion/styled";
import { useRouter } from "next/router";
import { julgeCaptionStyle } from "../types/text";
import React, { useState } from "react";

const SearchBar = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const router = useRouter();

  const handleChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };

  const handlePressEnter = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      if (searchTerm) {
        router.push(`/search?keyword=${searchTerm}`);
      }
    }
    if (e.key === "Escape") {
      setSearchTerm("");
    }
  };

  return (
    <SearchInput
      value={searchTerm}
      placeholder="가게 이름으로 찾아보세요"
      onChange={handleChangeInput}
      onKeyDown={handlePressEnter}
    />
  );
};

const SearchInput = styled.input`
  grid-area: search;
  width: 100%;
  border-radius: 4px;
  border: 1px solid #dadde0;
  height: 40px;
  padding-left: 40px;

  &:placeholder {
    color: var(--The-julge-gray-40, #a4a1aa);
  }

  &:focus {
    outline: 1px solid var(--The-julge-purple-30);
  }

  &:hover {
    background-color: var(--The-julge-gray-10, #a4a1aa);
  }

  ${julgeCaptionStyle}

  background-image: url('/images/search.svg');
  background-repeat: no-repeat;
  background-position: 10px center;
  background-size: 20px 20px;

  @media only screen and (max-width: 768px) {
    width: 100%;
    height: 36px;
    background-size: 16px 16px;
    font-style: caption;
  }
`;

export default SearchBar;
