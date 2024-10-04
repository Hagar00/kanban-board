import { useEffect, useState } from "react";
import CardContainer from "./CardContainer";
import Divider from "./Divider";

const Board = () => {
  const [boardData, setBoardData] = useState({
    unclaimed: [],
    firstContact: [],
    preparingWorkOffer: [],
    sendToTherapists: [],
  });


  const loadBoardData = () => {
    const storedData = JSON.parse(localStorage.getItem("boardData") || "{}");
    setBoardData({
      unclaimed: storedData.unclaimed || [],
      firstContact: storedData.firstContact || [],
      preparingWorkOffer: storedData.preparingWorkOffer || [],
      sendToTherapists: storedData.sendToTherapists || [],
    });
  };


  const refreshBoard = () => {
    loadBoardData();
  };

  useEffect(() => {
    loadBoardData(); 
  }, []);

  return (
    <div className="overflow-x-auto w-full">
      <div className="inline-grid gap-4 grid-flow-col auto-cols-[minmax(300px,1fr)] w-full">
        <div className="flex w-full gap-4">
          <CardContainer
            header="Unclaimed"
            light
            addIcon
            cardsData={boardData.unclaimed}
            refreshBoard={refreshBoard}
          />
          <Divider />
        </div>
        <div className="flex w-full gap-4">
          <CardContainer
            header="First Contact"
            cardsData={boardData.firstContact}
            refreshBoard={refreshBoard}
          />
        </div>
        <div className="flex w-full gap-4">
          <CardContainer
            header="Preparing Work Offer"
            cardsData={boardData.preparingWorkOffer}
            refreshBoard={refreshBoard}
          />
        </div>
        <div className="flex w-full gap-4">
          <CardContainer
            header="Send to Therapists"
            cardsData={boardData.sendToTherapists}
            refreshBoard={refreshBoard}
          />
        </div>
      </div>
    </div>
  );
};

export default Board;
