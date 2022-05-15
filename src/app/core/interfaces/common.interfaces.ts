export interface Name {
  id: number;
  name: string;
  description: string;
  category: string;
  picture: string;
  lastUpdated: string;
  votes: {
    positive: number;
    negative: number;
  };
  wikipedia: string;
}

export enum Theme {
  light,
  dark
}

export enum VoteType {
  up,
  down
}