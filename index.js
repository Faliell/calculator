let num1 = null;
let num2 = null;
let simbol = "";
let textDisplay = 0;
let ev = null;
const numFull = [];
const okValue = ["0","1","2","3","4","5","6","7","8","9","0","+","-","/","*","=","c",".","ce","+/-",
];

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
    case "equal":
      return num1;
      break;
  }
}

function negative(list) {
  if (list.includes("-")) {
    list.shift();
  } else {
    list.unshift("-");
  }
  return list;
}
function calculator(ev) {
  let display = document.querySelector("#display");
  if (ev === "ce") {
    num1 = null;
    num2 = null;
    simbol = "";
    numFull.length = 0;
    textDisplay = 0;
    display.innerText = 0;
  } else if (ev === "c") {
    numFull.pop();
    textDisplay = numFull.join("");
    display.innerText = textDisplay;
  } else {
    if (!num1) {
      if (ev == "." && numFull.includes(".")) {
      } else if (ev === "+/-") {
        negative(numFull);
        textDisplay = numFull.join("");
        display.innerText = textDisplay;
      } else if (ev === "+") {
        num1 = parseFloat(textDisplay);
        numFull.length = 0;
        simbol = "add";
        display.innerText = num1.toString().substring(0, 8);
      } else if (ev === "-") {
        num1 = parseFloat(textDisplay);
        numFull.length = 0;
        simbol = "subtract";
        display.innerText = num1.toString().substring(0, 8);
      } else if (ev === "/") {
        num1 = parseFloat(textDisplay);
        numFull.length = 0;
        simbol = "divide";
        display.innerText = num1.toString().substring(0, 8);
      } else if (ev === "*") {
        num1 = parseFloat(textDisplay);
        numFull.length = 0;
        simbol = "multiply";
        display.innerText = num1.toString().substring(0, 8);
      } else if (ev === "=") {
        display.innerText = 0;
      } else {
        numFull.push(ev);
        textDisplay = numFull.join("");
        display.innerText = textDisplay;
      }
    } else {
      if (ev == "." && numFull.includes(".")) {
      } else if (ev === "+/-") {
        negative(numFull);
        textDisplay = numFull.join("");
        display.innerText = textDisplay;
      } else if (ev === "+") {
        num1 = operate(num1, num2, simbol);
        num2 = parseFloat(textDisplay);
        numFull.length = 0;
        simbol = "add";
        display.innerText = num1.toString().substring(0, 8);
      } else if (ev === "-") {
        num1 = operate(num1, num2, simbol);
        num2 = parseFloat(textDisplay);
        numFull.length = 0;
        simbol = "subtract";
        display.innerText = num1.toString().substring(0, 8);
      } else if (ev === "/") {
        num1 = operate(num1, num2, simbol);
        numFull.length = 0;
        simbol = "divide";
        display.innerText = num1.toString().substring(0, 8);
      } else if (ev === "*") {
        num1 = operate(num1, num2, simbol);
        numFull.length = 0;
        simbol = "multiply";
        display.innerText = num1.toString().substring(0, 8);
      } else if (ev === "=") {
        num1 = operate(num1, num2, simbol);
        textDisplay = num1;
        numFull.length = 0;
        display.innerText = num1.toString().substring(0, 8);
        num2 = null;
        simbol = "equal";
      } else {
        numFull.push(ev);
        textDisplay = numFull.join("");
        num2 = parseFloat(textDisplay);
        display.innerText = textDisplay;
      }
    }
  }
}

document.addEventListener("keydown", (event) => {
  if (okValue.includes(event.key)) {
    evKey = event.key;
    calculator(evKey);
  }
});

document.addEventListener("click", (event) => {
  evMouse = event.target.innerText;
  if (okValue.includes(evMouse)) {
    calculator(evMouse);
  }
});
