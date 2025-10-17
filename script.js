const products = [
  {
    id: 1,
    name: "iPhone 13 Pro Max",
    price: 650000,
    image: "https://images.unsplash.com/photo-1631709491091-2c1f9f6f7f3e?auto=format&fit=crop&w=400&q=80"
  },
  {
    id: 2,
    name: "Samsung Galaxy S22 Ultra",
    price: 580000,
    image: "https://images.unsplash.com/photo-1641937993455-1c1f9f6f7f3e?auto=format&fit=crop&w=400&q=80"
  },
  {
    id: 3,
    name: "Xiaomi Redmi Note 12",
    price: 180000,
    image: "https://images.unsplash.com/photo-1606813909027-8f3e4b7b7f3e?auto=format&fit=crop&w=400&q=80"
  },
  {
    id: 4,
    name: "Infinix Zero 5G",
    price: 150000,
    image: "https://images.unsplash.com/photo-1603570419960-6f3b6e3c3f3f?auto=format&fit=crop&w=400&q=80"
  },
  {
    id: 5,
    name: "Tecno Camon 20 Premier",
    price: 200000,
    image: "https://images.unsplash.com/photo-1580910051074-2c1f9f6f7f3e?auto=format&fit=crop&w=400&q=80"
  }
];

const cart = [];

function renderProducts() {
  const grid = document.getElementById("product-grid");
  products.forEach(product => {
    const div = document.createElement("div");
    div.className = "product";
    div.innerHTML = `
      <img src="${product.image}" alt="${product.name}">
      <h4>${product.name}</h4>
      <p>${product.price} FCFA</p>
      <button onclick="addToCart(${product.id})">Ajouter au panier</button>
    `;
    grid.appendChild(div);
  });
}

function addToCart(id) {
  const product = products.find(p => p.id === id);
  cart.push(product);
  updateCart();
}

function updateCart() {
  document.getElementById("cart-count").textContent = cart.length;
  const cartItems = document.getElementById("cart-items");
  cartItems.innerHTML = "";
  cart.forEach(item => {
    const li = document.createElement("li");
    li.textContent = `${item.name} - ${item.price} FCFA`;
    cartItems.appendChild(li);
  });
}

function toggleCart() {
  document.getElementById("cart").classList.toggle("hidden");
}

function clearCart() {
  cart.length = 0;
  updateCart();
  toggleCart();
}

document.getElementById("payment-form").addEventListener("submit", function(e) {
  e.preventDefault();
  document.getElementById("payment-confirmation").classList.remove("hidden");
  setTimeout(() => {
    document.getElementById("payment-confirmation").classList.add("hidden");
    document.getElementById("payment-form").reset();
  }, 4000);
});

renderProducts();
