
import { setDefaultTranslations } from 'react-multi-lang';
import { en } from './locales/en';
import { vi } from './locales/vi';
setDefaultTranslations({ en, vi });

export const sleep = (sec) => {
    return new Promise((resolve) => setTimeout(resolve, sec * 1000));
};
