
const adviceText = document.querySelector("#adviceText");
const fetchAdvice = async () => {
  try {
    const URL = `https://api.adviceslip.com/advice?timestamp=${new Date().getTime()}`;
    const res = await fetch(URL);
    if (!res.ok){
      throw Error(`Error fetching advice ${URL}, status: ${res.status}`);
    }
    const data = await res.json();
    const { id, advice } = data.slip;
    return { id, advice };
  } catch (error) {
    adviceText.innerHTML = `<p class="text-red-600 text-lg">Error fetching advice: ${error.message}</p>`;
  }
};
export default fetchAdvice;
