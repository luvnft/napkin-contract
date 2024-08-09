export type Signee = {
  id: string;
  fullname: string;
  dateSigned: string;
};

export type Contract = {
  id: string;
  signees: Signee[];
  text: string;
  dateCreated: string;
};
