
let kredit = 1800; 
let ay = 12; 


function kreditödəmələri(kredit, ay) {
    const aylıqOdəmə = kredit / ay;

    const loxlanmasiyahisi = [];

    for (let i = 0; i < ay; i++) {
        loxlanmasiyahisi.push(aylıqOdəmə);
    }

    return loxlanmasiyahisi;
}


let plan = kreditödəmələri(kredit, ay);


console.log("Aylıq loxlanma miqdarı");
  {
    console.log( plan + " AZN");
};

// kredit algoritmi

let myArr1 = [1, 3, 4, 2, 2];
let myArr2 = [1, 3, 4, 4];


function çıxanduplikat(arr) {
    let görünəndəyər = {};

    for (let i = 0; i < arr.length; i++) {
        if (görünəndəyər[arr[i]]) {
            return arr[i];
        } else {
            görünəndəyər[arr[i]] = true;
        }
    }

    return null; 
}



console.log(çıxanduplikat(myArr1)); 
console.log(çıxanduplikat(myArr2)); 

// dublikar çıxarmaq
