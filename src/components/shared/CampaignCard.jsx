import {
  ChevronRight,
  FlightTakeoff,
  Inventory,
  KeyboardDoubleArrowRight,
} from "@mui/icons-material";
import {
  Typography,
  Box,
  IconButton,
  Button,
  Divider,
  Avatar,
  Chip,
} from "@mui/material";
import moment from "moment";
import { BsThreeDotsVertical, BsEyeFill } from "react-icons/bs";
import { Link } from "react-router-dom";

const styles = {
  background: "#FFFFFF",
  boxShadow: "0px 4px 71px rgba(0, 0, 0, 0.04)",
  borderRadius: "15px",
  padding: 2,
  width: "100%",
};

export default function CampaignCard({order}) {
  return (
    <Box sx={{ ...styles }}>
      <div className="d-flex align-items-center justify-content-between">
        <div>
          <Typography className="text-info">{order.departureCity}</Typography>
          <Typography variant="caption">{order.departureCountry}</Typography>
        </div>
        <div style={{ flex: 1 }} className="mx-3">
          <div className="d-flex align-items-center w-100">
            <Divider
              textAlign="center"
              className="w-100 m-0"
              style={{ flex: 1, borderColor: "#777", borderStyle: "dashed" }}
            ></Divider>
            <FlightTakeoff className="mx-2 " style={{ color: "#777" }} />
            <Divider
              textAlign="center"
              className="w-100 m-0"
              style={{ flex: 1, borderColor: "#777", borderStyle: "dashed" }}
            ></Divider>
          </div>
          <div className="d-flex justify-content-center mt-2">
            <Typography
              variant="caption"
              style={{ fontWeight: "bold", color: "#444" }}
            >
              {moment().format("DD MMM")}
            </Typography>
          </div>
        </div>
        <div>
          <Typography className="text-success">{order.arrivalCity}</Typography>
          <Typography variant="caption">{order.arrivalCountry}</Typography>
        </div>
      </div>
      <Typography className="my-3">
        {order.message ? order.message : "No message"}
      </Typography>
      <div className="d-flex align-items-center justify-content-between my-4">
        <div>
          <Chip label="In-progress" color="warning"></Chip>
        </div>
      </div>
      <div className="mt-4 d-flex align-items-center justify-content-between">
        <div className="d-flex align-items-center">
          <Inventory className="text-info" />
          <Typography className="mx-2">{order.weight}KG</Typography>
        </div>
        <Link className="text-decoration-none text-dark" to={`/orders/${order.docId}`}>
          <Typography variant="caption" className="cursor-pointer">
            More Details <KeyboardDoubleArrowRight />
          </Typography>
        </Link>
      </div>
    </Box>
  );
}
