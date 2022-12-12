import { Avatar, Typography } from "@mui/material";
import { BsArrowUp } from "react-icons/bs";

export default function Profit() {
  return (
    <div className="d-flex align-items-center justify-content-between my-4">
      <div className="d-flex align-items-center py-1">
        <Avatar src={"https://i.pravatar.cc/300"} />
        <div className="m-1"></div>
        <div>
          <Typography sx={{ lineHeight: 0.8 }}>Company Name</Typography>
          <Typography variant="caption" className="text-muted">
            Type
          </Typography>
        </div>
      </div>
      <div className="d-flex align-items-center">
        <BsArrowUp size={25} />
        <div className="d-flex flex-column align-items-end">
          <Typography variant="body2">$54.647</Typography>
          <Typography variant="caption" className="text-danger">
            0.15%
          </Typography>
        </div>
      </div>
    </div>
  );
}
