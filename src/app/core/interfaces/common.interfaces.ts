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
  light = 'light',
  dark = 'dark'
}

export enum VoteType {
  up,
  down
}

export enum Source {
  header,
  list
}

export enum Display {
  list = 'List',
  grid = 'Grid'
}

export enum Language {
  es = 'es',
  en = 'en'
}
