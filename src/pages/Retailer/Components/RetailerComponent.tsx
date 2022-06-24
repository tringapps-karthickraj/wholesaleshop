import React from 'react';
type retailerList={
    id:number,
    retailerName:string,
    address:string,
    productPurchased:string[]
  }
type retailerListType={
  list:retailerList
}
const RetailerComponent1 = ({list}:retailerListType) => {
    return (
        <>
           name : {list.retailerName}
        </>
    );
};

export default RetailerComponent1;
