import { BoardData, CardData, Option } from "../types";
import Dropdown from "./Dropdown";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit, faTrash } from "@fortawesome/free-solid-svg-icons";
import { userService } from "../services/userService";

const options: Option[] = [
  { value: "unclaimed", label: "Unclaimed" },
  { value: "firstContact", label: "First Contact" },
  { value: "preparingWorkOffer", label: "Preparing Work Offer" },
  { value: "sendToTherapists", label: "Send to Therapists" },
];

const Card = ({
  colKey,
  name,
  email,
  mobileNumber,
  age,
  index,
  handleEdit,
}: CardData & { index: number; handleEdit: () => void }) => {
  const handleSelect = (value: keyof BoardData) => {
    userService.changeStatus(colKey, value, index);
  };

  const handleRemove = () => {
    userService.removeUser(colKey, index);
  };

  return (
    <div className="bg-white rounded-lg shadow-md p-4 transition duration-200 hover:shadow-xl max-w-sm mx-auto">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-4">
        <h3 className="text-lg font-bold capitalize mr-2">{name}</h3>

        <span className="text-gray-500">{age} yo</span>
      </div>

      <div className=" mt-2">
        <p className="text-gray-500">{email}</p>
        <p className="text-gray-500">{mobileNumber}</p>
      </div>

      <div className="flex justify-between gap-4 mt-4">
        <div className="flex gap-2">
          <button
            onClick={handleEdit}
            className="flex items-center text-blue-500 hover:text-blue-700 transition duration-150"
          >
            <FontAwesomeIcon icon={faEdit} className="mr-1" />
            Edit
          </button>
          <button
            onClick={handleRemove}
            className="flex items-center text-red-500 hover:text-red-700 transition duration-150"
          >
            <FontAwesomeIcon icon={faTrash} className="mr-1" />
            Delete
          </button>
        </div>

        <div className="flex justify-start ">
          <Dropdown
            options={options.filter((option) => option.value !== colKey)}
            onSelect={handleSelect}
          />
        </div>
      </div>
    </div>
  );
};

export default Card;
