import { makeStyles } from "@material-ui/core";
import { deepOrange } from '@material-ui/core/colors';
const useStyles = makeStyles((theme) => ({
  root: {
    position: "relative",
    borderRadius: "20px"
  },
  mainContainer:{
    backgroundColor: "#eeeeee",
    position:"relative"
  },
  mainBody:{
    marginBottom: "80px" ,
    padding:"24px"
  },
  font: {
    position: "absolute",
    top: "85%",
    width: "100%",
    textAlign: "center",
    color: "black",
    backgroundColor: "none",
    fontFamily: "Comic Sans MS",
  },
  timer:{
    backgroundColor: "#1AEC5F", 
    borderRadius: "16px", 
    width: "80%", 
    height: "55%", 
    marginLeft: "10px"
  },
  root2: {
    display: 'flex',
    '& > *': {
    //   margin: theme.spacing(1),
      margin: "0 auto",
    },
  },
  floatActionButtons:{
    width: "80%" 
  },
  kColorAvatar: {
    color: theme.palette.getContrastText(deepOrange[500]),
    backgroundColor: "#539bb8",
  },
  title:{
    marginTop: "18px" 
  },
  profileContainer:{
    display: "flex", marginTop: "10px"
  },
  profileAvatar:{
    height: "100%", marginRight: "10px"
  },
  ownerContainer:{
    flexDirection: "column"
  },
  ownerStatic:{
    color: "#555555"
  },
  descriptionStatic:{
    marginTop: "10px" 
  },
  description:{
    marginTop: "8px", color: "#555555"
  },
  bottomContainer:{
    position: "fixed", 
    bottom: "0px", 
    backgroundColor: "white", 
    width: "100%", 
    maxWidth: "400px", 
    height: "50px"
  },
  currentBid:{
    color: "#555555"
  },
  amount:{
    fontWeight: "bold", marginTop: "5px"
  },

  placeAbid:{
    textAlign: "center", width: "100%"
  }

}));
export default useStyles