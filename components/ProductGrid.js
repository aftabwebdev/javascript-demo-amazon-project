export default function ProductGrid({ product, money }) {
	return `
    <div class="product-container">
      <div class="product-image-container">
        <img
          class="product-image"
          src="${product.image}"
        />
      </div>

      <div class="product-name limit-text-to-2-lines">
        ${product.name}
      </div>

      <div class="product-rating-container">
        <img
          class="product-rating-stars"
          src="images/ratings/rating-${product.rating.stars * 10}.png"
        />
        <div class="product-rating-count link-primary">${
					product.rating.count
				}</div>
      </div>

      <div class="product-price">$${money(product.priceCents)}</div>

      <div class="product-quantity-container" id="product-quantity-container-${
				product.id
			}">
        <select class="select-quantity select-quantity-${product.id}">
        </select>
      </div>

      <div class="product-spacer"></div>

      <div class="added-to-cart">
        <img src="images/icons/checkmark.png" />
        Added
      </div>

      <button class="add-to-cart-button button-primary js-add-to-cart-button" data-product-id="${
				product.id
			}">
        Add to Cart
      </button>
    </div>
  `;
}
