import { Language, Theme } from '../interfaces/common.interfaces';

export type CommonState = Readonly<{
    theme: Theme;
    language: Language;
}>;
