import { makeStyles, withStyles } from "@mui/styles";
import {
  Paper,
  Button,
  Typography,
  Avatar,
  AppBar,
  TextField,
} from "@mui/material";
import {
  styled,
  createTheme,
  ThemeProvider,
  experimental_sx as sx,
} from "@mui/system";

export const StyledButton = styled(Button)(
  sx({
    width: "50%",
    color: "white",
    fontFamily: "serif",
    textTransform: "none",
    marginLeft: "10px",
    background: "#F68B1E",
    "&:hover": {
      background: "#FFA500",
    },
  })
);
