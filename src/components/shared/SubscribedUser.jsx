import { Chip, Typography } from "@mui/material";
import { Box } from "@mui/system";

export default function SubscribedUser() {
  return (
    <Box
      className="p-3 px-2 d-flex align-items-center"
      sx={{
        background: " #FFFFFF",
        boxShadow: "0px 13px 21px rgba(0, 0, 0, 0.05)",
        borderRadius: "10px",
      }}
    >
      <img
        src="https://apnsolar.com/wp-content/uploads/2017/11/1-2.jpg"
        style={{ borderRadius: "10px", width: "90px", height: "90px" }}
      />
      <div className="px-2"></div>
      <div className="w-100">
        <div>
          <Typography>Shaheer</Typography>
          <Typography variant="caption" className="text-muted">
            Shaheer@email.com
          </Typography>
        </div>
        <div className="d-flex justify-content-end mt-2">
          <Chip
            label="Subscribed"
            color="success"
            sx={{ borderRadius: "5px" }}
          />
        </div>
      </div>
    </Box>
  );
}
