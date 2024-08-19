let btn = document.createElement("button");
btn.innerText = "Click me!";

document.querySelector("body").prepend(btn);

btn.style.backgroundColor = "cyan";
btn.style.border = "2px solid red";


let para = document.querySelector("p");
para.classList.add("content");