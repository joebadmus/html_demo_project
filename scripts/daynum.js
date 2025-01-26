// Question 3
// Question 8 = One way to get element from HTML is querySelector and getElementById 
let submitButton = document.querySelector("button")
let div_element = document.getElementById("output");
let days = { 1: "Monday", 2: "Tuesday", 3: "Wednesday", 4: "Thursday", 5: "Friday", 6: "Saturday", 7: "Sunday" }

submitButton.onclick = function submitNumber() {
    var inputNumber = document.getElementById("daynumber").value
    if (inputNumber !== "") {
        if (inputNumber > 0 && inputNumber < 8) {
            let day = document.createElement("p")
            let node = document.createTextNode(days[inputNumber])
            day.appendChild(node);
            div_element.appendChild(day)
        }
    }
    document.getElementById("daynumber").value = ""
}

