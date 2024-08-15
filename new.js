// let heroes = ["ironman", "spiderman", "thor", "hulk"];

// for (let hero of heroes) {
//     console.log(hero);
    
// }

// let marks = [98, 98, 98, 98];
// let sum = 0;
// let n = marks.length;

// for(let mark of marks) {
//     sum += mark;
// }

// let avg = sum / n;
// console.log(avg);

// let items = [250, 645, 300, 900, 50];
// let off;

// for (let i = 0; i < items.length; i++) {
//     off = items[i] * 0.1;
//     items[i] -= off;
// }

// for (let item of items) {
//     console.log(`Price after offer = ${item}`);
// }





let companies = ["Bloomberg", "Microsoft", "Uber", "Google", "IBM", "Netflix"];

// companies.splice(0,1);
let i = companies.indexOf("Uber");
companies.splice(i, 1, "Ola");
companies.push("Amazon");
console.log(companies);