import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import * as Localization from 'expo-localization';

type TranslationResources = {
  search: string;
  trendingMovies: string;
  latestMovie:string;
  homeBar:string;
  searchBar:string;
  savedBar:string;
  profileBar:string;
  profile:string;
  saved:string;
  changeLanguage:string;
};

declare module 'i18next' {
  interface CustomTypeOptions {
    resources: {
      translation: TranslationResources;
    };
  }
}

const resources = {
  en: {
    translation: require('../locales/en.json') as TranslationResources,
  },
  ru: {
    translation: require('../locales/ru.json') as TranslationResources,
  },
};

i18n.use(initReactI18next).init({
  resources,
  lng: Localization.locale.split('-')[0],
  fallbackLng: 'en',
  interpolation: {
    escapeValue: false,
  },
  compatibilityJSON: 'v4',
});

export default i18n;