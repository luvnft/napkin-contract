export type User = {
  id: string;
  fullname: 
}

export type Signee = User & {
  dateSigned: string;
};

export type Contract = {
  id: string;
  signees: Signee[];
  text: string;
  dateCreated: string;
};
