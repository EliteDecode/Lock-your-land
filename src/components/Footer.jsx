import React from "react";
import {
  Box,
  Container,
  Grid,
  Typography,
  List,
  ListItem,
} from "@mui/material";
import logo from "../assets/logo.png";
import Stanbic from "../assets/stanbic.png";
const Footer = () => {
  return (
    <Box component="div" className="border py-10 sm:py-10">
      <Container>
        <Grid container>
          <Grid xs={12} sm={6} md={3} className="mb-5">
            <Box component="div" className="">
              <img src={logo} alt="logo" />
            </Box>
            <Typography
              variant="subtitle2"
              className=" sm:w-3/4 w-100"
              style={{
                lineHeight: "1.3rem",
                marginTop: "5.5%",
                fontSize: "12px",
                fontWeight: "600",
                opacity: "90%",
              }}
            >
              We ensure that all your transactions are smooth when you're
              looking to buy, sell or hold unto your realestates properties.
            </Typography>
            <Box
              component="div"
              className="w-60 border border-blue-800 my-4 rounded-xl flex"
            >
              <Box component="div" className="p-2 rounded-xl bg-blue-800">
                <Typography
                  variant="body2"
                  className="text-white"
                  sx={{ fontSize: "8px" }}
                >
                  Powered And <br />
                  Secured By
                </Typography>
              </Box>
              <Box
                component="div"
                className="w-2/3 flex items-center justify-center"
              >
                <img src={Stanbic} alt="Stanbic Ibtc image" width="80%" />
              </Box>
            </Box>
          </Grid>
          <Grid xs={12} sm={6} md={3} className="mb-5">
            <Box component="div">
              <Typography
                variant="h6"
                sx={{ fontWeight: "bold", fontSize: "14px" }}
              >
                Terms and Conditions
              </Typography>
              <List sx={{ padding: 0, margin: 0 }}>
                <ListItem sx={{ padding: 0, fontSize: "13px" }}>
                  Privacy Term
                </ListItem>
                <ListItem sx={{ padding: 0, fontSize: "13px" }}>
                  End user previledges
                </ListItem>
              </List>
            </Box>
          </Grid>
          <Grid xs={12} sm={6} md={3} className="mb-5">
            <Box component="div">
              <Typography
                variant="h6"
                sx={{ fontWeight: "bold", fontSize: "14px" }}
              >
                Property Type
              </Typography>
              <List sx={{ padding: 0, margin: 0 }}>
                <ListItem sx={{ padding: 0, fontSize: "13px" }}>
                  Shared Homes
                </ListItem>
                <ListItem sx={{ padding: 0, fontSize: "13px" }}>
                  Entire Homes
                </ListItem>
                <ListItem sx={{ padding: 0, fontSize: "13px" }}>
                  Offices
                </ListItem>
              </List>
            </Box>
          </Grid>
          <Grid xs={12} sm={6} md={3} className="mb-5">
            <Box component="div">
              <Typography
                variant="h6"
                sx={{ fontWeight: "bold", fontSize: "14px" }}
              >
                Contact Info
              </Typography>
              <List sx={{ padding: 0, margin: 0 }}>
                <ListItem sx={{ padding: 0, fontSize: "13px" }}>
                  135, Ekehuan Road Benin city
                </ListItem>
                <ListItem sx={{ padding: 0, fontSize: "13px" }}>
                  080362773000
                </ListItem>
              </List>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Footer;
