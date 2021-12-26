import React from "react";
import AirplanemodeActiveOutlinedIcon from '@mui/icons-material/AirplanemodeActiveOutlined';
import {AppBar,Toolbar,CssBaseline,makeStyles, Avatar} from "@material-ui/core";
import { Link } from "react-router-dom";


const useStyles = makeStyles((theme) => ({
  navlinks: {
    marginLeft: theme.spacing(10),
    display: "flex",
  },
 logo: {
    flexGrow: "1",
    cursor: "pointer",
  },
  link: {
    textDecoration: "none",
    color: "white",
    fontSize: "15px",
    marginLeft: theme.spacing(20),
    "&:hover": {
      color: "yellow",
      borderBottom: "1px solid white",
    },
  },
}));

function Home() {
  const classes = useStyles();
  const avatarStyle={backgroundColor:'#1bbd7e'}
  return (
    
    
    <AppBar position="static">
      <CssBaseline />
      <Toolbar>
        
      <Avatar style={avatarStyle}><AirplanemodeActiveOutlinedIcon/></Avatar>
     
          <div className={classes.navlinks}>
            <Link to="/Admin_Home" className={classes.link}>
              Home
            </Link>
            <Link to="/create_flight" className={classes.link}>
              Create Flight
            </Link>
            <Link to="/view_all" className={classes.link}>
              View Available Flights
            </Link>
            <Link to="search_flight" className={classes.link}>
             Search Flights
            </Link>
            
          </div>
      </Toolbar>
    </AppBar>
  
     
  );
}
export default Home;