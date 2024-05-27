import { calculateCartQuantity } from "../../data/cart.js";

export function renderCheckoutHeader() {
  let checkoutSummaryHTML = '';

  checkoutSummaryHTML += `
  Checkout (<a class="return-to-home-link" href="amazon.html">${calculateCartQuantity()}</a>)
  `;

  document.querySelector('.js-checkout-summary').innerHTML = checkoutSummaryHTML;
};