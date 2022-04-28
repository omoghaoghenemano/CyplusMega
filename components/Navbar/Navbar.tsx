import React, { useState, useEffect, useContext } from "react";
import {
  AppBar,
  Typography,
  Link,
  Box,
  ListItemText,
  Button,
  TextField,
  InputAdornment,
  IconButton,
  Menu, MenuItem
} from "@mui/material";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import {
  StyledAppBar,
  StyledButton,
  StyledSearchSubmitButton,
  StyledTextField,
} from "./styles";
import KeyboardArrowDown from "@mui/icons-material/KeyboardArrowDown";
import SearchIcon from "@mui/icons-material/Search";
import PersonIcon from "@mui/icons-material/Person";
import HelpIcon from "@mui/icons-material/Help";
import InfoIcon from "@mui/icons-material/Info";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import MenuRoundedIcon from "@mui/icons-material/MenuRounded";
import LoginModal from "../LoginModal/Loginmodal";
import VerifiedIcon from "@mui/icons-material/Verified";
import StateContext from "../../context/StateContext";
import DispatchContext from "../../context/DispatchContext";
import Clientapi from "../../pages/api/client";
export default function Navbar() {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => {
    setOpen(false);
    setAnchorEl(null);
    setMyaccount(false);
  };
  const [scroll, setScroll] = useState("33px");
  const [myaccount, setMyaccount] = useState(true);
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const displaylist = Boolean(anchorEl);
  const handleProfileClicks = (event: React.MouseEvent<HTMLButtonElement>) => {

     setAnchorEl(event.currentTarget);
    setMyaccount(!myaccount)
 
    

  }
  const handleScroll = () => {
    setScroll("0%");
  };
  const handleScrollclose = () => {
    setScroll("33px");
  };
  useEffect(() => {
    window.onscroll = () =>
      window.pageYOffset === 0 ? handleScrollclose() : handleScroll();
 
  });
  useEffect(() => {
    if (AuthState.isLoggedIn) {
      Clientapi.get("api/user").then((response) => {
        const user = response.data;
        AuthDispatcher({ type: "addUser", payload: user });
        console.log(AuthState.user);
      });
    }
  }, []);
  const { AuthState } = useContext(StateContext);
  const { AuthDispatcher } = useContext(DispatchContext);

  console.log("AuthState", AuthState);

  return (
    <div className="navbar__container">
      <div className="navbar__subitem">
        <StyledButton sx={{ textDecoration: "underline" }}>
          {" "}
          <VerifiedIcon color="primary" /> Post on Wiki{" "}
        </StyledButton>
        <StyledButton> About</StyledButton>
      </div>
      <StyledAppBar
        sx={{ postion: "relative", top: scroll }}
        onScroll={handleScroll}
      >
        <div className="navbar__container">
          <div>
            <IconButton>
              <MenuRoundedIcon />
            </IconButton>
          </div>
          <div>
            {" "}
            <Typography color="black">Weware</Typography>
          </div>
          <div style={{ width: "100%" }} className="navbar__childcontainer">
            <StyledTextField
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <SearchIcon />
                  </InputAdornment>
                ),
              }}
              size="small"
            />
            <StyledSearchSubmitButton variant="contained">
              {" "}
              Search
            </StyledSearchSubmitButton>
            <div style={{ display: "flex", justifyContent: "space-around" }}>
              {AuthState.user ? (
                <StyledButton
                  variant="text"
                  sx={{ textTransform: "none" }}
                  onClick={handleProfileClicks}
                  aria-controls={open ? 'basic-menu' : undefined}
                  aria-haspopup="true"
                  aria-expanded={open ? 'true' : undefined}
           
                  
                >
                  <PersonIcon />
                  Hi {AuthState.user.name} {myaccount? <> <KeyboardArrowDown sx={{transform:'rotate(0deg)'}} />    </> :  <> <KeyboardArrowDown sx={{transform:'rotate(180deg)'}} />    <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={displaylist}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
      >
        <MenuItem onClick={handleClose}>Profile</MenuItem>
        <MenuItem onClick={handleClose}>My account</MenuItem>
        <MenuItem onClick={handleClose}>Logout</MenuItem>
      </Menu></> }
                </StyledButton>
              ) : (
                <StyledButton
                  variant="text"
                  sx={{ textTransform: "none" }}
                  onClick={handleOpen}
                >
                  <LoginModal
                    OpenModalForm={open}
                    CloseModalForm={handleClose}
                  />{" "}
                  <PersonIcon /> Account <KeyboardArrowDown  />
                </StyledButton>
              )}

              <StyledButton variant="text" sx={{ textTransform: "none" }}>
                {" "}
                <HelpIcon />
                Help
                <KeyboardArrowDown />
              </StyledButton>
              <StyledButton variant="text" sx={{ textTransform: "none" }}>
                {" "}
                <FavoriteBorderIcon />
                Favorite
              </StyledButton>
            </div>
          </div>
          <div></div>
        </div>
      </StyledAppBar>
    </div>
  );
}
