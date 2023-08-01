import { drawerWidth } from "@/lib/helpers";
import { Box, Container, IconButton, Paper, Typography } from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";
import TwitterIcon from "@mui/icons-material/Twitter";
import Image from "next/image";

export function Footer() {
  return (
    <Paper
      sx={{
        marginTop: "calc(10% + 60px)",
        width: { sm: `calc(100% - ${drawerWidth}px)` },
        position: "fixed",
        bottom: 0,
      }}
      component="footer"
      square
      variant="outlined"
    >
      <Container maxWidth="lg">
        <Box
          sx={{
            flexGrow: 1,
            justifyContent: "space-between",
            alignItems: "center",
            display: "flex",
            my: 2,
            px: 2,
          }}
        >
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
              Please feel free to contribute!
            </Typography>
          </div>

          <div className="flex flex-row">
            <IconButton
              href="/"
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
        </Box>
      </Container>
    </Paper>
  );
}
