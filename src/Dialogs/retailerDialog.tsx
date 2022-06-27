import React from 'react';
import { useForm, useFieldArray, Controller, useWatch } from "react-hook-form";
import { Grid,InputLabel ,MenuItem, TextField,Box,Button,Dialog,DialogActions,DialogContent,DialogContentText,DialogTitle} from '@mui/material';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import { useAppSelector } from '../store/hooks';
type Dialogstate={
  isDialogOpened:boolean,
  setOpen:any,
  list:any
}
type ProductList= {
  id: number;
  price: string;
  productName: string;
  stock: number;
  unit: string;
}

type FormValues = {
 test:{ productId: number;
  productName: string;
  price: number;
  quantity: number;
  unit:string;}[]
};

const RetailerDialog = ({isDialogOpened,setOpen,list}:Dialogstate) => {
  const [pId, setPId] = React.useState<string>('');
  const [productList,setProductList] = React.useState<ProductList[]>([]);
  const storeProductList = useAppSelector((state)=>state.products.productList);
  
  React.useEffect(() => {
    let filterProductList = storeProductList.filter(el=>el.stock > 0);
    setProductList(filterProductList);
    setPId('');
    console.log(productList);
    reset({
      test: [{ productId:0, productName: "", price:0, quantity:0, unit:""}]
    })
  },[isDialogOpened]);


  const { register, control, handleSubmit, reset, watch ,  formState: { errors } } = useForm<FormValues>({
    defaultValues: {
      test: [{ productId:0, productName: "", price:0, quantity:0, unit:""}]
    }
  });

  const { fields, append, remove } = useFieldArray({
    name: "test",
    control
  });
  const formValues = useWatch({
    name: "test",
    control
  });



  const onSubmit = (data: any) =>{
    
    console.log("data",data)
    console.log("data",typeof data.test[0].productId)
    setOpen(false);} ;
  const handleChange = (index: number) => {
    
    if(formValues[index]?.productId >0){
      console.log(formValues[index]?.productId)
    }else{
      console.log('sddsd')
    }
    
  };
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
                  <Button
                  style={{marginBottom:"20px"}}
                  variant="contained"
          type="button"
          onClick={() =>
            append({ productId:0, productName: "", price:0, quantity:0, unit:""})
          }
        >
          Add
        </Button>
                  <form onSubmit={handleSubmit(onSubmit)}>
        {fields.map((field, index) => {
          return (
            
                  <Grid container spacing={2} style={{marginBottom:"20px"}}>
                  <Grid item xs={4} >
                  <Box sx={{ minWidth: 120 }}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Products</InputLabel>
        <Select
         
          {...register(`test.${index}.productId` as const, {
            required: true
          })}
                    className={errors?.test?.[index]?.productId ? "error" : ""}
          label="Products"
          onChange={(event)=>handleChange(index)}
        >
           <MenuItem value="">sasa</MenuItem>
         {productList.length > 0 &&
                  productList.map((model) => (
                     <MenuItem key={model.id}
                     value={model.id}>{model.productName}</MenuItem>
                 ))
                 
             }
        </Select>
      </FormControl>
    </Box>
                  </Grid>
                  {
                  //formValues[index].productId > 0  && 
                  
                  
                  <><Grid item xs={2}>
              <TextField
                autoFocus
                margin="dense"
                id="name"
                label="Quantity"
                type="number"
                fullWidth
                variant="outlined"
                {...register(`test.${index}.quantity` as const, {
                  required: true
                })}
                className={errors?.test?.[index]?.quantity ? "error" : ""}
                style={{ margin: "0px" }} />
            </Grid><Grid item xs={2}>
                <TextField
                  disabled
                  id="outlined-disabled"
                  label="Price"
                  defaultValue="Hello World" />
              </Grid>
              <Grid item xs={2}>

              </Grid>
              <Grid item xs={2}>
              <Button  variant="contained" onClick={() => remove(index)}>Remove</Button>
              </Grid>
              
              </>}
                  </Grid>
                    );
                  })}
                   <DialogActions>
                  <Button onClick={handleClose}>Cancel</Button>
                  <Button type='submit' >Add</Button>
                </DialogActions>
                  </form>
                </DialogContent>
               
            </Dialog>
    </>
  );
};

export default RetailerDialog;


