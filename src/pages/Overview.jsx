import { Box, Grid, IconButton, MenuItem, Typography } from "@mui/material";
import { collection, getDocs, onSnapshot, orderBy, query, where } from "firebase/firestore";
import { useEffect, useState } from "react";
import { BsFilter } from "react-icons/bs";
import { Link, ScrollRestoration } from "react-router-dom";
import SlideScroll from "../components/overview/SlideScroll";
import CandleStickChart from "../components/shared/ApexChartColumn";
import RadialChart from "../components/shared/ApexChartRadial";
import CampaignCard from "../components/shared/CampaignCard";
import CampaignCardApproval from "../components/shared/CampaignCardApprove";
import CustomizedSelect from "../components/shared/Select";
import SubscribedUser from "../components/shared/SubscribedUser";
import { db } from "../firebase";

export default function Overview() {
  const [month, setMonth] = useState("total");
  const [activeOrders, setActiveOrders] = useState([]);
  const getOrders = async() => {
    const q = query(collection(db, "Orders"), where("status", "==", "Pending"));
    const querySnapshot = await getDocs(q);
    querySnapshot.forEach((doc) => {
      var data = doc.data();
      data.docId = doc.id;
      setActiveOrders([...activeOrders, data]);
    });
  }
  useEffect(
    () =>{
      getOrders()
    },
    [db]
  );
  console.log("a",activeOrders);
  return (
    <>
      <ScrollRestoration />
      <Grid container spacing={3}>
        <Grid
          item
          xs={12}
          className="d-flex flex-column align-items-start justify-content-between"
        >
          <Typography variant="h5">Good Morning Admin 👋🏻</Typography>
          <Typography className="text-muted">
            Have a look at recent activities
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <div className="d-flex align-items-center justify-content-between">
            <Typography variant="h5">Active Orders</Typography>
            <Link className="text-decoration-none text-muted">
              <u>
                <Typography variant="caption">See more</Typography>
              </u>
            </Link>
          </div>
        </Grid>
        <Grid item xs={12}>
          <SlideScroll>
            {activeOrders.map(ins=>(
              <div className="mx-1 d-flex ">
                <CampaignCard order={ins} /> <div className="px-2"></div>
              </div>
            ))}
          </SlideScroll>
        </Grid>

        <Grid item xs={12} lg={8}>
          <div className="d-flex align-items-center justify-content-between mb-1">
            <Typography variant="h5">Earnings</Typography>
            <CustomizedSelect
              onChange={(e) => setMonth(e.target.value)}
              value={month}
            >
              {["Total"].map((item, i) => (
                <MenuItem value={item.toLowerCase()} key={"month" - i}>
                  {item}
                </MenuItem>
              ))}
            </CustomizedSelect>
          </div>
          <Grid container spacing={2}>
            {/* <Grid item xs={12} md={4}>
              <div className="d-flex flex-column justify-content-between h-100 ">
                <SubscribedUser />
                <SubscribedUser />
                <SubscribedUser />
              </div>
            </Grid> */}
            <Grid item xs={12} md={12}>
              <Box className="p-3 chart-container bg-white  d-flex align-items-center justify-content-center h-100 ">
                <div className="w-100">
                  <CandleStickChart className="w-100" />
                </div>
              </Box>
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={12} lg={4} className="mb-0 pb-0 ">
          <div className="d-flex align-items-center justify-content-between mb-1">
            <Typography variant="h5">Statistics</Typography>
            <CustomizedSelect
              onChange={(e) => setMonth(e.target.value)}
              value={month}
              style={{ opacity: 0, cursor: "default", pointerEvents: "none" }}
            >
              {["Total"].map((item, i) => (
                <MenuItem value={item.toLowerCase()} key={"month" - i}>
                  {item}
                </MenuItem>
              ))}
            </CustomizedSelect>
          </div>
          <div className="d-flex h-85">
            <Grid container>
              <Grid item xs={12}>
                <Box className="p-3 chart-container bg-white  d-flex align-items-center justify-content-center h-100 ">
                  <RadialChart
                    series={[1, 3, 2]}
                    labels={["Monthly", "Yearly", "Weekly"]}
                    colors={["#35B368", "#FFB545", "#2F2F2F"]}
                  />
                </Box>
              </Grid>
            </Grid>
          </div>
        </Grid>
      </Grid>
    </>
  );
}
