import { TextField, alpha } from "@mui/material";
import { makeStyles } from "@mui/styles";

const useStylesReddit = makeStyles((theme) => ({
  root: {
    // border: "1px solid #999",
    overflow: "hidden",
    borderRadius: 4,

    backgroundColor: theme.palette.mode === "light" ? "#eee" : "#2b2b2b",
    transition: theme.transitions.create([
      "border-color",
      "background-color",
      "box-shadow",
    ]),
    "&:hover": {
      backgroundColor: "#eee",
    },
    "&.Mui-focused": {
      backgroundColor: "#eee",
      boxShadow: `${alpha(theme.palette.primary.main, 0.2)} 0 0 0 2px`,
      borderColor: theme.palette.primary.main,
    },
  },
}));

export default function TextFeildCustom(props) {
  const classes = useStylesReddit();
  return (
    <TextField
      {...props}
      InputProps={{ classes, disableUnderline: true }}
      variant="filled"
      sx={{ backgroundColor: "#fff" }}
      className="my-2"
    />
  );
}
