const keyboard = {
    myHeading: document.getElementById("heading"),
    myKeyValue: document.getElementById("keyValue"),
    myKeyCode: document.getElementById("keyCode"),
    myCharCode: document.getElementById("charCode"),
    keyFunction: function(x) {
        this.myHeading.innerHTML = `${x.charCode}`;
        this.myKeyValue.innerHTML = `${x.key}`;
        this.myKeyCode.innerHTML = `${x.code}`;
        this.myCharCode.innerHTML = `${x.charCode}`;
    }
    };

document.addEventListener("keypress", (x) => {
    keyboard.keyFunction(x);
});