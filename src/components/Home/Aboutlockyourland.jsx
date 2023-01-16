import React from "react";
import { Box, Container, Grid, Typography } from "@mui/material";
import lock from "../../assets/padlock.png";
import arrow from "../../assets/arrow-right.png";
import arrow2 from "../../assets/right-arrow.png";
import lockImage from "../../assets/locks.png";
import escrow from "../../assets/insurance.png";
import verification from "../../assets/verification.png";
import survey from "../../assets/eye-scan.png";
import landMonitoringImg from "../../assets/seed.png";

const Aboutlockyourland = () => {
  return (
    <Box component="div" className=" mt-5 sm:p-12 p-2 aboutlockbg">
      <Container>
        {/* first section */}
        <Box>
          <Grid container spacing={4}>
            <Grid item xs={12} sm={12} md={6}>
              <Box className="rounded-lg p-4 sm:p-7 bg-white shadow-lg">
                <Box className="flex space-x-2 items-center">
                  <Typography
                    variant="subtitle1"
                    sx={{ fontWeight: "600", fontSize: "14px" }}
                  >
                    Seller Spot
                  </Typography>
                  <img src={lock} alt="padlock" width="11px" />
                </Box>
                <Box variant="div">
                  <Typography
                    variant="h3"
                    sx={{
                      fontWeight: "bolder",
                      fontSize: "28px",
                      margin: "3% 0%",
                    }}
                  >
                    Sell your Land <br /> Fast and Easy
                  </Typography>
                  <Typography
                    variant="subtitle2"
                    className=" sm:w-5/6 w-100"
                    style={{
                      lineHeight: "1.3rem",
                      marginTop: ".5%",
                      fontSize: "12px",
                      fontWeight: "600",
                      opacity: "90%",
                    }}
                  >
                    With Escrow, buyer feel secured buying a piece of your land
                    or property, through a secure payment engine that help both
                    sellers and buyers
                  </Typography>
                </Box>
                <Box className="flex space-x-2 sm:mt-10 mt-5 items-center">
                  <Typography
                    variant="subtitle1"
                    sx={{ fontWeight: "600", fontSize: "14px" }}
                  >
                    Get Started
                  </Typography>
                  <img src={arrow} alt="padlock" width="24px" />
                </Box>
              </Box>
            </Grid>
            <Grid item xs={12} sm={12} md={6}>
              <Box className="rounded-lg p-4 sm:p-7 bg-white shadow-lg">
                <Box className="flex space-x-2 items-center">
                  <Typography
                    variant="subtitle1"
                    sx={{ fontWeight: "600", fontSize: "14px" }}
                  >
                    Buyer Spot
                  </Typography>
                  <img src={lock} alt="padlock" width="11px" />
                </Box>
                <Box variant="div">
                  <Typography
                    variant="h3"
                    sx={{
                      fontWeight: "bolder",
                      fontSize: "28px",
                      margin: "3% 0%",
                    }}
                  >
                    Buy a Secure Land <br /> with all Locks
                  </Typography>
                  <Typography
                    variant="subtitle2"
                    className=" sm:w-5/6 w-100"
                    style={{
                      lineHeight: "1.3rem",
                      marginTop: ".5%",
                      fontSize: "12px",
                      fontWeight: "600",
                      opacity: "90%",
                    }}
                  >
                    Nothing as sweet as getting your dream properties with the
                    best property through a secure payment engine that help
                    buyers
                  </Typography>
                </Box>
                <Box className="flex space-x-2 sm:mt-10 mt-5 items-center">
                  <Typography
                    variant="subtitle1"
                    sx={{ fontWeight: "600", fontSize: "14px" }}
                  >
                    Get Started
                  </Typography>
                  <img src={arrow} alt="padlock" width="24px" />
                </Box>
              </Box>
            </Grid>
          </Grid>
        </Box>

        {/* second section */}
        <Box component="div" sx={{ marginTop: "7%" }}>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={12} md={6}>
              <Box component="div">
                <h1 className="sm:text-6xl text-2xl sm:mt-8 mt-3 font-bold ">
                  About <br /> LockyourLand
                </h1>
                <Typography
                  variant="subtitle2"
                  className=" sm:w-4/5 w-100"
                  style={{
                    lineHeight: "1.3rem",
                    marginTop: "3%",
                    fontSize: "14px",
                  }}
                >
                  Lock your land is a web security engine that helps both buyers
                  and sellers to have a hassle free transactions with
                  international recongnized system ESCROW.{" "}
                  <a href="https://www.google.com" className="text-blue-700">
                    Read more
                  </a>
                </Typography>
              </Box>
              <Box className="flex space-x-2 sm:mt-24 mt-5 items-center">
                <Typography
                  variant="subtitle1"
                  sx={{ fontWeight: "600", fontSize: "14px" }}
                >
                  Get Started
                </Typography>
                <img src={arrow2} alt="padlock" width="24px" />
              </Box>
            </Grid>
            <Grid item xs={12} sm={12} md={6}>
              <Box className=" flex items-center justify-center">
                <img
                  src={lockImage}
                  alt="Secure lang image"
                  className="styled-img"
                />
              </Box>
            </Grid>
          </Grid>
        </Box>

        {/* Third section */}
        <Box
          component="div"
          className="mt-5 sm:mt-28 bg-white p-5 sm:p-10  rounded-xl"
        >
          <Grid container>
            <Grid item xs={12} sm={6} md={3}>
              <Box className="p-4 sm:p-5  styled-border">
                <Box component="div">
                  <img src={escrow} alt="Escrow" width="45px" />
                </Box>
                <Box variant="div">
                  <Typography
                    variant="h2"
                    sx={{
                      fontWeight: "bolder",
                      fontSize: "15px",
                      margin: "10% 0% 10% 0%",
                    }}
                  >
                    Escrow
                  </Typography>
                  <Typography
                    variant="subtitle"
                    className="  w-100"
                    style={{
                      lineHeight: "1.3rem",
                      marginTop: ".5%",
                      fontSize: "12px",
                      opacity: "90%",
                    }}
                  >
                    With Escrow, buyer feel secured buying a piece of your land
                    or property, through a secure payment engine that help both
                    sellers and buyers
                  </Typography>
                </Box>
              </Box>
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
              <Box className=" p-4 sm:p-5 styled-border">
                <Box component="div">
                  <img src={verification} alt="Escrow" width="45px" />
                </Box>
                <Box variant="div">
                  <Typography
                    variant="h2"
                    sx={{
                      fontWeight: "bolder",
                      fontSize: "15px",
                      margin: "10% 0% 10% 0%",
                    }}
                  >
                    Doc Verification
                  </Typography>
                  <Typography
                    variant="subtitle"
                    className="  w-100"
                    style={{
                      lineHeight: "1.3rem",
                      marginTop: ".5%",
                      fontSize: "12px",
                      opacity: "90%",
                    }}
                  >
                    With Escrow, buyer feel secured buying a piece of your land
                    or property, through a secure payment engine that help both
                    sellers and buyers
                  </Typography>
                </Box>
              </Box>
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
              <Box className=" p-4 sm:p-5 styled-border">
                <Box component="div">
                  <img src={survey} alt="Escrow" width="45px" />
                </Box>
                <Box variant="div">
                  <Typography
                    variant="h2"
                    sx={{
                      fontWeight: "bolder",
                      fontSize: "15px",
                      margin: "10% 0% 10% 0%",
                    }}
                  >
                    Survey
                  </Typography>
                  <Typography
                    variant="subtitle"
                    className="  w-100"
                    style={{
                      lineHeight: "1.3rem",
                      marginTop: ".5%",
                      fontSize: "12px",
                      opacity: "90%",
                    }}
                  >
                    With Escrow, buyer feel secured buying a piece of your land
                    or property, through a secure payment engine that help both
                    sellers and buyers
                  </Typography>
                </Box>
              </Box>
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
              <Box className=" p-4 sm:p-5  styled">
                <Box component="div">
                  <img src={landMonitoringImg} alt="Escrow" width="45px" />
                </Box>
                <Box variant="div">
                  <Typography
                    variant="h2"
                    sx={{
                      fontWeight: "bolder",
                      fontSize: "15px",
                      margin: "10% 0% 10% 0%",
                    }}
                  >
                    Land Monitoring
                  </Typography>
                  <Typography
                    variant="subtitle"
                    className="  w-100"
                    style={{
                      lineHeight: "1.3rem",
                      marginTop: ".5%",
                      fontSize: "12px",
                      opacity: "90%",
                    }}
                  >
                    With Escrow, buyer feel secured buying a piece of your land
                    or property, through a secure payment engine that help both
                    sellers and buyers
                  </Typography>
                </Box>
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </Box>
  );
};

export default Aboutlockyourland;
