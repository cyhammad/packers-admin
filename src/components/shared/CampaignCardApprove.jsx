import { Typography, Box, IconButton } from "@mui/material";
import { BsThreeDotsVertical, BsX, BsCheck2 } from "react-icons/bs";

const styles = {
  background: "#FFFFFF",
  boxShadow: "0px 4px 71px rgba(0, 0, 0, 0.04)",
  borderRadius: "15px",
  overflow: "hidden",
};

export default function CampaignCardApproval() {
  return (
    <Box sx={{ ...styles }}>
      <div style={{ padding: 10 }}>
        <div className="d-flex align-items-center justify-content-between">
          <div className="d-flex align-items-center">
            <img
              src="https://i.pinimg.com/originals/f7/57/54/f757543c5a7ff5dbb7c1fa00f331a427.jpg"
              alt="company-logo"
              width={40}
              height={40}
              className="border rounded"
            />
            <div className="mx-2">
              <Typography
                variant="body2"
                className="p-0 m-0"
                sx={{ lineHeight: 1.2 }}
              >
                Company Name
              </Typography>
              <Typography
                variant="caption"
                className="text-muted p-0"
                sx={{ lineHeight: 1 }}
              >
                Company Type
              </Typography>
            </div>
          </div>
          <IconButton>
            <BsThreeDotsVertical size={18} />
          </IconButton>
        </div>
        <Typography
          variant="body2"
          className="my-3 text-muted text-justified"
          sx={{ lineHeight: 1.2 }}
        >
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. In laborum
          alias.
        </Typography>
      </div>
      <div className="bg-light d-flex align-items-center justify-content-end p-2 ">
        <Typography variant="caption">Approval</Typography>
        <IconButton
          sx={{ borderRadius: "50%", width: 20, height: 20, padding: 0.3 }}
          className="text-white bg-danger mx-1"
        >
          <BsX />
        </IconButton>
        <IconButton
          sx={{ borderRadius: "50%", width: 20, height: 20, padding: 0.3 }}
          className="text-white bg-dark mx-1"
        >
          <BsCheck2 />
        </IconButton>
      </div>
    </Box>
  );
}
