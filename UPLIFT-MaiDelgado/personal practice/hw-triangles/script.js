let rows = Number(prompt("Height of triangle"));
function drawTriangle(){
    let tType = prompt("Type of triangle");
    let height = rows;
    switch(tType){
        case "isosceles":
            isosceles();
            break;
        
        case "invertedIsosceles":
            invertedIsosceles();
            break;

        case "equilateral":
            equilateral();
            break;
        
        case "invertedEquilateral":
            invertedEquilateral();
            break;

        case "leftIsosceles":
            leftIsosceles();
            break;

        default:
            console.log("Type given is not a known type.")
}
}
drawTriangle();


// ISOSCELES
function isosceles(){
    // let rows1 = 7;
    let x = "";
    for (let i = 1; i <= rows; i++) {
        for (let j = 0; j < i; j++) {
        x += "#";
        }
        x += "\n";
    }
    console.log(x);
}


// // INVERTED ISOSCELES
function invertedIsosceles(){
    // let rows2 = 6;
    let y = '';
    for (let i = 0; i < rows; i++) {
        for (let k = 0; k < rows - i; k++) {
            y+= '#';
        }
        y += "\n";
    }
    console.log(y);
}


// EQUILATERAL
function equilateral(){
    // let rows3 = 3;
    let z = "";
    for (let i = 1; i <= rows; i++) {
        for (let j = 1; j <= rows - i; j++) {
            z += " ";
        }
        for (let k = 0; k < 2 * i - 1; k++) {
            z += "#";
        }
    z += "\n";
    }
    console.log(z);
}


// INVERTED EQUILATERAL
function invertedEquilateral(){
    // let rows4 = 4;
    let a = "";
    for (let i = 0; i < rows; i++) {
    for (let j = 0; j < i; j++) {
        a += " ";
    }
    for (let k = 0; k < 2 * (rows-i) - 1; k++) {
        a += "#";
    }
    a += "\n";
    }
    console.log(a);
}

// // LEFT ISOSCELES
function leftIsosceles(){
    // let rows5 = 10;
    let b = " ";
    for (let i = 0; i <= rows; i++) {
    for (let j = 0; j < rows - i; j++) {
        b += " ";
    }
    for (let k = 0; k < i; k++) {
        b += "#";
    }
    b += "\n";
    }
    console.log(b);
}