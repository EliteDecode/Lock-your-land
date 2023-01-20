import React from "react";
import { Container, Button, Box, Grid, Typography } from "@mui/material";
import LandOwnerInfo from "../LandOwner/LandOwnerInfo";
import Notifications from "./Notifications";
import { Link } from "react-router-dom";
import house1 from "../../assets/house1.jpeg";
import house2 from "../../assets/house2.jpeg";
import house3 from "../../assets/house3.jpeg";
import house4 from "../../assets/house4.jpeg";
import house5 from "../../assets/house5.jpeg";
import house6 from "../../assets/house6.jpeg";

const LandForEscrowComp = () => {
  const CarouselItems = [
    {
      Image: house3,
      Name: "Rented to Queens Luxury",
      Price: "200,000,000,000",
      Time: "12.01.10",
    },
    {
      Image: house4,
      Name: "Rented to Queens Luxury",
      Price: "200,000,000,000",
      Time: "12.01.10",
    },
    {
      Image: house5,
      Name: "Rented to Queens Luxury",
      Price: "200,000,000,000",
      Time: "12.01.10",
    },
    {
      Image: house6,
      Name: "Rented to Queens Luxury",
      Price: "200,000,000,000",
      Time: "12.01.10",
    },
    {
      Image: house1,
      Name: "Rented to Queens Luxury",
      Price: "200,000,000,000",
      Time: "12.01.10",
    },
    {
      Image: house2,
      Name: "Rented to Queens Luxury",
      Price: "200,000,000,000",
      Time: "12.01.10",
    },
  ];

  return (
    <Box component="div">
      <Container>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={3} md={3}>
            <LandOwnerInfo />
          </Grid>
          <Grid item xs={12} sm={6} md={6}>
            <Box component="div" className="sm:p-5 p-5  bg-green-custom">
              <Box component="div" className="py-3 mt-5 sm:mt-0">
                <Typography
                  variant="h6"
                  sx={{ fontWeight: "bold", fontSize: "16px", opacity: "90%" }}
                >
                  Dashboard
                </Typography>
                <Box container component="div" className="">
                  <Container>
                    <Box component="div" className=" py-2">
                      <Grid container spacing={2}>
                        {CarouselItems.map((items, key) => {
                          return (
                            <Grid
                              item
                              xs={12}
                              sm={6}
                              md={6}
                              key={items.Name}
                              className=""
                              sx={{ marginTop: "3%" }}
                            >
                              <Box
                                component="div"
                                className="border p-3 rounded-md"
                              >
                                <img
                                  src={items.Image}
                                  alt="house"
                                  className="rounded-xl"
                                />
                                <Box component="div" className="">
                                  <Typography
                                    variant="subtitle1"
                                    sx={{
                                      fontWeight: "bold",
                                      fontSize: "13px",
                                      color: "#1e40af",
                                      margin: "5% 0% 2% 0%",
                                    }}
                                  >
                                    {items.Name}
                                  </Typography>
                                  <Typography
                                    variant="subtitle2"
                                    sx={{
                                      fontSize: "20px",
                                      fontWeight: "bold",
                                    }}
                                  >
                                    N {items.Price}
                                  </Typography>
                                </Box>

                                <Box className="flex space-x-2">
                                  <Button
                                    variant="contained"
                                    sx={{
                                      bgcolor: "#bbf7d0",
                                      textTransform: "none",
                                      fontWeight: "bold",
                                      marginTop: "5%",
                                      color: "#000",
                                    }}
                                    size="small"
                                    disableElevation
                                  >
                                    Edit
                                  </Button>
                                  <Button
                                    variant="contained"
                                    sx={{
                                      bgcolor: "#fecaca",
                                      textTransform: "none",
                                      fontWeight: "bold",
                                      marginTop: "5%",
                                      color: "#000",
                                    }}
                                    size="small"
                                    disableElevation
                                  >
                                    Delete
                                  </Button>
                                </Box>
                              </Box>
                            </Grid>
                          );
                        })}
                      </Grid>

                      <Button
                        variant="contained"
                        sx={{
                          bgcolor: "#22c55e",
                          textTransform: "none",
                          fontWeight: "bold",
                          marginTop: "5%",
                          marginBottom: "3%",
                          color: "#000",
                        }}
                        className="bg-blue-500"
                        size="small"
                      >
                        Load More
                      </Button>
                    </Box>
                  </Container>
                </Box>
              </Box>
            </Box>
          </Grid>
          <Grid item xs={12} sm={3} md={3}>
            <Notifications />
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default LandForEscrowComp;
