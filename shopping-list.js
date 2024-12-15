const str = "";
const enterProductName = "Enter A Product Name";

const shoppingList = [];
let product;
let numberOfProducts = 0;

while (true) {

  product = prompt(enterProductName);

  if (product === null) {
    break;
  }
  
  product = product.trim();

  if (product === str) {
    continue;
  }

  shoppingList[numberOfProducts] =  product ;
  numberOfProducts++;
}

if (numberOfProducts > 0) {
  console.log(shoppingList);
}