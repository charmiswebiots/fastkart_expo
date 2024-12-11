import i18next from "i18next";
import { initReactI18next } from "react-i18next";
import en from './en.json';
import hi from './hi.json';

i18next.use(initReactI18next).init({
    compatibilityJSON: "v3",
    lng: 'en',
    resources: {
        en: en,
        hi: hi,
    },
});

export default i18next;