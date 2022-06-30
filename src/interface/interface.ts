
export interface ProductList {
    id: number,
    price: number,
    productName: string,
    stock: number,
    unit: string;
}

export interface ProductPurchased  {
    productId: number;
    productName: string;
    price: number;
    quantity: number;
    unit:string;
}

export interface RetailerList{
    id:number,
    retailerName:string,
    address:string,
    productPurchased:ProductPurchased[]
}

export interface IntialStateForProd  {
    productList:ProductList[]
}

export interface IntialStateForRet  {
    retailerList:RetailerList[]
}

export interface FormValues  {
    test:ProductPurchased[]
}

export interface RetailerListType{
    retailerList:RetailerList
}

export interface Dialogstate{
    isDialogOpened:boolean,
    setOpen:any,
    list:any
}

  