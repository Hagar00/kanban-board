import { useBoardDataStore } from "../store/store";
import CardContainer from "./CardContainer";
import Divider from "./Divider";

const Board = () => {
    const { boardData, setBoardData } = useBoardDataStore();

  return (
    <div className="overflow-x-auto w-full">
      <div className="inline-grid gap-4 grid-flow-col auto-cols-[minmax(300px,1fr)] w-full">
        <div className="flex w-full gap-4">
          <CardContainer
            header="Unclaimed"
            light
            addIcon
            cardsData={boardData.unclaimed}
   
          />
          <Divider />
        </div>
        <div className="flex w-full gap-4">
          <CardContainer
            header="First Contact"
            cardsData={boardData.firstContact}
       
          />
        </div>
        <div className="flex w-full gap-4">
          <CardContainer
            header="Preparing Work Offer"
            cardsData={boardData.preparingWorkOffer}
  
          />
        </div>
        <div className="flex w-full gap-4">
          <CardContainer
            header="Send to Therapists"
            cardsData={boardData.sendToTherapists}

          />
        </div>
      </div>
    </div>
  );
};

export default Board;
