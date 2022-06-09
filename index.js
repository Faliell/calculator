let num1 = null;
let num2 = null;
let simbol = "";
let textDisplay = 0;
const numFull = [];

function operate(num1 = 0, num2 = 0, operator) {
  switch (operator) {
    case "add":
      result = num1 + num2;
      if (result > 99999999 || result < -9999999) {
        return "Big!😵‍💫";
      } else {
        return result;
      }
      break;
    case "subtract":
      result = num1 - num2;
      if (result > 99999999 || result < -9999999) {
        return "Big!😵‍💫";
      } else {
        return result;
      }
      break;
    case "divide":
      if (num2 === 0) {
        return "😵‍💫😵‍💫😵‍💫";
      } else {
        result = num1 / num2;
        if (result > 99999999 || result < -9999999) {
          return "Big!😵‍💫";
        } else {
          return result;
        }
      }
      break;
    case "multiply":
      result = num1 * num2;
      if (result > 99999999 || result < -9999999) {
        return "Big!😵‍💫";
      } else {
        return result;
      }
      break;
    default:
      return num1;
  }
}

function display(event) {
  let ev = event.target.innerText;
  let display = document.querySelector("#display");
  if (ev === "C") {
    num1 = null;
    num2 = null;
    simbol = "";
    numFull.length = 0;
    display.innerText = 0;
  } else {
    if (!num1) {
      if (ev == "." && numFull.includes(".")) {
        console.log("Alredy .");
      } else if (ev === "+/-") {
        num1 = parseFloat(textDisplay) * -1;
        numFull.length = 0;
        display.innerText = num1.toString().substring(0, 8);
      } else if (ev === "+") {
        num1 = parseFloat(textDisplay);
        numFull.length = 0;
        simbol = "add";
        console.log(`num1 ${num1} num2 ${num2} simbol ${simbol}`);
        display.innerText = num1.toString().substring(0, 8);
      } else if (ev === "-") {
        num1 = parseFloat(textDisplay);
        numFull.length = 0;
        simbol = "subtract";
        console.log(`num1 ${num1} num2 ${num2} simbol ${simbol}`);
        display.innerText = num1.toString().substring(0, 8);
      } else if (ev === "÷") {
        num1 = parseFloat(textDisplay);
        numFull.length = 0;
        simbol = "divide";
        console.log(`num1 ${num1} num2 ${num2} simbol ${simbol}`);
        display.innerText = num1.toString().substring(0, 8);
      } else if (ev === "x") {
        num1 = parseFloat(textDisplay);
        numFull.length = 0;
        simbol = "multiply";
        console.log(`num1 ${num1} num2 ${num2} simbol ${simbol}`);
        display.innerText = num1.toString().substring(0, 8);
      } else if (ev === "=") {
        console.log(`num1 ${num1} num2 ${num2} simbol ${simbol}`);
        display.innerText = num1
          .toString()
          .substring(0, 8)
          .toString()
          .substring(0, 8);
      } else {
        numFull.push(ev);
        textDisplay = numFull.join("");
        console.log(textDisplay);
        display.innerText = textDisplay;
      }
    } else {
      if (ev == "." && numFull.includes(".")) {
        console.log("Alredy .");
      } else if (ev === "+/-") {
        num2 = parseFloat(textDisplay) * -1;
        numFull.length = 0;
        display.innerText = num1.toString().substring(0, 8);
      } else if (ev === "+") {
        num1 = operate(num1, num2, simbol);
        num2 = parseFloat(textDisplay);
        numFull.length = 0;
        simbol = "add";
        console.log(`num1 ${num1} num2 ${num2} simbol ${simbol}`);
        display.innerText = num1.toString().substring(0, 8);
      } else if (ev === "-") {
        num1 = operate(num1, num2, simbol);
        num2 = parseFloat(textDisplay);
        numFull.length = 0;
        simbol = "subtract";
        console.log(`num1 ${num1} num2 ${num2} simbol ${simbol}`);
        display.innerText = num1.toString().substring(0, 8);
      } else if (ev === "÷") {
        num1 = operate(num1, num2, simbol);
        numFull.length = 0;
        simbol = "divide";
        console.log(`num1 ${num1} num2 ${num2} simbol ${simbol}`);
        display.innerText = num1.toString().substring(0, 8);
      } else if (ev === "x") {
        num1 = operate(num1, num2, simbol);
        numFull.length = 0;
        simbol = "multiply";
        console.log(`num1 ${num1} num2 ${num2} simbol ${simbol}`);
        display.innerText = num1.toString().substring(0, 8);
      } else if (ev === "=") {
        num1 = operate(num1, num2, simbol);
        console.log(`num1 ${num1} num2 ${num2} simbol ${simbol}`);
        display.innerText = num1.toString().substring(0, 8);
        num2 = null;
        simbol = "";
      } else {
        numFull.push(ev);
        textDisplay = numFull.join("");
        num2 = parseFloat(textDisplay);
        console.log(textDisplay);
        display.innerText = textDisplay;
      }
    }
  }
}
