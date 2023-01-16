import React from "react";
import {
  Box,
  Typography,
  Container,
  Grid,
  TextField,
  Button,
} from "@mui/material";
import signupImg from "../../assets/signup.svg";
import { Link } from "react-router-dom";

const RegisterForm = () => {
  return (
    <Box>
      <Container>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={12} md={8}>
            <Box component="div" className=" sm:p-20 p-3">
              <Typography variant="h5" sx={{ lineHeight: "2.4rem" }}>
                Open an <br />{" "}
                <Typography
                  variant="span"
                  sx={{
                    fontSize: "45px",
                    fontWeight: "bolder",
                    color: "#1d4ed8",
                  }}
                >
                  Account
                </Typography>
              </Typography>
              <Typography component="paragraph" sx={{ fontSize: "12px" }}>
                Choose Lock.your.Land.{" "}
                <Typography
                  component="span"
                  sx={{ fontWeight: "bold", fontSize: "12px" }}
                >
                  {" "}
                  Choose Secured Real Estate Management
                </Typography>
              </Typography>
              <Box
                component="form"
                sx={{
                  "& .MuiTextField-root": { width: "100%" },
                  padding: 0,
                  margin: "5% 0%",
                }}
                noValidate
                autoComplete="off"
              >
                <Grid container spacing={2}>
                  <Grid item xs={12} sm={6} md={4}>
                    <div>
                      <TextField
                        label="First Name"
                        id="outlined-size-small"
                        size="small"
                        inputProps={{ style: { fontSize: 16 } }}
                      />
                    </div>
                  </Grid>
                  <Grid item xs={12} sm={6} md={4}>
                    <div>
                      <TextField
                        label="Last Name or Surname"
                        id="outlined-size-small"
                        size="small"
                        inputProps={{ style: { fontSize: 16 } }}
                      />
                    </div>
                  </Grid>
                  <Grid item xs={12} sm={6} md={4}>
                    <div>
                      <TextField
                        label="Email Address"
                        id="outlined-size-small"
                        size="small"
                        inputProps={{ style: { fontSize: 16 } }}
                      />
                    </div>
                  </Grid>

                  <Grid item xs={12} sm={6} md={4}>
                    <div>
                      <TextField
                        label="Password"
                        id="outlined-size-small"
                        size="small"
                        inputProps={{ style: { fontSize: 16 } }}
                      />
                    </div>
                  </Grid>
                  <Grid item xs={12} sm={6} md={4}>
                    <div>
                      <TextField
                        label="Retype Password"
                        id="outlined-size-small"
                        size="small"
                        inputProps={{ style: { fontSize: 16 } }}
                      />
                    </div>
                  </Grid>
                </Grid>
                <Link to="/buyLand">
                  <Button
                    variant="contained"
                    sx={{
                      bgcolor: "#1e40af",
                      textTransform: "none",
                      fontWeight: "bold",
                      marginTop: "3%",
                    }}
                    className="bg-blue-700"
                    size="medium"
                  >
                    Sign Up Now
                  </Button>
                </Link>
              </Box>
              <Typography
                component="paragraph"
                sx={{ fontSize: "12px", fontWeight: "bold" }}
              >
                Already have an account?
                <Link to="/login">
                  <Typography
                    component="span"
                    sx={{
                      fontWeight: "bold",
                      fontSize: "12px",
                      color: "#3b82f6",
                    }}
                  >
                    {" "}
                    Login
                  </Typography>
                </Link>
              </Typography>
              <br />
              <Typography component="paragraph" sx={{ fontSize: "12px" }}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Corporis, provident?
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={12} sm={12} md={4}>
            <Box component="div" className="mt-28">
              <img
                src={signupImg}
                alt="sign up images"
                width="100%"
                className="sm:block hidden"
              />
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default RegisterForm;
