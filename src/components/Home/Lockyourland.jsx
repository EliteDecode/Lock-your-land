import React from "react";
import Box from "@mui/system/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { Link } from "react-router-dom";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import Stanbic from "../../assets/stanbic.png";

const Lockyourland = () => {
  const [age, setAge] = React.useState("");

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  const inputsLabel = [
    {
      InputTitle: "Location",
      Values: ["Benin", "Lagos", "Abuja"],
    },
    {
      InputTitle: "Area",
      Values: ["Ekehuan", "Ikeja", "Lekki"],
    },
    {
      InputTitle: "Property Type",
      Values: ["Land", "Bongalow", "Duplex"],
    },
    {
      InputTitle: "Purpose",
      Values: ["Rent", "Sale", "Escrow"],
    },
    {
      InputTitle: "Prize",
      Values: ["1million to 2million", "10million to 15million"],
    },
  ];
  return (
    <Box component="div" className="banner">
      <Container className="sm:py-20 py-12">
        <Box component="div">
          <Typography variant="h4">
            {" "}
            <span className="text-green-600 font-bold sm:text-5xl text-md">
              Lock
            </span>{" "}
            <span className="text-blue-800 font-bold sm:text-5xl text-md">
              Your Land
            </span>
          </Typography>
          <Typography variant="h4">
            Buy, Secure And Sell your Property
          </Typography>
          <Typography
            variant="subtitle2"
            className=" sm:w-2/4 w-100"
            style={{
              lineHeight: "1.3rem",
              marginTop: ".5%",
              fontSize: "12px",
              fontWeight: "600",
              opacity: "90%",
            }}
          >
            We ensure that all your transactions are smooth when you're looking
            to buy, sell or hold unto your realestates properties. No more loss,
            no more fraud, no more omo onile games. You can rest easy knowing
            your money is safe till your land is secured
          </Typography>
          <Box
            component="div"
            className="w-64 border border-blue-800 my-4 rounded-xl flex"
          >
            <Box component="div" className="p-2 rounded-xl bg-blue-800">
              <Typography
                variant="body2"
                className="text-white"
                sx={{ fontSize: "11px" }}
              >
                Powered And <br />
                Secured By
              </Typography>
            </Box>
            <Box
              component="div"
              className="w-2/3 flex items-center justify-center"
            >
              <img src={Stanbic} alt="Stanbic Ibtc image" width="80%" />
            </Box>
          </Box>
          <Stack spacing={2} direction="row" className="mt-8">
            <Button
              variant="contained"
              sx={{
                bgcolor: "#1e40af",
                textTransform: "none",
                fontWeight: "bold",
              }}
              className="bg-blue-500"
              size="medium"
            >
              Escrow Now
            </Button>
            <Button
              variant="contained"
              size="medium"
              sx={{
                bgcolor: "#4ade80",
                color: "#000",
                textTransform: "none",
                fontWeight: "bold",
              }}
            >
              Check Properties
            </Button>
          </Stack>
          {/* Select Form */}
          <Box
            component="div"
            className="border py-3 sm:px-12 px-3 border-2 mt-16 border-blue-800 rounded-lg  m-auto"
          >
            <Grid container spacing={2}>
              {inputsLabel.map((inputLabel) => {
                const { InputTitle, Values } = inputLabel;
                return (
                  <Grid item xs={6} sm={6} md={2}>
                    {" "}
                    <FormControl
                      variant="standard"
                      sx={{ m: 1, minWidth: 120 }}
                    >
                      <InputLabel id="select">{InputTitle}</InputLabel>
                      <Select
                        labelId="select"
                        id="demo-simple-select-standard"
                        value={age}
                        onChange={handleChange}
                        label="Age"
                      >
                        {Values.map((value) => {
                          return (
                            <>
                              <MenuItem value="">{value}</MenuItem>
                            </>
                          );
                        })}
                      </Select>
                    </FormControl>
                  </Grid>
                );
              })}
              <Grid item xs={12} sm={12} md={2}>
                <Link to="/findLand">
                  <Button
                    variant="contained"
                    sx={{
                      bgcolor: "#4ade80",
                      textTransform: "none",
                      fontWeight: "bold",
                      width: "100%",
                      marginTop: "10%",
                    }}
                    className="bg-green-500"
                    size="medium"
                  >
                    Start Now
                  </Button>
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default Lockyourland;
