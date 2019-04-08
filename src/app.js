const FormView = require('./views/form_view.js')
const PrimeCounter = require('./models/prime_counter.js')
const ResultView = require('./views/result_view.js')

document.addEventListener('DOMContentLoaded', () => {
  console.log('JavaScript Loaded');

  const formView = new FormView();
  formView.bindEvents();

  const primeCounter = new PrimeCounter();
  primeCounter.bindEvents();

  const resultView = new ResultView();
  resultView.bindEvents();
});
