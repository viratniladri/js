let modeBtn = document.querySelector("#mode");

let currMode = "light";
modeBtn.innerHTML = "dark";

// modeBtn.addEventListener("click", () => {
//     if (currMode === "light") {
//         currMode = "dark";
//         document.querySelector("body").style.backgroundColor = "black";
//     }
//     else {
//         currMode = "light";
//         document.querySelector("body").style.backgroundColor = "white";
//     }

//     console.log(currMode);
// });


let body = document.querySelector("body");

modeBtn.addEventListener("click", () => {
    if (currMode === "light") {
        currMode = "dark";
        body.classList.add("dark");
        body.classList.remove("light");
        modeBtn.innerHTML = "light";
    }
    else {
        currMode = "light";
        body.classList.add("light");
        body.classList.remove("dark");
        modeBtn.innerHTML = "dark";
    }

    console.log(currMode);
});