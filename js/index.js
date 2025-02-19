let knapper = document.querySelector(".knapper");

fetch(`https://dummyjson.com/products`)
  .then((response) => response.json())
  .then((data) => showList(data.products)); // Access the correct array

function showList(categories) {
  console.log(categories);

  // Option 1: Pick the first 3 categories
  const selectedCategories = categories.slice(0, 3);

  const markup = selectedCategories
    .map(
      (category) => `
            <div class="knap">
                <a href="produktliste.html?category=${category.category}">
                    ${category.category}
                </a>
            </div>
        `
    )
    .join("");

  console.log(markup);
  knapper.innerHTML = markup;
}
