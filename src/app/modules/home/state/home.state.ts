import { Name } from '@src/app/core/interfaces/common.interfaces';

export type HomeState = Readonly<{
  names: Name[];
  lastVotedId: number | null;
}>;
