const boton1 = document.getElementsByClassName("one");
const boton2 = document.getElementsByClassName("two");
const boton3 = document.getElementsByClassName("three");
const boton4 = document.getElementsByClassName("four");
const boton5 = document.getElementsByClassName("five");
const boton6 = document.getElementsByClassName("six");
const boton7 = document.getElementsByClassName("seven");
const boton8 = document.getElementsByClassName("eight");
const boton9 = document.getElementsByClassName("nine");
const boton0 = document.getElementsByClassName("zero");
const botonAdd = document.getElementsByClassName("add");
const botonSubtract = document.getElementsByClassName("subtract");
const botonMultiply = document.getElementsByClassName("multiply");
const botonDivide = document.getElementsByClassName("divide");
const botonDecimal = document.getElementsByClassName("decimal");
const botonEquals = document.getElementsByClassName("equals");
const botonClear = document.getElementsByClassName("clear");
const botonDelete = document.getElementsByClassName("delete");

let display = document.getElementById("display");
let result = document.getElementById("result");
let actual;
let resultado = 0;
let muestra = "";

boton1[0].addEventListener("click", () => updateDisplay("1"));
boton2[0].addEventListener("click", () => updateDisplay("2"));
boton3[0].addEventListener("click", () => updateDisplay("3"));
boton4[0].addEventListener("click", () => updateDisplay("4"));
boton5[0].addEventListener("click", () => updateDisplay("5"));
boton6[0].addEventListener("click", () => updateDisplay("6"));
boton7[0].addEventListener("click", () => updateDisplay("7"));
boton8[0].addEventListener("click", () => updateDisplay("8"));
boton9[0].addEventListener("click", () => updateDisplay("9"));
boton0[0].addEventListener("click", () => updateDisplay("0"));

botonClear[0].addEventListener("click", clearDisplay);
botonDelete[0].addEventListener("click", deleteLastCharacter);

botonAdd[0].addEventListener("click", () => updateDisplay("+"));
botonSubtract[0].addEventListener("click", () => updateDisplay("-"));
botonMultiply[0].addEventListener("click", () => updateDisplay("*"));
botonDivide[0].addEventListener("click", () => updateDisplay("/"));

botonDecimal[0].addEventListener("click", () => updateDisplay("."));

botonEquals[0].addEventListener("click", () => calculate());

function updateDisplay(value) {
  if (display.value == "") {
    let actual = result.value;
    display.value = actual + value;
  } else {
    let contenido = display.value;
    contenido += value;
    display.value = contenido;
  }
}

function clearDisplay() {
  display.value = "";
  result.value = "";
  muestra = "";
}

function calculate() {
  if (display.value === "") {
    alert("Por favor, ingresa una expresión para calcular.");
    return;
  }

  try {
    const expresion = display.value;
    const resultado = eval(expresion);

    if (expresion.includes("/0")) {
      result.value = "No se puede dividir entre 0";
    } else {
      result.value = resultado;
    }

    // Limpia el display para evitar que empiece con 0
    display.value = "";
  } catch {
    result.value = "Error";
  }
}

function deleteLastCharacter() {
  let contenido = display.value;
  if (contenido.length > 0) {
    contenido = contenido.slice(0, -1);
    display.value = contenido;
  } else {
    alert("No hay más caracteres para eliminar.");
  }
}
