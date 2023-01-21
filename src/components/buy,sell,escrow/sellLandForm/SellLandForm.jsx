import React, { useState } from "react";
import {
  Container,
  Button,
  Box,
  Grid,
  Typography,
  TextField,
} from "@mui/material";
import LandOwnerInfo from "../../LandOwner/LandOwnerInfo";
import Notifications from "../Notifications";
import { Link } from "react-router-dom";
import ProgressBar from "@ramonak/react-progress-bar";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import DashboardNavbar from "../../DashboardNavbar";
const SellLandForm = () => {
  const [firstForm, setFirstForm] = useState(true);

  const closeFirstForm = () => {
    setFirstForm(!firstForm);
  };
  return (
    <>
      <DashboardNavbar />
      <Box component="div">
        <Container>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={3} md={3}>
              <LandOwnerInfo />
            </Grid>
            <Grid item xs={12} sm={6} md={6}>
              <Box
                component="div"
                className="sm:p-5 p-5  bg-green-custom h-min-screen sm:h-screen"
              >
                <Box component="div" className="py-3 mt-5 sm:mt-0">
                  <Typography
                    variant="h6"
                    sx={{
                      fontWeight: "bold",
                      fontSize: "16px",
                      opacity: "90%",
                    }}
                  >
                    Dashboard
                  </Typography>
                  {firstForm && (
                    <>
                      <Box className="mb-5 mt-5">
                        <ProgressBar
                          completed={60}
                          bgColor="#15803d"
                          height="35px"
                        />
                      </Box>
                      <Box
                        component="form"
                        sx={{
                          "& .MuiTextField-root": { width: "100%" },
                          padding: 0,
                          margin: "7% 0%",
                        }}
                        noValidate
                        autoComplete="off"
                      >
                        <Grid container spacing={1}>
                          <Grid item xs={12} sm={6} md={6}>
                            <div>
                              <TextField
                                label="Land Owner's First Name"
                                id="outlined-size-small"
                                size="small"
                                inputProps={{ style: { fontSize: 16 } }}
                              />
                            </div>
                          </Grid>
                          <Grid item xs={12} sm={6} md={6}>
                            <div>
                              <TextField
                                label="Land Owner's Surname"
                                id="outlined-size-small"
                                size="small"
                                inputProps={{ style: { fontSize: 16 } }}
                              />
                            </div>
                          </Grid>
                          <Grid item xs={12} sm={12} md={12}>
                            <div>
                              <TextField
                                label="Address of Land"
                                id="outlined-size-small"
                                size="small"
                                inputProps={{ style: { fontSize: 16 } }}
                              />
                            </div>
                          </Grid>
                          <Grid item xs={12} sm={6} md={6}>
                            <div>
                              <TextField
                                label="Price of Land"
                                id="outlined-size-small"
                                size="small"
                                inputProps={{ style: { fontSize: 16 } }}
                              />
                            </div>
                          </Grid>

                          <Grid item xs={12} sm={6} md={6}>
                            <div>
                              <TextField
                                label="State"
                                id="outlined-size-small"
                                size="small"
                                inputProps={{ style: { fontSize: 16 } }}
                              />
                            </div>
                          </Grid>
                          <Grid item xs={12} sm={12} md={12}>
                            <div>
                              <TextField
                                label="Country"
                                id="outlined-size-small"
                                size="small"
                                inputProps={{ style: { fontSize: 16 } }}
                              />
                            </div>
                          </Grid>
                          <Grid item xs={12} sm={12} md={12}>
                            <div>
                              <TextField
                                label="Size of Land"
                                id="outlined-size-small"
                                size="small"
                                inputProps={{ style: { fontSize: 16 } }}
                              />
                            </div>
                          </Grid>
                          <Grid item xs={12} sm={6} md={6}>
                            <div>
                              <TextField
                                label="Escrow Ammount"
                                id="outlined-size-small"
                                size="small"
                                inputProps={{ style: { fontSize: 16 } }}
                              />
                            </div>
                          </Grid>
                          <Grid item xs={12} sm={6} md={6}>
                            <div>
                              <TextField
                                label="NIN"
                                id="outlined-size-small"
                                size="small"
                                inputProps={{ style: { fontSize: 16 } }}
                              />
                            </div>
                          </Grid>
                          <Grid item xs={12} sm={12} md={12}>
                            <div>
                              <TextField
                                label="Guarantor's Full Name"
                                id="outlined-size-small"
                                size="small"
                                inputProps={{ style: { fontSize: 16 } }}
                              />
                            </div>
                          </Grid>
                        </Grid>

                        <Button
                          variant="contained"
                          sx={{
                            bgcolor: "#15803d",
                            textTransform: "none",
                            fontWeight: "bold",
                            marginTop: "5%",
                          }}
                          size="medium"
                          onClick={closeFirstForm}
                        >
                          Continue
                        </Button>
                      </Box>
                    </>
                  )}
                  {!firstForm && (
                    <>
                      <Box className="py-5">
                        <ProgressBar
                          completed={90}
                          bgColor="#15803d"
                          height="35px"
                        />
                        <Box className="flex space-x-2">
                          <div
                            className={`border py-8 rounded-lg px-5 sm:w-1/3 w-full  text-center justify-center items-center flex space-x-2 mt-5 bg-green-100`}
                            style={{ border: "1px dotted gray" }}
                          >
                            <span
                              style={{ fontSize: "11px", fontWeight: "bold" }}
                            >
                              Uplaod Pictures
                            </span>{" "}
                            <AddCircleOutlineIcon fontSize="small" />
                          </div>
                          <div
                            className={`border py-8 rounded-lg px-5 sm:w-1/3 w-full  text-center justify-center items-center flex space-x-2 mt-5 bg-blue-100`}
                            style={{ border: "1px dotted gray" }}
                          >
                            <span
                              style={{ fontSize: "11px", fontWeight: "bold" }}
                            >
                              Uplaod Videos
                            </span>{" "}
                            <AddCircleOutlineIcon fontSize="small" />
                          </div>
                          <div
                            className={`border py-8 rounded-lg px-5 sm:w-1/3 w-full  text-center justify-center items-center flex space-x-2 mt-5 bg-gray-100 `}
                            style={{ border: "1px dotted gray" }}
                          >
                            <span
                              style={{ fontSize: "11px", fontWeight: "bold" }}
                            >
                              Uplaod Structures
                            </span>{" "}
                            <AddCircleOutlineIcon fontSize="small" />
                          </div>
                        </Box>
                        <Box
                          component="div"
                          className="p-5 bg-green-100 mt-5 rounded-md"
                        >
                          <Typography
                            variant="h4"
                            sx={{
                              fontSize: "18px",
                              fontWeight: "bold",
                              marginBottom: "1%",
                            }}
                          >
                            Authentication Process
                          </Typography>
                          <Typography
                            variant="subtitle2"
                            sx={{ fontSize: "13px", fontWeight: "light" }}
                          >
                            Upload all legal documents to proove property
                            ownership
                          </Typography>

                          <Button
                            variant="contained"
                            sx={{
                              bgcolor: "#f0fdf4",
                              textTransform: "none",
                              fontWeight: "bold",
                              marginTop: "5%",
                              color: "#14532d",
                            }}
                            size="small"
                            disableElevation
                          >
                            Upload Doc
                          </Button>
                        </Box>
                        <Link to="/landForSale">
                          <Button
                            variant="contained"
                            sx={{
                              bgcolor: "#15803d",
                              textTransform: "none",
                              fontWeight: "bold",
                              marginTop: "5%",
                            }}
                            size="medium"
                            onClick={closeFirstForm}
                          >
                            Complete
                          </Button>
                        </Link>
                      </Box>
                    </>
                  )}
                </Box>
              </Box>
            </Grid>
            <Grid item xs={12} sm={3} md={3}>
              <Notifications />
            </Grid>
          </Grid>
        </Container>
      </Box>
    </>
  );
};

export default SellLandForm;
