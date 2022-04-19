import React from "react";
import {
  AppBar,
  Toolbar,
  CssBaseline,
  Typography,
  makeStyles,
  useTheme,
  useMediaQuery,
} from "@material-ui/core";
import { Link } from "react-router-dom";
// import DrawerComponent from "./Drawer";
import IconButton from '@mui/material/IconButton';
import "./home.css";


function Home() {
  // const classes = useStyles();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <AppBar position="static">
      <CssBaseline />
      <Toolbar className="topp">
        <Typography variant="h4" className="logo" >
          Trench Of Blob
          
        </Typography>
          <div className="navlinks">
            <ul>
              <li className="link">Home</li>
              <li className="link">About </li>
              <li className="link">Team</li>
              <li className="link">Roadmap</li>
            </ul>
          </div>

        )
      </Toolbar>
    </AppBar>
  );
}
export default Home;