import { Chip, Grid, Typography } from "@mui/material";
import WarningAccount from "../components/warnings/WarningAccount";
import { ScrollRestoration } from "react-router-dom";
import SearchFeild from "../components/shared/SearchFeild";
import { useEffect, useState } from "react";
import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "../firebase";

export default function Verifications() {
  const [unverUsers, setUnverUsers] = useState([]);
  const handleFindUnverUsers = async () => {
    const q = query(collection(db, "Users"), where("verified", "==", false));

    const querySnapshot = await getDocs(q);
    querySnapshot.forEach((doc) => {
      // doc.data() is never undefined for query doc snapshots
      let data = doc.data();
      data.docId = doc.id;
      setUnverUsers([...unverUsers, data]);
    });
  }
  useEffect(
    () => {
      handleFindUnverUsers();
    },
    [db]
  );
  console.log(unverUsers);
  return (
    <>
      <ScrollRestoration />
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Typography variant="h5">
            Verification Center{" "}
            <Chip color="success" label="1" className="mx-2" />
          </Typography>
        </Grid>
        <Grid item xs={12} md={4}>
          <SearchFeild placeholder="Search customers" />
        </Grid>
        <Grid item xs={12} md={8}>
          <div className="bg-white w-100" style={{ minHeight: "100vh" }}>
            {unverUsers.map((user) => (
              <WarningAccount user={user} />
            ))}
          </div>
        </Grid>
      </Grid>
    </>
  );
}
