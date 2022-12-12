import { Button, Container, Typography } from "@mui/material";
import { signInWithEmailAndPassword } from "firebase/auth";
import { collection, getDocs, query, where } from "firebase/firestore";
import { useState } from "react";
import { Link, Navigate, ScrollRestoration, useNavigate } from "react-router-dom";
import Footer from "../components/shared/Footer";
import TextFeildCustom from "../components/shared/TextFeild";
import { useAuth } from "../context/AuthContext";
import { auth, db } from "../firebase";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [errAlert, setErrAlert] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    if (loading) return;
    setLoading(true);
    const q = query(collection(db, "Users"), where("email", "==", email));
    const querySnapshot = await getDocs(q);
    console.log(querySnapshot.docs);
    querySnapshot.forEach(async (doc) => {
      console.log(doc.data().superuser)
      if (doc.data().superuser) {
        console.log(auth)
        signInWithEmailAndPassword(auth, email, password).then(
          ()=>{
            console.log(auth.currentUser);
            return navigate("/")
          }
        )
        
      } else {
        setErrAlert("User is not admin");
      }
    });
    setLoading(false);
  };
  return (
    <>
      <ScrollRestoration />
      <div className="mh-100vh d-flex align-items-center login-page">
        <Container
          maxWidth="xs"
          className="d-flex flex-column justify-content-center align-items-center "
        >
          <Typography variant="h3">👋🏻</Typography>
          <Typography variant="h4">Welcome Admin</Typography>
          <Typography className="text-muted">
            Please login to continue
          </Typography>
          <form className="w-100 mt-4">
            <TextFeildCustom
              label="Email"
              variant="filled"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              fullWidth
            />
            <TextFeildCustom
              label="Password"
              variant="filled"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              fullWidth
            />
            <Button
              variant="contained"
              color="primary"
              sx={{ padding: 2 }}
              className="text-capitalize my-2"
              fullWidth
              disableElevation
              onClick={() => handleLogin()}
              disabled={loading}
            >
              Login
            </Button>
            <Typography className="my-2 text-center ">
              <Link className="text-decoration-none text-dark" to={""}>
                Forget Password?
              </Link>
            </Typography>
          </form>
        </Container>
        <div
          style={{ position: "absolute", bottom: 0, right: 0 }}
          className="d-none d-md-block"
        >
          <div style={{ position: "relative" }}>
            <img
              style={{
                position: "absolute",
                right: 0,
                top: "50%",
                transform: "translateY(-58%)",
              }}
              src={require("../assets/login-circle-1.png")}
              alt=""
              className="login-circle-1"
            />
            <img
              src={require("../assets/login-circle-2.png")}
              alt=""
              className="login-circle-2"
            />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
