export default function PaymentSummary({ products, cart, money }) {
	let cartTotalPrice = 0;
	products.forEach((product) => {
		cart.forEach((cartItem) => {
			if (product.id === cartItem.id) {
				cartTotalPrice += product.priceCents * cartItem.quantity;
			}
		});
	});
	const shippingAndHandling = cartTotalPrice && 499;
	const totalBeforeTax = cartTotalPrice + shippingAndHandling;
	const estimatedTax = totalBeforeTax * 0.1;
	const orderTotal = totalBeforeTax + estimatedTax;

	return `
    <div class="payment-summary-title">Order Summary</div>

    <div class="payment-summary-row">
      <div>Product Total:</div>
      <div class="payment-summary-money">$${money(cartTotalPrice)}</div>
    </div>

    <div class="payment-summary-row">
      <div>Shipping &amp; handling:</div>
      <div class="payment-summary-money">$${money(shippingAndHandling)}</div>
    </div>

    <div class="payment-summary-row subtotal-row">
      <div>Total before tax:</div>
      <div class="payment-summary-money">$${money(totalBeforeTax)}</div>
    </div>

    <div class="payment-summary-row">
      <div>Estimated tax (10%):</div>
      <div class="payment-summary-money">$${money(estimatedTax)}</div>
    </div>

    <div class="payment-summary-row total-row">
      <div>Order total:</div>
      <div class="payment-summary-money">$${money(orderTotal)}</div>
    </div>

    <button class="place-order-button button-primary">
      Place your order
    </button>
  `;
}
