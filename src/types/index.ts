export type colKeys = {
  colKey:
    | "unclaimed"
    | "firstContact"
    | "preparingWorkOffer"
    | "sendToTherapists";
};

export type CardData = colKeys & {
  title: string;
  name: string;
  email: string;
  mobileNumber: string;
  age: string;
};

export type UserFormData = colKeys & {
  name: string;
  title: string;
  age: string;
  email: string;
  mobileNumber: string;
};

export type CardContainerProps = {
  header: string;
  light?: boolean;
  addIcon?: boolean;
  cardsData: CardData[];
};

export type BoardData = {
  unclaimed: UserFormData[];
  firstContact: UserFormData[];
  preparingWorkOffer: UserFormData[];
  sendToTherapists: UserFormData[];
};

export type Option = {
  value: keyof BoardData;
  label: string;
};
