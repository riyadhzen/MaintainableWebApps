/**
 * Add an item price to total then proceed with checkout
 */
let total = 33;
const shirtPrice = 20;

// Adding Merch
total += shirtPrice;

if (!processPayment(total)) {
  throw new Error('Can\'t process payment')
}

proceedToThankYouPage();

function processPayment(price) {
  // Some complex calculation goes here
  const creditCardLimit = 44;

  return (creditCardLimit - price) > 0;
}

function proceedToThankYouPage() {
  console.log('Thank you for buying');
  process.exit(0);
}