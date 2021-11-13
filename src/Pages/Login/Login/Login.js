import {
  Alert,
  Button,
  CircularProgress,
  Container,
  Grid,
  TextField,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import { NavLink, useLocation, useHistory } from "react-router-dom";
import useAuth from "../../../hooks/useAuth";

const Login = () => {
  const [loginData, setLoginData] = useState({});
  const history = useHistory();
  const { user, loginUser, isLoading, authError, signInWithGoogle } = useAuth();

  const location = useLocation();

  const handleOnChange = (e) => {
    const field = e.target.name;
    const value = e.target.value;
    const newLoginData = { ...loginData };
    newLoginData[field] = value;
    setLoginData(newLoginData);
  };

  const handleLoginSubmit = (e) => {
    loginUser(loginData.email, loginData.password, location, history);
    e.preventDefault();
  };

  const handleGoogleSignIn = () => {
    signInWithGoogle(location, history);
  };

  return (
    <Container>
      <Grid sx={{ mt: 15 }} container spacing={2}>
        <Grid item sx={{ mt: 8 }} xs={12} md={6}>
          <Typography variant="body1" gutterBottom>
            Login
          </Typography>

          <form onSubmit={handleLoginSubmit}>
            <TextField
              sx={{ width: "75%", m: 1 }}
              id="standard-basic"
              label="Your Email"
              name="email"
              onChange={handleOnChange}
              variant="standard"
            />
            <TextField
              sx={{ width: "75%", m: 1 }}
              id="standard-basic"
              label="Your Password"
              name="password"
              onChange={handleOnChange}
              type="password"
              variant="standard"
            />

            <Button
              sx={{ width: "75%", m: 1 }}
              type="submit"
              variant="contained"
            >
              Login
            </Button>
          </form>
          {isLoading && <CircularProgress />}
          {user?.email && (
            <Alert severity="success">You Logged In successfully</Alert>
          )}
          {authError && <Alert severity="error">{authError}</Alert>}
          <NavLink style={{ textDecoration: "none" }} to="/register">
            <Button variant="text">New user ?Please Register</Button>
          </NavLink>
          <p>------------------------------------------</p>
          <Button onClick={handleGoogleSignIn} variant="contained">
            Google Sign in
          </Button>
        </Grid>
        <Grid item xs={12} md={6}>
          <img
            style={{ width: "100%" }}
            src="https://images.unsplash.com/photo-1628891435222-065925dcb365?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1170&q=80"
            alt=""
          />
        </Grid>
      </Grid>
    </Container>
  );
};

export default Login;
