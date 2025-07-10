

const renderAdvice = (adviceData) => {
  const adviceIdEl = document.querySelector('#adviceId');
  const adviceTextEl = document.querySelector("#adviceText");
  adviceIdEl.textContent = adviceData.id;
  adviceTextEl.innerHTML = `<p class="quote">${adviceData.advice}</p>`;
};

export default renderAdvice;
