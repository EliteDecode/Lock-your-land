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

const DashboardLandLists = () => {
  const CarouselItems = [
    {
      Image: house3,
      Name: "Rented to Queens Luxury",
      Title: "Retails and Liesure",
      Time: "12.01.10",
    },
    {
      Image: house4,
      Name: "Rented to Queens Luxury",
      Title: "Retails and Liesure",
      Time: "12.01.10",
    },
    {
      Image: house5,
      Name: "Rented to Queens Luxury",
      Title: "Retails and Liesure",
      Time: "12.01.10",
    },
    {
      Image: house6,
      Name: "Rented to Queens Luxury",
      Title: "Retails and Liesure",
      Time: "12.01.10",
    },
    {
      Image: house1,
      Name: "Rented to Queens Luxury",
      Title: "Retails and Liesure",
      Time: "12.01.10",
    },
    {
      Image: house2,
      Name: "Rented to Queens Luxury",
      Title: "Retails and Liesure",
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
                              className="  "
                              sx={{ marginTop: "3%" }}
                            >
                              <Link to="/landOwner">
                                <Box component="div" className="">
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
                                      }}
                                    >
                                      {items.Name}
                                    </Typography>
                                    <Typography
                                      variant="subtitle2"
                                      sx={{ fontSize: "10px" }}
                                    >
                                      {items.Title}
                                    </Typography>
                                    <Typography
                                      variant="subtitle2"
                                      sx={{
                                        fontSize: "10px",
                                        backgroundColor: "#22c55e",
                                        fontWeight: "bold",
                                        width: "30%",
                                        color: "#000",
                                        padding: "0.5% 5%",
                                        borderRadius: "15%",
                                        marginTop: "3%",
                                      }}
                                    >
                                      {items.Time}
                                    </Typography>
                                  </Box>
                                </Box>
                              </Link>
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

export default DashboardLandLists;
