let knapper = document.querySelector(".knapper");

// Definer de kategorier, vi vil vise, og deres billeder
const categories = [
  { name: "all", displayName: "All Products", image: "Pics/Gallery-pic-4.webp" },
  { name: "beauty", displayName: "Beauty", image: "Pics/Gallery-pic-2.webp" },
  { name: "fragrances", displayName: "Fragrances", image: "Pics/Gallery-pic-5.webp" },
];

// Funktion til at vise kategorierne
function showList() {
  const markup = categories
    .map(
      (category) => `
        <div class="knap" style="background-image: url('${category.image}')">
            <a href="produktliste.html?category=${category.name}">
                ${category.displayName}
            </a>
        </div>
      `
    )
    .join("");

  knapper.innerHTML = markup;
}

// Kald funktionen for at vise knapperne
showList();
