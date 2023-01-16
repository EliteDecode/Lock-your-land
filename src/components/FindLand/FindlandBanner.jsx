import React from "react";
import Box from "@mui/system/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";

import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { Link } from "react-router-dom";

import Grid from "@mui/material/Grid";

const FindlandBanner = () => {
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
    <Box component="div" className="text-center">
      <Container className="sm:py-10 py-12">
        <Box component="div" className="findlandBanner">
          <div className="text-center styled-p">
            <Typography variant="h4">
              {" "}
              <span className="text-green-600 font-bold sm:text-5xl text-md">
                Find Your
              </span>{" "}
              <span className="text-blue-800 font-bold sm:text-5xl text-md">
                Land
              </span>
            </Typography>
            <Typography variant="h6" sx={{ marginTop: "2%" }}>
              <span className="font-bold">Simple, Fast, Secured.</span> Peace of
              mind in three steps: Search,Select and Lock.your.Land
            </Typography>
            <Typography
              variant="subtitle2"
              className=""
              style={{
                lineHeight: "1.3rem",
                fontSize: "13px",
                opacity: "90%",
                marginTop: "2%",
              }}
            >
              Orange island is your next home, when you escrow with us you
              decide what happens to your land whether you are trading or locing
            </Typography>
          </div>

          {/* Select Form */}
          <Box
            component="div"
            className="border bg-white py-3 sm:px-12 px-3 border-2 mt-60 border-blue-800 rounded-lg  m-auto"
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

export default FindlandBanner;
