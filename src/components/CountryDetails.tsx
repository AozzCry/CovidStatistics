import { CategoryScale } from "chart.js";
import { Chart } from "chart.js/auto";
import { Line } from "react-chartjs-2";
import { ByCountry } from "../types/ByCountry";
export default function CountryDetails({ details }: { details: ByCountry[] }) {
  Chart.register(CategoryScale);

  const data = {
    labels: details.map((a) => new Date(a.Date).toLocaleDateString("pl-PL")),
    datasets: [
      {
        label: "Covid-19 Confirmed Cases",
        data: details.map((a) => a.Confirmed),
        yAxisID: "A",
        backgroundColor: "rgba(75,192,192,0.4)",
        borderColor: "rgba(75,192,192,1)",
      },
      {
        label: "Covid-19 Deaths",
        data: details.map((a) => a.Deaths),
        yAxisID: "B",
        backgroundColor: "rgba(235,192,192,0.4)",
        borderColor: "rgba(235,192,192,1)",
      },
    ],
    options: {
      scales: {
        yAxes: [
          {
            id: "A",
            position: "right",
            type: "linear",
          },
          {
            id: "B",
            position: "left",
            type: "linear",
          },
        ],
      },
    },
  };
  return <Line data={data} />;
}
