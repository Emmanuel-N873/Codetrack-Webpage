const products = [
  {
    id: 1,
    name: "laptop",
    category: "computers",
    price: 850000,
    stock: 10,
    active: true
  },
  {
    id: 2,
    name: "desktop computer",
    category: "computers",
    price: 1200000,
    stock: 5,
    active: false
  },
  {
    id: 3,
    name: "smartphone",
    category: "phones",
    price: 450000,
    stock: 0,
    active: true
  },
  {
    id: 4,
    name: "tablet",
    category: "tablets",
    price: 350000,
    stock: 15,
    active: true
  },
  {
    id: 5,
    name: "wireless mouse",
    category: "accessories",
    price: 15000,
    stock: 50,
    active: true
  },
  {
    id: 6,
    name: "mechanical keyboard",
    category: "accessories",
    price: 85000,
    stock: 0,
    active: true
  },
  {
    id: 7,
    name: "27 inch monitor",
    category: "computers",
    price: 300000,
    stock: 8,
    active: true
  },
  {
    id: 8,
    name: "printer",
    category: "office", 
    price: 200000,
    stock: 12,
    active: false
  },
  {
    id: 9,
    name: "headphones",
    category: "audio",
    price: 95000,
    stock: 20,
    active: true
  },
  {
    id: 10,
    name: "webcam",
    category: "accessories",
    price: 45000,
    stock: 18,
    active: true
  }
];

//Template literals are used to display the product name and price of the 10th product in the products array. The length of the products array is also logged to the console.
console.log(products.length);
console.log(`The Product is named: ${products[9].name} and the price is: ${products[9].price}`);

//String Concatentation is used to display the product name and price of the 10th product in the products array. The length of the products array is also logged to the console.
// console.log(products.length);  
// console.log("The Product is named: " + products[9].name + " and the price is: " + products[9].price);

// console.log(products[0]);
// console.log(products[1]);
// console.log(products[2]);
// console.log(products[3]);
// console.log(products[4]);
// console.log(products[5]);
// console.log(products[6]);
// console.log(products[7]);
// console.log(products[8]);
// console.log(products[9]);


const newProduct = {
  id: 11,
  name:"Lamp Stand",
  category: "accessories",
  price: 32_000,
  stock: 7,
  active: true,
  };

  // products.push(newProduct);

  //ForEach
//Pinting every value
// products.forEach(product => {
//   console.log(product)
// });

// //single product
// products.forEach(function (product) {
//   console.log(`${product.name} -` + `#${product.price.toLocaleString()}`);
// });

//Map: This returns values unlike "forEach" which doesn't return values(Unless its working on something)
// const productName = products.map((product) => {
//   return product.price * 2;
// });

// console.log(productName);

//Filter
// const availableProducts = products.filter((product) => {
//   return product.active && product.stock > 0;
// });
// console.log(availableProducts);

//FIND
// const selectedProductId = 4

// const selectedProduct = products.find((product) => {
//   return product.id === selectedProductId;
// });
// console.log(selectedProduct);

