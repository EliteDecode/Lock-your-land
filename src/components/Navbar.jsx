import React, { useState } from "react";
import AppBar from "@mui/material/AppBar";
import {
  Box,
  Toolbar,
  Typography,
  Button,
  Stack,
  Container,
  CssBaseline,
  List,
  ListItem,
  Avatar,
  Menu,
  MenuItem,
  ListItemIcon,
  Divider,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import IconButton from "@mui/material/IconButton";
import { Link } from "react-router-dom";
import PersonAdd from "@mui/icons-material/PersonAdd";
import Settings from "@mui/icons-material/Settings";
import Logout from "@mui/icons-material/Logout";

export default function Navbar() {
  const [anchorEl, setAnchorEl] = useState(false);
  const open = anchorEl;
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <>
      <CssBaseline />

      <Box
        sx={{
          flexGrow: 1,
          padding: 0,
          position: "sticky",
          top: 0,
          zIndex: "10",
        }}
        className="border border-gray-100 bg-white"
      >
        <AppBar
          position="sticky"
          style={{ background: "#ffffff", margin: 0, padding: 0 }}
          elevation={0}
        >
          <Container>
            <Toolbar style={{ margin: 0, padding: 0 }}>
              <Typography variant="h5" component="div" sx={{ flexGrow: 1 }}>
                <Link to="/">
                  <span className="text-green-600 font-bold sm:text-2xl text-md">
                    Lock.
                  </span>
                  <span className="font-bold text-neutral-900 sm:text-2xl text-md">
                    your
                  </span>
                  <span className="text-blue-800 font-bold sm:text-2xl text-md">
                    .land
                  </span>
                </Link>
              </Typography>

              {/* For desktop view Ls */}
              <Box className="flex flex-row items-center sm:flex hidden">
                <List className="flex">
                  <ListItem className="text-neutral-900 font-bold">
                    <Link to="/">Home</Link>
                  </ListItem>
                  <ListItem className="text-neutral-900 font-bold ">
                    Listing
                  </ListItem>
                </List>
                <Stack spacing={2} direction="row">
                  <Button
                    variant="contained"
                    sx={{
                      bgcolor: "#1e40af",
                      textTransform: "none",
                      fontWeight: "bold",
                    }}
                    className="bg-blue-500"
                    size="small"
                  >
                    <Link to="/register">Sign Up</Link>
                  </Button>

                  <Link to="/login">
                    <Button
                      variant="contained"
                      size="small"
                      sx={{
                        bgcolor: "#4ade80",
                        color: "#000",
                        textTransform: "none",
                        fontWeight: "bold",
                      }}
                    >
                      Login
                    </Button>
                  </Link>
                </Stack>
              </Box>

              {/* mobile view */}
              <Box className="sm:hidden block">
                <IconButton
                  edge="start"
                  color="inherit"
                  aria-label="menu"
                  aria-controls={open ? "account-menu" : undefined}
                  aria-haspopup="true"
                  aria-expanded={open ? "true" : undefined}
                  onClick={handleClick}
                  sx={{
                    bgcolor: "#000",
                    borderRadius: "15%",
                    padding: "4px 5px",
                  }}
                >
                  <MenuIcon />
                </IconButton>
              </Box>
              <Menu
                anchorEl={anchorEl}
                id="account-menu"
                open={open}
                onClose={handleClose}
                onClick={handleClose}
                PaperProps={{
                  elevation: 0,
                  sx: {
                    overflow: "visible",
                    filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
                    mt: 1.5,
                    "& .MuiAvatar-root": {
                      width: 32,
                      height: 32,
                      ml: -0.5,
                      mr: 1,
                    },
                    "&:before": {
                      content: '""',
                      display: "block",
                      position: "absolute",
                      top: 0,
                      right: 14,
                      width: 10,
                      height: 10,
                      bgcolor: "background.paper",
                      transform: "translateY(-50%) rotate(45deg)",
                      zIndex: 0,
                    },
                  },
                }}
                transformOrigin={{ horizontal: "right", vertical: "top" }}
                anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
              >
                <MenuItem>
                  {" "}
                  <Avatar />
                  Home
                </MenuItem>
                <MenuItem>
                  <Avatar />
                  Listings
                </MenuItem>
                <Divider />
                <MenuItem>
                  <ListItemIcon>
                    <PersonAdd fontSize="small" />
                  </ListItemIcon>
                  Add Listing
                </MenuItem>
                <MenuItem>
                  <ListItemIcon>
                    <Settings fontSize="small" />
                  </ListItemIcon>
                  Settings
                </MenuItem>
                <MenuItem>
                  <ListItemIcon>
                    <Logout fontSize="small" />
                  </ListItemIcon>
                  <Link to="/login">Login</Link>
                </MenuItem>
                <MenuItem>
                  <ListItemIcon>
                    <Logout fontSize="small" />
                  </ListItemIcon>
                  <Link to="/register">Sign Up</Link>
                </MenuItem>
              </Menu>
            </Toolbar>
          </Container>
        </AppBar>
      </Box>
    </>
  );
}
