const products = [
  { name: "Laptop", category: "electronics", price: 50000, image: "https://via.placeholder.com/200" },
  { name: "T-Shirt", category: "clothing", price: 500, image: "https://via.placeholder.com/200" },
  { name: "Mobile", category: "electronics", price: 20000, image: "https://via.placeholder.com/200" },
  { name: "Jeans", category: "clothing", price: 1500, image: "https://via.placeholder.com/200" }
];

function displayProducts(list) {
  const container = document.getElementById("productContainer");
  container.innerHTML = "";

  list.forEach(product => {
    container.innerHTML += `
      <div class="card">
        <img src="${product.image}">
        <h3>${product.name}</h3>
        <p>₹${product.price}</p>
        <p>${product.category}</p>
      </div>
    `;
  });
}

function filterProducts() {
  const search = document.getElementById("search").value.toLowerCase();
  const category = document.getElementById("category").value;

  const filtered = products.filter(p => {
    return (
      (category === "all" || p.category === category) &&
      p.name.toLowerCase().includes(search)
    );
  });

  displayProducts(filtered);
}

// Initial display
displayProducts(products);