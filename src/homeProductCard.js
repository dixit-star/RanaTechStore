import { addToCart } from "./addToCart.js";
import { homeQunatityToggle } from "./quantityToggle.js";

const productContainer = document.querySelector("#productContainer")
const productTemplete = document.querySelector("#productTemplete")
export const showProductConatiner=(product)=>{
    if(!product){
        return false;
    }//creat the templete
    product.forEach(curprod => {
        const {brand,category,description,id,image_url,name,price,stock,actual_price}= curprod;
      const productClone=document.importNode(productTemplete.content,true)

       productClone.querySelector("#cardValue").setAttribute("id",`card${id}`)
        productClone.querySelector(".productName").textContent=name
        productClone.querySelector(".category").textContent=category
        productClone.querySelector(".productImage").src=image_url
        productClone.querySelector(".productPrice").textContent=`₹ ${actual_price}`
        productClone.querySelector(".productActualPrice").textContent=`₹ ${price}`
         productClone.querySelector(".productDescription").textContent=description
          productClone.querySelector(".productStock").textContent=stock

          //increment and dremeent the product quantity
          productClone.querySelector(".stockElement").addEventListener("click",(event)=>{
           
            homeQunatityToggle(event,id,stock)
          })
         
          //add the iteam into cart
          productClone.querySelector(".add-to-cart-button").addEventListener('click',(event)=>{
            addToCart(id)
          })



        productContainer.append(productClone)
       
    });
}

