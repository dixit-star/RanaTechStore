import { getCartProductFromLS } from "./getProduct.js";

getCartProductFromLS();

export const homeQunatityToggle = (event, id, stock) => {
  let arrLocalStorageProduct = getCartProductFromLS();
  const currentCardElement = document.querySelector(`#card${id}`);
  // console.log(currentCardElement);

  const productQuantity = currentCardElement.querySelector(".productQuantity");
  let prices = currentCardElement.querySelector(".productPrice").innerText;

  prices = prices.replace("₹", "");
  if (productQuantity.value > stock) {
    productQuantity.value = stock;
    alert("Stock is not avalibale");
  }
  //increment the cart value
  if (event.target.classList.contains("cartIncrement")) {
    if (stock > productQuantity.value) {
      productQuantity.value++;
      //when you are click in cart item product which is under the cart and you want to increase the prouct quntity it help update the data in local sto
      arrLocalStorageProduct.forEach((elem) => {
        if (elem.id === id) {
          elem.quantity++;
          elem.price = productQuantity.value * elem.oneProductprice;
        }
      });
    } else {
      alert("Stock is not avalibale");
    }
  } //decrement the cart value
  else if (event.target.classList.contains("cartdecrement")) {
    if (productQuantity.value > 1) {
      productQuantity.value = Number(productQuantity.value) - 1;
      arrLocalStorageProduct.forEach((elem) => {
        if (elem.id === id) {
          elem.quantity--;
          elem.price = productQuantity.value * elem.oneProductprice;
        }
      });
    }
  }
  localStorage.setItem("cartProductLS", JSON.stringify(arrLocalStorageProduct));
};
