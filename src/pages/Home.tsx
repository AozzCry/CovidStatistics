import { Box, Typography } from "@mui/material";
import { useQuery } from "react-query";
import CountryList from "../components/CountryList";
import ErrorInfo from "../components/ErrorInfo";
import Footer from "../components/Footer";
import Global from "../components/Global";
import Loading from "../components/Loading";
import { getSummary } from "../services/api";
import { Summary } from "../types/Summary";

export default function Home() {
  const {
    isLoading,
    error,
    data: summary,
  } = useQuery<Summary>({
    queryKey: ["summary"],
    queryFn: ({ signal }) => getSummary(signal),
    select: (res) => res,
  });

  if (isLoading) return <Loading />;
  if (error) return <ErrorInfo info={"Summary"} />;
  return (
    <>
      <Typography variant="h5" component={Box}>
        Covid-19 statistics
      </Typography>
      {summary && (
        <Box>
          <Typography>
            Last update:{" "}
            {summary.Date &&
              new Date(summary?.Date).toLocaleDateString("pl-PL")}
          </Typography>
          {summary.Global && <Global global={summary.Global} />}
          <CountryList countries={summary.Countries} />
        </Box>
      )}
      <Footer />
    </>
  );
}
