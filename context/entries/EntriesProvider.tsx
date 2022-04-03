import { FC, useReducer } from "react";
import { v4 as uuidv4 } from "uuid";
import { Entry } from "../../interfaces";
import { EntriesContext, entriesReducer } from "./";

export interface EntriesState {
  entries: Entry[];
}

const Entries_INITIAL_STATE: EntriesState = {
  entries: [
    {
      _id: uuidv4(),
      description:
        "In-progress: lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dol DOM. Lorem ipsum dolor sit amet, consectet  tempor adipiscing elit sed do eiusmod tempor incididunt ut labore et dol DOM. Lorem ipsum dolor sit",
      status: "in progress",
      createdAt: Date.now() - 10000000,
    },
    {
      _id: uuidv4(),
      description:
        "Pending: lorem ipsum dolor sit amet, kamsclkmlkcamcmc kac s c{sd casdlkc slc z ,lamSDNANKasx{LMDwdjiojdmkmdieiipqowipoiekkdmalXMSA XK aconsectetur adipiscl DOM. Lorem ipsum dolor sit",
      status: "pending",
      createdAt: Date.now(),
    },
    {
      _id: uuidv4(),
      description:
        "Finished: sit amet, consectet  tempor adipiscing elit sed do eiusmod tempor incididunt ut labore et dol DOM. Lorem ipsum dolor sit",
      status: "finished",
      createdAt: Date.now(),
    },
  ],
};

export const EntriesProvider: FC = ({ children }) => {
  const [state, dispatch] = useReducer(entriesReducer, Entries_INITIAL_STATE);

  return (
    <EntriesContext.Provider value={{ ...state }}>
      {children}
    </EntriesContext.Provider>
  );
};
