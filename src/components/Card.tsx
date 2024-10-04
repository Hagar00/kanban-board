import { CardData } from "../types";

const Card = ({ name, email, mobileNumber, age }: CardData) => {
  return (
    <>
      <div className="bg-white rounded-lg  shadow-md px-3 py-2">
        <div className="flex justify-between">
          <h3 className="text-lg font-bold capitalize">{name}</h3>
          <span className="text-gray-500">{age} yo</span>
        </div>

        <p className="text-gray-500">{email}</p>
        <p className="text-gray-500">{mobileNumber}</p>
      </div>
    </>
  );
};

export default Card;
