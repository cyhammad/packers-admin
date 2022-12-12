import { Grid, Typography } from "@mui/material";
import { collection, getDocs, query, where } from "firebase/firestore";
import { useEffect, useState } from "react";
import { ScrollRestoration } from "react-router-dom";
import CampaignCard from "../components/shared/CampaignCard";
import { db } from "../firebase";

export default function Orders() {
  const [orderList, setOrderList] = useState([]);
  const getOrders = async() => {
    const q = query(collection(db, "Orders"));
    const querySnapshot = await getDocs(q);
    querySnapshot.forEach((doc) => {
      var data = doc.data();
      data.docId = doc.id;
      setOrderList([...orderList, data]);
    });
  }
  useEffect(
    () =>{
      getOrders()
    },
    [db]
  );
  return (
    <>
      <ScrollRestoration />
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Typography variant="h5">Orders</Typography>
        </Grid>
        {orderList.map(ins=>(
          <Grid item xs={12} sm={6} md={4}>
            <CampaignCard order={ins} />
          </Grid>
        ))}
      </Grid>
    </>
  );
}
