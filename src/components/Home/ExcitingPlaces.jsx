import React from "react";
import { Box, Button, Container, Typography } from "@mui/material";
import Carousel from "react-elastic-carousel";
import house1 from "../../assets/house1.jpeg";
import house2 from "../../assets/house2.jpeg";
import house3 from "../../assets/house3.jpeg";
import house4 from "../../assets/house4.jpeg";
import house5 from "../../assets/house5.jpeg";
import house6 from "../../assets/house6.jpeg";

const breakPoints = [
  { width: 1, itemsToShow: 1 },
  { width: 550, itemsToShow: 2 },
  { width: 768, itemsToShow: 3 },
  { width: 1200, itemsToShow: 4 },
];
const ExcitingPlaces = () => {
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
  ];
  return (
    <Box container component="div" className=" aboutlockbg  p-2 sm:p-20 ">
      <Container>
        <Box component="div" className="text-center mt-10 sm:mt-5">
          <Typography variant="h3">Exciting Places to Visit</Typography>
          <Typography
            variant="subtitle2"
            className=" w-100 "
            style={{
              lineHeight: "1.3rem",
              marginTop: ".5%",
              fontSize: "12px",
              fontWeight: "600",
              opacity: "90%",
            }}
          >
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Debitis,
            eum numquam! Commodi rem velit rerum.
          </Typography>
        </Box>

        <Box component="div" className=" mt-5 p-2 text-center">
          <Carousel
            breakPoints={breakPoints}
            itemPadding={[5, 5]}
            enableAutoPlay
            autoPlaySpeed={1500}
          >
            {CarouselItems.map((items, key) => {
              return (
                <Box
                  component="div"
                  className=" shadow-xl rounded-lg p-5 bg-gray-300"
                >
                  <img
                    src={items.Image}
                    alt="house Image"
                    className="rounded-xl"
                  />
                  <Box component="div" className="mt-3 p-2">
                    <Typography variant="subtitle1" sx={{ fontWeight: "bold" }}>
                      {items.Name}
                    </Typography>
                    <Typography variant="subtitle2">{items.Title}</Typography>
                  </Box>
                </Box>
              );
            })}
          </Carousel>
          <Button
            variant="contained"
            sx={{
              bgcolor: "#1e40af",
              textTransform: "none",
              fontWeight: "bold",
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

export default ExcitingPlaces;
