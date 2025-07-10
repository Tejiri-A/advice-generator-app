import "./style.css";
import fetchAdvice from "./JS/fetchAdvice.js";
import renderAdvice from "./JS/renderAdvice.js";


const adviceBtn = document.querySelector(".btn");
const showAdvice = async () => {
  const data = await fetchAdvice();
  renderAdvice(data)
}

window.addEventListener("DOMContentLoaded",showAdvice)
adviceBtn.addEventListener('click',showAdvice)