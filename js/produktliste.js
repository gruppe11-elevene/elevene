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

          <div class="item price">
  ${
    product.discountPercentage > 0
      ? `<span class="old-price">${product.price} EUR</span> 
         <span class="new-price">
           ${Math.round(product.price * (1 - product.discountPercentage / 100))} EUR
         </span>`
      : `<span class="regular-price">${product.price} EUR</span>`
  }
</div>
          
       
          <div class="item">Rating: ${product.rating} ⭐</div>


       ${
         product.discountPercentage > 0
           ? `
        <div class="discount">
          On Sale
        </div>`
           : ""
       }
           <a class="view-more" href="produkt.html?id=${product.id}">View More</a>
          
      </div>
      `
    )
    .join(""); // Samler alle produkterne til én lang HTML-streng

  // Indsætter produkterne i HTML-containeren
  productContainer.innerHTML = markup;
}
