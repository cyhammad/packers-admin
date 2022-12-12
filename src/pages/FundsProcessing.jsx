import { Grid, IconButton, Typography, Avatar, Button } from "@mui/material";
import moment from "moment";
import { BsFilter } from "react-icons/bs";
import Table from "react-bootstrap/Table";
import { AiOutlineDollarCircle } from "react-icons/ai";
import { ScrollRestoration } from "react-router-dom";

const data = new Array(10).fill(0).map(() => ({
  fullName: "Shaheer Hamad",
  profileImg: "https://i.pravatar.cc/300",
  amount: "2400",
  campaign: "Moto Mobiles",
  id: Math.floor(Math.random() * 10000000000000),
}));

export default function FundsProcessing() {
  return (
    <>
      <ScrollRestoration />
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <div className="d-flex align-items-center justify-content-between">
            <Typography variant="h6">Funds Processing</Typography>
            <div className="d-flex align-items-center">
              <Typography variant="caption">Recent</Typography>
              <IconButton>
                <BsFilter />
              </IconButton>
            </div>
          </div>
        </Grid>
        <Grid item xs={12}>
          <Table responsive>
            <thead className="text-muted">
              <tr>
                <th>
                  <Typography>Name</Typography>
                </th>
                <th>
                  <Typography>Date</Typography>
                </th>
                <th>
                  <Typography>Amount</Typography>
                </th>
                <th>
                  <Typography>Campaign</Typography>
                </th>
                <th></th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {data.map((item, i) => (
                <tr key={"data-row-" + i}>
                  <td style={{ minWidth: "180px" }}>
                    <div className="d-flex align-items-center py-1">
                      <Avatar src={item.profileImg} />
                      <div className="m-1"></div>
                      <Typography variant="body2">{item.fullName}</Typography>
                    </div>
                  </td>
                  <td
                    className="align-items-center "
                    style={{ minWidth: "120px" }}
                  >
                    <Typography variant="body2" className="text-muted">
                      {moment().format("DD MMM, YYYY")}
                    </Typography>
                  </td>
                  <td
                    className="align-items-center "
                    style={{ minWidth: "100px" }}
                  >
                    <div className="d-flex align-items-center">
                      <AiOutlineDollarCircle
                        size={25}
                        className="text-warning"
                      />
                      <Typography variant="body2" className="mx-1">
                        {item.amount}
                      </Typography>
                    </div>
                  </td>
                  <td style={{ minWidth: "120px" }}>
                    <Typography variant="body2">{item.campaign}</Typography>
                  </td>
                  <td>
                    <div className="d-flex align-items-center">
                      <Button
                        size="small"
                        color="grey"
                        className="text-capitalize mx-1"
                        variant="contained"
                        disableElevation
                      >
                        Pause
                      </Button>
                      <Button
                        size="small"
                        color="success"
                        className="text-capitalize mx-1"
                        variant="contained"
                        disableElevation
                      >
                        Release
                      </Button>
                    </div>
                  </td>
                  <td style={{ minWidth: "105px" }}>
                    <Button
                      size="small"
                      color="primary"
                      className="text-capitalize mx-1"
                      variant="contained"
                      disableElevation
                    >
                      View profile
                    </Button>
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
