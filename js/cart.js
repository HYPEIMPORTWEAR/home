/* =========================================
   CART MANAGER - Shared Cart Module
   Used across all pages for cart/wishlist
   ========================================= */

const CartManager = {
    // Storage keys
    CART_KEY: 'neon_cart',
    WISHLIST_KEY: 'neon_wishlist',
    DISCOUNT_KEY: 'neon_discount',
    HAS_SPUN_KEY: 'neon_hasSpun',

    // Get cart from localStorage
    getCart() {
        try {
            const saved = localStorage.getItem(this.CART_KEY);
            return saved ? JSON.parse(saved) : [];
        } catch (e) {
            console.error('Error loading cart:', e);
            return [];
        }
    },

    // Save cart to localStorage
    saveCart(cart) {
        try {
            localStorage.setItem(this.CART_KEY, JSON.stringify(cart));
        } catch (e) {
            console.error('Error saving cart:', e);
        }
    },

    // Add item to cart
    addItem(product, selectedSize, qty = 1) {
        const cart = this.getCart();
        const cartItemId = `${product.id}-${selectedSize}`;

        const existingItem = cart.find(item => item.cartId === cartItemId);

        if (existingItem) {
            existingItem.qty += qty;
            console.log('CartManager: Updated existing item quantity', existingItem);
        } else {
            const newItem = {
                id: product.id,
                cartId: cartItemId,
                title: product.title,
                price: product.price,
                img: product.img,
                selectedSize: selectedSize,
                qty: qty
            };
            cart.push(newItem);
            console.log('CartManager: Added new item to cart', newItem);
        }

        this.saveCart(cart);
        this.updateCartBadge();
        console.log('CartManager: Cart now has', cart.length, 'unique items');
        return cart;
    },

    // Update item quantity
    updateQty(cartId, change) {
        const cart = this.getCart();
        const itemIndex = cart.findIndex(item => item.cartId === cartId);

        if (itemIndex === -1) return cart;

        cart[itemIndex].qty += change;

        if (cart[itemIndex].qty <= 0) {
            cart.splice(itemIndex, 1);
        }

        this.saveCart(cart);
        this.updateCartBadge();
        return cart;
    },

    // Remove item from cart
    removeItem(cartId) {
        const cart = this.getCart();
        const filtered = cart.filter(item => item.cartId !== cartId);
        this.saveCart(filtered);
        this.updateCartBadge();
        return filtered;
    },

    // Clear entire cart
    clearCart() {
        this.saveCart([]);
        this.updateCartBadge();
    },

    // Get total item count
    getTotalItems() {
        const cart = this.getCart();
        return cart.reduce((sum, item) => sum + item.qty, 0);
    },

    // Get subtotal
    getSubtotal() {
        const cart = this.getCart();
        return cart.reduce((sum, item) => sum + (item.price * item.qty), 0);
    },

    // Get discount percentage
    getDiscount() {
        const saved = localStorage.getItem(this.DISCOUNT_KEY);
        return saved ? parseInt(saved) : 0;
    },

    // Get final total after discount
    getTotal() {
        const subtotal = this.getSubtotal();
        const discount = this.getDiscount();
        return subtotal - (subtotal * discount / 100);
    },

    // Update cart badge in header
    updateCartBadge() {
        const badge = document.getElementById('cart-count');
        const count = this.getTotalItems();
        
        if (badge) {
            badge.innerText = count;
            console.log('CartManager: Cart badge updated to', count);
            // Pulse animation
            badge.classList.remove('pulse-animation');
            void badge.offsetWidth; // Trigger reflow
            badge.classList.add('pulse-animation');
        } else {
            console.warn('CartManager: Cart badge element not found, retrying...');
            // Retry after a short delay if element not found
            setTimeout(() => {
                const retryBadge = document.getElementById('cart-count');
                if (retryBadge) {
                    retryBadge.innerText = this.getTotalItems();
                    console.log('CartManager: Cart badge updated on retry to', this.getTotalItems());
                } else {
                    console.error('CartManager: Cart badge element still not found after retry');
                }
            }, 100);
        }
    },

    // ========== WISHLIST METHODS ==========

    getWishlist() {
        try {
            const saved = localStorage.getItem(this.WISHLIST_KEY);
            return saved ? JSON.parse(saved) : [];
        } catch (e) {
            return [];
        }
    },

    saveWishlist(wishlist) {
        localStorage.setItem(this.WISHLIST_KEY, JSON.stringify(wishlist));
    },

    toggleWishlist(productId) {
        const wishlist = this.getWishlist();
        const index = wishlist.indexOf(productId);

        if (index > -1) {
            wishlist.splice(index, 1);
            console.log('CartManager: Removed product', productId, 'from wishlist');
        } else {
            wishlist.push(productId);
            console.log('CartManager: Added product', productId, 'to wishlist');
        }

        this.saveWishlist(wishlist);
        this.updateWishlistBadge();
        console.log('CartManager: Wishlist now has', wishlist.length, 'items');
        return wishlist;
    },

    isInWishlist(productId) {
        return this.getWishlist().includes(productId);
    },

    updateWishlistBadge() {
        const badge = document.getElementById('wishlist-count');
        const count = this.getWishlist().length;
        
        if (badge) {
            badge.innerText = count;
            console.log('CartManager: Wishlist badge updated to', count);
        } else {
            console.warn('CartManager: Wishlist badge element not found, retrying...');
            // Retry after a short delay if element not found
            setTimeout(() => {
                const retryBadge = document.getElementById('wishlist-count');
                if (retryBadge) {
                    retryBadge.innerText = this.getWishlist().length;
                    console.log('CartManager: Wishlist badge updated on retry to', this.getWishlist().length);
                } else {
                    console.error('CartManager: Wishlist badge element still not found after retry');
                }
            }, 100);
        }
    },

    // ========== CHECKOUT METHODS ==========

    // Format cart for WhatsApp message
    formatForWhatsApp(customerName, customerPhone, customerAddress) {
        const cart = this.getCart();
        const subtotal = this.getSubtotal();
        const discount = this.getDiscount();
        const discountAmount = subtotal * discount / 100;
        const total = subtotal - discountAmount;

        let message = `🛒 *NEW ORDER - HYPE IMPORT WEAR*\n\n`;
        message += `👤 *Customer:* ${customerName}\n`;
        message += `📞 *Phone:* ${customerPhone}\n`;
        message += `📍 *Address:* ${customerAddress}\n\n`;
        message += `📦 *ORDER DETAILS:*\n`;
        message += `─────────────────\n`;

        cart.forEach((item, index) => {
            message += `${index + 1}. ${item.title}\n`;
            message += `   Size: ${item.selectedSize}\n`;
            message += `   Qty: ${item.qty} × ₹${item.price} = ₹${item.qty * item.price}\n\n`;
        });

        message += `─────────────────\n`;
        message += `💰 Subtotal: ₹${subtotal}\n`;

        if (discount > 0) {
            message += `🎁 Discount (${discount}%): -₹${discountAmount.toFixed(0)}\n`;
        }

        message += `*✅ TOTAL: ₹${total.toFixed(0)}*\n\n`;
        message += `🚚 COD + Free Shipping`;

        return encodeURIComponent(message);
    },

    // Open WhatsApp with order
    checkout(customerName, customerPhone, customerAddress) {
        const message = this.formatForWhatsApp(customerName, customerPhone, customerAddress);
        const whatsappNumber = '918309223139';
        const url = `https://wa.me/${whatsappNumber}?text=${message}`;
        window.open(url, '_blank');
    },

    // Global UI Refresh
    refreshAllUI() {
        this.updateCartBadge();
        this.updateWishlistBadge();
        // Call page-specific refresh if it exists
        if (typeof updateCartUI === 'function') updateCartUI();
        if (typeof updateWishlistUI === 'function') updateWishlistUI();
        if (typeof renderCategoryProducts === 'function') renderCategoryProducts();
    },

    // Initialize - call this immediately when page loads
    init() {
        console.log('CartManager: Initializing...');
        console.log('CartManager: Cart items:', this.getTotalItems());
        console.log('CartManager: Wishlist items:', this.getWishlist().length);

        // Update badges immediately
        this.updateCartBadge();
        this.updateWishlistBadge();
        this.refreshAllUI();

        // Also update after short delay to catch late-loading elements
        setTimeout(() => {
            this.updateCartBadge();
            this.updateWishlistBadge();
            this.refreshAllUI();
            console.log('CartManager: Updated badges (100ms delay)');
        }, 100);

        setTimeout(() => {
            this.updateCartBadge();
            this.updateWishlistBadge();
            this.refreshAllUI();
            console.log('CartManager: Updated badges (500ms delay)');
        }, 500);
    }
};

// Sync across tabs
window.addEventListener('storage', (e) => {
    if (e.key === CartManager.CART_KEY || e.key === CartManager.WISHLIST_KEY) {
        CartManager.refreshAllUI();
    }
});

// Initialize immediately when script loads
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => {
        CartManager.init();
    });
} else {
    // DOM already loaded
    CartManager.init();
}

// Also update on page show (back/forward navigation)
window.addEventListener('pageshow', () => {
    CartManager.init();
});

// Update on window focus (switching tabs)
window.addEventListener('focus', () => {
    CartManager.updateCartBadge();
    CartManager.updateWishlistBadge();
});

// Export for use in other scripts
if (typeof module !== 'undefined' && module.exports) {
    module.exports = CartManager;
}
