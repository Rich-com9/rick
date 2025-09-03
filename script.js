// Navigation menu: show alert with section name when clicked
document.querySelectorAll('.menu ul li a').forEach(function(link) {
    link.addEventListener('click', function(event) {
        // Allow default scroll, but show alert
        const section = this.textContent.trim();
        alert('Navigating to: ' + section);
    });
});

// Search button: show alert with search term
const searchBtn = document.querySelector('.btn');
if (searchBtn) {
    searchBtn.addEventListener('click', function(e) {
        e.preventDefault();
        const searchValue = document.querySelector('.srch').value;
        if (searchValue.trim() === '') {
            alert('Please enter a search term.');
        } else {
            alert('You searched for: ' + searchValue);
        }
    });
}

// "Shop With Us" button: show alert
const shopBtn = document.querySelector('.cn');
if (shopBtn) {
    shopBtn.addEventListener('click', function(e) {
        alert('Welcome to our shop! Browse our collections below.');
    });
}

// Login button: show alert
const loginBtn = document.querySelector('.btnn');
if (loginBtn) {
    loginBtn.addEventListener('click', function(e) {
        e.preventDefault();
        alert('Login functionality coming soon!');
    });
}

// Cart functionality
let cartCount = 0;
const cartCountSpan = document.getElementById('cart-count');
const addToCartButtons = document.querySelectorAll('.add-to-cart');

addToCartButtons.forEach(function(button) {
    button.addEventListener('click', function() {
        cartCount++;
        cartCountSpan.textContent = cartCount;
        alert('Item added to cart!');
    });
});

// Clear cart functionality
const clearCartBtn = document.getElementById('clear-cart');
if (clearCartBtn) {
    clearCartBtn.addEventListener('click', function() {
        cartCount = 0;
        cartCountSpan.textContent = cartCount;
        alert('Cart has been cleared!');
    });
}