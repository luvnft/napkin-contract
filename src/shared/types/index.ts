export type User = {
  id: string;
  fullname: string;
};

export type Signee = User & {
  dateSigned: string;
};

export type Contract = {
  id: string;
  signees: Signee[];
  title: string;
  text: string;
  dateCreated: string;
};
