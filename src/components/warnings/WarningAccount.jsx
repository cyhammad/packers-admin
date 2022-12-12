import { Typography, Box, Button, Avatar } from "@mui/material";
import { doc, updateDoc } from "firebase/firestore";
import { useState } from "react";
import { BsExclamationTriangleFill } from "react-icons/bs";
import { useNavigate } from "react-router-dom";
import { db } from "../../firebase";

const styles = {
  background: "#FFFFFF",
  boxShadow: "0px 4px 71px rgba(0, 0, 0, 0.06)",
  borderRadius: "15px",
  padding: 2,
};

export default function WarningAccount({user}) {
  const warnings = Math.floor(Math.random() * 4) + 1;
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const handleApprove = async() => {
    setLoading(true);
    await updateDoc(doc(db, "Users", user.docId), {
      verified: true,
    }).then(() => {
      setLoading(false);
      navigate("/verifications");
    }
    );
  }
  return (
    <Box sx={{ ...styles }}>
      <div className="d-flex align-items-center justify-content-between">
        <div className="d-flex align-items-center">
          <Avatar src="https://i.pravatar.cc/300" />
          <div className="mx-2">
            <Typography className="p-0 m-0" sx={{ lineHeight: 1 }}>
              {user.username}
            </Typography>
            <Typography
              variant="caption"
              className="text-muted p-0"
              sx={{ lineHeight: 1 }}
            >
              {user.email}
            </Typography>
          </div>
        </div>
        <div className="d-flex align-items-center">
          <BsExclamationTriangleFill className="text-danger mx-1" />
          <Typography variant="body2">{warnings}</Typography>
        </div>
      </div>
      <Typography
        variant="body2"
        className="my-3 text-muted text-justified"
        sx={{ lineHeight: 1.2 }}
      >
        Unverified User.                  Date of Birth: {user.dateOfBirth}
      </Typography>
      <div className=" d-flex justify-content-between">
        <Button
          size="small"
          className="text-capitalize"
          variant="contained"
          disableElevation
          disabled={loading}
          onClick={()=>handleApprove()}
        >
          {loading ? "Approving..." : "Approve"}
        </Button>
        <div className="d-flex align-items-start">
          <img
            src={require("../../assets/motomobile.png")}
            width="20"
            alt="company-logo"
            className="mx-2"
          />
          <div className="d-flex flex-column align-items-end">
            <Typography variant="body2">Moto Mobile</Typography>
            <Typography variant="caption" className="text-muted">
              warned by
            </Typography>
          </div>
        </div>
      </div>
    </Box>
  );
}
