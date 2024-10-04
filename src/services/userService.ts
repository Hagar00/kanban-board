import { useBoardDataStore } from "../store/store";
import { BoardData, UserFormData } from "../types";

const addUser = (userData: UserFormData) => {
  const { boardData, setBoardData } = useBoardDataStore.getState();
  const updatedBoardData: BoardData = {
    ...boardData,
    unclaimed: [...(boardData.unclaimed || []), userData],
  };
  setBoardData(updatedBoardData);
};

const changeStatus = (
  from: keyof BoardData,
  to: keyof BoardData,
  indexToMove: number
) => {
  const { boardData, setBoardData } = useBoardDataStore.getState();

  const itemToMove = boardData[from][indexToMove];

  const fromCol = boardData[from].filter((_, index) => index !== indexToMove);

  const toCol = [...boardData[to], { ...itemToMove, colKey: to }];

  setBoardData({
    ...boardData,
    [from]: fromCol,
    [to]: toCol,
  });
};

const removeUser = (from: keyof BoardData, indexToDelete: number) => {
  const { boardData, setBoardData } = useBoardDataStore.getState();
  const updatedCol = boardData[from].filter(
    (_, index) => index !== indexToDelete
  );

  setBoardData({
    ...boardData,
    [from]: updatedCol,
  });
};

const editUser = (indexToEdit: number, newData: UserFormData) => {
  const { boardData, setBoardData } = useBoardDataStore.getState();

  const updatedCol = [...boardData[newData.colKey]];

  updatedCol[indexToEdit] = { ...newData, colKey: newData.colKey };

  setBoardData({
    ...boardData,
    [newData.colKey]: updatedCol,
  });
};

export const userService = {
  addUser,
  editUser,
  removeUser,
  changeStatus,
};
