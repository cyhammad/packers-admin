import { Typography } from "@mui/material";

export default function Footer() {
  return (
    <Typography
      style={{ position: "absolute", bottom: 0, right: 0, left: 0 }}
      className="text-muted text-center p-2 p-md-4"
    >
      Copyright StepEV 2022
    </Typography>
  );
}
