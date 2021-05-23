let displayValue = document.getElementById("displayValue");

function putindisplay(value) {
	displayValue.value = displayValue.value.concat(value);
}

function calculate() {
	try {
		displayValue.value = eval(displayValue.value);
	} catch (SyntaxError) {
		displayValue.value = "Wrong Syntax";
	}
}

function clearDisplay() {
	displayValue.value = "";
}

function del() {
	displayValue.value = displayValue.value.slice(0, -1);
}
