// RANDOM NUM
// const myButton = document.getElementById("myButton");
// const label1 = document.getElementById("label1");
// const label2 = document.getElementById("label2");
// const label3 = document.getElementById("label3");
// const label4 = document.getElementById("label4");

// const min = 1, max = 6;

// let randomNum1, randomNum2, randomNum3, randomNum4;

// myButton.onclick = function() {
//     randomNum1 = Math.floor(Math.random() * max) + min;
//     randomNum2 = Math.floor(Math.random() * max) + min;
//     randomNum3 = Math.floor(Math.random() * max) + min;
//     randomNum4 = Math.floor(Math.random() * max) + min;

//     label1.textContent = randomNum1;
//     label2.textContent = randomNum2;
//     label3.textContent = randomNum3;
//     label4.textContent = randomNum4;
// }




// CONDITIONALS
// const myText = document.getElementById("myText");
// const myButton = document.getElementById("myButton");
// const resultElement = document.getElementById("resultElement");

// let age;

// myButton.onclick = function() {
//     age = Number(myText.value);

//     if (age >= 100) {
//         resultElement.textContent = `You're too OLD to enter this site.`;
//     }
//     else if (age >= 50 && age < 100) {
//         resultElement.textContent = `C'mon you're being older!`;
//     }
//     else if (age >= 18 && age < 50) {
//         resultElement.textContent = `Youre in!`;
//     }
//     else if (age > 0 && age < 18) {
//         resultElement.textContent = `You must be 18+ to enter this site!`;
//     }
//     else {
//         resultElement.textContent = `Enter a valid age!`;
//     }
// }



const myCheckbox = document.getElementById("myCheckbox");
const visa = document.getElementById("visa");
const MasterCard = document.getElementById("MasterCard");
const PayPal = document.getElementById("PayPal");
const mySubmit = document.getElementById("mySubmit");
const subRes = document.getElementById("subRes");
const payRes = document.getElementById("payRes");

mySubmit.onclick = function() {
    if(myCheckbox.checked) {
        subRes.textContent = `You are subscribed`;
    }
    else {
        subRes.textContent = `You are NOT subscribed`;
    }

    if (visa.checked) {
        payRes.textContent = `You are paying with Visa`;
    }
    else if (MasterCard.checked) {
        payRes.textContent = `You are paying with Master Card`;
    }
    else if (PayPal.checked) {
        payRes.textContent = `You are paying with PayPal`;
    }
}