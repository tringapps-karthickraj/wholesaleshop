import { createSlice } from '@reduxjs/toolkit'
import products from '../data/product.json';
import {updateList } from './retailerReducer';

type IntialState = {
    productList:{
        id:number,
        price:number,
        productName:string,
        stock:number,
        unit:string
    }[]
}
 const initialState : IntialState = {
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
        let idx = copyArr.findIndex(el=>el.id===element.productId);
        copyArr[idx].stock -=element.quantity;
      });
      localStorage['products'] = JSON.stringify(copyArr);

    })
  },
})

export const {  } = productlists.actions
export default productlists.reducer