import { createContext } from "react";
import { Entry } from "../../interfaces";

export interface contextProps {
  entries: Entry[];
}

export const EntriesContext = createContext({} as contextProps);
