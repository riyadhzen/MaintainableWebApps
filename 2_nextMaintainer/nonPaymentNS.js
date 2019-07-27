jQuery(document).off('click.payment_step', '.close-btn.payment-step')
  .on('click.category_step', '.close-btn.category-step', nonPaymentCloseHandler);


function nonPaymentCloseHandler() {
  // CODE_GOES_HERE
}
