export default function OrderSummary({
	matchingItems,
	index,
	cartItem,
	money,
}) {
	return `
    <div class="cart-item-container js-cart-item-container-${matchingItems.id}">
      <div class="delivery-date">
        Delivery date: Tuesday, June 21
      </div>

      <div class="cart-item-details-grid">
        <img class="product-image"
          src="${matchingItems.image}">  

        <div class="cart-item-details">
          <div class="product-name">
            ${matchingItems.name}
          </div>
          <div class="product-price">
            $${money(matchingItems.priceCents)}
          </div>
          <div class="product-quantity">     
            <span>
              Quantity: 
                <select class="js-select-quantity js-select-quantity-${index}">
                  <option selected hidden value="${cartItem.quantity}">
                    ${cartItem.quantity}
                  </option>
                </select>
            </span>
            <span class="update-quantity-link link-primary js-update-quantity-link" data-id="${
							matchingItems.id
						}">
              Update
            </span>
            <span class="delete-quantity-link link-primary js-delete-quantity-link" data-id="${
							matchingItems.id
						}">
              Delete
            </span>
          </div>
        </div>

        <div class="delivery-options">
          <div class="delivery-options-title">
            Choose a delivery option:
          </div>
          <div class="delivery-option">
            <input type="radio" checked
              class="delivery-option-input"
              name="delivery-option-${matchingItems.id}">
            <div>
              <div class="delivery-option-date">
                Tuesday, June 21
              </div>
              <div class="delivery-option-price">
                FREE Shipping
              </div>
            </div>
          </div>
          <div class="delivery-option">
            <input type="radio"
              class="delivery-option-input"
              name="delivery-option-${matchingItems.id}">
            <div>
              <div class="delivery-option-date">
                Wednesday, June 15
              </div>
              <div class="delivery-option-price">
                $4.99 - Shipping
              </div>
            </div>
          </div>
          <div class="delivery-option">
            <input type="radio"
              class="delivery-option-input"
              name="delivery-option-${matchingItems.id}">
            <div>
              <div class="delivery-option-date">
                Monday, June 13
              </div>
              <div class="delivery-option-price">
                $9.99 - Shipping
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  `;
}
