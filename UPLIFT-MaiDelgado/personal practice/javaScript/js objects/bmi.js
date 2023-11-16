
let juan = {
    name: "Juan",
    weight: "69",
    height: "1.45",
    bmi: function(){
        return this.weight/ (this.height * this.height);
    }
}

let pedro = {
    name: "Pedro",
    weight: "75",
    height: "1.70",
    bmi: function(){
        return this.weight/ (this.height * this.height);
    }
}

let juanBMI = juan.weight / (juan.height * juan.height)
let pedroBMI = pedro.weight / (pedro.height * pedro.height)

console.log(juanBMI);
console.log(pedroBMI);

function compareBMI(){
    if (juan.bmi() > pedro.bmi()) {
        console.log (`Juan's BMI (${juan.bmi()}) is higher than Pedro's BMI (${pedro.bmi()}))`)
    } else {
        console.log (`Juan's BMI (${juan.bmi()}) is higher than Pedro's BMI (${pedro.bmi()}))`)
}
}




// const words = "Three Letter Acronyms"

// function acronym(word) {
//   const wordArray = word.split(" ")
//   let letters = [];
  
//   for (let i=0; i < wordArray.length; i++) {
//     letters.push(wordArray[i][1])
//   }
  
//   console.log(letters.toString().replaceAll(",","").toUpperCase())
// }

// acronym(words)

// letters.push(wordArray[i][1])

// to

// letters.push(wordArray[i][0])



// // Robin to Everyone (7:51 PM)
// function getAcronym(string) {
//   let words = string.split(' ');
//   let acronym = '';
//   for(let i = 0; i < words.length; i++) {
//     acronym += words[i].charAt(0);
//   }
//   return acronym.toUpperCase();
// }



