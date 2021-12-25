




import React from "react";
import AirplanemodeActiveOutlinedIcon from '@mui/icons-material/AirplanemodeActiveOutlined';
import {    
  AppBar,
  Toolbar,
  CssBaseline,
  Typography,
  makeStyles,
  Avatar
} from "@material-ui/core";
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

function User_Home(props) {
    
  const classes = useStyles();
  const avatarStyle={backgroundColor:'#1bbd7e'}
  return (
    <AppBar position="static">
      <CssBaseline />
      <Toolbar>
          
      <Avatar style={avatarStyle}><AirplanemodeActiveOutlinedIcon/></Avatar>
     
          <div className={classes.navlinks}>
            
           
          <Link to= {`/Home/${props}`} className={classes.link}>
Home
</Link>
<Link to = {`/Current_Reservations/`} className={classes.link}>
My reservations
</Link>
<Link to = {`/search/${props}`} className={classes.link}>
Search Flights 
</Link>
<Link to= {`/Update_Info/${this.props.match.params.user_id}`}className={classes.link}>
  Edit my information
</Link>
          </div>
      </Toolbar>
    </AppBar>
  );
}
export default User_Home;