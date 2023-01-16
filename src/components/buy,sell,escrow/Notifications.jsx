import React from "react";
import completeSvg from "../../assets/completeSVG.svg";
import { Link } from "react-router-dom";
import { Box, Typography } from "@mui/material";
import NotificationsActiveIcon from "@mui/icons-material/NotificationsActive";
const Notifications = () => {
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
  );
};

export default Notifications;
