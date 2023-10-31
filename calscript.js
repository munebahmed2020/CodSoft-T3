let display = document.getElementById("display");
let buttons = Array.from(document.getElementsByTagName("button"));
let value = "";
let operatorSet = false;

buttons.map(button => {
    button.addEventListener("click", (e) => {
        let buttonText = e.target.innerText;
        if (buttonText === "C") {
            value = "";
            display.innerText = value;
            operatorSet = false;
        } else if (buttonText === "=") {
            try {
                value = eval(value);
                display.innerText = value;
            } catch (error) {
                display.innerText = "Error";
            }
            operatorSet = false;
        } else {
            if (buttonText === "+" || buttonText === "-" || buttonText === "*" || buttonText === "/") {
                operatorSet = true;
            } else {
                operatorSet = false;
            }
            value += buttonText;
            display.innerText = value;
        }
    });
});
