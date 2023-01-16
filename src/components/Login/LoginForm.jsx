import React from "react";
import {
  Box,
  Typography,
  Container,
  Grid,
  TextField,
  Button,
} from "@mui/material";
import { Link } from "react-router-dom";
import signupImg from "../../assets/login.svg";

const LoginForm = () => {
  return (
    <Box>
      <Container>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={12} md={7}>
            <Box component="div" className=" sm:p-20 p-3">
              <Typography variant="h5" sx={{ lineHeight: "2.4rem" }}>
                Enter your <br />{" "}
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
                Welcome back. Login to access our unique offerings that allow
                you sort out your real estate needs with ease.
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
                  <Grid item xs={12} sm={12} md={12}>
                    <div>
                      <TextField
                        label="Email Address"
                        id="outlined-size-small"
                        size="small"
                        inputProps={{ style: { fontSize: 16 } }}
                      />
                    </div>
                  </Grid>
                  <Grid item xs={12} sm={12} md={12}>
                    <div>
                      <TextField
                        label="Password"
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
                    Login Now
                  </Button>
                </Link>
              </Box>
              <Typography
                component="paragraph"
                sx={{ fontSize: "12px", fontWeight: "bold" }}
              >
                Don't have an account?
                <Typography
                  component="span"
                  sx={{
                    fontWeight: "bold",
                    fontSize: "12px",
                    color: "#3b82f6",
                  }}
                >
                  {" "}
                  <Link to="/register">Sign Up</Link>
                </Typography>
              </Typography>
              <br />
              <Typography
                component="paragraph"
                sx={{ fontSize: "12px", fontWeight: "bold" }}
              >
                Forgot Password?
                <Typography
                  component="span"
                  sx={{
                    fontWeight: "bold",
                    fontSize: "12px",
                    color: "#3b82f6",
                  }}
                >
                  {" "}
                  <Link to="/register">Recover Password</Link>
                </Typography>
              </Typography>
              <br />
              <Typography component="paragraph" sx={{ fontSize: "12px" }}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Corporis, provident?
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={12} sm={12} md={5}>
            <Box component="div" className="mt-28">
              <img
                src={signupImg}
                alt="sign up images"
                width="80%"
                className="sm:block hidden"
              />
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default LoginForm;
