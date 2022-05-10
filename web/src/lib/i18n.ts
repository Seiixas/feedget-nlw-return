import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

// don't want to use this?
// have a look at the Quick start guide 
// for passing in lng and translations on init

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    
    // the translations
    // (tip move them in a JSON file and import them,
    // or even better, manage them via a UI: https://react.i18next.com/guides/multiple-translation-files#manage-your-translations-with-a-management-gui)
    resources: {
      en: {
        translation: {
          "Feedback": "Leave your feedback",
          "SendFeedback": "Submit feedback",
          "Details": "Tell us in detail what happened",
          "SendAnother": "Send another",
          "TrySendAnother": "Try again",
          "Footer": "Made with ❤️ by",
          "BUG": "Bug",
          "IDEA": "Idea",
          "OTHER": "Other",
          "Language": "Language",
          "Color": "Colors",
          "DarkMode": "Dark Mode"
        }
      },
      ptBR: {
        translation: {
          "Feedback": "Deixe seu feedback",
          "SendFeedback": "Enviar feedback",
          "Details": "Conte com detalhes o que está acontecendo",
          "SendAnother": "Quero enviar outro",
          "TrySendAnother": "Quero tentar novamente",
          "Footer": "Feito com ❤️ pela",
          "BUG": "Problema",
          "IDEA": "Ideia",
          "OTHER": "Outro",
          "Language": "Idioma",
          "Color": "Cores",
          "DarkMode": "Modo Escuro"
        }
      },
      es: {
        translation: {
          "Feedback": "Deja tus comentarios",
          "SendFeedback": "Enviar comentarios",
          "Details": "Cuéntanos en detalle lo que está pasando",
          "SendAnother": "Quiero enviar otro",
          "TrySendAnother": "Quiero intentarlo de nuevo",
          "Footer": "Hecho con ❤️ por",
          "BUG": "Problema",
          "IDEA": "Idea",
          "OTHER": "Otro",
          "Language": "Idioma",
          "Color": "Colores",
          "DarkMode": "Modo Oscuro"
        }
      }
    },
    lng: "pt", // if you're using a language detector, do not define the lng option
    fallbackLng: "en",

    interpolation: {
      escapeValue: false // react already safes from xss => https://www.i18next.com/translation-function/interpolation#unescape
    }
  });

export default i18n;