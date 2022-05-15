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

export interface LastVoted {
  id: number | null;
  source: Source;
}

export enum Theme {
  light,
  dark
}

export enum VoteType {
  up,
  down
}

export enum Source {
  header,
  list
}
