const myHeading = document.getElementById("heading");
const myKeyValue = document.getElementById("keyValue");
const myKeyCode = document.getElementById("keyCode");
const myCharCode = document.getElementById("charCode");

document.addEventListener("keypress", (x) => {
    myHeading.textContent = `${x.charCode}`;
    myKeyValue.textContent = `${x.key}`;
    myKeyCode.textContent = `${x.code}`;
    myCharCode.textContent = `${x.charCode}`;
    })