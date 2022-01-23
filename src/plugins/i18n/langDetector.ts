import LanguageDetector from 'i18next-browser-languagedetector';
import type { DetectorOptions } from 'i18next-browser-languagedetector';

const options = {
  order: ['customDetector'],
};

const customLangDetector = {
  name: 'customDetector',

  lookup(options: DetectorOptions): string | string[] | undefined {
    return 'ru';
  },

  cacheUserLanguage(lng: string, options: DetectorOptions): void {
    // options -> are passed in options
    // lng -> current language, will be called after init and on changeLanguage
    // store it
  },
};

const langDetector = new LanguageDetector(null, options);
langDetector.addDetector(customLangDetector);

export { langDetector };
