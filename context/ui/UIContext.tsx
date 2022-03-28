import { createContext } from "react";

export interface contextProps {
  sideMenuOpen: boolean;
}

export const UIContext = createContext({} as contextProps);
