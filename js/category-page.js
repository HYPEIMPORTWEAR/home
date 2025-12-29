/* =========================================
   CATEGORY PAGE JAVASCRIPT
   Handles category page functionality
   ========================================= */

let currentCategory = '';
let currentProduct = null;

// Initialize category page
function initCategoryPage(categoryName) {
    currentCategory = categoryName;

    // Render products for this category
    renderCategoryProducts();

    // Initialize cart/wishlist badges
    CartManager.updateCartBadge();
    CartManager.updateWishlistBadge();

    // Setup checkout button
    setupCheckout();

    // Setup back to top button
    setupBackToTop();
}

// Mobile Menu Toggle
function toggleMobileMenu() {
    const mobileNav = document.getElementById('mobile-nav');
    const menuBtn = document.querySelector('.mobile-menu-btn .menu-icon');
    if (mobileNav && menuBtn) {
        mobileNav.classList.toggle('show');
        mobileNav.classList.toggle('hidden');
        menuBtn.textContent = mobileNav.classList.contains('show') ? '✕' : '☰';
    }
}

// Render products for the category
function renderCategoryProducts() {
    const container = document.getElementById('products-container');
    if (!container) return;

    // Get products for this category
    const products = productsData.filter(p => p.category === currentCategory);

    if (products.length === 0) {
        container.innerHTML = `
            <div class="no-products">
                <h3>No Products Available</h3>
                <p>Check back soon for new drops!</p>
            </div>
        `;
        return;
    }

    container.innerHTML = products.map(product => {
        // Determine stock badge
        let stockBadge = '';
        if (product.features.some(f => f.toLowerCase().includes('pre-order'))) {
            stockBadge = '<span class="stock-badge preorder">PRE-ORDER</span>';
        } else if (product.features.some(f => f.toLowerCase().includes('limited'))) {
            stockBadge = '<span class="stock-badge limited">LIMITED</span>';
        }

        // Check wishlist status
        const isInWishlist = CartManager.isInWishlist(product.id);
        const heartIcon = isInWishlist ? '♥' : '♡';
        const heartClass = isInWishlist ? 'product-wishlist active' : 'product-wishlist';

        return `
            <div class="product-card" onclick="openProductModal(${product.id})">
                ${stockBadge}
                <button class="${heartClass}" onclick="event.stopPropagation(); toggleWishlist(${product.id})" title="Add to Wishlist">${heartIcon}</button>
                <img src="../${product.img}" alt="${product.title}" class="product-img">
                <div class="product-info">
                    <h3 class="product-title">${product.title}</h3>
                    <p class="product-price">₹${product.price}</p>
                    <button class="btn-add">SELECT OPTIONS</button>
                </div>
            </div>
        `;
    }).join('');
}

// Open product modal
function openProductModal(productId) {
    const product = productsData.find(p => p.id === productId);
    if (!product) return;

    currentProduct = product;

    // Populate Modal Slider
    const slider = document.getElementById('modal-slider');
    const dotsContainer = document.getElementById('slider-dots');

    slider.innerHTML = '';
    dotsContainer.innerHTML = '';

    const images = (product.images && product.images.length > 0) ? product.images : [product.img];

    // Render Images
    images.forEach((imgSrc, index) => {
        const img = document.createElement('img');
        img.src = '../' + imgSrc;
        img.className = 'modal-product-img';
        img.alt = `${product.title} view ${index + 1}`;
        slider.appendChild(img);

        // Create Dot
        const dot = document.createElement('div');
        dot.className = `slider-dot ${index === 0 ? 'active' : ''}`;
        dot.onclick = () => scrollToSlide(index);
        dotsContainer.appendChild(dot);
    });

    // Populate Metadata
    document.getElementById('modal-title').innerText = product.title;
    document.getElementById('modal-price').innerText = `₹${product.price}`;
    document.getElementById('modal-desc').innerText = product.description;
    document.getElementById('modal-ig-link').href = product.post_url;

    // Handle Slider Navigation
    const prevBtn = document.getElementById('slider-prev');
    const nextBtn = document.getElementById('slider-next');

    if (images.length > 1) {
        prevBtn.classList.remove('hidden');
        nextBtn.classList.remove('hidden');
        prevBtn.onclick = () => scrollSlider(-1);
        nextBtn.onclick = () => scrollSlider(1);
        slider.onscroll = updateSliderDots;
    } else {
        prevBtn.classList.add('hidden');
        nextBtn.classList.add('hidden');
        slider.onscroll = null;
    }

    // Thumbnails
    const thumbnailsContainer = document.getElementById('modal-thumbnails');
    thumbnailsContainer.innerHTML = '';
    if (images.length > 1) {
        images.forEach((imgSrc, index) => {
            const thumb = document.createElement('img');
            thumb.src = '../' + imgSrc;
            thumb.className = 'thumbnail';
            thumb.onclick = () => scrollToSlide(index);
            thumbnailsContainer.appendChild(thumb);
        });
    }

    // Features List
    const featuresList = document.getElementById('modal-features');
    featuresList.innerHTML = product.features.map(f => `<li>${f}</li>`).join('');

    // Size Options
    const sizeContainer = document.getElementById('size-selector');
    sizeContainer.innerHTML = product.options.map((opt, index) => `
        <input type="radio" name="size" id="size-${index}" value="${opt}" ${index === 0 ? 'checked' : ''}>
        <label for="size-${index}">${opt}</label>
    `).join('');

    // Bind Add Button
    document.getElementById('modal-add-btn').onclick = addToCartFromModal;

    openModal('product-modal');
}

// Slider functions
function scrollSlider(direction) {
    const slider = document.getElementById('modal-slider');
    const width = slider.offsetWidth;
    slider.scrollBy({ left: width * direction, behavior: 'smooth' });
}

function scrollToSlide(index) {
    const slider = document.getElementById('modal-slider');
    const width = slider.offsetWidth;
    slider.scrollTo({ left: width * index, behavior: 'smooth' });
}

function updateSliderDots() {
    const slider = document.getElementById('modal-slider');
    const width = slider.offsetWidth;
    const index = Math.round(slider.scrollLeft / width);

    document.querySelectorAll('.slider-dot').forEach((dot, i) => {
        dot.classList.toggle('active', i === index);
    });
}

// Add to cart from modal
function addToCartFromModal() {
    if (!currentProduct) return;

    const selectedSize = document.querySelector('input[name="size"]:checked');
    if (!selectedSize) {
        showToast('Please select a size', 'error');
        return;
    }

    CartManager.addItem(currentProduct, selectedSize.value);
    closeModal('product-modal');
    showToast(`${currentProduct.title} added to cart!`, 'success');
    updateCartUI();
}

// Toggle wishlist
function toggleWishlist(productId) {
    CartManager.toggleWishlist(productId);
    renderCategoryProducts(); // Re-render to update heart icons

    const isNowInWishlist = CartManager.isInWishlist(productId);
    showToast(
        isNowInWishlist ? 'Added to wishlist!' : 'Removed from wishlist',
        isNowInWishlist ? 'success' : 'info'
    );
    updateWishlistUI();
}

// Modal functions
function openModal(modalId) {
    const modal = document.getElementById(modalId);
    if (modal) {
        modal.classList.remove('hidden');
        document.body.style.overflow = 'hidden';
    }
}

function closeModal(modalId) {
    const modal = document.getElementById(modalId);
    if (modal) {
        modal.classList.add('hidden');
        document.body.style.overflow = '';
    }
}

// Close modal when clicking outside
document.addEventListener('click', (e) => {
    if (e.target.classList.contains('modal')) {
        e.target.classList.add('hidden');
        document.body.style.overflow = '';
    }
});

// Update Cart UI
function updateCartUI() {
    const cart = CartManager.getCart();
    const cartItemsContainer = document.getElementById('cart-items');
    const cartSubtotal = document.getElementById('cart-subtotal');
    const cartTotal = document.getElementById('cart-total');
    const discountRow = document.querySelector('.discount-row');
    const discountRate = document.getElementById('discount-rate');
    const discountAmount = document.getElementById('discount-amount');

    if (cart.length === 0) {
        cartItemsContainer.innerHTML = '<p class="empty-msg">Your cart is empty.</p>';
    } else {
        cartItemsContainer.innerHTML = cart.map(item => `
            <div class="cart-item">
                <div class="cart-item-details">
                    <h4>${item.title}</h4>
                    <p class="cart-variant">Size: ${item.selectedSize}</p>
                    <p>₹${item.price} x ${item.qty}</p>
                </div>
                <div class="cart-controls">
                    <button onclick="updateQty('${item.cartId}', -1)">-</button>
                    <span>${item.qty}</span>
                    <button onclick="updateQty('${item.cartId}', 1)">+</button>
                </div>
            </div>
        `).join('');
    }

    const subtotal = CartManager.getSubtotal();
    const discount = CartManager.getDiscount();
    const discountValue = subtotal * discount / 100;
    const total = subtotal - discountValue;

    cartSubtotal.innerText = `₹${subtotal.toFixed(2)}`;
    cartTotal.innerText = `₹${total.toFixed(2)}`;

    if (discount > 0) {
        discountRow.classList.remove('hidden');
        discountRate.innerText = discount;
        discountAmount.innerText = `₹${discountValue.toFixed(2)}`;
    } else {
        discountRow.classList.add('hidden');
    }

    // Update checkout summary
    document.getElementById('checkout-items-count').innerText = CartManager.getTotalItems();
    document.getElementById('checkout-total').innerText = `₹${total.toFixed(0)}`;
}

// Update quantity
function updateQty(cartId, change) {
    CartManager.updateQty(cartId, change);
    updateCartUI();
}

// Update Wishlist UI
function updateWishlistUI() {
    const wishlist = CartManager.getWishlist();
    const container = document.getElementById('wishlist-items');

    if (wishlist.length === 0) {
        container.innerHTML = '<p class="empty-msg">Your wishlist is empty. ♡</p>';
    } else {
        const wishlistProducts = wishlist.map(id => productsData.find(p => p.id === id)).filter(p => p);
        container.innerHTML = wishlistProducts.map(product => `
            <div class="wishlist-item">
                <img src="../${product.img}" alt="${product.title}" class="wishlist-item-img">
                <div class="wishlist-item-details">
                    <h4>${product.title}</h4>
                    <p>₹${product.price}</p>
                </div>
                <button class="wishlist-remove" onclick="toggleWishlist(${product.id})">×</button>
            </div>
        `).join('');
    }
}

// Setup checkout
function setupCheckout() {
    const confirmBtn = document.getElementById('confirm-checkout-btn');
    if (confirmBtn) {
        confirmBtn.onclick = () => {
            const name = document.getElementById('customer-name').value.trim();
            const phone = document.getElementById('customer-phone').value.trim();
            const address = document.getElementById('customer-address').value.trim();

            if (!name || !phone || !address) {
                showToast('Please fill all fields', 'error');
                return;
            }

            if (!/^[0-9]{10}$/.test(phone)) {
                showToast('Please enter a valid 10-digit phone number', 'error');
                return;
            }

            CartManager.checkout(name, phone, address);
        };
    }
}

// Back to top button
function setupBackToTop() {
    const btn = document.getElementById('back-to-top');
    if (btn) {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 500) {
                btn.classList.remove('hidden');
            } else {
                btn.classList.add('hidden');
            }
        });
    }
}

// Toast notification
function showToast(message, type = 'info') {
    let container = document.getElementById('toast-container');
    if (!container) {
        container = document.createElement('div');
        container.id = 'toast-container';
        container.className = 'toast-container';
        document.body.appendChild(container);
    }

    const toast = document.createElement('div');
    toast.className = `toast toast-${type}`;
    toast.innerHTML = `
        <span class="toast-message">${message}</span>
        <button class="toast-close" onclick="this.parentElement.remove()">×</button>
    `;

    container.appendChild(toast);

    setTimeout(() => {
        toast.classList.add('toast-fade');
        setTimeout(() => toast.remove(), 300);
    }, 3000);
}

// Initialize cart UI on load
document.addEventListener('DOMContentLoaded', () => {
    updateCartUI();
    updateWishlistUI();
});
