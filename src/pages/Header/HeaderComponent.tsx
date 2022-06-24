import React from 'react';
import './HeaderComponent.scss';
import { Grid, TextField, Card , CardContent, CardHeader, CardMedia, IconButton, Typography, Menu,MenuItem,Box,Button,Dialog,DialogActions,DialogContent,DialogContentText,DialogTitle} from '@mui/material';
import RetailerDialog from '../../Dialogs/retailerDialog';

const HeaderComponent = () => {
    const [open, setOpen] = React.useState<boolean>(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

 

    return (
       <div className='header'>
            <Grid container spacing={2}>
                <Grid item xs={9}>
                    <div className='companyName'>KR-MART</div>
                </Grid>
                <Grid className='mtop' item xs={1}>
                    <Button variant="contained" onClick={handleClickOpen}>Supply 1</Button>
                    <RetailerDialog  isDialogOpened={true} />
                </Grid>
                <Grid className='mtop' item xs={1}>
                    <Button variant="contained" onClick={handleClickOpen}>Supply 2</Button>
                    <RetailerDialog  isDialogOpened={true} />
                </Grid>
                <Grid className='mtop' item xs={1}>
                    <Button variant="contained" onClick={handleClickOpen}>Supply 3</Button>
                    <RetailerDialog  isDialogOpened={true} />
                </Grid>
            </Grid>
        </div>
    );
};

export default HeaderComponent;
