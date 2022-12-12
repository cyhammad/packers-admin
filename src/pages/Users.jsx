import { Grid, Typography, Container, Avatar } from "@mui/material";
import { Box } from "@mui/system";
import { useCallback, useEffect, useState } from "react";
import {
  BsExclamationTriangleFill,
  BsGlobe,
  BsMegaphoneFill,
  BsPeopleFill,
} from "react-icons/bs";
import SearchFeild from "../components/shared/SearchFeild";
import Table from "react-bootstrap/Table";
import TableActions from "../components/users/TableActions";
import { ScrollRestoration } from "react-router-dom";
import { collection, onSnapshot, orderBy, query } from "firebase/firestore";
import { db } from "../firebase";

export default function Users() {
  const userTypes = ["customers", "drivers"];
  const [activeType, setActiveType] = useState("customers");
  const [customersList, setCustomersList] = useState([]);
  const [activeData, setActiveData] = useState(customersList);
  const [driversList, setDriversList] = useState([]);

  useEffect(
    () =>
      onSnapshot(
        query(collection(db, "Users")),
        (snapshot) => {
          setCustomersList(snapshot.docs);
        }
      ),
    [db]
  );
  useEffect(
    () => 
      onSnapshot(
        query(collection(db, "Driver")),
        (snapshot) => {
          setDriversList(snapshot.docs);
        }
      ),
    [db]
  );
  useEffect(
    () => {
      // eslint-disable-next-line default-case
      switch (activeType) {
        case "customers":
          setActiveData(customersList);
          break;
        case "drivers":
          setActiveData(driversList);
          break;
      }
    },
    [activeType, customersList, driversList]
  );

  function getIcon(userTypes, activeType) {
    // eslint-disable-next-line
    switch (userTypes) {
      case "customers":
        return (
          <BsPeopleFill
            size={30}
            className={`${
              activeType === "customers" ? "text-white" : "text-primary"
            }`}
          />
        );
      case "drivers":
        return (
          <BsGlobe
            size={30}
            className={`${
              activeType === "drivers" ? "text-white" : "text-primary"
            }`}
          />
        );
    }
  }
  console.log(activeData);
  return (
    <>
      <ScrollRestoration />
      <Typography variant="h6">Users</Typography>
      <div className=" d-flex align-items-center justify-content-start">
        <Container maxWidth="md" className="m-0 p-0 mt-3">
          <Grid container spacing={3}>
            {userTypes.map((item, i) => (
              <Grid item xs={6} md={3} key={"grid-item" + i}>
                <Box
                  onClick={() => {
                    setActiveType(item);
                  }}
                  sx={{
                    padding: 2,
                    boxShadow: " 0px 4px 71px rgba(0, 0, 0, 0.04)",
                    borderRadius: "15px",
                    cursor: "pointer",
                  }}
                  className={`d-flex flex-column align-items-center justify-content-center ${
                    item === activeType ? "bg-primary" : "bg-white"
                  }`}
                >
                  {getIcon(item, activeType)}
                  <Typography
                    className={`mt-3 text-capitalize d-block  ${
                      item === activeType ? "text-white" : "text-primary"
                    }`}
                  >
                    {item.split("_").join(" ")}
                  </Typography>
                </Box>
              </Grid>
            ))}
            <Grid item xs={12}>
              <SearchFeild placeholder="Search user by name,email...." />
            </Grid>
            <Grid item xs={12}>
              <Table responsive>
                <thead className="text-muted">
                  <tr>
                    <th>
                      <Typography>Name</Typography>
                    </th>
                    <th>
                      {" "}
                      <Typography>Phone</Typography>
                    </th>
                    <th>
                      {" "}
                      <Typography>Email</Typography>
                    </th>
                    <th></th>
                  </tr>
                </thead>
                <tbody>
                  {activeData.map((item, i) => (
                    <tr key={"data-row-" + i}>
                      <td style={{ minWidth: "210px" }}>
                        <div className="d-flex align-items-center justify-content-between py-1">
                          <d className="d-flex align-items-center">
                            <Avatar src={item.data().profile_image} />
                            <div className="m-1"></div>
                            <Typography variant="body2">
                              {item.data().username}
                            </Typography>
                          </d>
                          <div
                            className={`d-flex align-items-end ${
                              item.data().warnings ? "d-block" : "d-none"
                            }`}
                          >
                            <BsExclamationTriangleFill className="text-danger mx-2" />
                            <Typography
                              variant="caption"
                              sx={{ lineHeight: 0.8 }}
                            >
                              {item.data().warnings}
                            </Typography>
                          </div>
                        </div>
                      </td>
                      <td
                        className="align-items-center "
                        style={{ minWidth: "120px" }}
                      >
                        <Typography variant="body2" className="text-muted">
                          {item.data().contact}
                        </Typography>
                      </td>
                      <td>
                        <Typography variant="body2" className="text-muted">
                          {item.data().email}
                        </Typography>
                      </td>
                      <td>
                        <TableActions />
                      </td>
                    </tr>
                  ))}
                </tbody>
              </Table>
            </Grid>
          </Grid>
        </Container>
      </div>
    </>
  );
}
