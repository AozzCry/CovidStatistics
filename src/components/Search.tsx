import { TextField } from "@mui/material";

export default function Search({
  setSearch,
  setLoadNumber,
}: {
  setSearch: React.Dispatch<React.SetStateAction<string>>;
  setLoadNumber: React.Dispatch<React.SetStateAction<number>>;
}) {
  return (
    <TextField
      label="Search..."
      variant="outlined"
      fullWidth
      sx={{
        my: 1,
        input: { color: "rgba(255, 255, 255, 0.87)" },
        "& .MuiOutlinedInput-root.Mui-focused": {
          "& > fieldset": { borderColor: "orange" },
        },
        "& .MuiOutlinedInput-root": {
          "& > fieldset": { borderColor: "#646cff" },
        },
        "& .MuiOutlinedInput-root:hover": {
          "& > fieldset": {
            borderColor: "#FFD580",
          },
        },
      }}
      InputLabelProps={{
        style: { color: "rgba(255, 255, 255, 0.87)" },
      }}
      onChange={(e) => {
        setSearch(e.currentTarget.value);
        setLoadNumber(10);
      }}
    />
  );
}
