// const input = ["abc", "", "d"];
// const letters =input.filter(word => 
//     return word[0] === ('a,b,c,d');
// console.log(letters);
  
// const ano = input.filter(a => 
//      return a[0] === "a"
// console.log(ano);



// const input =["Apple", "", "Banana"];
// const beginLetterA = input.filter(inputs => inputs.charAt(0) === "A")
// console.log(beginLetterA);
///
// const input =["abc", "", "d"];
// const noSpace = input.filter(inputs => inputs != "")
// console.log(noSpace);
// ``



// const numbers = [1,2,3]
// const sum = numbers.reduce((previousValue,currentValue) => previousValue + currentValue)

    
// console.log(sum);

// const product = numbers.reduce((previousValue,currentValue) => previousValue * currentValue)
// console.log(product);


// const n = ["uplift", "code", "camp"].reduce ((a,b) => a.length > b.length ? a:b)
// console.log(n);



// ['a', 'long', 'time', 'ago'];

// const conct = ['a', 'long', 'time', 'ago'].reduce ((a,b) => `${a} ${b}`) 
// console.log(conct);


var users = [{ firstName: 'Rowell', lastName: 'Artiaga', role: 'Teaching Partner'},
            { firstName: 'Chris', lastName: 'Rock', role: 'Student'}].reduce ((a,b) => 
            
            
            `${a.firstName} ${a.lastName} : ${a.role} , ${b.firstName} ${b.lastName} : ${b.role}`)

console.log(users);



// const tP = 
const kitchenItems = [
    {
      name: "Air Fryer",
      price: 30,
    },
    {
      name: "Jar Container",
      price: 5,
    },
  ];
  const plantitaItems = [
    {
      name: "Paso",
      price: 2,
    },
  ];
  // // assume USD 1.00 = PHP 50.00
  // calculateBill(kitchenItems); // should return PHP 1800.00
  // calculateBill(plantitaItems); // should return PHP 150.00

  
// // const calculateBill = .map(items => 
// //     let priceConv = kitchenItems.price * 50
// //     items(priceConv))=

// const priceConv = kitchenItems.map((items) => {
//   return kitchenItems.price * 50
// })
// console.log(priceConv);

// function calculateBill(object) {
//     const a = kitchenItems.map((kitchenItems) => {
//       return kitchenItems.price* 50
//     })
//     console.log(a);

// // };
// function calculateBill(items) {
//   const a = items.map((items) => {
//     return kitchenItems.price* 50
//   })
//   let total = items.reduce((sum, items) => sum + items.price, 0);
//   return total;
// };

// console.log(calculateBill(kitchenItems));

function calculateBill(items) {
  let convertedPrice = items.map((items) => {return items.price* 50});
  let total = convertedPrice.reduce((sum, convertedPrice) => sum + convertedPrice, 0);
  // let total = items.reduce((sum, items) => sum + items.price, 0);
  return total + 50;
};

console.log(calculateBill(kitchenItems));
console.log(calculateBill(plantitaItems));

// calculateBill(kitchenItems);

// function calculateBill(obj) {

//     const res = obj.map((item) => {
//         totalPrice += item.price
//         return{...item, price: priceAccum}

//     })
// }
//  calculateBill(kithen);
