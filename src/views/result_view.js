const PubSub = require('../helpers/pub_sub.js')

const ResultView = function() {

}

ResultView.prototype.bindEvents = function() {
  PubSub.subscribe('number-is-prime?', (event)=>{
    const resultOfPrimeChecker = event.detail;
    this.displayResult(resultOfPrimeChecker);
  });

};

ResultView.prototype.displayResult = function(result) {
  const resultElement = document.querySelector('#result');
  if (result === false) {
    resultElement.textContent = `The number you have guessed is NOT a prime number. `
  } else if (result === true) {
    resultElement.textContent = `Congratulations! The number you have guessed is a prime number.`
  };
}

module.exports = ResultView;
