let input = document.getElementById("textarea");
let buttons = document.querySelectorAll(".row");

buttons.forEach(function (button) {
    button.addEventListener("click", function () {
        let value = button.innerText;
        
       if (value === "AC") {
            input.value = "0";
        }
        else if (value === "X") {
            input.value = input.value.slice(0, -1);

            if (input.value === "") {
                input.value = "0";
            }
        }
        
        else if (value === "=") {
            try {
                let expression = input.value.replace(/x/g, "*");
                input.value = eval(expression);
            } catch (error) {
                input.value = "Error";
            }
        }
        else { 
            // For all other buttons (numbers and operators) We are using OR
if (input.value === "0" || input.value === "Error") {
                input.value = value;
            } else {
                input.value += value;
            }
        }
    });
});