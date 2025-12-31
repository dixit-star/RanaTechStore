// import product from './product.json'
import { showProductConatiner } from './homeProductCard.js';
//console.log(product);

fetch("./product.json").then(res=>res.json())
.then(data=>{
    // console.log(data);
    showProductConatiner(data)
})

// --------------show the temlets-------------

