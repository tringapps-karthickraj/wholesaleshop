import React from 'react';
//import { useForm, useFieldArray, Controller, useWatch } from "react-hook-form";
import { Grid,InputLabel , MenuItem,Box,Button,Dialog,DialogActions,DialogContent,DialogContentText,DialogTitle} from '@mui/material';
//import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';

type Dialogstate={
  isDialogOpened:boolean,
  setOpen:any,
  list:any
}
const RetailerDialog = ({isDialogOpened,setOpen,list}:Dialogstate) => {
  const [age, setAge] = React.useState('');
  // const { register, control, handleSubmit, reset, watch } = useForm({
  //   defaultValues: {
  //     test: [{ firstName: "Bill", lastName: "Luo" }]
  //   }
  // });
  // const {
  //   fields,
  //   append,
  //   prepend,
  //   remove,
  //   swap,
  //   move,
  //   insert,
  //   replace
  // } = useFieldArray({
  //   control,
  //   name: "test"
  // });

  //const onSubmit = (data) => console.log("data", data);
  const handleClose = () => {
    setOpen(false);
  };
  return (
    <>
       <Dialog open={isDialogOpened} onClose={handleClose}  fullWidth   maxWidth="lg">
              <DialogTitle>Address</DialogTitle>
                <DialogContent>
                  <DialogContentText>
                  {list.address}
                  </DialogContentText>
                  {/* <TextField
                    autoFocus
                    margin="dense"
                    id="name"
                    label="Email Address"
                    type="email"
                    fullWidth
                    variant="standard"
                  /> */}
                  <Grid container spacing={2}>
                  <Grid item xs={6} >
                  <Box sx={{ minWidth: 120 }}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Products</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={age}
          label="Products"
         
        >
          <MenuItem value={10}>Ten</MenuItem>
          <MenuItem value={20}>Twenty</MenuItem>
          <MenuItem value={30}>Thirty</MenuItem>
        </Select>
      </FormControl>
    </Box>
                  </Grid>
                  <Grid item xs={2} >

                  </Grid>
                  <Grid item xs={2} >

                  </Grid>
                  <Grid item xs={2} >

                  </Grid>
                  </Grid>
                   
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
