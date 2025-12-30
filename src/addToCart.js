import { getCartProductFromLS } from "./getProduct.js";
import { updateCartValue } from "./updateCartValue.js";
getCartProductFromLS();
export const addToCart = ( id) => {
  let arrLocalStorageProduct = getCartProductFromLS();

  const currentCardElement = document.querySelector(`#card${id}`);
  let quantity = currentCardElement.querySelector(".productQuantity").value;
  let price = currentCardElement.querySelector(".productPrice").innerText;
  let oneProductprice = currentCardElement.querySelector(".productPrice").innerText;
  let img = currentCardElement.querySelector(".productImage").src;
  let categoryes = currentCardElement.querySelector(".category").innerText;
 let productName = currentCardElement.querySelector(".productName").innerText
 let stock =currentCardElement.querySelector(".productStock").innerText


  price = +price.replace("₹", "");
  oneProductprice = +oneProductprice.replace("₹","");


  let existngProd = arrLocalStorageProduct.find((element) => element.id === id);
  //if product is allreagy into the cart it help to when again click into cart button it increase price and quntity
  if (existngProd) {
    currentCardElement.querySelector(".productQuantity").value++;
    arrLocalStorageProduct.forEach((elem) => {
      if (elem.id === id) {
        elem.quantity++
        elem.price = price * quantity;
        
      }
    });
    localStorage.setItem(

          "cartProductLS",
          JSON.stringify(arrLocalStorageProduct)
        );
    return false;
  }
 
  stock =parseInt(stock)
  
  price = quantity * price;
  quantity = Number(quantity);
  arrLocalStorageProduct.push({ id, quantity, price ,categoryes,productName,img, stock,oneProductprice});

  localStorage.setItem("cartProductLS", JSON.stringify(arrLocalStorageProduct));
  console.log(arrLocalStorageProduct);

  updateCartValue(arrLocalStorageProduct);

const showtostfu=()=>{
  let tostContainer = document.querySelector(".tost")
  let toste = document.createElement("div")
  toste.classList = "tosteclass"

  toste.innerText = `Product with Id ${id} has been added`
  tostContainer.append(toste)
  setTimeout(() => {
 toste.remove()
},1500);

}
 showtostfu()

};
