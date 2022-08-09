import { Theme } from "@mui/material";

export const appBarStyle = (theme: Theme) => ({
  display: "flex",
  flexDirecrion: "row",
  position: "static",
  zIndex: "auto",
  height: "4.5rem",
  padding: theme.spacing(0, 3),
  [theme.breakpoints.up("sm")]: {
    padding: theme.spacing(0, 6),
  },
});

export const toolBarStyle = {
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  height: "100%",
};

export const iconStyle = {
  width: "1.25rem",
  height: "1.25rem",
};

export const buttonStyle = {
  width: "3rem",
  height: "3rem",
};
