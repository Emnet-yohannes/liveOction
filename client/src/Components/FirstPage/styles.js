import { makeStyles } from "@material-ui/core";
import { deepOrange, deepPurple, lightBlue } from '@material-ui/core/colors';
const useStyles = makeStyles((theme) => ({
  root: {
    position: "relative",
    borderRadius: "20px"
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
  root2: {
    display: 'flex',
    '& > *': {
    //   margin: theme.spacing(1),
      margin: "0 auto",
    },
  },
  kColorAvatar: {
    color: theme.palette.getContrastText(deepOrange[500]),
    backgroundColor: "#539bb8",
  },


}));
export default useStyles