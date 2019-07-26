/**
 * Add an item price to total then proceed with checkout
 */

let total = 20;
const shirtPrice = 20;

// Adding Merch
total += shirtPrice;

if (!processPayment(total)) {
  throw new Error('Can\'t process payment')
}

proceedToThankYouPage();

function processPayment(price) {

  const creditCardLimit = 44;
  if (!(creditCardLimit - price) > 0) {
    return false;
  }

  // Detect fraud
  const fraudDetection = Math.random() > 0.5;
  if (!fraudDetection) {
    return false;
  }

  // Calculate fees addition to total
  const complexFeesCalculation = Math.random() > 0.5;
  if (!complexFeesCalculation) {
    return false;
  }

  return true;
}

function proceedToThankYouPage() {
  console.log('Thank you for buying');
  process.exit(0);
}