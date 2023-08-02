import { drawerWidth } from "@/lib/helpers";
import { Box, Divider, IconButton, Typography } from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";
import TwitterIcon from "@mui/icons-material/Twitter";
import Image from "next/image";

export function Footer() {
  return (
    <Box
      sx={{
        marginTop: "calc(10% + 60px)",
        width: drawerWidth,
        position: "fixed",
        bottom: 0,
      }}
      component="footer"
    >
      <Divider />
      <div className="flex flex-col items-center justify-center gap-2 py-6 text-center">
        <div className="flex flex-col">
          <Typography variant="caption" color="initial">
            Made & maintained by{" "}
            <a href="https://www.twitter.com/youraquari" target="_blank">
              Aquari
            </a>{" "}
            💖
          </Typography>
          <Typography variant="caption" color="initial">
            Not affiliated with Archive Of Our Own.
          </Typography>
          <Typography variant="caption" color="initial">
            Please feel free to{" "}
            <a
              href="https://github.com/youraquari/stats-of-our-own"
              target="_blank"
            >
              contribute
            </a>
            !
          </Typography>
        </div>

        <div className="flex flex-row">
          <IconButton
            href="https://github.com/youraquari/stats-of-our-own"
            target="_blank"
            color="primary"
            aria-label="GitHub"
            size="large"
          >
            <GitHubIcon sx={{ fontSize: 32 }} />
          </IconButton>
          <IconButton
            href="https://ko-fi.com/aquari"
            target="_blank"
            color="primary"
            aria-label="Kofi"
          >
            <Image src="/kofi_logo.png" alt={"Kofi"} width={32} height={32} />
          </IconButton>
          <IconButton
            href="https://twitter.com/youraquari"
            target="_blank"
            color="primary"
            aria-label="Twitter"
            size="large"
          >
            <TwitterIcon sx={{ fontSize: 32 }} />
          </IconButton>
        </div>
      </div>
    </Box>
  );
}
