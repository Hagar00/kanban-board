// Dropdown.tsx

import React, { useState } from "react";

interface Option {
  value: string;
  label: string;
}

interface DropdownProps {
  options: Option[];
  onSelect: (value: string) => void;
  placeholder?: string;
}

const Dropdown: React.FC<DropdownProps> = ({
  options,
  onSelect,
  placeholder,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedValue, setSelectedValue] = useState<string | null>(null);

  const toggleDropdown = () => {
    setIsOpen((prev) => !prev);
  };

  const handleSelect = (option: Option) => {
    setSelectedValue(option.value);
    onSelect(option.value);
    setIsOpen(false);
  };

  return (
    <div className="relative">
      <button
        onClick={toggleDropdown}
        className="bg-gray-200 text-gray-700 rounded-md p-2 w-full flex justify-between items-center"
      >
        {selectedValue
          ? options.find((option) => option.value === selectedValue)?.label
          : placeholder || "Select an option"}
        <span className={`ml-2 ${isOpen ? "transform rotate-180" : ""}`}>
          &#9660;
        </span>
      </button>
      {isOpen && (
        <ul className="absolute left-0 right-0 bg-white border border-gray-300 rounded-md mt-1 shadow-lg z-10">
          {options.map((option) => (
            <li
              key={option.value}
              onClick={() => handleSelect(option)}
              className="p-2 hover:bg-gray-200 cursor-pointer"
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
