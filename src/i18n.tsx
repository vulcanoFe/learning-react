import i18next from "i18next";
import { initReactI18next } from "react-i18next";

// files contententi le traduzioni
import it from "./assets/i18n/it.json";

const resources = {
  it: {
    translation: it
  }
}

i18next
.use(initReactI18next)
.init({
  resources,
  lng: "it" //default
});