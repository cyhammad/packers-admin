import { Divider, List, ListItem, Typography } from "@mui/material";
import { AppLogo } from "../../assets/icons";
import {
  BsGrid,
  BsFillGridFill,
  BsPerson,
  BsPersonFill,
  BsMegaphone,
  BsMegaphoneFill,
  BsExclamationTriangleFill,
  BsExclamationTriangle,
  BsPeople,
  BsPeopleFill,
  BsGear,
  BsGearFill,
  BsBoxArrowRight,
} from "react-icons/bs";
import {
  IoWalletOutline,
  IoWallet,
  IoReceiptOutline,
  IoReaderSharp,
  IoReceiptSharp,
} from "react-icons/io5";
import { AiOutlineDollarCircle, AiFillDollarCircle } from "react-icons/ai";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useCallback, useEffect, useState } from "react";
import { theme } from "../../styles/MUItheme";
import SearchFeild from "../shared/SearchFeild";
import { signOut } from "firebase/auth";
import { auth } from "../../firebase";

export default function DrawerList() {
  const { pathname } = useLocation();
  const [activeLink, setActiveLink] = useState("overview");
  const navigate = useNavigate();

  const checkURL = useCallback(() => {
    if (pathname === "/") setActiveLink("overview");
    else if (pathname === "/users") setActiveLink("users");
    else if (pathname === "/orders") setActiveLink("campaigns");
    else if (pathname === "/wallet") setActiveLink("wallet");
    else if (pathname === "/funds-processing")
      setActiveLink("funds-processing");
    else if (pathname === "/verifications") setActiveLink("warnings");
    else if (pathname === "/settings") setActiveLink("settings");
    else if (pathname === "/profile") setActiveLink("profile");
  }, [pathname]);

  useEffect(() => {
    checkURL();
  }, [checkURL]);

  const handleSignOut = () => {
    signOut(auth).then(
      ()=>navigate("/login")
    )
  }
  return (
    <div>
      <div>
        <Link to={"/"} className="d-flex justify-content-center">
          <div className="d-none d-md-block">
            <AppLogo />
          </div>
          <img
            src={require("../../assets/app-logo.png")}
            alt="app-logo"
            className="d-block d-md-none"
          />
        </Link>
        <List
          sx={{
            [theme.breakpoints.up("md")]: {
              paddingRight: 2,
            },
          }}
        >
          <ListItem className="d-lg-none">
            <SearchFeild
              placeholder="Search campaigns,users..."
              // sx={{ minWidth: "280px" }}
            />
          </ListItem>
          <Link to={""} className="text-decoration-none text-dark">
            {" "}
            <ListItem
              className={`p-3 px-4 nav-item ${
                activeLink === "overview" ? "nav-item-active " : "text-muted"
              }`}
            >
              <div style={{ width: "50px" }}>
                {activeLink !== "overview" ? (
                  <BsGrid size={25} />
                ) : (
                  <BsFillGridFill size={25} />
                )}
              </div>
              <Typography>Dashboard</Typography>
            </ListItem>
          </Link>
          <Link to={"/users"} className="text-decoration-none text-dark">
            {" "}
            <ListItem
              className={`p-3 px-4 nav-item ${
                activeLink === "users" ? "nav-item-active" : "text-muted"
              }`}
            >
              <div style={{ width: "50px" }}>
                {activeLink !== "users" ? (
                  <BsPeople size={25} />
                ) : (
                  <BsPeopleFill size={25} />
                )}
              </div>
              <Typography>Customers</Typography>
            </ListItem>
          </Link>
          <Link to={"/orders"} className="text-decoration-none text-dark">
            {" "}
            <ListItem
              className={`p-3 px-4 nav-item ${
                activeLink === "campaigns" ? "nav-item-active" : "text-muted"
              }`}
            >
              <div style={{ width: "50px" }}>
                {activeLink !== "campaigns" ? (
                  <IoReceiptOutline size={20} />
                ) : (
                  <IoReceiptSharp size={20} />
                )}
              </div>
              <Typography>Orders</Typography>
            </ListItem>
          </Link>
          <Link to={"/wallet"} className="text-decoration-none text-dark">
            {" "}
            <ListItem
              className={`p-3 px-4 nav-item ${
                activeLink === "wallet" ? "nav-item-active" : "text-muted"
              }`}
            >
              <div style={{ width: "50px" }}>
                {activeLink !== "wallet" ? (
                  <IoWalletOutline size={25} />
                ) : (
                  <IoWallet size={25} />
                )}
              </div>
              <Typography>Wallet</Typography>
            </ListItem>
          </Link>
          <Link
            to={"/funds-processing"}
            className="text-decoration-none text-dark"
          >
            {" "}
            <ListItem
              className={`p-3 px-4 nav-item ${
                activeLink === "funds-processing"
                  ? "nav-item-active"
                  : "text-muted"
              }`}
            >
              <div style={{ width: "50px" }}>
                {activeLink !== "funds-processing" ? (
                  <AiOutlineDollarCircle size={25} />
                ) : (
                  <AiFillDollarCircle size={25} />
                )}
              </div>
              <Typography>Funds Processing</Typography>
            </ListItem>
          </Link>
          <Link
            to={"/verifications"}
            className="text-decoration-none text-dark"
          >
            {" "}
            <ListItem
              className={`p-3 px-4 nav-item ${
                activeLink === "warnings" ? "nav-item-active" : "text-muted"
              }`}
            >
              <div style={{ width: "50px" }}>
                {activeLink !== "warnings" ? (
                  <BsExclamationTriangle size={20} />
                ) : (
                  <BsExclamationTriangleFill size={20} />
                )}
              </div>
              <Typography>Verifications</Typography>
            </ListItem>
          </Link>
        </List>
        <Divider className="m-2 mx-4" sx={{ border: "1px solid #ccc" }} />
        <List sx={{ paddingRight: 5 }}>
          <Link
            to={"/settings"}
            className="text-decoration-none text-dark"
          >
            {" "}
            <ListItem
              className={`p-3 px-4 nav-item ${
                activeLink === "settings" ? "nav-item-active" : "text-muted"
              }`}
            >
              <div style={{ width: "50px" }}>
                {activeLink !== "settings" ? (
                  <BsGear size={20} />
                ) : (
                  <BsGearFill size={20} />
                )}
              </div>
              <Typography>Settings</Typography>
            </ListItem>
          </Link>
          <Link
            to={"/profile"}
            className="text-decoration-none text-dark"
          >
            {" "}
            <ListItem
              className={`p-3 px-4 nav-item ${
                activeLink === "profile" ? "nav-item-active" : "text-muted"
              }`}
            >
              <div style={{ width: "50px" }}>
                {activeLink !== "profile" ? (
                  <BsPerson size={25} />
                ) : (
                  <BsPersonFill size={25} />
                )}
              </div>
              <Typography>Profile</Typography>
            </ListItem>
          </Link>
        </List>
      </div>
      <List sx={{ paddingRight: 3 }}>
        <Link to={""} className="text-decoration-none text-muted">
          {" "}
          <ListItem className={`p-3 px-4 mr-3 nav-item `} onClick={()=>handleSignOut()}>
            <div style={{ width: "50px" }}>
              <BsBoxArrowRight size={23} />
            </div>
            <Typography>Signout</Typography>
          </ListItem>
        </Link>
      </List>
    </div>
  );
}
