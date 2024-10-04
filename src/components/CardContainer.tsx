import { useState } from "react";
import Card from "./Card";
import Dialog from "./Dialog";
import UserForm from "./UserForm";
import { CardContainerProps } from "../types";

const CardContainer = ({
  header,
  light,
  addIcon,
  cardsData,
}: CardContainerProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const onHide = () => setIsOpen(false);

  return (
    <>
      <Dialog onHide={onHide} isOpen={isOpen}>
        <UserForm onHide={onHide} />
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
              <span className="h-10 w-10 rounded-full bg-white flex items-center justify-center shadow-md">
                {cardsData.length}
              </span>
              {addIcon && (
                <span
                  className="h-10 w-10 rounded-full bg-green-500 text-white flex items-center justify-center shadow-md cursor-pointer text-lg font-bold"
                  onClick={() => setIsOpen(true)}
                >
                  +
                </span>
              )}
            </div>
          </div>
          {/* Cards */}
          <div className="space-y-2 mt-4 overflow-y-auto h-full p-1">
            {cardsData.map((data, indx) => (
              <Card {...data} key={indx} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default CardContainer;
