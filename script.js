// Sample product data
const products = [
    { id: 1, name: "BLUE LAKERS", category: "dresses", price: 120, image: "./Gallery/BLUE LAKERS.jpg" },
    { id: 2, name: "BLACK LAKERS", category: "dresses", price: 90, image: "./Gallery/BLACK LAKERS.jpg" },
    { id: 3, name: "LAKERS", category: "dresses", price: 120, image: "./Gallery/lakers (1).jpg" },
    { id: 4, name: "LAKERS", category: "dresses", price: 80, image: "./Gallery/lakers (2).jpg" },
    { id: 5, name: "LAKERS", category: "dresses", price: 250, image: "./Gallery/lakers (3).jpg" },
    { id: 6, name: "LAKERS", category: "dresses", price: 300, image: "./Gallery/lakers (4).jpg" },
    { id: 7, name: "LAKERS", category: "dresses", price: 120, image: "./Gallery/lakers (5).jpg" },
    { id: 8, name: "LAKERS", category: "dresses", price: 70, image: "./Gallery/lakers (6).jpg" },
    { id: 9, name: "LAKERS", category: "dresses", price: 90, image: "./Gallery/lakers (7).jpg" },
    { id: 10, name: "JORDAN 23", category: "Shoe", price: 450, image: "./Gallery/Kicks (23).jpg" },
    { id: 11, name: "NIKE", category: "Shoe", price: 240, image: "./Gallery/Kicks (2).jpg" },
    { id: 12, name: "SNEAKER", category: "shoes", price: 110, image: "./Gallery/Kicks (5).jpg" },
    { id: 13, name: "SNEAKER", category: "shoe", price: 220, image: "./Gallery/Kicks (9).jpg" },
    { id: 14, name: "SNEAKER", category: "Shoe", price: 180, image: "./Gallery/Kicks (10).jpg" },
    { id: 15, name: "BLACK SNEAKER", category: "shoe", price: 50, image: "./Gallery/Kicks (15).jpg" },
    { id: 16, name: "SNEAKER", category: "sshoe", price: 60, image: "./Gallery/Kicks (12).jpg" },
    { id: 17, name: "SNEAKER", category: "shoe", price: 100, image: "./Gallery/Kicks (19).jpg" },
    { id: 18, name: "NIKE", category: "shoes", price: 130, image: "./Gallery/Kicks (22).jpg" },
    { id: 19, name: "FRONT", category: "dresses", price: 300, image: "./Gallery/guyman long top (16).jpg" },
    { id: 20, name: "BACK", category: "dresses", price: 150, image: "./Gallery/guyman long top (15).jpg" },
    { id: 21, name: "CADYGAN", category: "dresses", price: 250, image: "./Gallery/guyman long top (14).jpg" },
    { id: 22, name: "WHITE CADY", category: "dresses", price: 80, image: "./Gallery/guyman long top (11).jpg" },
    { id: 23, name: "BLACK CADY", category: "dresses", price: 200, image: "./Gallery/guyman long top (9).jpg" },
    { id: 24, name: "BLUE CADY", category: "dresses", price: 120, image: "./Gallery/guyman long top (8).jpg" },
    { id: 25, name: "BLUE CADY FRONT", category: "dresses", price: 180, image: "./Gallery/guyman long top (7).jpg" },
    { id: 26, name: "FLOWER TOP", category: "dresses", price: 140, image: "./Gallery/guyman long top (5).jpg" },
    { id: 27, name: "SHORT", category: "dresses", price: 220, image: "./Gallery/guyman long top (4).jpg" },
    { id: 28, name: "CADDY", category: "dresses", price: 30, image: "./Gallery/guyman long top (6).jpg" },
    { id: 29, name: "Puffer", category: "dresses", price: 350, image: "./Gallery/guyman long top (3).jpg" },
    { id: 30, name: "CADDY", category: "dresses", price: 70, image: "./Gallery/guyman long top (1).jpg" },
    { id: 31, name: "CADDY", category: "dresses", price: 90, image: "./Gallery/guyman long top (2).jpg" },
    { id: 32, name: "T-SHIRT", category: "dresses", price: 110, image: "./Gallery/White&black&red nice t-shirts (13).jpg" },
    { id: 33, name: "T-SHIRT", category: "dresses", price: 130, image: "./Gallery/White&black&red nice t-shirts (12).jpg" },
    { id: 34, name: "SHIRT", category: "dresses", price: 160, image: "./Gallery/White&black&red nice t-shirts (1).jpg" },
    { id: 35, name: "GUCCI", category: "dresses", price: 170, image: "./Gallery/White&black&red nice t-shirts (2).jpg" },
    { id: 36, name: "BLACK SHIRT", category: "dresses", price: 180, image: "./Gallery/White&black&red nice t-shirts (3).jpg" },
    { id: 37, name: "WHITE SHIRT", category: "dresses", price: 190, image: "./Gallery/White&black&red nice t-shirts (4).jpg" },
    { id: 38, name: "GUCCI", category: "dresses", price: 200, image: "./Gallery/White&black&red nice t-shirts (5).jpg" },
    { id: 39, name: "GUCCI TOP", category: "dresses", price: 210, image: "./Gallery/White&black&red nice t-shirts (6).jpg" },
    { id: 40, name: "T-SHIRT", category: "dresses", price: 220, image: "./Gallery/White&black&red nice t-shirts (7).jpg" },
    { id: 41, name: "WHITE TOP", category: "dresses", price: 230, image: "./Gallery/White&black&red nice t-shirts (8).jpg" },
    { id: 42, name: "WHITE TOP", category: "dresses", price: 240, image: "./Gallery/White&black&red nice t-shirts (9).jpg" }
    
    
    // Add more products as needed
];

let cart = [];

// Render products
function renderProducts(list) {
    const productList = document.getElementById("productList");
    productList.innerHTML = "";
    list.forEach(product => {
        const card = document.createElement("div");
        card.className = "product-card";
        card.innerHTML = `
            <img src="${product.image}" alt="${product.name}">
            <h3>${product.name}</h3>
            <p>GHS ${product.price}</p>
            <button onclick="addToCart(${product.id})">Add to Cart</button>
        `;
        productList.appendChild(card);
    });
}

// Hero background slideshow
const heroSection = document.querySelector('.hero');
const heroImages = [
    './Gallery/whitetop&down.jpg',
    './Gallery/white&black&red nice t-shirts (2).jpg',
    './Gallery/kicks (18).jpg',  
    './Gallery/white&black&red nice t-shirts (30).jpg',
];
let currentHeroIndex = 0;

function updateHeroBackground() {
    heroSection.style.backgroundImage = `url('${heroImages[currentHeroIndex]}')`;
    heroSection.style.backgroundSize = 'cover';
    heroSection.style.backgroundPosition = 'center';
    currentHeroIndex = (currentHeroIndex + 1) % heroImages.length;
}

// Start the slideshow
setInterval(updateHeroBackground, 4000); // Change every 4 seconds
updateHeroBackground();

// ...existing code...

// Hero image slideshow
const heroImg = document.querySelector('.hero-img');
const heroImgSources = [
    './Gallery/BWSHORT.jpg',
    './Gallery/whitetop&down.jpg',
    './Gallery/white & red cap (2).jpg',
    './Gallery/TOPL6.jpg',
];
let heroImgIndex = 0;

setInterval(() => {
    heroImgIndex = (heroImgIndex + 1) % heroImgSources.length;
    heroImg.src = heroImgSources[heroImgIndex];
}, 4000); // Change image every 4 seconds


// Filter and search logic
function filterProducts() {
    const category = document.getElementById("categoryFilter").value;
    const price = document.getElementById("priceFilter").value;
    const search = document.getElementById("searchInput").value.toLowerCase();
    const searchboutton = document.getElementById("searchButton");

    let filtered = products.filter(p => 
        (!category || p.category === category) &&
        (!price || (
            p.price >= parseInt(price.split('-')[0]) &&
            p.price <= parseInt(price.split('-')[1])
        )) &&
        (!search || p.name.toLowerCase().includes(search))
    );
    renderProducts(filtered);
    searchboutton.addEventListener("click", function() {
        const searchValue = document.getElementById("searchInput").value.toLowerCase();
        filtered = products.filter(p => p.name.toLowerCase().includes(searchValue));
        renderProducts(filtered);
    });
    document.getElementById("searchInput").addEventListener("input", function() {
        const searchValue = this.value.toLowerCase();
        filtered = products.filter(p => p.name.toLowerCase().includes(searchValue));
        renderProducts(filtered);
    });
    document.getElementById("searchButton").addEventListener("click", function() {
        const searchValue = document.getElementById("searchInput").value.toLowerCase();
        filtered = products.filter(p => p.name.toLowerCase().includes(searchValue));
        renderProducts(filtered);
    });
}

// Add to cart
function addToCart(id) {
    const product = products.find(p => p.id === id);
    const item = cart.find(i => i.id === id);
    if (item) {
        item.qty += 1;
    } else {
        cart.push({ ...product, qty: 1 });
    }
    renderCart();
}

// Render cart
function renderCart() {
    const cartItems = document.getElementById("cartItems");
    const cartTotal = document.getElementById("cartTotal");
    cartItems.innerHTML = "";
    let total = 0;
    cart.forEach(item => {
        total += item.price * item.qty;
        const div = document.createElement("div");
        div.className = "cart-item";
        div.innerHTML = `
            <span>${item.name} x${item.qty}</span>
            <span>GHS ${item.price * item.qty}</span>
            <button onclick="removeFromCart(${item.id})">Remove</button>
        `;
        cartItems.appendChild(div);
    });
    cartTotal.textContent = total.toFixed(2);
}

// Remove from cart
function removeFromCart(id) {
    cart = cart.filter(item => item.id !== id);
    renderCart();
}

// Checkout
document.getElementById("checkoutForm").addEventListener("submit", function(e) {
    e.preventDefault();
    document.getElementById("checkout").style.display = "none";
    document.getElementById("order-confirmation").style.display = "block";
    showOrderSummary();
    cart = [];
    renderCart();
});

// Show order summary
function showOrderSummary() {
    const orderSummary = document.getElementById("orderSummary");
    orderSummary.innerHTML = cart.map(item => 
        `<div>${item.name} x${item.qty} - GHS ${item.price * item.qty}</div>`
    ).join("");
}

// Filters and search events
document.getElementById("categoryFilter").addEventListener("change", filterProducts);
document.getElementById("priceFilter").addEventListener("change", filterProducts);
document.getElementById("searchInput").addEventListener("input", filterProducts);

// Initial render
renderProducts(products);
renderCart();