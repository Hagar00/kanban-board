export type CardData = {
  title: string;
  name: string;
  email: string;
  mobileNumber: string;
  age: string;
};

export type UserFormData = {
  name: string;
  title: string;
  age: string;
  email: string;
  mobileNumber: string;
};

export interface CardContainerProps {
  header: string;
  light?: boolean;
  addIcon?: boolean;
  cardsData: CardData[];
}

export type BoardData = {
  unclaimed: UserFormData[];
  firstContact: UserFormData[];
  preparingWorkOffer: UserFormData[];
  sendToTherapists: UserFormData[];
};
