/**
 * Add an item price to total then proceed with checkout
 */
const log = require('../log');

let total = 20;
const shirtPrice = 20;

// Adding Merch
total += shirtPrice;

log.blue('About to process payment');
if (!processPayment(total)) {
  throw new Error('Can\'t process payment')
}

proceedToThankYouPage();


function processPayment(price) {

  const creditCardLimit = 44;
  if (!(creditCardLimit - price) > 0) {
    log.red('Insufficient funds');
    return false;
  }

  // Detect fraud
  const fraudDetection = Math.random() > 0.5;
  if (!fraudDetection) {
    log.red('Fraud detected');
    return false;
  }

  // Calculate fees addition to total
  const complexFeesCalculation = Math.random() > 0.5;
  if (!complexFeesCalculation) {
    log.red('Can\'t support additional fees');
    return false;
  }

  return true;
}

function proceedToThankYouPage() {
  log.green('Thank you for buying');
  process.exit(0);
}