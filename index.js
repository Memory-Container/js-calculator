let character = [" ","+","-",".","0","1","2","3","4","5","6","7","8","9"]
for (let i = 65; i <= 90; i++) {
  character.push(String.fromCharCode(i));
}
function initializeDisplay(int = 23) {
    let display = document.getElementsByClassName("display")
    display[0].innerHTML = 
    `
    <div class="number-container">
        <div class="number"></div>
    </div>
    `.repeat(int) 
    let numberCounter = document.querySelectorAll(".number")
    numberCounter.forEach((element) => {
        let innerContent= ""
        for (let i = 0; i < character.length; i++) {
            innerContent += `<div>${character[i]}</div>`
        }
        element.innerHTML = innerContent
    })
}
let counter = document.getElementsByClassName("number")
function setNumber(number = 0) {
    number = String(number)
    number = String(number).toUpperCase()
    if (typeof number != "string") {
        number = number.padStart(counter.length, " ")
    } else {
        number = number.padStart(counter.length, " ")
    }
    for (let i = 0; i < counter.length; i++) {
        counter[i].style.transform = `translateY(calc(32px * ${-character.indexOf(number[i]) + 1}))`
    }
}
initializeDisplay()
setNumber("waiting for input   ")
function operation(mode) {
    let input1 = parseFloat(document.getElementById("first").value)
    let input2 = parseFloat(document.getElementById("second").value)
    if (isNaN(input1) || isNaN(input2)) {
        setNumber("INVALID INPUT     ")
        return;
    }
    switch(mode) {
        case "+":
            setNumber(input1 + input2)
            break
        case "-":
            setNumber(input1 - input2)
            break
        case "*":
            setNumber(input1 * input2)
            break
        case "/":
            if (input2 != 0) {
                setNumber(input1 / input2)
            } else {
                setNumber("divide by 0 error   ")
            }
            break;
    }
}

// setNumber("DIVIDE BY 0 ERROR")