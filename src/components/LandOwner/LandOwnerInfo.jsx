import React from "react";
import { Box, Typography, Avatar } from "@mui/material";
import userImg from "../../assets/malep1.jpg";
const LandOwnerInfo = () => {
  return (
    <Box component="div" className=" p-3 flex flex-col items-center  flex-col">
      <Avatar alt="Remy Sharp" sx={{ height: "100px", width: "100px" }} />

      <Typography
        variant="h6"
        sx={{
          fontSize: "17px",
          fontWeight: "bold",
          marginTop: "2%",
          textTransform: "uppercase",
        }}
      >
        Adeola Eghosa
      </Typography>
      <Typography
        variant="h6"
        sx={{
          fontSize: "12px",
          fontWeight: "bold",
          marginTop: "0%",
          textTransform: "",
          opacity: "70%",
        }}
      >
        Adeola@gmail.com
      </Typography>
      <Typography
        variant="h6"
        sx={{
          fontSize: "12px",
          fontWeight: "bold",
          marginTop: "0%",
          textTransform: "",
          opacity: "70%",
        }}
      >
        +234 703 054 8630
      </Typography>
      <Typography
        variant="h6"
        sx={{
          fontSize: "12px",
          fontWeight: "bold",
          marginTop: "0%",
          textTransform: "",
          opacity: "70%",
        }}
      >
        Member since 2002
      </Typography>
    </Box>
  );
};

export default LandOwnerInfo;
