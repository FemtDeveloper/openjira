import { createContext } from "react";

export interface contextProps {
  sidemenuOpen: boolean;
  openSideMenu: () => void;
  closeSideMenu: () => void;
}

export const UIContext = createContext({} as contextProps);
