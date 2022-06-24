import { configureStore } from '@reduxjs/toolkit';
import retailerList from './retailerReducer';
import productList from './productReducer';

const store =  configureStore({
  reducer: {
    products: productList,
    retailers:retailerList

  },
})

export default store;
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch