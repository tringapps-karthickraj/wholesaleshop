import { createSlice } from '@reduxjs/toolkit'
import retailers from '../data/retailers.json';
import {IntialStateForRet} from '../interface/interface';

 const initialState : IntialStateForRet = {
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
        element.quantity = parseInt(element.quantity);
        if(copyArr.find(el=>el.id===rId)?.productPurchased.find(el=>el.productId === element.productId)){
          copyArr.find(el=>el.id===rId)!.productPurchased.find(el=>el.productId === element.productId)!.quantity += element.quantity;
        }else{
          copyArr.find(el=>el.id===rId)?.productPurchased.push(element);
        }
        
      });
      localStorage['retailers'] = JSON.stringify(copyArr);
       },
    
  },
})

export const { updateList } = retailerList.actions
export default retailerList.reducer