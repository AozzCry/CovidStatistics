import { Box, Grid, Typography } from "@mui/material";
import { Numbers } from "../types/Summary";
import DisplayNumber from "./DisplayNumber";

export default function Global({ global }: { global: Numbers }) {
  return (
    <Box sx={{ flexGrow: 1, border: "solid #0028ac", borderRadius: 4, p: 1 }}>
      <Typography variant="h6" sx={{ marginBottom: 1 }}>
        Global statistics:
      </Typography>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6}>
          <DisplayNumber info={"New Confirmed"} number={global.NewConfirmed} />
        </Grid>
        <Grid item xs={12} sm={6}>
          <DisplayNumber
            info={"Total Confirmed"}
            number={global.TotalConfirmed}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <DisplayNumber info={"New Deaths"} number={global.NewDeaths} />
        </Grid>
        <Grid item xs={12} sm={6}>
          <DisplayNumber info={"Total Deaths"} number={global.TotalDeaths} />
        </Grid>
      </Grid>
    </Box>
  );
}
