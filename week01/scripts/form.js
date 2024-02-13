const pass1 = document.querySelector("#pass1");
const pass2 = document.querySelector("#pass2");
const feedback = document.querySelector("#feddback");

pass2.addEventListener("focusout",Controlar)

function Controlar() {
    //console.log("inside the function")
    if (pass1.value !==pass2.value) {
        //console.log("no match")
        pass1.value =""
        pass2.value =""
        pass1.focus()
        feedback.textContent = "Values do not match. Try again"

    } else {
        //console.log("match")
        feedback.textContent = ""

    }
}