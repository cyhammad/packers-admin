import * as React from "react";
import { styled } from "@mui/material/styles";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import InputBase from "@mui/material/InputBase";

const BootstrapInput = styled(InputBase)(({ theme }) => ({
  "& .MuiInputBase-input": {
    borderRadius: 4,
    position: "relative",
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.white.primary,

    // border: "1px solid #ced4da",
    fontSize: 16,
    padding: "10px 26px 10px 12px",
    transition: theme.transitions.create(["border-color", "box-shadow"]),
    // Use the system font instead of the default Roboto font.
    fontFamily: [
      "-apple-system",
      "BlinkMacSystemFont",
      '"Segoe UI"',
      "Roboto",
      '"Helvetica Neue"',
      "Arial",
      "sans-serif",
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(","),
    "&:focus": {
      borderRadius: 4,
      backgroundColor: theme.palette.primary.main,
      //   boxShadow: "0 0 0 0.2rem rgba(0,123,255,.25)",
    },
  },
}));

export default function CustomizedSelect(props) {
  return (
    <div>
      <FormControl sx={{ m: 1 }} variant="standard">
        <Select
          labelId="demo-customized-select-label"
          id="demo-customized-select"
          input={<BootstrapInput />}
          sx={{ minWidth: "150px" }}
          {...props}
        >
          {props.children}
        </Select>
      </FormControl>
    </div>
  );
}
