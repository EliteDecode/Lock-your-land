import React from "react";
import { Container, Box, Grid, Typography, Button, Stack } from "@mui/material";
import completeSvg from "../../assets/completeSVG.svg";
import { Link } from "react-router-dom";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import NotificationsActiveIcon from "@mui/icons-material/NotificationsActive";
import LandOwnerInfo from "../LandOwner/LandOwnerInfo";

const DashboardBuySellEscrow = ({ Title, bg, border, target }) => {
  const Notifications = [
    {
      Text: "Lorem ipsum dolor sit amet consectetur ",
      Time: "5mins Ago",
    },
    {
      Text: "Lorem ipsum dolor sit amet consectetur ",
      Time: "5mins Ago",
    },
    {
      Text: "Lorem ipsum dolor sit amet consectetur ",
      Time: "5mins Ago",
    },
    {
      Text: "Lorem ipsum dolor sit amet consectetur ",
      Time: "5mins Ago",
    },
    {
      Text: "Lorem ipsum dolor sit amet consectetur ",
      Time: "5mins Ago",
    },
    {
      Text: "Lorem ipsum dolor sit amet consectetur",
      Time: "5mins Ago",
    },
  ];
  return (
    <Box component="div" sx={{ height: "90vh" }}>
      <Container>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={3} md={3}>
            <LandOwnerInfo />
          </Grid>
          <Grid item xs={12} sm={6} md={6}>
            <Box
              component="div"
              className="sm:p-5 p-5  bg-green-custom"
              sx={{ height: "90vh" }}
            >
              <Box component="div" className="p-3 mt-5 sm:mt-0">
                <Typography
                  variant="h6"
                  sx={{ fontWeight: "bold", fontSize: "16px", opacity: "90%" }}
                >
                  Dashboard
                </Typography>
                <Link to={`${target}`}>
                  <div
                    className={`border py-8 rounded-lg px-5 sm:w-1/3 w-full  text-center justify-center items-center flex space-x-2 mt-5 ${bg} ${border}`}
                    style={{ border: "1px dotted gray" }}
                  >
                    <span style={{ fontSize: "11px", fontWeight: "bold" }}>
                      {Title}
                    </span>{" "}
                    <AddCircleOutlineIcon fontSize="small" />
                  </div>
                </Link>
              </Box>
            </Box>
          </Grid>
          <Grid item xs={12} sm={3} md={3}>
            <Box
              component="div"
              className=" rounded-lg p-3 mt-5 "
              sx={{ height: "78vh" }}
            >
              <div className="flex justify-between items-center">
                <Typography
                  variant="h6"
                  sx={{ fontWeight: "bold", fontSize: "16px", opacity: "90%" }}
                >
                  Notifications
                </Typography>
                <NotificationsActiveIcon sx={{ color: "#22c55e" }} />
              </div>
              <div>
                {Notifications.map((notify, index) => {
                  return (
                    <div
                      className="py-3 rounded-lg bg-green-custom px-2 my-3"
                      key={index}
                    >
                      <Typography variant="subtitle1" sx={{ fontSize: "13px" }}>
                        {notify.Text}
                      </Typography>
                      <Typography variant="subtitle2" sx={{ opacity: "80%" }}>
                        {notify.Time}
                      </Typography>
                    </div>
                  );
                })}
              </div>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default DashboardBuySellEscrow;
