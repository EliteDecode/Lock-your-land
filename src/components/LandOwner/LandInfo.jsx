import React from "react";
import {
  Container,
  Box,
  Grid,
  Typography,
  ImageListItem,
  ImageList,
  List,
  Button,
  ListItem,
  Stack,
} from "@mui/material";

import house1 from "../../assets/house1.jpeg";
import house2 from "../../assets/house2.jpeg";
import house3 from "../../assets/house3.jpeg";
import house4 from "../../assets/house4.jpeg";
import house5 from "../../assets/house5.jpeg";
import house6 from "../../assets/house6.jpeg";
import completeSvg from "../../assets/completeSVG.svg";
import { Link } from "react-router-dom";

import {
  Bed,
  Chair,
  FamilyRestroom,
  TableRestaurant,
} from "@mui/icons-material";
import LandOwnerInfo from "./LandOwnerInfo";

const LandInfo = () => {
  const itemData = [
    {
      img: house1,
      title: "Bed",
    },
    {
      img: house2,
      title: "Books",
    },
    {
      img: house3,
      title: "Sink",
    },
    {
      img: house4,
      title: "Kitchen",
    },
    {
      img: house5,
      title: "Blinds",
    },
    {
      img: house6,
      title: "Chairs",
    },
    {
      img: house1,
      title: "Laptop",
    },
    {
      img: house6,
      title: "Doors",
    },

    {
      img: house3,
      title: "Candle",
    },
    {
      img: house4,
      title: "Coffee table",
    },
  ];

  const specialProperties = [
    {
      Title: "Sitting Rooms",
      Icon: <Chair className="text-green-500" />,
      Number: 1,
    },
    {
      Title: "Bed Rooms",
      Icon: <Bed className="text-green-500" />,
      Number: 3,
    },
    {
      Title: "Rest Rooms",
      Icon: <FamilyRestroom className="text-green-500" />,
      Number: 6,
    },
    {
      Title: "Dinning Room",
      Icon: <TableRestaurant className="text-green-500" />,
      Number: 2,
    },
  ];
  return (
    <Box component="div" sx={{ height: "90vh" }}>
      <Container>
        <Grid container>
          <Grid item xs={12} sm={3} md={3}>
            <LandOwnerInfo />
          </Grid>
          <Grid item xs={12} sm={9} md={9}>
            <Box
              component="div"
              className="sm:p-5 p-5  bg-green-custom"
              sx={{ height: "90vh" }}
            >
              <Typography
                variant="h5"
                sx={{
                  fontWeight: "bold",
                  marginBottom: "1%",
                  textAlign: "center",
                }}
              >
                Lakowe 4ft Land
              </Typography>

              <Grid container>
                <Grid item xs={12} sm={6} md={4}>
                  <Box
                    sx={{ width: "100%" }}
                    component="div"
                    className=" styled-border p-3"
                  >
                    <ImageList variant="masonry" cols={2} gap={10}>
                      {itemData.map((item) => (
                        <ImageListItem key={item.img}>
                          <img
                            src={item.img}
                            srcSet={item.img}
                            alt={item.title}
                            loading="lazy"
                            className="rounded-lg"
                          />
                        </ImageListItem>
                      ))}
                    </ImageList>
                  </Box>
                </Grid>
                <Grid item xs={12} sm={6} md={8}>
                  <Grid container>
                    <Grid item xs={12} sm={6} md={8}>
                      <Box component="div" className="p-3 mt-5 sm:mt-0">
                        <div>
                          <Typography
                            variant="subtitle2"
                            sx={{
                              fontSize: "12px",
                              fontWeight: "bold",
                              opacity: "80%",
                            }}
                          >
                            Price of Land
                          </Typography>
                          <Typography
                            variant="h6"
                            sx={{ fontWeight: "bold", fontSize: "15px" }}
                          >
                            N 300,000,000
                          </Typography>
                        </div>
                        <div className="mt-2">
                          <Typography
                            variant="subtitle2"
                            sx={{
                              fontSize: "12px",
                              fontWeight: "bold",
                              opacity: "80%",
                            }}
                          >
                            Location
                          </Typography>
                          <Typography
                            variant="h6"
                            sx={{ fontWeight: "bold", fontSize: "15px" }}
                          >
                            125 Ekehuan Road, Benin City, Edo State, Nigeria
                          </Typography>
                        </div>
                        <div
                          className="mt-5 py-2"
                          style={{
                            borderTop: "1px dotted gray",
                            borderBottom: "1px dotted gray",
                          }}
                        >
                          <Typography
                            variant="subtitle2"
                            sx={{
                              fontSize: "12px",
                              fontWeight: "bold",
                              opacity: "80%",
                            }}
                          >
                            Size of Land/Property
                          </Typography>
                          <Typography
                            variant="h6"
                            sx={{ fontWeight: "bold", fontSize: "15px" }}
                          >
                            30 * 100 Square Feet
                          </Typography>
                        </div>
                        <div className="mt-2 py-2">
                          <Typography
                            variant="subtitle2"
                            sx={{
                              fontSize: "12px",
                              fontWeight: "bold",
                              opacity: "80%",
                            }}
                          >
                            Special Properties
                          </Typography>
                          <div className="flex justify-between">
                            {specialProperties.map((item, index) => {
                              const { Icon } = item;
                              return (
                                <div
                                  key={index}
                                  className="flex items-center flex-col mt-2"
                                >
                                  <Typography
                                    variant="h6"
                                    style={{
                                      fontSize: "11px",
                                      fontWeight: "bold",
                                    }}
                                  >
                                    {item.Title}
                                  </Typography>
                                  <div className="rounded-full p-2 border mt-2 bg-gray-100">
                                    {Icon}
                                  </div>
                                  <Typography
                                    variant="h6"
                                    style={{
                                      fontSize: "12px",
                                      fontWeight: "bold",
                                    }}
                                  >
                                    {item.Number}
                                  </Typography>
                                </div>
                              );
                            })}
                          </div>
                        </div>
                        <div
                          className="mt-5 py-2"
                          style={{
                            borderTop: "1px dotted gray",
                            borderBottom: "1px dotted gray",
                          }}
                        >
                          <Typography
                            variant="subtitle2"
                            sx={{
                              fontSize: "12px",
                              fontWeight: "bold",
                              opacity: "80%",
                            }}
                          >
                            Security Information
                          </Typography>
                          <div>
                            <List>
                              <ListItem sx={{ fontSize: "12px" }}>
                                {" "}
                                1. Certificate of Ownership
                              </ListItem>
                              <ListItem sx={{ fontSize: "12px" }}>
                                {" "}
                                2. Escrow
                              </ListItem>
                              <ListItem sx={{ fontSize: "12px" }}>
                                {" "}
                                3. Local Government
                              </ListItem>
                            </List>
                          </div>
                        </div>
                      </Box>
                    </Grid>
                    <Grid item xs={12} sm={6} md={4}>
                      <Box
                        component="div"
                        className=" bg-gray-100 rounded-lg p-3 mt-1 "
                        sx={{ height: "78vh" }}
                      >
                        <img
                          src={completeSvg}
                          alt="Complete SVG"
                          className=""
                        />
                        <div className="sm:mt-20 mt-5">
                          <Typography
                            variant="subtitle2"
                            sx={{
                              fontSize: "13px",
                              textTransform: "uppercase",
                              opacity: "80%",
                              textAlign: "center",
                            }}
                          >
                            Complete Purchase
                          </Typography>
                          <div className="mt-5">
                            <Stack spacing={2} direction="column">
                              <Button
                                variant="contained"
                                sx={{
                                  bgcolor: "#1e40af",
                                  textTransform: "none",
                                  fontWeight: "bold",
                                }}
                                className="bg-blue-500 "
                                size="medium"
                              >
                                <Link to="/register">Chat Now</Link>
                              </Button>

                              <Link to="/login">
                                <Button
                                  variant="contained"
                                  size="medium"
                                  sx={{
                                    bgcolor: "#4ade80",
                                    color: "#000",
                                    textTransform: "none",
                                    fontWeight: "bold",
                                    width: "100%",
                                  }}
                                >
                                  Escrow Now
                                </Button>
                              </Link>
                            </Stack>
                          </div>
                        </div>
                      </Box>
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default LandInfo;
