import { useState, ChangeEvent } from "react";
import Input from "../Input";
import DropDownList from "../DropDown/components/DropDownList";

interface DropdownProps {
  label: string;
  categories: string[];
}

export default function Dropdown({ label, categories }: DropdownProps) {
  const [selectOption, setSelectOption] = useState("");
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  const handleSelect = (category: string) => {
    setSelectOption(category);
    setIsOpen(!isOpen);
  };

  const handleInput = (event: ChangeEvent<HTMLInputElement>) => {
    setSelectOption(event.target.value);
  };

  return (
    <>
      <Input
        label={label}
        placeholder="선택"
        value={selectOption}
        includeImage
        handleClick={handleClick}
        onChange={handleInput}
      />
      {isOpen && (
        <DropDownList categories={categories} handleSelect={handleSelect} />
      )}
    </>
  );
}
