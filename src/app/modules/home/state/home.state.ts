import { LastVoted, Name, Source } from '@src/app/core/interfaces/common.interfaces';

export type HomeState = Readonly<{
  names: Name[];
  lastVoted: LastVoted
}>;
