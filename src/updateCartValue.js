const cartCounter =   document.querySelector("#navbar2-info-counter");

   export const updateCartValue=(arrLocalStorageProduct)=>{
     return (   cartCounter.innerText =  arrLocalStorageProduct.length)
   }