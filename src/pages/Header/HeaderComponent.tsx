import React from 'react';
import './HeaderComponent.scss';
import { Grid, Button} from '@mui/material';
import RetailerDialog from '../../Dialogs/retailerDialog';
import { useAppSelector } from '../../store/hooks';

const HeaderComponent = () => {
    const [open, setOpen] = React.useState<boolean>(false);
    const retailerList = useAppSelector((state)=>state.retailers.retailerList);
    const [list, setList] = React.useState<any>(null);
    
  const handleClickOpen = (rList:any) => {
      if(!open){
        setOpen(true);
        setList(rList)
      }
   
  };

 

    return (
       <div className='header'>
            <Grid container spacing={2}>
                <Grid item xs={9}>
                    <div className='companyName'>KR-MART</div>
                </Grid>
                
                {retailerList?.length > 0 && retailerList.map((list,index)=>{
        return <Grid className='mtop' item xs={1} key={index}>
        <Button variant="contained" onClick={()=>handleClickOpen(list)}>Supply {++index}</Button>
                    
    </Grid>})}
    {list!=null && <RetailerDialog  isDialogOpened={open} setOpen={setOpen} list={list}/>}
                
            </Grid>
        </div>
    );
};

export default HeaderComponent;
