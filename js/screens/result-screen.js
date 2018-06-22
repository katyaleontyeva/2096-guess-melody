import render from "../render";
import buttonReplay from "../components/button-replay";
import getResult from "../game/get-result";
import ResultView from "../views/result-view";

const resultScreen = (gameState) => {
  // const result = showResult(gameState);
  // const resultScreenTemplate = `
  // <section class="main main--result">
  //   <section class="logo" title="Угадай мелодию"><h1>Угадай мелодию</h1></section>
  //
  //   <h2 class="title">${result.title}</h2>
  //   <div class="main-stat">${result.description}</div>
  //   <span class="main-comparison">${result.comparison}</span> <!-- TODO Как показывать только для win? -->
  // </section>
  // `;
  //
  // const resultScreenElement = render(resultScreenTemplate);
  // resultScreenElement.appendChild(buttonReplay);
  //
  // return resultScreenElement;
  const result = getResult(gameState);
  const screen = new ResultView(result);

  return screen.element;
};

export default resultScreen;