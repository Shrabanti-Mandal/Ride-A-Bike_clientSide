import * as React from "react";
import PropTypes from "prop-types";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";

import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { Link } from "react-router-dom";
import { Button } from "@mui/material";
import { Switch, Route, useRouteMatch } from "react-router-dom";
import DashboardHome from "../DashboardHome/DashboardHome";

import MakeAdmin from "../MakeAdmin/MakeAdmin";
import ManageAllOrders from "../ManageAllOrders/ManageAllOrders";
import ManageProducts from "../ManageProducts/ManageProducts";
import Pay from "../Pay/Pay";
import MyOrders from "../MyOrders/MyOrders";
import Reviews from "../../Shared/Reviews/Reviews";
import AddServices from "../../AddServices/AddServices";
import useAuth from "../../../hooks/useAuth";
const drawerWidth = 240;

function Dashboard(props) {
  const { logOut } = useAuth();
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);
  let { path, url } = useRouteMatch();
  const { admin } = useAuth();

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <div>
      <Toolbar />

      <Link to={`${url}`}>
        <Button color="inherit">Dashboard</Button>
      </Link>

      {admin ? (
        <Box>
          <Link to={`${url}/makeAdmin`}>
            <Button color="inherit">Make Admin</Button>
          </Link>
          <Link to={`${url}/addServices`}>
            <Button color="inherit">Add a Product</Button>
          </Link>

          <Link to={`${url}/manageAllOrders`}>
            <Button color="inherit">Manage All Orders</Button>
          </Link>
          <Link to={`${url}/manageProducts`}>
            <Button color="inherit">Manage Products</Button>
          </Link>
        </Box>
      ) : (
        <Box>
          <Link to={`${url}/pay`}>
            <Button color="inherit">Pay</Button>
          </Link>
          <Link to={`${url}/myOrders`}>
            <Button color="inherit">My orders</Button>
          </Link>
          <Link to={`${url}/reviews`}>
            <Button color="inherit">Add Reviews</Button>
          </Link>
        </Box>
      )}

      <Divider />
      <Link to={`/`}>
        <Button color="inherit">Home</Button>
      </Link>
      <Button onClick={logOut} color="inherit">
        Log Out
      </Button>
    </div>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          ml: { sm: `${drawerWidth}px` },
        }}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: "none" } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap component="div">
            Dashboard
          </Typography>
        </Toolbar>
      </AppBar>

      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"
      >
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: "none", sm: "block" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: 3,
          width: { sm: `calc(100% - ${drawerWidth}px)` },
        }}
      >
        <Toolbar />
        <Switch>
          <Route exact path={path}>
            <DashboardHome></DashboardHome>
          </Route>

          <Route exact path={`${path}/manageAllOrders`}>
            <ManageAllOrders></ManageAllOrders>
          </Route>
          <Route exact path={`${path}/makeAdmin`}>
            <MakeAdmin></MakeAdmin>
          </Route>
          <Route exact path={`${path}/manageProducts`}>
            <ManageProducts></ManageProducts>
          </Route>
          <Route exact path={`${path}/addServices`}>
            <AddServices></AddServices>
          </Route>
          <Route exact path={`${path}/pay`}>
            <Pay></Pay>
          </Route>
          <Route exact path={`${path}/myOrders`}>
            <MyOrders></MyOrders>
          </Route>
          <Route exact path={`${path}/reviews`}>
            <Reviews></Reviews>
          </Route>
        </Switch>
      </Box>
    </Box>
  );
}

Dashboard.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

export default Dashboard;
