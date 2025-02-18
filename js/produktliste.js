// Finder den HTML-container, hvor produkterne skal vises
const productContainer = document.querySelector(".product_list_container");

// Henter data fra API'et
fetch("https://dummyjson.com/products")
  .then((response) => response.json()) // Konverterer svaret til JSON
  .then((data) => showProductList(data.products)); // Brug data.products

// Funktion der viser produkterne på hjemmesiden
function showProductList(products) {
  let markup = products
    .map(
      (product) =>
        `   
      <div class="card">
          <img src="${product.thumbnail}" alt="${product.title}">
          <h2 class="item">${product.title}</h2>
          <div class="item">${product.brand}</div>
          <div class="item">${product.description}</div>
          <div class="item">Pris: ${product.price} kr.</div>
          <div class="item">Rating: ${product.rating} ⭐</div>

       ${
         product.discountPercentage > 0
           ? `
        <div class="discount">
          On Sale
        </div>`
           : ""
       }
          <button class="view-more">View More</button>
          
      </div>
      `
    )
    .join(""); // Samler alle produkterne til én lang HTML-streng

  // Indsætter produkterne i HTML-containeren
  productContainer.innerHTML = markup;
}
