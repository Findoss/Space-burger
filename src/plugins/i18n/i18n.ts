import i18n from 'i18next';
import Backend from 'i18next-http-backend';
import { initReactI18next } from 'react-i18next';
import { langDetector } from './langDetector';

i18n
  .use(Backend)
  .use(langDetector)
  .use(initReactI18next)
  .init({
    load: 'languageOnly',
    preload: ['ru'],
    fallbackLng: 'ru',
    debug: false,
    interpolation: {
      escapeValue: false,
    },
    react: {
      useSuspense: true,
    },
  });

export default i18n;
