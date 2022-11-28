// -------------------------------------------------------------------------
// ES 6: Map
// -------------------------------------------------------------------------
let grades = [18, 10, 20, 14];
grades = grades.map(grade => grade / 2)

console.log(grades);

let products = [
    {
        name: "Hair products",
        price: 54,
        isBlackFridayProduct: true
    },
    {
        name: "Skincare products",
        price: 30,
        isBlackFridayProduct: true
    },
    {
        name: "Drops",
        price: 100,
        isBlackFridayProduct: false
    },
];

let productsWithVat = products.map((product) => {
    product.priceWithVat = product.price * 1.21
    return product;
});

console.log(productsWithVat);

let blackFridayProducts = productsWithVat.filter((product) => product.isBlackFridayProduct == true);
console.log(blackFridayProducts);

for (var index = 0; index < blackFridayProducts.length; index++) {
    console.log(blackFridayProducts[index].name)
}


blackFridayProducts.forEach((item, index) => {
    console.log(`${index}. ${item.name} price is ${item.priceWithVat}`);
})
// const firstArray = [1, 2, 3, 4];
// const secondArray = firstArray.map((x) => x * 2);
// console.log(secondArray); // [2, 4, 6, 


// -------------------------------------------------------------------------
// ES 6: Filter
// -------------------------------------------------------------------------
// const numbers = [1, 12, 4, 25, 50];
// const result = numbers.filter((number) => number > 10);
// console.log(result); // [12, 25, 50]


// -------------------------------------------------------------------------
// ES 6: for each
// -------------------------------------------------------------------------
// const sandwiches = [
// 	'tuna',
// 	'ham',
// 	'turkey',
// 	'pb&j'
// ];

// sandwiches.forEach((sandwich, index) => {
// 	console.log(index);
// 	console.log(sandwich);
// });


// -------------------------------------------------------------------------
// ES 6: index of
// -------------------------------------------------------------------------
// const fruits = ["Banana", "Orange", "Apple", "Mango"];
// let index = fruits.indexOf("Apple");

// console.log(index);


// -------------------------------------------------------------------------
// ES 6: find
// -------------------------------------------------------------------------
// let customers = [{
//     name: 'ABC Inc',
//     credit: 100
// }, {
//     name: 'ACME Corp',
//     credit: 200
// }, {
//     name: 'IoT AG',
//     credit: 300
// }];

// console.log(customers.find(c => c.credit > 100));




