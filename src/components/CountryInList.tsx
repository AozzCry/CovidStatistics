import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Button,
  Grid,
  TextField,
  Typography,
} from "@mui/material";
import { useState } from "react";
import { useQuery } from "react-query";
import { getByCountryAllStatus } from "../services/api";
import { ByCountry } from "../types/ByCountry";
import { Country } from "../types/Summary";
import CountryDetails from "./CountryDetails";
import Loading from "./Loading";

export default function CountryInList({ country }: { country: Country }) {
  const [dateFrom, setDateFrom] = useState<string>("");
  const [dateTo, setDateTo] = useState<string>("");

  const {
    isLoading,
    error,
    data: details,
    refetch,
  } = useQuery<ByCountry[]>({
    queryKey: ["country/" + country.Slug],
    queryFn: ({ signal }) =>
      getByCountryAllStatus(signal, country.Slug, dateFrom, dateTo),
    select: (res) => res,
    enabled: false,
  });

  return (
    <Box>
      <Accordion
        TransitionProps={{ unmountOnExit: true }}
        sx={{
          bgcolor: "#222222",
          mb: 0.5,
          borderRadius: 4,
          borderBottom: "solid 1px #600000",
          color: "rgba(255, 255, 255, 0.87)",
        }}
      >
        <AccordionSummary
          sx={{
            p: 0,
            "&:hover": {
              bgcolor: "#424242",
            },
          }}
        >
          <Grid container columnSpacing={0.5}>
            <Grid item xs={4.5} sm={4} sx={{ borderRight: "solid 2px" }}>
              {country.Country}
            </Grid>
            <Grid item xs={4} sm={2} sx={{ borderRight: "solid 2px" }}>
              {Intl.NumberFormat().format(country.TotalConfirmed)}
            </Grid>
            <Grid item xs={3.5} sm={2} sx={{ borderRight: "solid 2px" }}>
              {Intl.NumberFormat().format(country.TotalDeaths)}
            </Grid>
            <Grid
              item
              sm={2}
              sx={{ borderRight: "solid 2px" }}
              display={{ xs: "none", sm: "block" }}
            >
              {Intl.NumberFormat().format(country.NewDeaths)}
            </Grid>
            <Grid item sm={2} display={{ xs: "none", sm: "block" }}>
              {Intl.NumberFormat().format(country.NewConfirmed)}
            </Grid>
          </Grid>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Updated at {new Date(country.Date).toLocaleDateString("pl-PL")}
          </Typography>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              refetch();
            }}
          >
            <TextField
              variant="outlined"
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
                shrink: true,
                style: { color: "rgba(255, 255, 255, 0.87)" },
              }}
              type="date"
              onChange={(e) => setDateFrom(e.currentTarget.value)}
              label="From"
              required
            />
            <TextField
              variant="outlined"
              sx={{
                m: 1,
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
                shrink: true,
                style: { color: "rgba(255, 255, 255, 0.87)" },
              }}
              type="date"
              label="To"
              onChange={(e) => setDateTo(e.currentTarget.value)}
              required
            />
            <Button
              type="submit"
              sx={{ mt: 2.5, bgcolor: "#646cff" }}
              variant="contained"
            >
              Chart
            </Button>
          </form>
          {isLoading ? (
            <Loading />
          ) : error ? (
            <></>
          ) : (
            details && <CountryDetails {...{ details }} />
          )}
        </AccordionDetails>
      </Accordion>
    </Box>
  );
}
