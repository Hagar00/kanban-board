import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";
import { BoardData } from "../types";

const initialBoardData: BoardData = {
  unclaimed: [],
  firstContact: [],
  preparingWorkOffer: [],
  sendToTherapists: [],
};
interface BoardStore {
  boardData: BoardData;
  setBoardData: (boardData: BoardData) => void;
}

export const useBoardDataStore = create<BoardStore>()(
  persist(
    (set) => ({
      boardData: initialBoardData,
      setBoardData: (boardData: BoardData) => set({ boardData }),
    }),
    {
      name: "boardData",
      storage: createJSONStorage(() => localStorage),
    }
  )
);
