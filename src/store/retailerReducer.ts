import { createSlice } from '@reduxjs/toolkit'
import retailers from '../data/retailers.json';
type ProductPurchased = {
  productId: number;
  productName: string;
  price: number;
  quantity: number;
  unit:string;
}
type IntialState = {
    retailerList:{
      id:number,
      retailerName:string,
      address:string,
      productPurchased:ProductPurchased[]
    }[]
}
 const initialState : IntialState = {
  retailerList: localStorage['retailers'] ?  JSON.parse(localStorage['retailers']) : retailers,
 }

 if(!localStorage['retailers']){
  localStorage['retailers']=JSON.stringify(retailers);
}
export const retailerList = createSlice({
  
  name: 'retailerList',
  initialState, 
  reducers: {
    
     updateList: (state,action)=>{
      console.log(action.payload);
      const rId = action.payload.retailerId;
      const newProdPruchase =action.payload.newProdPruchase;
      const copyArr = [...state.retailerList];
      newProdPruchase.forEach((element: any) => {
        copyArr.find(el=>el.id===rId)?.productPurchased.push(element);
      });
      localStorage['retailers'] = JSON.stringify(copyArr);
       },
    
  },
})

export const { updateList } = retailerList.actions
export default retailerList.reducer