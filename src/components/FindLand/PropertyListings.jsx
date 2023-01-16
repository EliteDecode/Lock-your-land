import React from "react";
import { Box, Button, Container, Typography, Grid } from "@mui/material";
import house1 from "../../assets/house1.jpeg";
import house2 from "../../assets/house2.jpeg";
import house3 from "../../assets/house3.jpeg";
import house4 from "../../assets/house4.jpeg";
import house5 from "../../assets/house5.jpeg";
import house6 from "../../assets/house6.jpeg";

import { Link } from "react-router-dom";
const PropertyListings = () => {
  const CarouselItems = [
    {
      Image: house1,
      Name: "Rented to Queens Luxury",
      Title: "Retails and Liesure",
    },
    {
      Image: house2,
      Name: "Rented to Queens Luxury",
      Title: "Retails and Liesure",
    },
    {
      Image: house3,
      Name: "Rented to Queens Luxury",
      Title: "Retails and Liesure",
    },
    {
      Image: house4,
      Name: "Rented to Queens Luxury",
      Title: "Retails and Liesure",
    },
    {
      Image: house5,
      Name: "Rented to Queens Luxury",
      Title: "Retails and Liesure",
    },
    {
      Image: house6,
      Name: "Rented to Queens Luxury",
      Title: "Retails and Liesure",
    },
    {
      Image: house1,
      Name: "Rented to Queens Luxury",
      Title: "Retails and Liesure",
    },
    {
      Image: house2,
      Name: "Rented to Queens Luxury",
      Title: "Retails and Liesure",
    },
    {
      Image: house3,
      Name: "Rented to Queens Luxury",
      Title: "Retails and Liesure",
    },
    {
      Image: house4,
      Name: "Rented to Queens Luxury",
      Title: "Retails and Liesure",
    },
    {
      Image: house5,
      Name: "Rented to Queens Luxury",
      Title: "Retails and Liesure",
    },
    {
      Image: house6,
      Name: "Rented to Queens Luxury",
      Title: "Retails and Liesure",
    },
  ];

  return (
    <Box container component="div" className="">
      <Container>
        <Box component="div" className=" mt-5 p-2 text-center">
          <Grid container spacing={2}>
            {CarouselItems.map((items, key) => {
              return (
                <Grid
                  item
                  xs={12}
                  sm={6}
                  md={4}
                  key={items.Name}
                  className=" flex flex-col items-center justify-center "
                  sx={{ marginTop: "3%" }}
                >
                  <Link to="/landOwner">
                    <Box component="div" className="">
                      <img
                        src={items.Image}
                        alt="house"
                        className="rounded-xl"
                      />
                      <Box component="div" className="mt-3 p-2">
                        <Typography
                          variant="subtitle1"
                          sx={{ fontWeight: "bold" }}
                        >
                          {items.Name}
                        </Typography>
                        <Typography variant="subtitle2">
                          {items.Title}
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
              bgcolor: "#1e40af",
              textTransform: "none",
              fontWeight: "bold",
              marginTop: "3%",
              marginBottom: "3%",
            }}
            className="bg-blue-500"
            size="large"
          >
            Load More
          </Button>
        </Box>
      </Container>
    </Box>
  );
};

export default PropertyListings;
