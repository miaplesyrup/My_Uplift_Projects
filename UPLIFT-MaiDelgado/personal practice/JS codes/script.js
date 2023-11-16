// // const myInt = 5;
// // const myFloat = 6.667;
// // myInt;
// // myFloat;

// // let myName;
// // let myAge;
// // myName = 'Chris';
// // myAge = 13;
// // myName;
// // myAge;
// // let myDog = 'choco';


// // function logName() {
// //     console.log(myName);
// //   }
// //   logName();

// // function comment(x) {
// //     console.log("Hello " + x /* insert the value of x */ + " !");
// //   }
// //   comment("world");
// //   comment('mai');


// function compareVersions (version1, version2) {
//   let a = version1.split(".");
//   let b = version2.split(".");
  
//   for (let i = 0; i < b.length; i++) {
//     const c = ~~b[i]
//     const d = ~~a[i]
//     if (c > d) return false
//     if (c < d) return true
//   }
//   return true
// }
// //   let len = Math.min(a.length, b.length);
  

// //   for (let i = 0; i < len; i++) {
// //     // A bigger than B
// //     if (parseInt(a[i]) >= parseInt(b[i])) {
// //         return true;
// //     }
// //     // B bigger than A
// //     if (parseInt(a[i]) < parseInt(b[i])) {
// //         return false;
// //     }
// //   }
// //   if (a.length > b.length) {
// //     return true;
// //   }

// //   if (a.length < b.length) {
// //     return false;
// //   }
// // }

// console.log(compareVersions("11", "10"));                    // returns true
// console.log(compareVersions("11", "11"));                    // returns true
// console.log(compareVersions("10.4.6", "10.4"));              // returns true
// console.log(compareVersions("10.4", "11"));                  // returns false
// console.log(compareVersions("10.4", "10.10"));               // returns false
// console.log(compareVersions("10.4.9", "10.5"));              // returns false




// // var string = "The greatest victory is that which requires no battle".split(' ').reverse().join(' '); // "Text 1 - Text 2 - Text 3 - Text 4"
// // // var c = string.toArraysplit(",") // ["Text 1", "Text 2", "Text 3", "Text 4"]
// // // console.log(c);
// // // let b = array.reverse() // ["Text 4", "Text 3", "Text 2", "Text 1"]
// // // let a = array.join(' - ') // "Text 4 - Text 3 - Text 2 - Text 1"

// // console.log(string);



// // var str = "The greatest victory is that which requires no battle"
// function reverseWords(str){
//   return str.split(' ').reverse().join(' ');
// }

// console.log(reverseWords("The greatest victory is that which requires no battle"));
// console.log(reverseWords("hello world!"));


// // const { assert } = require('chai');

// // describe("reverseWords",function(){
// //   it("should work for some examples", function(){
// //     assert.strictEqual(reverseWords("hello world!"                 ),  "world! hello")
// //     assert.strictEqual(reverseWords("yoda doesn't speak like this" ),  "this like speak doesn't yoda")
// //     assert.strictEqual(reverseWords("foobar"                       ),  "foobar")
// //     assert.strictEqual(reverseWords("kata editor"                  ),  "editor kata")
// //     assert.strictEqual(reverseWords("row row row your boat"        ),  "boat your row row row")
// //     assert.strictEqual(reverseWords(""                             ),  "")
// //   });
// // });


// snail = function(array) {
//   if(array.length === 0) return [];
//   if(array.length === 1) return array[0];
//   let top = array[0].slice(0,-1);
//   let right = array.map(a => a[a.length - 1]);
//   let bottom = array[array.length - 1].slice(0, -1).reverse();
//   let left = array.slice(1, -1).map(b => b[0]).reverse();
//   let inner = array.slice(1, -1).map(c => c.slice(1, -1));
//   return [].concat(top, right, bottom, left, snail(inner));
// }

// console.log(snail([[]]), []);
// console.log(snail([[1, 2, 3], [4, 5, 6], [7, 8, 9]]), [1, 2, 3, 6, 9, 8, 7, 4, 5]);
// console.log(snail([[1]]), [1]);
// console.log(snail([[1, 2, 3, 4, 5], [6, 7, 8, 9, 10], [11, 12, 13, 14, 15], [16, 17, 18, 19, 20], [21, 22, 23, 24, 25]]), [1, 2, 3, 4, 5, 10, 15, 20, 25, 24, 23, 22, 21, 16, 11, 6, 7, 8, 9, 14, 19, 18, 17, 12, 13]);
// console.log(snail([[1, 2, 3, 4, 5, 6], [20, 21, 22, 23, 24, 7], [19, 32, 33, 34, 25, 8], [18, 31, 36, 35, 26, 9], [17, 30, 29, 28, 27, 10], [16, 15, 14, 13, 12, 11]]), [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36]);




// function snail(array){
//   const sorted = []
//   while(array.length){
//     sorted.push(...array.shift())
//     for(let i=0; i<array.length; i++){
//       sorted.push(array[i].pop())
//     }
//     sorted.push(...(array.pop() || []).reverse())
//     for(let i=array.length-1; i>=0; i--){
//       sorted.push(array[i].shift())
//     }
//   }
//   return sorted
// }

// console.log(snail([[]]), []);
// console.log(snail([[1, 2, 3], [4, 5, 6], [7, 8, 9]]), [1, 2, 3, 6, 9, 8, 7, 4, 5]);
// console.log(snail([[1]]), [1]);
// console.log(snail([[1, 2, 3, 4, 5], [6, 7, 8, 9, 10], [11, 12, 13, 14, 15], [16, 17, 18, 19, 20], [21, 22, 23, 24, 25]]), [1, 2, 3, 4, 5, 10, 15, 20, 25, 24, 23, 22, 21, 16, 11, 6, 7, 8, 9, 14, 19, 18, 17, 12, 13]);
// console.log(snail([[1, 2, 3, 4, 5, 6], [20, 21, 22, 23, 24, 7], [19, 32, 33, 34, 25, 8], [18, 31, 36, 35, 26, 9], [17, 30, 29, 28, 27, 10], [16, 15, 14, 13, 12, 11]]), [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36]);

// // const Test = require('@codewars/test-compat');

// // describe("Tests", () => {
// //   it("test", () => {
// // Test.assertDeepEquals(snail([[]]), []);
// // Test.assertDeepEquals(snail([[1]]), [1]);
// // Test.assertDeepEquals(snail([[1, 2, 3], [4, 5, 6], [7, 8, 9]]), [1, 2, 3, 6, 9, 8, 7, 4, 5]);
// // Test.assertDeepEquals(snail([[1, 2, 3, 4, 5], [6, 7, 8, 9, 10], [11, 12, 13, 14, 15], [16, 17, 18, 19, 20], [21, 22, 23, 24, 25]]), [1, 2, 3, 4, 5, 10, 15, 20, 25, 24, 23, 22, 21, 16, 11, 6, 7, 8, 9, 14, 19, 18, 17, 12, 13]);
// // Test.assertDeepEquals(snail([[1, 2, 3, 4, 5, 6], [20, 21, 22, 23, 24, 7], [19, 32, 33, 34, 25, 8], [18, 31, 36, 35, 26, 9], [17, 30, 29, 28, 27, 10], [16, 15, 14, 13, 12, 11]]), [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36]);
// // });
// // });


// function disemvowel(str) {
//   return str.replace(/[aeiou]/gi, '');
// }

// console.log(disemvowel("This website is for losers LOL!"));
// console.log(disemvowel("No offense but,\nYour writing is among the worst I've ever read"));
// console.log(disemvowel("What are you, a communist?"));


// // const { assert } = require("chai")

// // describe("Basic tests", () => {
// //   it("Testing for fixed tests", () => {
// //     assert.strictEqual(disemvowel("This website is for losers LOL!"), "Ths wbst s fr lsrs LL!")
// //     assert.strictEqual(disemvowel("No offense but,\nYour writing is among the worst I've ever read"), "N ffns bt,\nYr wrtng s mng th wrst 'v vr rd")
// //     assert.strictEqual(disemvowel("What are you, a communist?"), "Wht r y,  cmmnst?")
// //     })
// //   })

// function highestRank(arr){
//   const occurences = {};
//   let highestOccurence = 0;

//   arr.forEach((number) => {
//     occurences[number] = !occurences[number] ? 1 : occurences[number] + 1;
//     if (occurences[number] > highestOccurence) {
//       highestOccurence = occurences[number];
//     }
//   });

//   const sorted = Object.keys(occurences).sort((a,b) => {
//       return occurences[b] - occurences[a];
//   }).filter((element) => occurences[element] === highestOccurence)
//   .sort((a,b) => parseInt(b) - parseInt(a));


//   return parseInt(sorted[0]);
// };

//   console.log(highestRank([12, 10, 8, 12, 7, 6, 4, 10, 12]));
//   console.log(highestRank([12,10,8,8,3,3,3,3,2,4,10,12,10]));
//   console.log(highestRank([12,10,8,12,7,6,4,10,12,10]));


// // const chai = require("chai");
// // const assert = chai.assert;
// // chai.config.truncateThreshold=0;

// // describe("Sample tests", function() {
// //   it("should test", function() {
// //     var arr = [12, 10, 8, 12, 7, 6, 4, 10, 12];
// //     assert.strictEqual( highestRank(arr), 12);
// //   });
// // });

// function getPlanetName(id){
//   switch(id){
//   case 1:
//   return 'Mercury';
//   case 2:
//   return 'Venus';
//   case 3:
//   return 'Earth';
//   case 4:
//   return 'Mars';
//   case 5:
//   return 'Jupiter';
//   case 6:
//   return 'Saturn';
//   case 7:
//   return 'Uranus';
//   case 8:
//   return 'Neptune';
//   }
//   }

//   console.log(getPlanetName(2));
//   console.log(getPlanetName(5));
//   console.log(getPlanetName(3));



// // const Test = require('@codewars/test-compat');

// // describe("Tests", () => {
// //   it("test", () => {
// // Test.assertEquals(getPlanetName(2), 'Venus');
// // Test.assertEquals(getPlanetName(5), 'Jupiter');
// // Test.assertEquals(getPlanetName(3), 'Earth');
// // });
// // });



// function getSumOfDigits(num) {
//   return String(num)
//     .split('')
//     .reduce((accumulator, digit) => {
//       return accumulator + Number(digit);
//     }, 0);
// }

// console.log(getSumOfDigits(123));
// console.log(getSumOfDigits(223));
// console.log(getSumOfDigits(0));

// // const { assert } = require('chai');

// // describe("Tests", () => {
// //   it("Fixed tests", () => {
// //     assert.strictEqual(getSumOfDigits(123), 6, 'Incorrect answer for integer=123');
// //     assert.strictEqual(getSumOfDigits(223), 7, 'Incorrect answer for integer=223');
// //     assert.strictEqual(getSumOfDigits(0), 0, 'Incorrect answer for integer=0');
// //   });
// // });

// const factorial = n => {
//   if (n === 0) {
//     return 1
//   }
//   return n * factorial(n - 1)
// };

// console.log(factorial(0));
// console.log(factorial(1));

// class Person {
//   constructor(name, age) {
//     this.info = `${name}s age is ${age}`;
//   }
// }
// console.log(Person.info);

// // describe("Tests", () => {
// //   it("test", () => {
// // var john = new Person('john', 34)
// // Test.assertEquals(john.info, 'johns age is 34')

// //   });
// // });


// function bubblesortOnce(a) {
//   let result = [...a]
//   for (let i = 0; i < result.length -1; i++) {
//     if (result[i] > result[i + 1]) {
//       [result[i],result[i + 1]] = [result[i + 1], result[i]]
//     }
//   }
//   return result
// }
// console.log(bubblesortOnce([9, 7, 5, 3, 1, 2, 4, 6, 8]), [7, 5, 3, 1, 2, 4, 6, 8, 9]);
// // const Test = require('@codewars/test-compat');

// // describe("bubblesortOnce", function () {
// //   it("should work for an example assertion", function () {
// //     Test.assertDeepEquals(bubblesortOnce([9, 7, 5, 3, 1, 2, 4, 6, 8]), [7, 5, 3, 1, 2, 4, 6, 8, 9]);
// //   });
// // });

// function bubblesortOnce(a) {
//   return [...a].map((e, i, arr) => e > arr[i+1] ? (arr[i] = arr[i+1], arr[i+1] = e, arr[i]) : e)
  
// }


// function bubblesortOnce(arr) {
//   let newArr = arr.slice();
//   for (let i = 0; i < newArr.length - 1; i++) {
//     if (newArr[i] > newArr[i + 1]) {
//       [newArr[i], newArr[i + 1]] = [newArr[i + 1], newArr[i]];
//     }
//   }
//   return newArr;
// }

// function bubblesortOnce(arr) {
// 	let a = [...arr]
// 	let b 
//   a.forEach((item, i) => {
// 		if(item > a[i+1]){
// 			b = a.splice(i, 1)[0]
// 			a.splice(i+1, 0, b)
// 		}  
// 	})
// 	return a
// }

// function bubblesortOnce(a) {
//   a = a.slice();
//   for (let i = 1; i < a.length; ++i) {
//     if (a[i] < a[i-1]) {
//       [a[i], a[i-1]] = [a[i-1], a[i]];
//     }
//   }
//   return a;
// }

// function bubblesortOnce(array) {
//   const res = array.slice();
//   for (let i = 1; i < res.length; i++)
//     if (res[i - 1] > res[i])
//       [res[i - 1], res[i]] = [res[i], res[i - 1]];
//   return res;
// }


// // alternating case https://www.youtube.com/watch?v=-M2RVWWzt8Q

// String.prototype.toAlternatingCase = function () {
//   return this.split('').map(x => x == x.toUpperCase() ? x.toLowerCase() : x.toUpperCase()).join('')
// }

// console.log("hello world".toAlternatingCase());
// console.log("HELLO WORLD".toAlternatingCase());
// console.log("hello WORLD".toAlternatingCase());
// console.log("HeLLo WoRLD".toAlternatingCase());
// console.log("12345".toAlternatingCase());
// console.log("1a2b3c4d5e".toAlternatingCase());


// // const { assert } = require('chai');

// // describe("String.prototype.toAlternatingCase", () => {
// //   it("should work for fixed tests (provided in the description)", () => {
// //     assert.strictEqual("hello world".toAlternatingCase(), "HELLO WORLD");
// //     assert.strictEqual("HELLO WORLD".toAlternatingCase(), "hello world");
// //     assert.strictEqual("hello WORLD".toAlternatingCase(), "HELLO world");
// //     assert.strictEqual("HeLLo WoRLD".toAlternatingCase(), "hEllO wOrld");
// //     assert.strictEqual("12345".toAlternatingCase(), "12345");
// //     assert.strictEqual("1a2b3c4d5e".toAlternatingCase(), "1A2B3C4D5E");
// //     assert.strictEqual("String.prototype.toAlternatingCase".toAlternatingCase(), "sTRING.PROTOTYPE.TOaLTERNATINGcASE");
// //     assert.strictEqual("Hello World".toAlternatingCase().toAlternatingCase(), "Hello World");
// //   });
// // });

// String.prototype.toAlternatingCase = function () {
//   new_str = "";
//   for(var i = 0; i < this.length; i++) {
//     if(this[i] === this[i].toUpperCase()) {
//       new_str += this[i].toLowerCase();
//     }
//     else {
//       new_str += this[i].toUpperCase();
//     }
//   }
//   return new_str;
// }

// var array = [2,3,5,7,11];
// // function find(array, element) {
// //   for (let i = 0; i < array.length; i++) {
// //     if (array[i] === element) return i;
// //   }
// //   return "Not found";
// // }

// // console.log(find(array, "Hello World"));
// // console.log(find(array, 5));
// // console.log(find(array, 11));

// // describe("Your refactored find() function", () => {
// //   it("should behave as expected", () => {
// //     var array = [2,3,5,7,11];
// //     Test.assertEquals(find(array, 5), 2);
// //     Test.assertEquals(find(array, 11), 4);
// //     Test.assertEquals(find(array, 3), 1);
// //     Test.assertEquals(find(array, 2), 0);
// //     Test.assertEquals(find(array, 7), 3);
// //     Test.assertEquals(find(array, 1), "Not found");
// //     Test.assertEquals(find(array, 8), "Not found");
// //     array = [true, "Hello World", false, "Lorem Ipsum", 6, Math.PI];
// //     Test.assertEquals(find(array, "Hello World"), 1);
// //     Test.assertEquals(find(array, "lorem ipsum"), "Not found");
// //     Test.assertEquals(find(array, "Lorem Ipsum"), 3);
// //     Test.assertEquals(find(array, false), 2);
// //     Test.assertEquals(find(array, true), 0);
// //     Test.assertEquals(find(array, Math.PI), 5);
// //     Test.assertEquals(find(array, 3.14), "Not found");
// //     Test.assertEquals(find(array, 6), 4);
// //   });
// // });
// function find(array,element){
//   return array.indexOf(element) >= 0 ? array.indexOf(element):"Not found";
//   }

//   console.log(find(array, "Hello World"));
//   console.log(find(array, 5));
//   console.log(find(array, 11));

//   // const find = (a,b) => {
//   //   return a = Array.prototype.indexOf(b) >= 0 ? Array.prototype.indexOf(b) : "Not found";
//   //   }

//   function find(array, element) {
//     if (array.includes(element)){
//       return array.indexOf(element);
//     }
//     return "Not found";
//     }


//     function find(array, element) {
//       return (array.includes(element)) ? array.indexOf(element) : 'Not found';
//      }



//     //  be concise index of an element in an array 
//      function find(a, e) {
//       return (a.includes(e)) ? a.indexOf(e) : 'Not found';
//      }






//     //  BACKSPACES IN STRING 

//     function cleanString(s) {
//       let output = [];
//       s.split('').forEach(item => {
//         item !== "#" ? output.push(item) : output.pop();
//       });
//       return output.join('');
//       // for (let i = 0; i < s.length; i++) {
//       //   if (i == '#') {
//       //     output = output[-1]
//       //   }
//       // }
//     }
//     console.log(cleanString('abc#d##c'));
//     console.log(cleanString('abc####d##c#'));


// //     const {assert} = require('chai');

// // describe("cleanString", () => {
// //   it("should work correctly", () => {
// //     assert.strictEqual(cleanString('abc#d##c'), 'ac');
// //     assert.strictEqual(cleanString('abc####d##c#'), '');
// //   });
// // });

//     //  def clean_string(s):
//     //  '''Returns a string based on s, which has a backspace 
//     //  wherever a hash symbol is found'''
//     //  output = ''
//     //  for i, letter in enumerate(s):
//     //      if letter == '#':
//     //          output = output[:-1]
//     //      else:
//     //          output += letter
//     //  return output

//     function clean_string(s) {
//       const result = []
//       for (const c of s) {
//         if (c === "#") {
//           result.pop()
//         } else {
//           result.push(c)
//         }
//       }
//       return result.join("")
//     }

//     // FLATTEN AND SORT AND ARRAY

//     function flattenAndSort(array) {
//       let result = []
//       for (let i = 0; i < array.length; i++) {
//         for (let j = 0; j < array[i].length; j++) {
//           result.push(array[i][j])
//         }
//       }
//       for (let i = 0; i < result.length - 1; i++) {
//         for (let j = i + 1; j < result.length; j++) {
//           if (result[i] > result[j]) {
//             [result[i], result[j]] = [result[j], result[i]]
//           }
//         }
//       }
//       return result
//     }

//     console.log(flattenAndSort([]));
//     console.log(flattenAndSort([[], []]));
//     console.log(flattenAndSort([[], []]));
//     console.log(flattenAndSort([[], [1]]));
//     console.log(flattenAndSort([[3, 2, 1], [7, 9, 8], [6, 4, 5]]));
//     console.log(flattenAndSort([[1, 3, 5], [100], [2, 4, 6]]));


// //     const chai = require("chai");
// // const assert = chai.assert;
// // chai.config.truncateThreshold=0;

// // describe("Example test cases", function() {
// //   it("Should pass example tests", function() {
// //     assert.deepEqual(flattenAndSort([]), []);
// //     assert.deepEqual(flattenAndSort([[], []]), []);
// //     assert.deepEqual(flattenAndSort([[], [1]]), [1]);
// //     assert.deepEqual(flattenAndSort([[3, 2, 1], [7, 9, 8], [6, 4, 5]]), [1, 2, 3, 4, 5, 6, 7, 8, 9]);
// //     assert.deepEqual(flattenAndSort([[1, 3, 5], [100], [2, 4, 6]]), [1, 2, 3, 4, 5, 6, 100]);
// //   });    
// // });


// // 5 WITHOUT NUMBERS

// function unusualFive() {
//   let five = 'Five!';
//   return five.length;
//   }

// console.log(unusualFive());

//   // describe("unusualFive", function(){
//   //   it("should return 5", function(){
//   //     assert.strictEqual(unusualFive(), 5);
//   //   });
//   // });



// // SIMPLE STRING REVERSAL

// function solve(str){
//   let result=""
//     for(let i = str.length-1; i>=0; i--) {
//       if (str[i] != " ") result += str[i]
//       if (str [result.length] == " ") result += " "
//     }  
//   return result
// }

// console.log(solve("codewars"));
// console.log(solve("your code"));
// console.log(solve("your code rocks"));
// console.log(solve("i love codewars"));



// // describe("Basic tests", function(){
// //   Test.assertEquals(solve("codewars"),"srawedoc");
// //   Test.assertEquals(solve("your code"),"edoc ruoy");
// //   Test.assertEquals(solve("your code rocks"),"skco redo cruoy");
// //   Test.assertEquals(solve("i love codewars"),"s rawe docevoli");
// //   });


// function solve(str) {
//   let arr = [...str].filter(x => x != ' ')
//   return str.replace(/\S/g, _ => arr.pop())
// }


// function solve(str){
//   let arr = str.match(/\w/g);
//   return str.replace(/\w/g, () => arr.pop());
// }

// function solve(str){
//   let stack = str.match(/[a-z]/g);
//   return str.replace(/[a-z]/g, _ => stack.pop());
// }

// function solve(str){
//   //..
//  let splitStr = str.split('')
//  let reverseStr = str.split(' ').join('').split('').reverse()
//  for (let i = 0; i <= splitStr.length; i++){
//    if (splitStr[i] === ' ') {
//      reverseStr.splice(i, 0, ' ')
//    }
//  }
 
//  return reverseStr.join('')
 
// }


// function twiceAsOld(dadYearsOld, sonYearsOld) {
//   let twice = dadYearsOld - sonYearsOld * 2;
//   return twice < 0 ? twice * (-1) : twice;
//   }
  


// // count the photos

// function countPhotos(road){
//   let result = 0;

//   road.split('').map((el,index,array) => {
//     if (el == '>') result += array.slice(index).filter(el => el == '.').length;
    
//     if(el == '<') result += array.slice(0,index).filter(el => el == '.').length;
//   });

//   return result;
// }

// console.log(countPhotos('>.>..<'));
// console.log(countPhotos('.><.>>.<<'));
// console.log(countPhotos('.>>>'));
// console.log(countPhotos('>..<<.>.<.'));
// console.log(countPhotos('.<>>..><.<<<<<.'));
// console.log(countPhotos('<..>>..>>.><.<.><..<'));
// console.log(countPhotos('<<.'));
// console.log(countPhotos('>>>.<<<'));
// console.log(countPhotos('>>><<<'));
// console.log(countPhotos('..<>.>>.><>>.<<<.<>>.>.>>>>>..><<.>.>>..>.>>><><>.'));





// // const chai = require("chai");
// // const assert = chai.assert;
// // chai.config.truncateThreshold = 0;

// // describe("count photos", function() {
  
// //   it("given: >.>..<, should return 8", function() {
// //     assert.deepEqual(countPhotos('>.>..<'), 8);
// //   });
  
// //   it("given: .><.>>.<<, should return 11", function() {
// //     assert.deepEqual(countPhotos('.><.>>.<<'), 11);
// //   });

// //   it("given: .>>>, should return 0", function() {
// //     assert.deepEqual(countPhotos('.>>>'), 0);
// //   });
  
// //   it("given: >..<<.>.<., should return 15", function() {
// //     assert.deepEqual(countPhotos('>..<<.>.<.'), 15);
// //   });

// //   it("given: .<>>..><.<<<<<., should return 34", function() {
// //     assert.deepEqual(countPhotos('.<>>..><.<<<<<.'), 34);
// //   });
  
// //   it("given: <..>>..>>.><.<.><..<, should return 57", function() {
// //     assert.deepEqual(countPhotos('<..>>..>>.><.<.><..<'), 57);
// //   });

// //   it("given: .<<, should return 0", function() {
// //     assert.deepEqual(countPhotos('<<.'), 0);
// //   });
  
// //   it("given: >>>.<<<, should return 6", function() {
// //     assert.deepEqual(countPhotos('>>>.<<<'), 6);
// //   });
  
// //   it("given: .., should return 0", function() {
// //     assert.deepEqual(ç, 0);
// //   });
  
// //   it("given: >>><<<, should return 0", function() {
// //     assert.deepEqual(countPhotos('>>><<<'), 0);
// //   });
  
// //   it("given: ..<>.>>.><>>.<<<.<>>.>.>>>>>..><<.>.>>..>.>>><><>., should return 248", function() {
// //     assert.deepEqual(countPhotos('..<>.>>.><>>.<<<.<>>.>.>>>>>..><<.>.>>..>.>>><><>.'), 248);
// //   });
  
// // });

// /*In a string we describe a road. There are cars that move to the right and we denote them with ">" and cars that move to the left and we denote them with "<". There are also cameras that are indicated by: " . ".
// A camera takes a photo of a car if it moves to the direction of the camera.

// Task
// Your task is to write a function such that, for the input string that represents a road as described, returns the total number of photos that were taken by the cameras. The complexity should be strictly O(N) in order to pass all the tests.*/


// function cakes(recipe, available) {
//   let count = 0;
//   while(true) {
//     for(let ingredient in recipe) {
//       if (available[ingredient]) {
//         return count;
//       }
//       if (available[ingredient] - recipe[ingredient] < 0) {
//         return count;
//       }
//       else {
//         available[ingredient] -= recipe[ingredient]
//       }
//     }
//     count ++;
//   }
// }

// // const {assert} = require('chai');

// // describe('description example', function() {
// //   it('pass example tests', function() {
// //     let recipe = {flour: 500, sugar: 200, eggs: 1};
// //     let available = {flour: 1200, sugar: 1200, eggs: 5, milk: 200};
// //     assert.equal(cakes(recipe, available), 2);
    
// //     recipe = {apples: 3, flour: 300, sugar: 150, milk: 100, oil: 100};
// //     available = {sugar: 500, flour: 2000, milk: 2000};
// //     assert.equal(cakes(recipe, available), 0);
// //   });
// // });


// function getPINs(observed) {
//   const _ = undefined
//   const pad = [
//    ['1','2','3'],
//    ['4','5','6'],
//    ['7','8','9'],
//    [ _ ,'0', _ ]
//   ]
//   const keys = observed.split('').map(o => getSiblingKeys(o.toString(), pad))
//   const results = cartesian(keys).map(arr => arr.join(''))
  
//   return results
  
//   function getSiblingKeys(n, pad) {
//     const e = []
//     const y = pad.findIndex(arr => arr.indexOf(n) != -1)
//     const x = pad[y].indexOf(n)

//     e.push(n)
//     if (y > 0) e.push(pad[y-1][x])
//     if (y < 2 || n == '8') e.push(pad[y+1][x])
//     if (x > 0 && n != '0') e.push(pad[y][x-1])
//     if (x < 2 && n != '0') e.push(pad[y][x+1])
    
//     return e
//   }

//   function cartesian(arr) {
//     return arr.reduce((a,b) => (
//       a.map((x) =>
//         b.map((y) =>
//           x.concat(y)
//         )
//       ).reduce((a,b) => (
//         a.concat(b)
//       ), [])
//     ), [[]])
//   }
// }


// // selection sort


// let inputArr = [9,5,7,8,1,2]

// function selectionSort(inputArr) { 
//   let n = inputArr.length;
      
//   for(let i = 0; i < n; i++) {
//       // Finding the smallest number in the subarray
//       let min = i;
//       for(let j = i+1; j < n; j++){
//           if(inputArr[j] < inputArr[min]) {
//               min=j; 
//           }
//        }
//        if (min != i) {
//            // Swapping the elements
//            let tmp = inputArr[i]; 
//            inputArr[i] = inputArr[min];
//            inputArr[min] = tmp;      
//       }
//   }
//   return inputArr;
// }
// console.log(selectionSort(inputArr));

// /*
// 1) Objects (iterating)
// 2) DOM event (very brief run through/review of eventlistnener)
// 3) Map, Reduce, Filter (review with arrow function syntax)
// */

// {/* <select> 
//   <option value = "0">Banana</option>
//   <option value = "0">Mang0</options>
// </select> */}



// arr = [1,2,3,4,5].reduce((accumulator, currentValue) => accumulator + currentValue
// );

// console.log(arr);


// arr = [1,2,3,4,5].map(num => num *num);

// console.log(arr);


// function lessTen(arr) {
//   return (arr[i] < 10 ? "true" : "false")
// };

// console.log(lessTen(arr));



// arr.forEach(myFunction => {
//   sum += item;
// })

// console.log(myFunction);


// arr.reduce(items => {
//   return accumulator +currentValue +
// });


// function getSum() {

// }


// function getSum(num) {
//   let sum = 0;
//     for(let i = 1; i <= num; i++){
//       sum += i;
//     }
//     return `The sum of numbers 0 to ${num} is ${sum}.`;
// }

// console.log(getSum(4));
// console.log(getSum(5));

const encloseInBrackets = (num) => {
  let arr = "";
  for(let i = 1; i <= num; i++) {
    arr += `[${i}]`
  }
  return arr;
}

console.log(encloseInBrackets(3));
