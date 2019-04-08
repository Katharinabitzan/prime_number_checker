const PubSub = require('../helpers/pub_sub.js')

const PrimeCounter = function() {

};

PrimeCounter.prototype.bindEvents = function() {

  PubSub.subscribe("number-guessed", (event)=>{
    const numberGuessed = event.detail;
    const primeCounterResult = this.numberIsPrime(numberGuessed);
    PubSub.publish("number-is-prime?", primeCounterResult);
  });
};

PrimeCounter.prototype.numberIsPrime = function (number) {
  if (number <= 1) {
    return false;
  }
  for (let i = 2; i < number; i++) {
    if (number % i === 0) {
        return false;
    }
  }
  return true;
};

module.exports = PrimeCounter;
