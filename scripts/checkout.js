import { query, queryAll, money } from "./utilities.js";
import { products } from "../data/products.js";
import { cart, localStorageCart, calculateCartTotal } from "../data/cart.js";
import PaymentSummary from "../components/PaymentSummary.js";
import OrderSummary from "../components/OrderSummary.js";

// display checkout quantity
query(".js-checkout-quantity").innerHTML = calculateCartTotal();

// payment summary
query(".js-payment-summary").innerHTML = PaymentSummary({
	products,
	cart,
	money,
});

// generate element
cart.forEach((cartItem, index) => {
	let matchingItems;
	products.forEach((product) => {
		product.id === cartItem.id && (matchingItems = product);
	});

	query(".js-order-summary").innerHTML += OrderSummary({
		matchingItems,
		index,
		cartItem,
		money,
	});
});

// delete cart item/s
queryAll(".js-delete-quantity-link").forEach((deleteButton) => {
	deleteButton.addEventListener("click", () => {
		const id = deleteButton.dataset.id;

		let position = null;
		cart.forEach((cartItem, index) => id === cartItem.id && (position = index));

		cart.splice(position, 1);

		localStorageCart();

		location.reload();
	});
});

// select quantity
queryAll(".js-select-quantity").forEach((selectQuantity) => {
	for (let i = 1; i <= 10; i++) {
		selectQuantity.innerHTML += `<option value="${i}">${i}</option>`;
	}
});

// update item
queryAll(".js-update-quantity-link").forEach((updateButton) => {
	updateButton.addEventListener("click", () => {
		const id = updateButton.dataset.id;

		let position = null;
		cart.forEach((cartItem, index) => id === cartItem.id && (position = index));

		const selectedValue = Number(
			query(`.js-select-quantity-${position}`).value
		);

		cart[position].quantity = selectedValue;

		localStorageCart();

		location.reload();
	});
});
