import { query, queryAll, money } from "./utilities.js";
import { cart, localStorageCart, calculateCartTotal } from "./cart.js";
import ProductGrid from "../components/ProductGrid.js";

fetch("https://aftabwebdev.github.io/products-api/products-api.json")
	.then((response) => {
		return response.ok ? response.json() : console.log("Not Successful!");
	})
	.then((data) => getProducts(data))
	.catch((err) => console.log(err.message));

function getProducts(products) {
	products.forEach((product) => {
		query("#products-grid").innerHTML += ProductGrid({
			product,
			money,
		});
	});
	// select quantity option
	queryAll(".select-quantity").forEach((select) => {
		for (let i = 1; i <= 20; i++) {
			select.innerHTML += `<option value="${i}">${i}</option>`;
		}
	});

	// display cart total
	query(".js-cart-quantity").innerHTML = calculateCartTotal();

	// add to cart button
	queryAll(".js-add-to-cart-button").forEach((addToCartButton) => {
		addToCartButton.addEventListener("click", () => {
			const productId = addToCartButton.dataset.productId;
			const selectedQuantity = Number(
				query(`.select-quantity-${productId}`).value
			);

			let matchingItem;
			cart.forEach((cartItem) => {
				productId === cartItem.id && (matchingItem = cartItem);
			});

			if (!matchingItem) {
				cart.push({ id: productId, quantity: selectedQuantity });
			} else {
				matchingItem.quantity += selectedQuantity;
			}

			localStorageCart();

			query(".js-cart-quantity").innerHTML = calculateCartTotal();
		});
	});
}
