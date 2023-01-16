import React from "react";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import lockImage from "../../assets/lock.png";
import { Grid, Typography } from "@mui/material";

const SecureProperty = () => {
  return (
    <Box component="div" className="sm:p-12 p-2">
      <Container>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={12} md={1}></Grid>
          <Grid item xs={12} sm={12} md={5}>
            <img
              src={lockImage}
              alt="Secure lang image"
              className="styled-img"
            />
          </Grid>
          <Grid item xs={12} sm={12} md={5}>
            <Box component="div">
              <Typography variant="body1" sx={{ fontWeight: "bold" }}>
                Lock your property
              </Typography>
              <Typography variant="h5" sx={{ fontWeight: "bold" }}>
                <span className="text-green-400 sm:text-6xl text-4xl">
                  Secure Your
                </span>{" "}
                <span className="text-blue-800 sm:text-6xl text-4xl">
                  Property
                </span>
              </Typography>
              <Typography
                variant="subtitle2"
                className="  w-100"
                style={{
                  lineHeight: "1.3rem",
                  marginTop: "3%",
                  fontSize: "14px",
                }}
              >
                We ensure that all your transactions are smooth when you're
                looking to buy, sell or hold unto your realestates properties.
                No more loss, no more fraud, no more omo onile games. You can
                rest easy knowing your money is safe till your land is secured
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={12} sm={12} md={1}></Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default SecureProperty;
