import { TextField } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { alpha } from "@mui/material/styles";

const useStylesReddit = makeStyles((theme) => ({
  root: {
    border: "none",
    overflow: "hidden",
    borderRadius: 4,
    [theme.breakpoints.down("sm")]: {
      padding: "7px 10px",
    },
    padding: "3px 10px",
    paddingTop: "8px",
    backgroundColor: alpha(theme.palette.white.main, 0.5),
    transition: theme.transitions.create([
      "border-color",
      "background-color",
      "box-shadow",
    ]),
    "&:hover": {
      backgroundColor: alpha(theme.palette.white.main, 0.5),
    },
    "&.Mui-focused": {
      backgroundColor: alpha(theme.palette.white.main, 0.5),
      boxShadow: `${alpha(theme.palette.primary.main, 0.2)} 0 0 0 2px`,
      borderColor: theme.palette.primary.main,
    },
  },
}));

export default function TextFeildCustomWhite(props) {
  const classes = useStylesReddit();
  return (
    <TextField
      {...props}
      InputProps={{ classes, disableUnderline: true }}
      className="my-2 text-white"
      variant="standard"
      size="large"
      sx={{ input: { color: "#fff" } }}
    />
  );
}
