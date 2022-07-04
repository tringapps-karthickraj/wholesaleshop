import { createSlice } from '@reduxjs/toolkit'
import products from '../data/product.json';
import {updateList } from './retailerReducer';
import {IntialStateForProd} from '../interface/interface';

 const initialState : IntialStateForProd = {
    productList: localStorage['products'] ?  JSON.parse(localStorage['products']) : products,
 }
 if(!localStorage['products']){
    localStorage['products']=JSON.stringify(products);
 }
export const productlists = createSlice({
  
  name: 'productlist',
  initialState,
  
  reducers: {},
   extraReducers:(builder)=>{
    builder.addCase(updateList,(state,action)=>{
      console.log(state,action)
      const copyArr = [...state.productList];
      const ProdPruchase =action.payload.newProdPruchase;

      ProdPruchase.forEach((element: any) => {
        copyArr.find(el=>el.id===element.productId)!.stock -=element.quantity;
      });
      localStorage['products'] = JSON.stringify(copyArr);

    })
  },
})

export default productlists.reducer
