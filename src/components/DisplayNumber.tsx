import { Box } from "@mui/material";

export default function DisplayNumber({
  info,
  number,
}: {
  info: string;
  number: number;
}) {
  return (
    <Box sx={{ border: "solid #0048cc", borderRadius: 4, p: 1 }}>
      {info} : {Intl.NumberFormat().format(number)}
    </Box>
  );
}
