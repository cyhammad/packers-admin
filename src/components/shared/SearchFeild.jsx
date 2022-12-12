import { InputBase } from "@mui/material";
import { Box } from "@mui/system";
import { BsSearch } from "react-icons/bs";

export default function SearchFeild(props) {
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        padding: "10px 20px",
        backgroundColor: "#fff",
        boxShadow: "0px 4px 19px rgba(0, 0, 0, 0.04)",
        borderRadius: "10px",
        height: "50px",
      }}
    >
      <BsSearch size={20} className="text-muted" />
      <InputBase className="mx-3 w-100" {...props} />
    </Box>
  );
}
