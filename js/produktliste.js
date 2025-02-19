const productContainer = document.querySelector(".product_list_container");
const categoryFilter = document.getElementById("categoryFilter");

let allProducts = []; // Gemmer alle produkter fra API'et

// Hent URL-parameteren 'category'
const urlParams = new URLSearchParams(window.location.search);
const categoryFilterValue = urlParams.get("category") || "all"; // Hvis ingen parameter, så 'all' som standard

// Hent produkter fra API'et
fetch("https://dummyjson.com/products")
  .then((response) => response.json())
  .then((data) => {
    allProducts = data.products; // Gemmer produkterne
    filterProducts(categoryFilterValue); // Filtrer produkterne ved at bruge kategori fra URL eller default
    setCategoryFilter(categoryFilterValue); // Sæt værdien af dropdown-menuen til den valgte kategori
  });

// Funktion til at filtrere og vise produkterne
function filterProducts(categoryFilterValue) {
  let filteredProducts;

  if (categoryFilterValue === "all") {
    // Kun produkter fra "beauty" og "fragrances" når "all" vælges
    filteredProducts = allProducts.filter((product) => product.category === "beauty" || product.category === "fragrances");
  } else {
    // Filtrer efter den valgte kategori
    filteredProducts = allProducts.filter((product) => product.category === categoryFilterValue);
  }

  showProductList(filteredProducts);
}

// Event listener for dropdown-menuen
categoryFilter.addEventListener("change", (event) => {
  const selectedCategory = event.target.value;
  // Opdater URL'en med den valgte kategori og filtrer produkterne
  window.location.search = `?category=${selectedCategory}`;
});

// Funktion der viser produkterne i HTML
function showProductList(products) {
  let markup = products
    .map(
      (product) => `
      <div class="card">
        <div>
          <img src="${product.thumbnail}" alt="${product.title}">
        </div>
        <h3 class="item">${product.title}</h3>
        <div class="item">${product.brand}</div>
        <div class="item">
          ${
            product.discountPercentage > 0
              ? `<span class="old-price">${product.price} EUR</span>
                 <span class="new-price">${(product.price * (1 - product.discountPercentage / 100)).toFixed(2)} EUR</span>`
              : `${product.price} EUR`
          }
        </div>
        <div class="item product-rating">
          ${"⭐".repeat(Math.round(product.rating)) + "☆".repeat(5 - Math.round(product.rating))} (${product.reviews.length})
        </div>
       
        ${product.discountPercentage > 0 ? `<div class="discount">On Sale</div>` : ""}
        <a class="view-more" href="produkt.html?id=${product.id}">View More</a>

      </div>
       
    `
    )
    .join("");

  productContainer.innerHTML = markup;
}

// Funktion der sætter den valgte kategori i dropdown-menuen
function setCategoryFilter(categoryFilterValue) {
  if (categoryFilter) {
    categoryFilter.value = categoryFilterValue;
  }
}
