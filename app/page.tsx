"use client";

import React from "react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import axios from "axios";
import { Box, Divider, FormGroup, Toolbar, Typography } from "@mui/material";
import {
  getHits,
  getKudos,
  getTitles,
  getBookmarks,
  drawerWidth,
  getBatchHitsKudosRatio,
} from "@/lib/helpers";
import { MinimalDataset, User, Work } from "@/lib/types";
import { ResponsiveDrawer } from "@/components/Drawer";
import { ChartTools } from "@/components/ChartTools";
import { ChartHUD } from "@/components/ChartHUD";
import TableHUD from "@/components/TableHUD";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

export default function Home() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [searchError, setSearchError] = useState();

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const { register, handleSubmit } = useForm();

  const [user, setUser] = useState<User>({ username: "", bio: "" });
  const [works, setWorks] = useState<Work[]>();
  const [labels, setLabels] = useState<string[]>();
  const [hitsKudosRatio, setHitsKudosRatio] = useState<MinimalDataset>({
    type: "bar" as const,
    label: "Hits-Kudos Ratio",
    data: [],
    color: "rgb(53, 162, 235)",
    hidden: false,
  });
  const [hits, setHits] = useState<MinimalDataset>({
    type: "bar" as const,
    label: "Hits",
    data: [],
    color: "rgb(255, 108, 10)",
    hidden: true,
  });
  const [kudos, setKudos] = useState<MinimalDataset>({
    type: "bar" as const,
    label: "Kudos",
    data: [],
    color: "rgb(75, 192, 192)",
    hidden: true,
  });
  const [bookmarks, setBookmarks] = useState<MinimalDataset>({
    type: "bar" as const,
    label: "Bookmarks",
    data: [],
    color: "rgb(255, 99, 132)",
    hidden: true,
  });

  const getUser = async (e: any) => {
    await axios
      .get(`/api/user/${e.id}`)
      .then(async (res) => {
        setSearchError(undefined);
        const hitsData = await getHits(res.data.works);
        const kudosData = await getKudos(res.data.works);
        const hitsKudosRatioData = await getBatchHitsKudosRatio(
          hitsData,
          kudosData
        );
        setWorks(res.data.works);
        setUser({ username: res.data.username, bio: res.data.bio });
        setLabels(await getTitles(res.data.works));
        setHitsKudosRatio({
          ...hitsKudosRatio,
          data: hitsKudosRatioData,
        });
        setHits({
          ...hits,
          data: hitsData,
        });
        setKudos({
          ...kudos,
          data: kudosData,
        });
        setBookmarks({
          ...bookmarks,
          data: await getBookmarks(res.data.works),
        });
      })
      .catch((e) => {
        setSearchError(e.message);
      });
  };

  return (
    <main className="flex flex-col gap-3">
      <Navbar
        handleDrawerToggle={handleDrawerToggle}
        handleSubmit={handleSubmit(getUser)}
        register={register}
      />
      <Box
        sx={{
          width: { sm: `calc(100% - ${drawerWidth}px)` },
        }}
        className="mt-[64px] pt-5 pb-20"
      >
        <ChartHUD
          works={works}
          hitsKudosRatio={hitsKudosRatio}
          kudos={kudos}
          bookmarks={bookmarks}
          hits={hits}
          labels={labels}
          error={searchError}
        />
        {works && <TableHUD works={works} />}
      </Box>
      <ResponsiveDrawer
        mobileOpen={mobileOpen}
        handleDrawerToggle={handleDrawerToggle}
      >
        <Toolbar />
        <Divider />
        <div className="p-4">
          <Typography variant="overline">Graph Options</Typography>
          <FormGroup>
            <ChartTools
              disabled={!works}
              title="Hits-Kudos Ratio"
              setState={setHitsKudosRatio}
              dataset={hitsKudosRatio}
              info="The widely used 'Golden Ratio' is 1 kudos per 10 hits, or 10%."
            />
            <ChartTools
              disabled={!works}
              title="Hits"
              setState={setHits}
              dataset={hits}
            />
            <ChartTools
              disabled={!works}
              title="Kudos"
              setState={setKudos}
              dataset={kudos}
            />
            <ChartTools
              disabled={!works}
              title="Bookmarks"
              setState={setBookmarks}
              dataset={bookmarks}
            />
          </FormGroup>
        </div>
        <Divider />
        <Footer />
      </ResponsiveDrawer>
    </main>
  );
}
