import React from 'react';
import { Grid} from '@mui/material';
import RetailerComponent1 from './Components/RetailerComponent';
import './RetailerComponent.scss';
import { useAppSelector } from '../../store/hooks';

const RetailerComponent = () => {
    const retailerList = useAppSelector((state)=>state.retailers.retailerList);

    return (
        <div>
        
            <Grid container spacing={2}>
            {retailerList?.length > 0 && retailerList.map((list,index)=>{
                return <Grid key={index}  item xs={4} className="borderrig">
                            <RetailerComponent1 list={list}/>
                        </Grid>})}
                
                
            </Grid>
        </div>
    );
};

export default RetailerComponent;