const btn = document.getElementById("btn");
const text = document.getElementById("text");

let toggleBtn = false;

btn.addEventListener("click", () => {
    if(toggleBtn == false){
        toggleBtn = true;
        text.style.display = "none";
    } else{
        toggleBtn = false;
        text.style.display = "block";
    }
}) 

button.addEventListener("click", () => alert("1"));
button.removeEventListener("click", () => alert("1"));
button.onclick = () => alert(2);

//The result is alert(2);

let listItem = document.querySelectorAll(".list-item");
let closeItem = document.getElementById("close");

closeItem.addEventListener("click", () => {
    listItem.style.display = "none";
})

