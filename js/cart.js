/* =========================================
   CART MANAGER - Shared Cart Module
   Used across all pages for cart/wishlist
   ========================================= */

const CartManager = {
    // Storage keys
    CART_KEY: 'hype_cart',
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
        } else {
            cart.push({
                id: product.id,
                cartId: cartItemId,
                title: product.title,
                price: product.price,
                img: product.img,
                selectedSize: selectedSize,
                qty: qty
            });
        }
        
        this.saveCart(cart);
        this.updateCartBadge();
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
        if (badge) {
            badge.innerText = this.getTotalItems();
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
        } else {
            wishlist.push(productId);
        }
        
        this.saveWishlist(wishlist);
        this.updateWishlistBadge();
        return wishlist;
    },

    isInWishlist(productId) {
        return this.getWishlist().includes(productId);
    },

    updateWishlistBadge() {
        const badge = document.getElementById('wishlist-count');
        if (badge) {
            badge.innerText = this.getWishlist().length;
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
    }
};

// Initialize badges on page load
document.addEventListener('DOMContentLoaded', () => {
    CartManager.updateCartBadge();
    CartManager.updateWishlistBadge();
});

// Export for use in other scripts
if (typeof module !== 'undefined' && module.exports) {
    module.exports = CartManager;
}
