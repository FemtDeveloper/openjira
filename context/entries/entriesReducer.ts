import { EntriesState } from ".";
import { Entry } from "../../interfaces/entry";

type EntriesActionType = { type: "Add-Entry"; payload: Entry };

export const entriesReducer = (
  state: EntriesState,
  action: EntriesActionType
): EntriesState => {
  switch (action.type) {
    case "Add-Entry":
      return { ...state, entries: [...state.entries, action.payload] };
    default:
      return state;
  }
};
