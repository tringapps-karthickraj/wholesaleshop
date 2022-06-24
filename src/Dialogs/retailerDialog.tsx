import React from 'react';
import { Grid, TextField, Card , CardContent, CardHeader, CardMedia, IconButton, Typography, Menu,MenuItem,Box,Button,Dialog,DialogActions,DialogContent,DialogContentText,DialogTitle} from '@mui/material';
type Dialogstate={
  isDialogOpened:boolean
}
const RetailerDialog = ({isDialogOpened}:Dialogstate) => {
  const [open, setOpen] = React.useState<boolean>(isDialogOpened);

  const handleClose = () => {
    setOpen(false);
  };
  return (
    <>
       <Dialog open={open} onClose={handleClose}  fullWidth>
              <DialogTitle>Address</DialogTitle>
                <DialogContent>
                  {/* <DialogContentText>
                    To subscribe to this website, please enter your email address here. We
                    will send updates occasionally.
                  </DialogContentText> */}
                  <TextField
                    autoFocus
                    margin="dense"
                    id="name"
                    label="Email Address"
                    type="email"
                    fullWidth
                    variant="standard"
                  />
                </DialogContent>
                <DialogActions>
                  <Button onClick={handleClose}>Cancel</Button>
                  <Button onClick={handleClose}>Add</Button>
                </DialogActions>
            </Dialog>
    </>
  );
};

export default RetailerDialog;
