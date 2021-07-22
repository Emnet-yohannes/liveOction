import React from 'react'
import { useEffect } from "react";
import { TextField, Grid, Box } from "@material-ui/core";

import { Button } from "@material-ui/core";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";

const PlaceABidButton = () => {
    const [open, setOpen] = React.useState(false);

    const getAllFoodCategory = () => {
        
      };
     useEffect(() => {
       getAllFoodCategory()
    
     }, [])


     const handleClickOpen = () => {
        setOpen(true);
      };
    
      const handleClose = () => {
        setOpen(false);
      };
    
    return (
        <>
            <Button size="large" variant="contained" 
            style={{ backgroundColor: "black", color: "white", fontWeight: "bold", borderRadius: "16px",textTransform:"none" }}
            onClick={handleClickOpen}
            >place a Bid</Button>

<Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="form-dialog-title"
        fullWidth
        style={{maxWidth:"400px",margin:"0 auto"}}
      >
        <form >
          <DialogTitle id="form-dialog-title">Bid</DialogTitle>
          <DialogContent>
            <DialogContentText>Add Bid Price</DialogContentText>

            <Grid container>
              <Grid item xs={12}>
                <Box>
                <TextField id="outlined-basic" fullWidth variant="outlined" autoComplete="off" />
                
                </Box>
               
                
              </Grid>
            </Grid>
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose} color="primary">
              Cancel
            </Button>
            <Button type="submit" variant="outlined" color="primary">
              Add
            </Button>
          </DialogActions>
        </form>
      </Dialog>
          
        </>
    )
}

export default PlaceABidButton

