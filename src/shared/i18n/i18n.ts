import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import backend from 'i18next-http-backend';

i18n
    .use(initReactI18next)
    .use(backend)
    .init({
        lng: 'en',
        debug: __isDev,
        interpolation: {
            escapeValue: false, // react already safes from xss
        },
        react: {
            useSuspense: true,
        },
        backend: {
            loadPath: './locales/{{lng}}/{{ns}}.json', // * where i store my locales
        },

    });

export default i18n;
