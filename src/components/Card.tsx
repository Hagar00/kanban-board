import { CardData } from "../types";
import Dropdown from "./Dropdown";

const Card = ({ name, email, mobileNumber, age }: CardData) => {
  const options = [
    { value: "option1", label: "Option 1" },
    { value: "option2", label: "Option 2" },
    { value: "option3", label: "Option 3" },
  ];

  const handleSelect = (value: string) => {
    console.log(`Selected: ${value}`);
  };

  return (
    <>
      <div className="bg-white rounded-lg  shadow-md px-3 py-2">
        <div className="flex justify-between">
          <h3 className="text-lg font-bold capitalize">{name}</h3>
          <span className="text-gray-500">{age} yo</span>
          <Dropdown
            options={options}
            onSelect={handleSelect}
            placeholder="Choose an option"
          />
        </div>

        <p className="text-gray-500">{email}</p>
        <p className="text-gray-500">{mobileNumber}</p>
      </div>
    </>
  );
};

export default Card;
