import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import { langDetector } from '../../src/app/plugins/i18n/lang-detector';

import ru from '../../public/locales/ru/translation.json';
import en from '../../public/locales/en/translation.json';

export const supportLangs = {
  ru: { title: 'Русский', data: ru },
  en: { title: 'English', data: en },
};

export const defaultLang = 'ru';

i18n.use(langDetector).use(initReactI18next).init({
  lng: defaultLang,
  fallbackLng: defaultLang,
  debug: false,
});

Object.entries(supportLangs).forEach(([key, lang]) => {
  i18n.addResourceBundle(key, 'translation', lang.data);
});

export { i18n };
