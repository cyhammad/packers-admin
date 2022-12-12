import {
  Divider,
  Grid,
  Typography,
  Badge,
  Box,
  Container,
} from "@mui/material";
import { BsCalendar3, BsBell } from "react-icons/bs";

import { Outlet } from "react-router-dom";
import moment from "moment";
import SearchFeild from "../components/shared/SearchFeild";
import AccountMenu from "../components/navbar/ProfileMenu";
import DrawerList from "../components/drawer/DrawerList";
import DrawerCustom from "../components/drawer/Drawer";

export default function AdminTemplate() {
  return (
    <>
      <Grid container spacing={3}>
        <Grid item md={2} className="d-none d-xl-block">
          <nav className="drawer shadow-sm py-3 flex-column justify-content-between bg-white">
            <DrawerList />
          </nav>
        </Grid>
        <Grid item xs={12} lg={10} className="m-0">
          <div
            className=" py-md-2 px-2 mt-2 nav-top"
            style={{
              position: "sticky",
              // backgroundColor: "rgba(#f6f6f6,0.4)",
              top: 0,
              opacity: 1,
              zIndex: 10,
              backdropFilter: "blur(5px)",
            }}
          >
            <div className="d-flex align-items-center justify-content-between px-3">
              <div
                className="d-flex align-items-center w-100"
                style={{ height: "60px" }}
              >
                <div className="d-lg-none">
                  <DrawerCustom />
                </div>
                <div className=" d-none d-lg-flex align-items-center">
                  {moment().format("dddd")}
                </div>
                <Divider
                  orientation="vertical"
                  variant="middle"
                  flexItem
                  sx={{ borderColor: "#aaa" }}
                  className="mx-4 d-none d-lg-block"
                />
                <div className="d-none d-lg-flex align-items-center">
                  <Typography className="mx-2">
                    {moment().format("MMMM DD, YYYY")}
                  </Typography>
                </div>
                <Divider
                  orientation="vertical"
                  variant="middle"
                  flexItem
                  sx={{ borderColor: "#aaa" }}
                  className="mx-4 d-none d-lg-block"
                />
                <div className="d-none d-lg-block">
                  <Typography>{moment().format("hh:mm a")}</Typography>
                </div>
              </div>
            </div>
          </div>
          <Container maxWidth="xl" className="py-md-2 mb-5 mh-100vh ">
            <div className="py-2"></div>
            <Outlet />
          </Container>
        </Grid>
      </Grid>
    </>
  );
}
