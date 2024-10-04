import { useState } from "react";
import Card from "./Card";
import Dialog from "./Dialog";
import UserForm from "./UserForm";
import { CardContainerProps, CardData } from "../types";

const CardContainer = ({
  light,
  header,
  addIcon,
  cardsData,
}: CardContainerProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedCard, setSelectedCard] = useState<
    (CardData & { index: number }) | null
  >(null);

  const onHide = () => {
    setIsOpen(false);
    setSelectedCard(null);
  };

  const handleEdit = (data: CardData, index: number) => {
    setSelectedCard({ ...data, index });
    setIsOpen(true);
  };

  return (
    <>
      <Dialog onHide={onHide} isOpen={isOpen}>
        <UserForm onHide={onHide} selectedCard={selectedCard} />
      </Dialog>
      <div className="flex w-full gap-4">
        <div
          className={`px-2 py-4 border-2 rounded-md w-full h-[calc(100vh-5.5rem)] flex flex-col ${
            light ? "border-slate-300" : "bg-slate-300"
          }`}
        >
          <div className="flex items-center justify-between">
            <b>{header}</b>
            <div className="flex gap-2 items-center">
              {addIcon && (
                <span
                  className="text-gray-500 rounded-md bg-green-300 flex items-center justify-center shadow-md cursor-pointer text-base py-2 px-3 hover:bg-green-400 hover:text-gray-700 hover:shadow-lg transition-all duration-200 ease-in-out"
                  onClick={() => setIsOpen(true)}
                >
                  + Add New
                </span>
              )}
              <span className="h-10 w-10 rounded-full bg-white flex items-center justify-center shadow-md">
                {cardsData.length}
              </span>
            </div>
          </div>
          {/* Cards */}
          <div className="space-y-2 mt-4 overflow-y-auto h-full p-1">
            {cardsData.map((data, index) => (
              <Card
                {...data}
                index={index}
                key={index}
                handleEdit={() => {
                  handleEdit(data, index);
                }}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default CardContainer;
