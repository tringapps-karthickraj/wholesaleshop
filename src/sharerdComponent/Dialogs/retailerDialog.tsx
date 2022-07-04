import React from 'react';
import { useForm, useFieldArray, useWatch } from "react-hook-form";
import { Grid,InputLabel ,MenuItem, TextField,Box,Button,Dialog,DialogActions,DialogContent,DialogContentText,DialogTitle} from '@mui/material';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import { useAppSelector,useAppDispatch } from '../../store/hooks';
import {updateList} from '../../store/retailerReducer';
import {Dialogstate,ProductList,FormValues} from '../../interface/interface';


const RetailerDialog = ({isDialogOpened,setOpen,list}:Dialogstate) => {
  const dispatch = useAppDispatch();
  const [productList,setProductList] = React.useState<ProductList[]>([]);
  const storeProductList = useAppSelector((state)=>state.products.productList);
  
  React.useEffect(() => {
    let filterProductList = storeProductList.filter(el=>el.stock > 0);
    setProductList(filterProductList);
    reset({
      test: [{ productId:0, productName: "", price:0, quantity:0, unit:""}]
    })
  },[isDialogOpened]);


  const { register, control, handleSubmit, reset, formState: { errors },setValue  } = useForm<FormValues>({
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
    
    let sendObj:any={
        retailerId:list.id,
        newProdPruchase:data.test
    }
    dispatch(updateList(sendObj))
    reset({
      test: [{ productId:0, productName: "", price:0, quantity:0, unit:""}]
    })
    setOpen(false);

  } ;


  const handleChange = (event: SelectChangeEvent<any>,index: number) => {
    setValue(`test.${index}.productId`,event.target.value)
    let product = productList.find(el=>el.id ===  event.target.value);

    if(product){
      setValue(`test.${index}.productName`,product.productName)
      setValue(`test.${index}.quantity`,0)
      setValue(`test.${index}.price`,product.price)
      setValue(`test.${index}.unit`,product.unit)
    }
  };


  const handleClose = () => {
    setOpen(false);
  };

  const total = formValues.reduce(
    (acc, current) => acc + (current.price || 0) * (current.quantity || 0),
    0
  );


  const getStock =(productId:number)=>{
        return storeProductList.find(el=>el.id === productId)?.stock;   
  }

  const addNewItem=()=>{
    if(formValues[fields.length-1]?.productId && formValues[fields.length-1]?.quantity >0){
      append({ productId:0, productName: "", price:0, quantity:0, unit:""})
    }
    
  }
 
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
                    onClick={addNewItem}
                  >Add
                  </Button>
                  <form onSubmit={handleSubmit(onSubmit)}>
                    {fields.map((field, index) => {
                      return (
                        <Grid key={field.id} container spacing={2} style={{marginBottom:"20px"}}>
                          <Grid item xs={4} >
                            <Box sx={{ minWidth: 120 }}>
                              <FormControl fullWidth>
                                <InputLabel id="demo-simple-select-label">Products</InputLabel>
                                  <Select
                                  error={errors?.test?.[index]?.productId ? true:false}
                                    {...register(`test.${index}.productId` as const, {
                                        required: true
                                      })}
                                      
                                    className={errors?.test?.[index]?.productId ? "error" : ""}
                                    label="Products"
                                    onChange={($event)=>handleChange($event,index)}
                                  >
                                    {productList.length > 0 &&
                                    
                                              productList.map((model) => (
                                                <MenuItem key={model.id} disabled={formValues.find(el=>el.productId === model.id) ? true:false}
                                                value={model.id}>{model.productName}</MenuItem>
                                            ))
                                    }
                                  </Select>
                              </FormControl>
                            </Box>
                          </Grid>
                          
             
                              {formValues[index]?.productId > 0 && 
                                  <>
                                    {formValues[index]?.productId > 0 && 
                                      <Grid item xs={2}>
                                        <TextField
                                          autoFocus
                                          margin="dense"
                                          id="name"
                                          label={`Quantity(${formValues[index]?.unit})`}
                                          type="number"
                                          helperText={errors?.test?.[index]?.quantity ? `minimum 1 , maximum ${getStock(formValues[index]?.productId)}` : null}
                                          error={errors?.test?.[index]?.quantity ? true:false}
                                         // InputProps={ { inputProps: { min: 1, max: getStock(formValues[index]?.productId) } } }
                                          fullWidth
                                          variant="outlined"
                                          {...register(`test.${index}.quantity` as const, {
                                            required: true , min: 1, max: getStock(formValues[index]?.productId)
                                          })}
                                          
                                          style={{ margin: "0px" }} />
                                      </Grid>}
                                      <Grid item xs={2}>
                                        <TextField
                                        
                                        {...register(`test.${index}.price` as const, {
                                          required: true
                                        })}
                                          disabled
                                          id="outlined-disabled"
                                          label="Price(₹)" />
                                      </Grid>
                                      <Grid item xs={2}>
                                        <TextField
                                            value={formValues[index]?.price * formValues[index]?.quantity}
                                            disabled
                                            id="outlined-disabled"
                                            label="Total(₹)" />
                                      </Grid>
                                  </>}
                              {fields.length > 1 &&  
                                      <Grid item xs={2}>
                                        <Button  variant="contained" onClick={() => remove(index)}>Remove</Button>
                                      </Grid>}
                        </Grid>
                    );
                    })}

                    <Grid  container spacing={2} style={{marginBottom:"20px"}}>
                        {formValues.find(el=>el.quantity > 0) && 
                          <>
                            <Grid item xs={8} >
                              <label>total</label>
                            </Grid>
                            <Grid item xs={2} >
                              <label>₹{total}</label>
                            </Grid>
                          </>}
                    </Grid>
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


