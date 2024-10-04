// Dropdown.tsx

import React, { useState } from "react";
import { BoardData, Option } from "../types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";

interface DropdownProps {
  options: Option[];
  onSelect: (value: keyof BoardData) => void;
  placeholder?: string;
}

const Dropdown: React.FC<DropdownProps> = ({
  options,
  onSelect,
  placeholder,
}) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen((prev) => !prev);
  };

  const handleSelect = (option: Option) => {
    onSelect(option.value);
    setIsOpen(false);
  };

  return (
    <div className="relative">
      <button
        onClick={toggleDropdown}
        className="bg-gray-200 text-gray-700 rounded-md p-2 w-full flex justify-between items-center"
      >
        {placeholder || "Select Status"}
        <span className="ml-2">
          <FontAwesomeIcon
            icon={faChevronDown}
            className={`${
              isOpen ? "transform rotate-180" : ""
            } transition-transform duration-200`}
          />
        </span>
      </button>
      {isOpen && (
        <ul className="absolute  right-0 bg-white border border-gray-300 rounded-md mt-1 shadow-lg z-10">
          {options.map((option) => (
            <li
              key={option.value}
              onClick={() => handleSelect(option)}
              className="p-2 hover:bg-gray-200 cursor-pointer text-nowrap"
            >
              {option.label}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Dropdown;
