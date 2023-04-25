const start = document.querySelector(".btn");
const add = document.querySelector(".add");
const pause = document.querySelector("#pause");
const reset = document.querySelector("#reset");
let minute = document.querySelector(".minutes");
let second = document.querySelector(".seconds");
let lists = document.createElement("div");
lists.classList.add("lists")


let createCount = 0;
add.addEventListener("click", () => {
    createCount++;

    if (createCount === 1) {
        const newDiv = document.createElement('div');
        newDiv.setAttribute("class", "newDiv");
        const input = document.createElement('input');
        var remove = document.createElement("i")
        remove.classList.add("fa-solid", "fa-trash", "remove")
        const button = document.createElement('btn');
        button.classList.add("btn", "btn-success");
        button.innerText = "Save";
        newDiv.append(input, button, remove);
        button.addEventListener("click", () => {
            const title = document.createElement("p");
            title.classList.add("newP")
            title.innerText = input.value;
            lists.append(title)
            newDiv.append(lists)
            console.log("Time Finished");
            input.value = "";
        })
        document.body.append(newDiv)
        remove.addEventListener("click", () => {
            desc.remove();
        })
    }

})

let intervalId;

let secondCount = 0;
let minuteCount = 25;
start.addEventListener("click", () => {

    intervalId = setInterval(() => {
        secondCount--;
        if (secondCount >= 0) {

            minute.innerText = minuteCount;
            second.innerText = secondCount;

        }
        else {
            secondCount = 59;
            minuteCount--;
        }

    }, 1000)
})
reset.addEventListener("click", () => {
    clearInterval(intervalId);
    minute.innerText = "25";
    minuteCount = 25
    second.innerText = "00";
    secondCount = 0
})

pause.addEventListener("click", () => {
    clearInterval(intervalId);
})