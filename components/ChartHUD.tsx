import { MinimalDataset, Work } from "@/lib/types";
import { useEffect, useState } from "react";
import { Chart } from "react-chartjs-2";
import { Chart as ChartJS, registerables } from "chart.js";
import { Alert, Box, CircularProgress, Snackbar } from "@mui/material";

type Props = {
  works?: Work[];
  hitsKudosRatio: MinimalDataset;
  kudos: MinimalDataset;
  hits: MinimalDataset;
  bookmarks: MinimalDataset;
  labels?: string[];
  error?: string;
  loading: boolean
};

export function ChartHUD({
  works,
  hitsKudosRatio,
  kudos,
  hits,
  bookmarks,
  labels,
  error,
  loading
}: Props) {
  const showTutorialText = !works && !loading;
  const [data, setData] = useState({
    labels,
    datasets: [
      {
        type: hitsKudosRatio.type,
        label: hitsKudosRatio.label,
        data: hitsKudosRatio.data,
        backgroundColor: hitsKudosRatio.color,
        borderColor: hitsKudosRatio.color,
        borderWidth: 1,
        hidden: hitsKudosRatio.hidden,
      },
      {
        type: hits.type,
        label: hits.label,
        data: hits.data,
        backgroundColor: hits.color,
        borderColor: hits.color,
        borderWidth: 1,
        hidden: hits.hidden,
      },
      {
        type: kudos.type,
        label: kudos.label,
        data: kudos.data,
        backgroundColor: kudos.color,
        borderColor: kudos.color,
        borderWidth: 1,
        hidden: kudos.hidden,
      },
      {
        type: bookmarks.type,
        label: bookmarks.label,
        data: bookmarks.data,
        backgroundColor: bookmarks.color,
        borderColor: bookmarks.color,
        borderWidth: 1,
        hidden: bookmarks.hidden,
      },
    ],
  });

  useEffect(() => {
    if (works) {
      setData({
        labels,
        datasets: [
          {
            type: hitsKudosRatio.type,
            label: hitsKudosRatio.label,
            data: hitsKudosRatio.data,
            backgroundColor: hitsKudosRatio.color,
            borderColor: hitsKudosRatio.color,
            borderWidth: 1,
            hidden: hitsKudosRatio.hidden,
          },
          {
            type: hits.type,
            label: hits.label,
            data: hits.data,
            backgroundColor: hits.color,
            borderColor: hits.color,
            borderWidth: 1,
            hidden: hits.hidden,
          },
          {
            type: kudos.type,
            label: kudos.label,
            data: kudos.data,
            backgroundColor: kudos.color,
            borderColor: kudos.color,
            borderWidth: 1,
            hidden: kudos.hidden,
          },
          {
            type: bookmarks.type,
            label: bookmarks.label,
            data: bookmarks.data,
            backgroundColor: bookmarks.color,
            borderColor: bookmarks.color,
            borderWidth: 1,
            hidden: bookmarks.hidden,
          },
        ],
      });
    }
  }, [kudos, bookmarks, hits, hitsKudosRatio]);

  ChartJS.register(...registerables);

  return (
    <div className="h-fit p-4 relative">
      {showTutorialText && !loading && (
        <Box className="absolute top-[50%] left-[17%] md:left-[40%]">
          <Alert severity="info">Please search for a user to begin.</Alert>
        </Box>
      )}
      {!showTutorialText && loading && (
        <Box className="absolute top-[50%] left-[50%]">
          <CircularProgress />
        </Box>
      )} 
      <Snackbar
        open={!!error}
        anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
      >
        <Alert severity="error" variant="filled" sx={{ width: "100%" }}>
          User not found! Please try again with another user.
        </Alert>
      </Snackbar>
      <Chart
        data={data}
        type={"bar"}
        options={{
          plugins: {
            legend: {
              onClick: () => {},
            },
          },
        }}
      />
    </div>
  );
}
