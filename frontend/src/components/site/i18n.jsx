import React, { createContext, useContext, useState, useEffect } from "react";
import * as en from "./content";
import * as fr from "./content.fr";

const LangContext = createContext({ lang: "en", setLang: () => {}, t: en });

export const LangProvider = ({ children }) => {
  const [lang, setLang] = useState(() => {
    try {
      return localStorage.getItem("orion-lang") || "en";
    } catch {
      return "en";
    }
  });

  useEffect(() => {
    try {
      localStorage.setItem("orion-lang", lang);
    } catch {
      // ignore
    }
    document.documentElement.lang = lang;
  }, [lang]);

  return <LangContext.Provider value={{ lang, setLang, t: lang === "fr" ? fr : en }}>{children}</LangContext.Provider>;
};

export const useLang = () => useContext(LangContext);
export const useContent = () => useContext(LangContext).t;
