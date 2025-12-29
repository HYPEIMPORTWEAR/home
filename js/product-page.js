/* =========================================
   PRODUCT PAGE JAVASCRIPT
   Handles product page functionality
   ========================================= */

// Current product data (set by each product page)
let currentProduct = null;
let currentImageIndex = 0;

// Initialize product page
function initProductPage(product) {
    currentProduct = product;
    currentImageIndex = 0;

    // Set up image gallery
    setupGallery();

    // Set up size selection
    setupSizeSelection();

    // Set up action buttons
    setupActionButtons();

    // Set up wishlist button state
    updateWishlistButton();

    // Render related products
    renderRelatedProducts();
}

// Setup Image Gallery
function setupGallery() {
    const images = currentProduct.images || [currentProduct.img];
    const mainImg = document.getElementById('main-product-image');
    const thumbnailStrip = document.getElementById('thumbnail-strip');

    // Set initial image
    if (mainImg) {
        mainImg.src = images[0];
        mainImg.alt = currentProduct.title;
    }

    // Create thumbnails
    if (thumbnailStrip && images.length > 1) {
        thumbnailStrip.innerHTML = images.map((img, index) => `
            <img src="${img}" 
                 alt="${currentProduct.title} view ${index + 1}" 
                 class="thumbnail ${index === 0 ? 'active' : ''}"
                 onclick="selectImage(${index})"
            >
        `).join('');
    }

    // Setup nav buttons
    const prevBtn = document.getElementById('gallery-prev');
    const nextBtn = document.getElementById('gallery-next');

    if (images.length > 1) {
        if (prevBtn) prevBtn.onclick = () => navigateGallery(-1);
        if (nextBtn) nextBtn.onclick = () => navigateGallery(1);
    } else {
        if (prevBtn) prevBtn.style.display = 'none';
        if (nextBtn) nextBtn.style.display = 'none';
    }
}

// Navigate gallery
function navigateGallery(direction) {
    const images = currentProduct.images || [currentProduct.img];
    currentImageIndex += direction;

    if (currentImageIndex < 0) currentImageIndex = images.length - 1;
    if (currentImageIndex >= images.length) currentImageIndex = 0;

    selectImage(currentImageIndex);
}

// Select specific image
function selectImage(index) {
    const images = currentProduct.images || [currentProduct.img];
    currentImageIndex = index;

    const mainImg = document.getElementById('main-product-image');
    if (mainImg) {
        mainImg.src = images[index];
    }

    // Update thumbnail active state
    document.querySelectorAll('.thumbnail').forEach((thumb, i) => {
        thumb.classList.toggle('active', i === index);
    });
}

// Setup Size Selection
function setupSizeSelection() {
    const sizeContainer = document.getElementById('size-options');
    if (!sizeContainer) return;

    sizeContainer.innerHTML = currentProduct.options.map((size, index) => `
        <input type="radio" name="product-size" id="size-${index}" value="${size}" class="size-option" ${index === 0 ? 'checked' : ''}>
        <label for="size-${index}">${size}</label>
    `).join('');
}

// Setup Action Buttons
function setupActionButtons() {
    const addToCartBtn = document.getElementById('add-to-cart-btn');
    const wishlistBtn = document.getElementById('wishlist-btn-large');

    if (addToCartBtn) {
        addToCartBtn.onclick = addToCart;
    }

    if (wishlistBtn) {
        wishlistBtn.onclick = toggleWishlist;
    }
}

// Add to Cart
function addToCart() {
    const selectedSize = document.querySelector('input[name="product-size"]:checked');
    if (!selectedSize) {
        showToast('Please select a size', 'error');
        return;
    }

    CartManager.addItem(currentProduct, selectedSize.value);
    showToast(`${currentProduct.title} added to cart!`, 'success');

    // Optional: animate the cart button
    const cartBtn = document.getElementById('cart-btn');
    if (cartBtn) {
        cartBtn.classList.add('pulse');
        setTimeout(() => cartBtn.classList.remove('pulse'), 500);
    }
}

// Toggle Wishlist
function toggleWishlist() {
    CartManager.toggleWishlist(currentProduct.id);
    updateWishlistButton();

    const isNowInWishlist = CartManager.isInWishlist(currentProduct.id);
    showToast(
        isNowInWishlist ? 'Added to wishlist!' : 'Removed from wishlist',
        isNowInWishlist ? 'success' : 'info'
    );
}

// Update Wishlist Button State
function updateWishlistButton() {
    const wishlistBtn = document.getElementById('wishlist-btn-large');
    if (!wishlistBtn) return;

    const isInWishlist = CartManager.isInWishlist(currentProduct.id);
    wishlistBtn.classList.toggle('active', isInWishlist);

    const icon = wishlistBtn.querySelector('.wishlist-icon');
    if (icon) {
        icon.textContent = isInWishlist ? '♥' : '♡';
    }
}

// Render Related Products
function renderRelatedProducts() {
    const container = document.getElementById('related-products-grid');
    if (!container || !window.allProducts) return;

    // Get products from same category, excluding current
    const related = window.allProducts
        .filter(p => p.category === currentProduct.category && p.id !== currentProduct.id)
        .slice(0, 4);

    if (related.length === 0) {
        document.querySelector('.related-products')?.remove();
        return;
    }

    container.innerHTML = related.map(product => `
        <a href="${product.slug}.html" class="product-card-link">
            <div class="product-card">
                <img src="../${product.img}" alt="${product.title}" class="product-img">
                <div class="product-info">
                    <h3 class="product-title">${product.title}</h3>
                    <p class="product-price">₹${product.price}</p>
                </div>
            </div>
        </a>
    `).join('');
}

// Show Toast Notification
function showToast(message, type = 'info') {
    // Check if toast container exists
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

    // Auto remove after 3 seconds
    setTimeout(() => {
        toast.classList.add('toast-fade');
        setTimeout(() => toast.remove(), 300);
    }, 3000);
}

// Open Cart Modal (uses shared function if available)
function openCart() {
    if (typeof openModal === 'function') {
        openModal('cart-modal');
    } else {
        // Fallback: redirect to main page with cart open
        window.location.href = '../index.html#cart';
    }
}
