let firstName = prompt("What is your first name");
let lastName = prompt("What is your last name");
let firstNameTrim = firstName.trim();
let lastNameTrim = lastName.trim();
let fullName = `${firstNameTrim} ${lastNameTrim}`
// console.log(fullName);

function hideName(fullName){
     let Split = firstNameTrim.split(" ");
     // return firstNameTrimSplit;
     for (let i = 0; i <= Split.length-1;i++){
          Array.from(String(Split[i]));
          console.log(Split[i]);
          for (let n = 2; n < Split[i].length-1; n++){
               Split[i].splice(n,1,'*');
               console.log(Split);
          }
     }
}
console.log(hideName(fullName));
 
// function hideName(firstName){
//      let Split = firstName.split(" ");
//      console.log(Split);
//      for (let i = 0; i <= Split.length -1; i++){
//           Array.from(String(Split[i]));
//           console.log(Split);
// //           for (let i = 2; i < firstNameSplit[i].length-1;i++){
// //                firstNameSplit[i].trim().splice(i,1,'*');
// //           }
// //      }
// //      let firstNameCaps = firstNameSplit.toString().toUpperCase();
// //      let lastNameHidden = lastName.charAt(0);
// //      let lastNameCaps = lastNameHidden.toUpperCase();
// //      return (`${firstNameCaps} ${lastNameCaps}.`);
// // }
// }}
// console.log(hideName());





// function fullName() {
//      return `${firstName} ${lastName}`;
// }
// console.log(fullName(firstName,lastName));
// console.log(firstName.length);
// for (i = 0; i <= firstName.length; i++ ){
//      console.log(firstName.charAt(i));
// }
// function hideName(){}
// let firstNameSplit = firstName.split(" ");
// console.log(firstNameSplit);
// console.log(firstNameSplit.length);
// console.log(firstNameSplit[0]);
// let name1 = Array.from(String(firstNameSplit[0]));
// for (let i=2; i < name1.length-1 ; i++){
//      name1.splice(i,1,'*');
//      // console.log(name1);
// }
// let name1UC = name1.toString().toUpperCase();
// console.log(name1.toString().toUpperCase());
// console.log(firstNameSplit[1]);
// let name2 = Array.from(String(firstNameSplit[1]));
// for (let i=2; i < name2.length-1 ; i++){
//      name2.splice(i,1,'*');
//      // console.log(name1);
// }
// let name2UC = name2.toString().toUpperCase().trim();
// console.log(name2UC);
// console.log(name2.toString().toUpperCase().trim());

// let lastNameUC = lastName.charAt(0);
// console.log(lastNameUC.toUpperCase());
// let lastNameUC2 = lastNameUC.toUpperCase().trim();

// console.log(`${name1UC } ${name2UC} ${lastNameUC2}.`);

// let lastNameArray = Array.from(String(lastName));
// console.log(lastNameArray);
// let lastNameHide = lastName.charAt[0];
// console.log(lastNameHide);
// function nameSlice(){
//      let nameSlice = firstNameSplit.slice(2,-1);
//      con



// for (let i = 0; i <= x; i++){
//      console.log(Array.from(String(firstNameSplit[i])));
// }

// //      let slicedName = nameArray.slice(2,-1);
// //      console.log(slicedName);

// //     let splicedName = nameArray.splice(2,-1);
//      // // console.log (splicedName);
//      // let replaceChar = nameArray.replace(2)

//      // for (let i = 0; i <= slicedName.length; i++){
//      //      let astName = slicedName.replace('slicedName[i]',"*");
//      //      console.log(astName);
// }
// for (let i = nameArray.length-1; i > 1 && i < (nameArray.length-1); i++){
//      nameArray[i] = nameArray[1].toString().replace(i,'*');
//      console.log(nameArray[i]);
// }
     // console.log(firstNameSplit[i].slice(2,-1));
     // console.log(firstNameSplit);
     

// let x = firstNameSplit(" ")
// firstNameSplit.forEach(hideName);

// function hideName(){
//      return x.slice(2,-1);
// }



// console.log(firstNameSplit=[]);


// let firstNameArray = Array.from(String(firstNameSplit));
// console.log(firstNameArray);

// let lastNameArray = Array.from(String(lastNameSplit));
// console.log(lastNameArray);

// console.log(lastNameArray.slice(2,-1));



// function hideName(fullName){
//      if firstNameArray
// }

// let firstNameArray = Array.from(String(firstName));
// console.log(firstNameArray);

// let lastNameArray = Array.from(String(lastName));
// console.log(lastNameArray);
