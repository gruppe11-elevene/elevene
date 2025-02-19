// Finder HTML-containeren til produktet
const productContainer = document.querySelector(".product_card");

// Henter produkt-ID fra URL'en
const identity = new URLSearchParams(window.location.search).get("id");

// Tjekker om et ID er til stede i URL'en
if (identity) {
  // Henter data fra API'et
  fetch(`https://dummyjson.com/products/${identity}`)
    .then((response) => response.json())
    .then((data) => showProduct(data)); // Sender data til funktion
} else {
  console.error("Produkt ID mangler i URL'en.");
}

// Funktion der viser produktet i HTML
function showProduct(data) {
  // Beregn rabatteret pris
  const discountedPrice = (data.price * (1 - data.discountPercentage / 100)).toFixed(2);

  let markup = `
    <div class="product_image_container">
        <img src="${data.thumbnail}" alt="${data.title}" class="product_image">
    </div>
    <div class="product_info">
        <h2 class="product-brand">${data.brand || "Unknown Brand"}</h2>
        <p class="product-name">${data.title}</p>

        <p class="product-price">
          ${
            data.discountPercentage > 0
              ? `<span class="old-price">${data.price} EUR</span> 
               <span class="new-price">${discountedPrice} EUR</span>`
              : `${data.price} EUR`
          }
        </p>

        <p class="product-description">${data.description}</p>
        
        <div class="product-rating">
          ${"⭐".repeat(Math.round(data.rating)) + "☆".repeat(5 - Math.round(data.rating))}
        </div>

        

        <button class="buy-button">Buy Now</button>
    </div>
  `;

  // Indsætter produktet i HTML-containeren
  productContainer.innerHTML = markup;
}
