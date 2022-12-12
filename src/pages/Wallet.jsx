import {
  Divider,
  Grid,
  MenuItem,
  Typography,
  Button,
  Avatar,
  IconButton,
} from "@mui/material";
import { Box } from "@mui/system";
import moment from "moment/moment";
import { Table } from "react-bootstrap";
import { AiOutlineDollarCircle } from "react-icons/ai";
import { BsChevronDown, BsCurrencyDollar, BsFilter } from "react-icons/bs";
import { TbReceipt2 } from "react-icons/tb";
import { Link, ScrollRestoration } from "react-router-dom";
import CustomizedSelectWhite from "../components/shared/SelectWhite";
import TextFeildCustomWhite from "../components/shared/TextFeildWhite";
import Profit from "../components/wallet/Profit";
import CustomizedSelect from "../components/shared/Select";
import { useState } from "react";
import CandleStickChart from "../components/shared/ApexChartCandle";

const paymentDetails = new Array(7).fill(0).map(() => ({
  name: "Shaheer Ahmad",
  paymentDate: moment(),
  amount: Math.floor(Math.random() * 24) + "000",
  id: Math.floor(Math.random() * 10000000),
  profileImg: "https://i.pravatar.cc/300",
}));

export default function Wallet() {
  const [month, setMonth] = useState("january");
  return (
    <>
      <ScrollRestoration />
      <Grid container spacing={3}>
        <Grid item xs={12} lg={6}>
          <Grid container spacing={3}>
            <Grid item xs={6} sm={4}>
              <Box
                sx={{
                  background: "#FFFFFF",
                  boxShadow: "0px 4px 71px rgba(0, 0, 0, 0.04)",
                  borderRadius: "10px",
                }}
                className="p-3 py-md-5 h-100 d-flex flex-column align-items-center justify-content-center"
              >
                <Typography variant="h5" className="text-primary">
                  $143,000
                </Typography>
                <Typography variant="caption" className="text-center">
                  Total Amount
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={6} sm={4}>
              <Box
                sx={{
                  background: "#FFFFFF",
                  boxShadow: "0px 4px 71px rgba(0, 0, 0, 0.04)",
                  borderRadius: "10px",
                }}
                className="p-3 py-md-5 h-100 d-flex flex-column align-items-center justify-content-center"
              >
                <Typography variant="h5" className="text-primary">
                  $141,000
                </Typography>
                <Typography className="text-center" variant="caption">
                  Available for Withdrawal
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={6} sm={4}>
              <Box
                sx={{
                  background: "#FFFFFF",
                  boxShadow: "0px 4px 71px rgba(0, 0, 0, 0.04)",
                  borderRadius: "10px",
                }}
                className="p-3 py-md-5 h-100 d-flex flex-column align-items-center justify-content-center"
              >
                <Typography variant="h5" className="text-primary">
                  $101,000
                </Typography>
                <Typography variant="caption" className="text-center">
                  Withdrawn
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={12}>
              <Typography variant="h6">Wallet</Typography>
              <Divider className="w-100 my-1" sx={{ borderColor: "#bbb" }} />
            </Grid>
            <Grid item xs={12}>
              <Box
                sx={{
                  background: "#FFFFFF",
                  boxShadow: "0px 4px 71px rgba(0, 0, 0, 0.04)",
                  borderRadius: "10px",
                }}
                className="p-3 h-100 d-flex align-items-center justify-content-between"
              >
                <div>
                  <Typography className="text-muted">
                    Current Balance
                  </Typography>

                  <Typography variant="h4" className=" mt-2">
                    $143,000
                    <sup>
                      <Typography
                        sx={{ display: "inline-block" }}
                        className=" mx-1 text-primary"
                      >
                        +21
                      </Typography>
                    </sup>
                  </Typography>
                  <div className="d-flex align-items-center justify-content-between mt-3">
                    <div>
                      <div className="d-flex align-items-center">
                        <Box
                          sx={{ width: 25, height: 25, borderRadius: 1 }}
                          className="bg-primary d-flex align-items-center justify-content-center"
                        >
                          <TbReceipt2 className="text-white" />
                        </Box>
                        <Typography className="mx-1 text-muted">
                          Withdrawal
                        </Typography>
                      </div>
                      <Typography variant="h6">$101,000.53</Typography>
                    </div>
                    <div className="mx-4">
                      <div className="d-flex align-items-center">
                        <Box
                          sx={{ width: 25, height: 25, borderRadius: 1 }}
                          className="bg-primary d-flex align-items-center justify-content-center"
                        >
                          <BsCurrencyDollar size={14} className="text-white" />
                        </Box>
                        <Typography className="mx-1 text-muted">
                          Profit
                        </Typography>
                      </div>
                      <Typography variant="h6">$131,000.53</Typography>
                    </div>
                  </div>
                </div>
                <img
                  src={require("../assets/wallet.png")}
                  alt="wallet"
                  className="mx-4 wallet-img"
                />
              </Box>
            </Grid>

            <Grid item xs={12}>
              <div className="d-flex align-items-center justify-content-between my-2">
                <Typography variant="h6">Stats</Typography>
                <CustomizedSelect
                  onChange={(e) => setMonth(e.target.value)}
                  value={month}
                >
                  {[
                    "January",
                    "February",
                    "March",
                    "April",
                    "May",
                    "June",
                    "July",
                    "August",
                    "September",
                    "October",
                    "November",
                    "December",
                  ].map((item, i) => (
                    <MenuItem value={item.toLowerCase()} key={"month" - i}>
                      {item}
                    </MenuItem>
                  ))}
                </CustomizedSelect>
              </div>
              <CandleStickChart />
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={12} md={6}>
          <div className="d-flex align-items-center justify-content-between">
            <Typography variant="h5" className="mb-3">
              Fund Processing
            </Typography>
            <Link className="text-muted">
              <Typography variant="caption">View Details</Typography>
            </Link>
          </div>
          <Table responsive>
            <thead>
              <tr>
                <th>
                  <Typography>Name</Typography>
                </th>

                <th>
                  <Typography>Amount</Typography>
                </th>
              </tr>
            </thead>
            <tbody>
              {paymentDetails.map((item, i) => (
                <tr key={"row-" + i}>
                  <td style={{ minWidth: "180px" }}>
                    <div className="d-flex align-items-center py-1">
                      <Avatar src={item.profileImg} />
                      <div className="m-1"></div>
                      <Typography variant="body2">{item.name}</Typography>
                    </div>
                  </td>

                  <td style={{ minWidth: "120px" }}>
                    <div className="d-flex align-items-center">
                      <AiOutlineDollarCircle
                        size={22}
                        className="text-warning"
                      />
                      <Typography variant="body2" className="text-muted mx-1">
                        {item.amount}
                      </Typography>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        </Grid>
      </Grid>
    </>
  );
}
