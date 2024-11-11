const chars = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "A", "B", "C", "D", "E", "F"];
const color = document.getElementById("color");
const body = document.getElementsByTagName("body")[0];

function getHexColor() {
  let hex = "#";

  for (let i = 0; i < 6; i++) {
    const char = chars[Math.floor(Math.random() * chars.length)];
    hex += char;
  }

  return hex;
}

function changeColor() {
  const hex = getHexColor();
  body.style.backgroundColor = hex;
  color.innerText = hex;
}

export { changeColor };
