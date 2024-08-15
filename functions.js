const mul = (a, b) => {
    return a*b;
}

let res1 = mul(3,7);
console.log(res1);



const vow = (word) => {
    let count = 0;
    for(let letter of word) {
        if (letter == "a" || letter == "e" || letter == "i" || letter == "o" || letter == "u") {
            count++;
        }
    }

    return count;
}

let res = vow("Moinul");
console.log(`Number of vowels are ${res}`);




let numbers = [1,2,3,4,5];

numbers.forEach((val) => {
    console.log(val * val);
});


let newNum = numbers.map((val) => {
    return val*val;
})

console.log(newNum);






let n = 6

let arr = [];

for (let i = 1; i <= n; i++) {
    arr[i-1] = i;
}

console.log(arr);


let sum = arr.reduce((res, val) => {
    return res + val;
})

console.log(sum);

