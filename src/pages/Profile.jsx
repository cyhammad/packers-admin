import { PhotoCamera, LocationOn, Email, Phone } from "@mui/icons-material";
import { Grid, Typography, Stack, IconButton, Divider } from "@mui/material";
import { collection, getDocs, query, where } from "firebase/firestore";
import { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { ScrollRestoration } from "react-router-dom";
import { db } from "../firebase";

export default function Profile() {
  const [admin, setAdmin] = useState(null);
  const handleFindAdmin = async () => {
    const q = query(collection(db, "Users"), where("superuser", "==", true));

    const querySnapshot = await getDocs(q);
    querySnapshot.forEach((doc) => {
      // doc.data() is never undefined for query doc snapshots
      let data = doc.data();
      data.docId = doc.id;
      setAdmin(data);
    });
  }
  useEffect(
    () => {
      handleFindAdmin();
    },
    [db]
  );
  return (
    <>
      <ScrollRestoration />
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Typography variant="h6">Profile</Typography>
        </Grid>
        <Grid item className="d-flex flex-column align-items-center">
          <div style={{ position: "relative", overflow: "hidden" }}>
            <label for="myfile">
              <div
                style={{
                  backgroundColor: "rgba(0,0,0,0.3)",
                  // opacity: "0.1",
                  position: "absolute",
                  top: 0,
                  left: 0,
                  right: 0,
                  bottom: 0,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  borderRadius: "15px",
                }}
              >
                <PhotoCamera
                  color="white"
                  sx={{ fontSize: 60, opacity: 0.6 }}
                />
              </div>
            </label>

            <img
              src="https://realtymississauga.ca/assets/img/user/9a8b22018b6f974d558ec54a83dd5911.jpg"
              alt=""
              width={"200px"}
              style={{ borderRadius: "15px" }}
            ></img>
          </div>
          <Link to={""} className="mt-2 text-dark">
            Edit Profile
          </Link>
          <input
            className="d-none"
            type="file"
            id="myfile"
            name="myfile"
            accept="image/*"
          />
        </Grid>
        <Grid xs={12} md={8} lg={9} className=" px-3 mt-3">
          <Divider sx={{ borderColor: "#bbb" }} className="my-2" />
          <Typography variant="h4" className="mb-2">
            {admin?.name}
          </Typography>
          <Stack gap={2}>
            <div className="d-flex align-items-center">
              <IconButton
                size="small"
                disableElevation
                className="bg-light"
                sx={{ borderRadius: 2 }}
              >
                <LocationOn color="primary" />
              </IconButton>
              <Typography className="mx-2">{admin?.address}</Typography>
            </div>
            <div className="d-flex align-items-center">
              <IconButton
                size="small"
                disableElevation
                className="bg-light"
                sx={{ borderRadius: 2 }}
              >
                <Email />
              </IconButton>
              <Typography className="mx-2">{admin?.email}</Typography>
            </div>
            <div className="d-flex align-items-center">
              <IconButton
                size="small"
                disableElevation
                className="bg-light"
                sx={{ borderRadius: 2 }}
              >
                <Phone />
              </IconButton>

              <Typography className="mx-2">{admin?.contact}</Typography>
            </div>
          </Stack>
        </Grid>
      </Grid>
    </>
  );
}
