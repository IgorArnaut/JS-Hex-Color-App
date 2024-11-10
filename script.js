import { changeColor } from "./helpers.js";

window.addEventListener("load", () => {
  changeColor();
  document.getElementById("btn").addEventListener("click", () => changeColor());
});
