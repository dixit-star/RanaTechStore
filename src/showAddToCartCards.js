import { getCartProductFromLS } from "./getProduct.js";
import { homeQunatityToggle } from "./quantityToggle.js";

const productTemplete = document.querySelector("#productTemplete");
let dataLS = getCartProductFromLS();

const cartcatiner = document.querySelector("#CartContainer");
const showtostfu = (message) => {
  let tostContainer = document.querySelector(".tost");
  let toste = document.createElement("div");
  toste.classList = "tosteclass";
  toste.innerText = message;
  tostContainer.append(toste);
  setTimeout(() => {
    toste.remove();
  }, 1000);
};
const productClone =
  // console.log(dataLS);
  dataLS.forEach((elem) => {
    const productcart = document.importNode(productTemplete.content, true);
    productcart
      .querySelector("#cardValue")
      .setAttribute("id", `card${elem.id}`);

    console.log(productcart.querySelector(`#card${elem.id}`));

    console.log(productcart.querySelector(".categorycart").innerText);

    productcart.querySelector(".categorycart").innerText = elem.categoryes;

    let imges = elem.img;
    imges = imges.replace("http://localhost:5173/src", "");
    productcart.querySelector(".cartproductImage").src = imges;

    productcart.querySelector(".cartproductName").innerText = elem.productName;

    let fixedPriceOfproduct = elem.price.toFixed(2);
    productcart.querySelector(
      ".productPrice"
    ).innerText = `₹${fixedPriceOfproduct}`;

    productcart.querySelector(".productQuantity").value = elem.quantity;

    productcart
      .querySelector(".stockElement")
      .addEventListener("click", (event) => {
        homeQunatityToggle(event, elem.id, elem.stock);
        // totalpricecalc()
        location.reload();
      });
    let containerproduct = productcart.querySelector(`#card${elem.id}`);

    productcart.querySelector(".removeData").addEventListener("click", () => {
      //remove the productcontainer
      containerproduct.remove();
      //remove the data from local storage
      dataLS = dataLS.filter((item) => item.id !== elem.id);
      showtostfu(`Product with Id ${elem.id} has been delete`);
      localStorage.setItem("cartProductLS", JSON.stringify(dataLS));
    });

    cartcatiner.append(productcart);
  });
export function totalpricecalc() {
  let subtotal = document.querySelector("#subtotal");
  let taxdata = document.querySelector("#taxvalue");
  let TotalAmount = document.querySelector("#TotalAmount");
  let subSum = 0;

  dataLS.forEach((elem) => {
    subSum = elem.price + subSum;
  });
  subtotal.innerText = `₹ ${subSum.toFixed(2)}`;

  let TotalTax = (subSum * 5) / 100;
  taxdata.innerText = ` ₹ ${TotalTax.toFixed(2)}`;

  TotalAmount.innerText = `₹ ${(subSum + TotalTax).toFixed(2)}`;
}
totalpricecalc();
document.querySelector(".orderBtn").addEventListener("click", () => {
  showtostfu(`Thankyou so much for ordering`);
});
