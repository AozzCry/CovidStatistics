import { Box, Button, Grid } from "@mui/material";
import { useState } from "react";
import { Country } from "../types/Summary";
import CountryInList from "./CountryInList";
import Search from "./Search";
import SortButton from "./SortButton";

function sorter(a: Country, b: Country, whichSort: string): number {
  switch (whichSort) {
    case "alphaAsc":
      return b.Country.localeCompare(a.Country);
    case "totalConDesc":
      return Number(a.TotalConfirmed < b.TotalConfirmed);
    case "totalConAsc":
      return Number(a.TotalConfirmed > b.TotalConfirmed);
    case "totalDeaDesc":
      return Number(a.TotalDeaths < b.TotalDeaths);
    case "totalDeaAsc":
      return Number(a.TotalDeaths > b.TotalDeaths);
    case "newDeaDesc":
      return Number(a.NewDeaths < b.NewDeaths);
    case "newDeaAsc":
      return Number(a.NewDeaths > b.NewDeaths);
    case "newConDesc":
      return Number(a.NewConfirmed < b.NewConfirmed);
    case "newConAsc":
      return Number(a.NewConfirmed > b.NewConfirmed);
    default:
      return a.Country.localeCompare(b.Country);
  }
}
export default function CountryList({ countries }: { countries: [Country] }) {
  const [loadNumber, setLoadNumber] = useState(10);
  const [sortFunc, setSortFunc] = useState("alphaDesc");

  const [search, setSearch] = useState("");

  return (
    <Box sx={{ my: 1 }}>
      <Search {...{ setSearch, setLoadNumber }} />
      <Grid container columnSpacing={0.5}>
        <Grid item xs={4.5} sm={4}>
          <SortButton
            sortFunc={sortFunc}
            setSortFunc={setSortFunc}
            nameDesc="alphaDesc"
            nameAsc="alphaAsc"
            info="Country name"
          />
        </Grid>
        <Grid item xs={4} sm={2}>
          <SortButton
            sortFunc={sortFunc}
            setSortFunc={setSortFunc}
            nameDesc="totalConDesc"
            nameAsc="totalConAsc"
            info="Total confirmed"
          />
        </Grid>
        <Grid item xs={3.5} sm={2}>
          <SortButton
            sortFunc={sortFunc}
            setSortFunc={setSortFunc}
            nameDesc="totalDeaDesc"
            nameAsc="totalDeaAsc"
            info="Total deaths"
          />
        </Grid>
        <Grid item sm={2} display={{ xs: "none", sm: "block" }}>
          <SortButton
            sortFunc={sortFunc}
            setSortFunc={setSortFunc}
            nameDesc="newDeaDesc"
            nameAsc="newDeaAsc"
            info="New deaths"
          />
        </Grid>
        <Grid item sm={2} display={{ xs: "none", sm: "block" }}>
          <SortButton
            sortFunc={sortFunc}
            setSortFunc={setSortFunc}
            nameDesc="newConDesc"
            nameAsc="newConAsc"
            info="New confirmed"
          />
        </Grid>
      </Grid>
      {countries &&
        countries
          .filter(
            (a) =>
              a.Country.toLowerCase().includes(search.toLowerCase().trim()) ||
              a.CountryCode.toLowerCase().includes(search.toLowerCase().trim())
          )
          .sort((a, b) => sorter(a, b, sortFunc))
          .slice(0, loadNumber)
          .map((country: Country, index) => {
            return (
              <CountryInList country={country} key={country.CountryCode} />
            );
          })}
      <Button
        onClick={() => setLoadNumber((prev) => prev + 10)}
        variant="contained"
        fullWidth
        size="small"
        sx={{ bgcolor: "#141caf" }}
      >
        Load next 10
      </Button>
    </Box>
  );
}
