import { List, Paper } from "@mui/material";
import React, { FC, useMemo } from "react";
import { EntryStatus } from "../../interfaces";
import { useContext } from "react";
import { EntriesContext } from "../../context/entries";
import { EntryCard } from ".";

interface Props {
  status: EntryStatus;
}

export const EntryList: FC<Props> = ({ status }) => {
  const { entries } = useContext(EntriesContext);
  console.log(entries);

  const entriesBystatus = useMemo(
    () => entries.filter((entry) => entry.status === status),
    [entries]
  );

  return (
    //Aquí haremos drop
    <div>
      <Paper
        sx={{
          height: "calc(100vh - 200px)",
          overflow: "scroll",
          backgroundColor: "transparent",
        }}
      >
        <List sx={{ opacity: 1 }}>
          {entriesBystatus.map((entry) => (
            <EntryCard key={entry._id} entry={entry} />
          ))}
        </List>
      </Paper>
    </div>
  );
};
