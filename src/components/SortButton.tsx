import { Button } from "@mui/material";
import { Dispatch, SetStateAction } from "react";

export default function SortButton({
  sortFunc,
  setSortFunc,
  nameDesc,
  nameAsc,
  info,
}: {
  sortFunc: string;
  setSortFunc: Dispatch<SetStateAction<string>>;
  nameDesc: string;
  nameAsc: string;
  info: string;
}) {
  return (
    <Button
      onClick={() => setSortFunc(sortFunc === nameDesc ? nameAsc : nameDesc)}
      sx={{
        px: 0,
        minHeight: 67,
        p: 1,
        color: "#7777ff",
        bgcolor:
          sortFunc === nameDesc || sortFunc === nameAsc ? "#262d3f" : "1a1a1a",
      }}
      fullWidth
      endIcon={
        sortFunc === nameDesc || sortFunc === nameAsc ? (
          sortFunc === nameDesc ? (
            <h1>↓</h1>
          ) : (
            <h1>↑</h1>
          )
        ) : (
          <></>
        )
      }
      variant="outlined"
    >
      {info}
    </Button>
  );
}
