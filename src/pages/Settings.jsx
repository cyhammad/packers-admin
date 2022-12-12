import { EditOutlined } from "@mui/icons-material";
import { Divider, Grid, Typography } from "@mui/material";
import { BsPerson } from "react-icons/bs";
import { MdLockOutline } from "react-icons/md";
import { AiFillBank } from "react-icons/ai";
import CustomSwitch from "../components/shared/Switch";
import { ScrollRestoration } from "react-router-dom";

export default function Settings() {
  return (
    <Grid container spacing={3}>
      <ScrollRestoration />
      <Grid item xs={12}>
        <Typography variant="h5">Settings</Typography>
      </Grid>
      <Grid item xs={12} className="px-5">
        <Typography variant="h6">Security</Typography>
        <Divider className="my-2" sx={{ border: "1px solid #ddd" }} />
        <div className="px-2">
          <div className="d-flex align-items-center justify-content-between mt-3">
            <Typography className="text-muted">Change Password</Typography>
            <MdLockOutline color="text-dark" size={23} />
          </div>
          <Divider className="my-3" sx={{ border: "1px solid #ddd" }} />
          <div className="d-flex align-items-center justify-content-between mt-3">
            <Typography className="text-muted">
              Change Email/Username
            </Typography>
            <BsPerson size={25} />
          </div>
          <Divider className="my-3" sx={{ border: "1px solid #ddd" }} />
        </div>
        <Typography variant="h6">General</Typography>
        <Divider className="my-2" sx={{ border: "1px solid #ddd" }} />
        <div className="px-2">
          <div className="d-flex align-items-center justify-content-between mt-3">
            <Typography className="text-muted">Notifications</Typography>
            <CustomSwitch />
          </div>
          <Divider className="my-3" sx={{ border: "1px solid #ddd" }} />
          <div className="d-flex align-items-center justify-content-between mt-3">
            <Typography className="text-muted">
              Change Profile Picture
            </Typography>
            <EditOutlined />
          </div>
          <Divider className="my-3" sx={{ border: "1px solid #ddd" }} />
        </div>
        <Typography variant="h6">Payments</Typography>
        <Divider className="my-2" sx={{ border: "1px solid #ddd" }} />
        <div className="px-2">
          <div className="d-flex align-items-center justify-content-between mt-3">
            <Typography className="text-muted">Bank Accounts</Typography>
            <AiFillBank size={23} />
          </div>
        </div>
      </Grid>
    </Grid>
  );
}
