import { createContext, useContext, useState } from "react";

import pt from "../locales/pt/translation.json";
import en from "../locales/en/translation.json";
import it from "../locales/it/translation.json";

export const LanguageContext = createContext();

export function LanguageProvider({ children }) {
  const [language, setLanguage] = useState("pt");

  const translations = { pt, en, it };

  const changeLanguage = (newLanguage) => {
    setLanguage(newLanguage);
  };

  return (
    <LanguageContext.Provider
      value={{ language, changeLanguage, translations }}
    >
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  return useContext(LanguageContext);
}
