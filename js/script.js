/* =========================================
   1. STATE MANAGEMENT & DATA
   ========================================= */

const productsData = [
    // Jackets & Bombers
    {
        id: 1,
        category: "Jackets & Bombers",
        title: "Urban Style Premium Jacket",
        price: 3199,
        img: "assets/products/1_urban_style_jacket/main.jpg",
        images: [
            "assets/products/1_urban_style_jacket/main.jpg",
            "assets/products/1_urban_style_jacket/590401509_17845016277654572_4264836126902837239_n.jpg"
        ],
        post_url: "https://www.instagram.com/hypeimportwear/p/DSrOi8UAVtw/",
        description: "Premium fabric with cartoon print blend. Free delivery available.",
        features: ["Color: Black/White", "Material: Premium fabric", "Stock: Limited"],
        options: ["M", "L", "XL"]
    },
    {
        id: 2,
        category: "Jackets & Bombers",
        title: "SINISTER Yellow Jacket",
        price: 2999,
        img: "assets/products/2_sinister_yellow_jacket/main.jpg",
        images: [
            "assets/products/2_sinister_yellow_jacket/main.jpg",
            "assets/products/2_sinister_yellow_jacket/587213518_17844921213654572_3721632825071335872_n.jpg",
            "assets/products/2_sinister_yellow_jacket/590376687_17844921177654572_8262411541084572688_n.jpg",
            "assets/products/2_sinister_yellow_jacket/602652948_17844921186654572_2289652092599002921_n.jpg"
        ],
        post_url: "https://www.instagram.com/hypeimportwear/p/DSp5uwRAW4h/",
        description: "Yellow jacket with backprint. Perfect for Bikers, Clubbing, and Streetwear lovers.",
        features: ["Color: Yellow", "Use Case: Bikers, Clubbing", "Stock: Limited"],
        options: ["M", "L", "XL"]
    },
    {
        id: 3,
        category: "Jackets & Bombers",
        title: "Hellstar x Avirex Bomber",
        price: 3499,
        img: "assets/products/3_hellstar_avirex_bomber/main.jpg",
        images: [
            "assets/products/3_hellstar_avirex_bomber/main.jpg",
            "assets/products/3_hellstar_avirex_bomber/588897759_17844897318654572_769284691381029834_n.jpg",
            "assets/products/3_hellstar_avirex_bomber/590429944_17844897336654572_4425432447961678708_n.jpg"
        ],
        post_url: "https://www.instagram.com/hypeimportwear/p/DSpsLTGAbt4/",
        description: "Limited 50th Anniversary Bomber. Genuine European Lamb material.",
        features: ["Brand: Hellstar x Avirex", "Color: Salvage Red", "Material: Genuine European Lamb"],
        options: ["M", "L", "XL"]
    },
    {
        id: 4,
        category: "Jackets & Bombers",
        title: "Varsity Bomber (Vegan Leather)",
        price: 3199,
        img: "assets/products/4_varsity_bomber_vegan/main.jpg",
        images: [
            "assets/products/4_varsity_bomber_vegan/main.jpg",
            "assets/products/4_varsity_bomber_vegan/590373049_17844797553654572_3973967991376754867_n.jpg",
            "assets/products/4_varsity_bomber_vegan/603077481_17844798243654572_9119503025332998564_n.jpg",
            "assets/products/4_varsity_bomber_vegan/604437468_17844797565654572_789222237267538310_n.jpg"
        ],
        post_url: "https://www.instagram.com/hypeimportwear/p/DSoezDuAeu2/",
        description: "Varsity Bomber with Vegan Leather Sleeves. Contrast vegan leather sleeves + patches.",
        features: ["Discount: 10% OFF", "Material: Vegan Leather", "Stock: Limited"],
        options: ["M", "L", "XL"]
    },
    {
        id: 5,
        category: "Jackets & Bombers",
        title: "Steelers-Inspired Varsity",
        price: 3199,
        img: "assets/products/5_steelers_varsity/main.jpg",
        images: [
            "assets/products/5_steelers_varsity/main.jpg",
            "assets/products/5_steelers_varsity/590397584_17844796302654572_4494800699036329442_n.jpg",
            "assets/products/5_steelers_varsity/590421812_17844796320654572_5833896903592465454_n.jpg",
            "assets/products/5_steelers_varsity/601667013_17844796284654572_803365437539443010_n.jpg",
            "assets/products/5_steelers_varsity/604623836_17844796311654572_1275738150480009037_n.jpg"
        ],
        post_url: "https://www.instagram.com/hypeimportwear/p/DSodw92AYBL/",
        description: "Pittsburgh Steelers-Inspired Varsity Bomber. Embroidered logo patches.",
        features: ["Edition: Limited", "Features: Embroidered patches", "Stock: Limited"],
        options: ["M", "L", "XL"]
    },

    // Hoodies
    {
        id: 6,
        category: "Hoodies",
        title: "Heavy Backprint Hoodie",
        price: 1299,
        img: "assets/products/6_heavy_backprint_hoodie/main.jpg",
        images: [
            "assets/products/6_heavy_backprint_hoodie/main.jpg",
            "assets/products/6_heavy_backprint_hoodie/588732345_17844794622654572_9047878031048851947_n.jpg",
            "assets/products/6_heavy_backprint_hoodie/590383713_17844794643654572_1206179385062118899_n.jpg"
        ],
        post_url: "https://www.instagram.com/hypeimportwear/p/DSocU0sgWhb/",
        description: "Heavy Backprint Hoodies Collection. 400GSM premium fabric.",
        features: ["Material: 400GSM", "Features: Bold backprints", "Delivery: Free shipping"],
        options: ["M", "L", "XL", "XXL"]
    },

    // Track Suits
    {
        id: 7,
        category: "Track Suits",
        title: "Adidas Brown & White Set",
        price: 3499,
        img: "assets/products/7_adidas_brown_white_set/main.jpg",
        images: [
            "assets/products/7_adidas_brown_white_set/main.jpg",
            "assets/products/7_adidas_brown_white_set/590396229_17844716667654572_5996950522081670071_n.jpg",
            "assets/products/7_adidas_brown_white_set/590399707_17844716625654572_6452203386819690129_n.jpg",
            "assets/products/7_adidas_brown_white_set/603089755_17844716637654572_1658872015948634976_n.jpg",
            "assets/products/7_adidas_brown_white_set/604227739_17844716649654572_6983397328359225_n.jpg"
        ],
        post_url: "https://www.instagram.com/hypeimportwear/p/DSnSSR3Aayp/",
        description: "Adidas Brown & White Track Suit. Heavy pocket design, premium quality.",
        features: ["Brand: Adidas", "Offer: 10% OFF (Follow+Share)", "Delivery: COD + Free Shipping"],
        options: ["M", "L", "XL"]
    },
    {
        id: 8,
        category: "Track Suits",
        title: "Adidas Red Track Suit",
        price: 2999,
        img: "assets/products/8_adidas_red_track_suit/main.jpg",
        images: [
            "assets/products/8_adidas_red_track_suit/main.jpg",
            "assets/products/8_adidas_red_track_suit/590388128_17844714366654572_1475213575284463491_n.jpg",
            "assets/products/8_adidas_red_track_suit/602170152_17844714348654572_6065569245176989815_n.jpg",
            "assets/products/8_adidas_red_track_suit/605292941_17844714357654572_8440627562442998201_n.jpg"
        ],
        post_url: "https://www.instagram.com/hypeimportwear/p/DSnRHb2AUFv/",
        description: "Adidas Red Track Suit. Bold street look on and off court.",
        features: ["Brand: Adidas", "Use Case: Street/Sport", "Delivery: COD (10km)"],
        options: ["M", "L", "XL"]
    },
    {
        id: 9,
        category: "Track Suits",
        title: "White Jordan Track Suit",
        price: 3499,
        img: "assets/products/9_white_jordan_track_suit/main.jpg",
        images: [
            "assets/products/9_white_jordan_track_suit/main.jpg",
            "assets/products/9_white_jordan_track_suit/604157190_17844711765654572_5583952548876155417_n.jpg",
            "assets/products/9_white_jordan_track_suit/604641886_17844711783654572_7332416044192783028_n.jpg"
        ],
        post_url: "https://www.instagram.com/hypeimportwear/p/DSnP7a-gYDx/",
        description: "White Jordan Track Suit. Color-blocked design (Black/White/Green).",
        features: ["Brand: Jordan/Nike", "Design: Color-blocked", "Offer: 10% OFF (Follow+Share)"],
        options: ["M", "L", "XL"]
    },

    // Sneakers & Shoes
    {
        id: 10,
        category: "Sneakers & Shoes",
        title: "NOCTA Air Force 1",
        price: 2519,
        img: "assets/products/10_nocta_air_force_1/main.jpg",
        images: [
            "assets/products/10_nocta_air_force_1/main.jpg",
            "assets/products/10_nocta_air_force_1/602010691_17844418911654572_5955240655554157835_n.jpg",
            "assets/products/10_nocta_air_force_1/603944457_17844418923654572_951449934072603700_n.jpg"
        ],
        post_url: "https://www.instagram.com/hypeimportwear/p/DSjYTMTgSRT/",
        description: "NOCTA Air Force 1 Heat Drop. Drake vibes unlocked.",
        features: ["Brand: Nike (Drake)", "Original Price: ₹2799", "Order: PRE-ORDER ONLY"],
        options: ["UK 7", "UK 8", "UK 9", "UK 10"]
    },
    {
        id: 11,
        category: "Sneakers & Shoes",
        title: "Nike SB Dunk Low Pro",
        price: 2699,
        img: "assets/products/11_nike_sb_dunk_low/main.jpg",
        images: [
            "assets/products/11_nike_sb_dunk_low/main.jpg",
            "assets/products/11_nike_sb_dunk_low/588684350_17844418392654572_7393634244622296623_n.jpg",
            "assets/products/11_nike_sb_dunk_low/602108715_17844418383654572_5153362142612283502_n.jpg"
        ],
        post_url: "https://www.instagram.com/hypeimportwear/p/DSjXfQsgU_a/",
        description: "Nike SB Dunk Low Pro Heat Drop. Skate style unlocked.",
        features: ["Color: Blue and Beige", "Original Price: ₹2999", "Order: PRE-ORDER ONLY"],
        options: ["UK 7", "UK 8", "UK 9", "UK 10"]
    },
    {
        id: 12,
        category: "Sneakers & Shoes",
        title: "Jordan 1 Mid",
        price: 2609,
        img: "assets/products/12_jordan_1_mid/main.jpg",
        images: [
            "assets/products/12_jordan_1_mid/main.jpg",
            "assets/products/12_jordan_1_mid/590523419_17844417441654572_7210351908452055206_n.jpg",
            "assets/products/12_jordan_1_mid/604417329_17844417393654572_5394716126627320264_n.jpg"
        ],
        post_url: "https://www.instagram.com/hypeimportwear/p/DSjWnGcASo1/",
        description: "Jordan 1 Mid Heat Drop. Street style unlocked.",
        features: ["Color: Turquoise and Black", "Original Price: ₹2899", "Order: PRE-ORDER ONLY"],
        options: ["UK 7", "UK 8", "UK 9", "UK 10"]
    },
    {
        id: 13,
        category: "Sneakers & Shoes",
        title: "Jordan 4 Breds",
        price: 2429,
        img: "assets/products/13_jordan_4_breds/main.jpg",
        images: [
            "assets/products/13_jordan_4_breds/main.jpg",
            "assets/products/13_jordan_4_breds/590401869_17844414657654572_6520032195575639233_n.jpg",
            "assets/products/13_jordan_4_breds/590569292_17844414234654572_7159948546833280659_n.jpg"
        ],
        post_url: "https://www.instagram.com/hypeimportwear/p/DSjUfRHAeSY/",
        description: "Iconic Bred colorway - Black and Red. Limited sizes.",
        features: ["Brand: Jordan/Nike", "Promo: RETRO4", "Order: PRE-ORDER ONLY"],
        options: ["UK 7", "UK 8", "UK 9", "UK 10"]
    },
    {
        id: 14,
        category: "Sneakers & Shoes",
        title: "Adidas Samba",
        price: 2249,
        img: "assets/products/14_adidas_samba/main.jpg",
        images: [
            "assets/products/14_adidas_samba/main.jpg",
            "assets/products/14_adidas_samba/590387748_17844404925654572_5764156028560891378_n.jpg",
            "assets/products/14_adidas_samba/590577544_17844404916654572_9129778170798306717_n.jpg"
        ],
        post_url: "https://www.instagram.com/hypeimportwear/p/DSjRaZSAT3H/",
        description: "Iconic classic sneaker. White with Black stripe.",
        features: ["Brand: Adidas", "Promo: SAMBA10", "Order: PRE-ORDER ONLY"],
        options: ["UK 7", "UK 8", "UK 9", "UK 10"]
    },
];

const AppState = {
    cart: [],
    wishlist: [], // Array of product IDs
    discount: 0, // Percentage
    hasSpun: false,
    searchQuery: '', // For search filtering
    hasEntered: false // Track if user has entered the site
};

/* =========================================
   FULLSCREEN ENTRY
   ========================================= */

// Enter site and go fullscreen
function enterSite() {
    const splashScreen = document.getElementById('splash-screen');

    // Try to enter fullscreen
    enterFullscreen();

    // Hide splash screen
    splashScreen.classList.add('hidden');

    // Mark as entered
    AppState.hasEntered = true;
    sessionStorage.setItem('hype_hasEntered', 'true');

    // Add fullscreen body class
    document.body.classList.add('fullscreen-mode');

    // Show scratch card popup after a short delay (only if user hasn't spun yet)
    setTimeout(() => {
        const hasSpun = localStorage.getItem('neon_hasSpun');
        if (hasSpun !== 'true') {
            openScratchModal();
        }
    }, 800); // Delay for smooth transition after splash screen fades
}

// Request fullscreen
function enterFullscreen() {
    const elem = document.documentElement;

    if (elem.requestFullscreen) {
        elem.requestFullscreen().catch(err => {
            console.log('Fullscreen not supported or denied:', err);
        });
    } else if (elem.webkitRequestFullscreen) { /* Safari */
        elem.webkitRequestFullscreen();
    } else if (elem.msRequestFullscreen) { /* IE11 */
        elem.msRequestFullscreen();
    }
}

// Check if user has already entered this session
function checkIfAlreadyEntered() {
    const hasEntered = sessionStorage.getItem('hype_hasEntered');
    if (hasEntered === 'true') {
        const splashScreen = document.getElementById('splash-screen');
        if (splashScreen) {
            splashScreen.classList.add('hidden');
        }
        AppState.hasEntered = true;
        document.body.classList.add('fullscreen-mode');
    }
}


// Initialize State from LocalStorage
function init() {
    const savedSpin = localStorage.getItem('neon_hasSpun');
    const savedDiscount = localStorage.getItem('neon_discount');
    const savedWishlist = localStorage.getItem('neon_wishlist');

    // Load wishlist
    if (savedWishlist) {
        try {
            AppState.wishlist = JSON.parse(savedWishlist);
        } catch (e) {
            AppState.wishlist = [];
        }
    }

    if (savedSpin === 'true') {
        AppState.hasSpun = true;
        AppState.discount = parseInt(savedDiscount) || 0;
        document.getElementById('spin-fab').classList.add('hidden');
        if (AppState.discount > 0) {
            // Show discount in cart immediately if already spun
            updateCartUI();
        }

        // Safety Check: If user spun but didn't select interests, show modal
        const interestsSelected = localStorage.getItem('neon_interests_selected');
        if (interestsSelected !== 'true') {
            setTimeout(openCategorySelectionModal, 500);
        }
    } else {
        document.getElementById('spin-fab').classList.remove('hidden');
    }

    renderCategoryPills();
    renderProducts();
    updateCartUI();
    updateWishlistUI();
}

/* =========================================
   2. UI RENDERING
   ========================================= */

function renderProducts(searchQuery = '') {
    const catalog = document.getElementById('catalog');
    catalog.innerHTML = '';

    // Filter products based on search query
    let filteredProducts = productsData;
    if (searchQuery.trim()) {
        const query = searchQuery.toLowerCase().trim();
        filteredProducts = productsData.filter(product =>
            product.title.toLowerCase().includes(query) ||
            product.category.toLowerCase().includes(query) ||
            product.description.toLowerCase().includes(query)
        );
    }

    // Show no results message
    if (filteredProducts.length === 0) {
        catalog.innerHTML = `
            <div class="no-results">
                <h3>No Products Found</h3>
                <p>Try searching for something else</p>
            </div>
        `;
        return;
    }

    // Group products by category
    const categories = {};
    filteredProducts.forEach(product => {
        if (!categories[product.category]) {
            categories[product.category] = [];
        }
        categories[product.category].push(product);
    });

    // Render each category section
    for (const [category, items] of Object.entries(categories)) {
        const section = document.createElement('div');
        section.className = 'category-section';
        section.id = `category-${category.replace(/[^a-zA-Z0-9]/g, '-').toLowerCase()}`;

        const title = document.createElement('h2');
        title.className = 'category-title';
        title.innerText = category;
        section.appendChild(title);

        const grid = document.createElement('div');
        grid.className = 'product-grid';
        grid.innerHTML = items.map(product => {
            // Determine stock badge
            let stockBadge = '';
            if (product.features.some(f => f.toLowerCase().includes('pre-order'))) {
                stockBadge = '<span class="stock-badge preorder">PRE-ORDER</span>';
            } else if (product.features.some(f => f.toLowerCase().includes('limited'))) {
                stockBadge = '<span class="stock-badge limited">LIMITED</span>';
            }

            // Check if in wishlist
            const isInWishlist = AppState.wishlist.includes(product.id);
            const heartIcon = isInWishlist ? '♥' : '♡';
            const heartClass = isInWishlist ? 'product-wishlist active' : 'product-wishlist';

            return `
            <div class="product-card" onclick="openProductDetails(${product.id})">
                ${stockBadge}
                <button class="${heartClass}" onclick="event.stopPropagation(); toggleWishlist(${product.id})" title="Add to Wishlist">${heartIcon}</button>
                <img src="${product.img}" alt="${product.title}" class="product-img">
                <div class="product-info">
                    <h3 class="product-title">${product.title}</h3>
                    <p class="product-price">₹${product.price}</p>
                    <button class="btn-add">SELECT OPTIONS</button>
                </div>
            </div>
        `}).join('');

        section.appendChild(grid);
        catalog.appendChild(section);
    }
}


function updateCartUI() {
    const cartItemsContainer = document.getElementById('cart-items');
    const cartCount = document.getElementById('cart-count');
    const cartSubtotal = document.getElementById('cart-subtotal');
    const cartTotal = document.getElementById('cart-total');
    const discountRow = document.querySelector('.discount-row');
    const discountRate = document.getElementById('discount-rate');
    const discountAmount = document.getElementById('discount-amount');

    // Update Badge
    const totalItems = AppState.cart.reduce((sum, item) => sum + item.qty, 0);
    cartCount.innerText = totalItems;

    // Render Items
    if (AppState.cart.length === 0) {
        cartItemsContainer.innerHTML = '<p class="empty-msg">Your cart is empty.</p>';
    } else {
        cartItemsContainer.innerHTML = AppState.cart.map(item => `
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

    // Calculate Totals
    const subtotal = AppState.cart.reduce((sum, item) => sum + (item.price * item.qty), 0);
    const discountValue = (subtotal * AppState.discount) / 100;
    const total = subtotal - discountValue;

    cartSubtotal.innerText = `₹${subtotal.toFixed(2)}`;
    cartTotal.innerText = `₹${total.toFixed(2)}`;

    if (AppState.discount > 0) {
        discountRow.classList.remove('hidden');
        discountRate.innerText = AppState.discount;
        discountAmount.innerText = `₹${discountValue.toFixed(2)}`;
    } else {
        discountRow.classList.add('hidden');
    }
}

/* =========================================
   3. CART LOGIC & MODALS
   ========================================= */

let currentSelectedProduct = null;

function openProductDetails(id) {
    const product = productsData.find(p => p.id === id);
    if (!product) return;

    currentSelectedProduct = product;

    // Populate Modal Slider
    const slider = document.getElementById('modal-slider');
    const dotsContainer = document.getElementById('slider-dots');

    // Clear previous
    slider.innerHTML = '';
    dotsContainer.innerHTML = '';

    // Use all images available, fallback to single img if array missing
    const images = (product.images && product.images.length > 0) ? product.images : [product.img];

    // Render Images to Slider
    images.forEach((imgSrc, index) => {
        const img = document.createElement('img');
        img.src = imgSrc;
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

    // Handle Slider Buttons Visibility
    const prevBtn = document.getElementById('slider-prev');
    const nextBtn = document.getElementById('slider-next');

    if (images.length > 1) {
        prevBtn.classList.remove('hidden');
        nextBtn.classList.remove('hidden');
        prevBtn.onclick = () => scrollSlider(-1);
        nextBtn.onclick = () => scrollSlider(1);

        // Add scroll listener to update dots
        slider.onscroll = () => updateSliderDots();
    } else {
        prevBtn.classList.add('hidden');
        nextBtn.classList.add('hidden');
        slider.onscroll = null;
    }

    // Thumbnails Logic
    const thumbnailsContainer = document.getElementById('modal-thumbnails');
    thumbnailsContainer.innerHTML = ''; // Clear previous

    if (images.length > 1) {
        images.forEach((imgSrc, index) => {
            const thumb = document.createElement('img');
            thumb.src = imgSrc;
            thumb.className = 'thumbnail';
            thumb.onclick = () => scrollToSlide(index);
            thumbnailsContainer.appendChild(thumb);
        });
    }

    // Features List
    const featuresList = document.getElementById('modal-features');
    featuresList.innerHTML = product.features.map(f => `<li>${f}</li>`).join('');

    // Options (Size)
    const sizeContainer = document.querySelector('.size-selector');
    sizeContainer.innerHTML = product.options.map((opt, index) => `
        <input type="radio" name="size" id="size-${index}" value="${opt}" ${index === 0 ? 'checked' : ''}>
        <label for="size-${index}">${opt}</label>
    `).join('');

    // Bind Add Button
    const addBtn = document.getElementById('modal-add-btn');
    addBtn.onclick = () => addToCartFromModal();

    openModal('product-modal');
}

// Scroll slider by direction (-1 or 1)
function scrollSlider(direction) {
    const slider = document.getElementById('modal-slider');
    const width = slider.offsetWidth;
    slider.scrollBy({ left: width * direction, behavior: 'smooth' });
}

// Scroll to specific slide index
function scrollToSlide(index) {
    const slider = document.getElementById('modal-slider');
    const width = slider.offsetWidth;
    slider.scrollTo({ left: width * index, behavior: 'smooth' });
}

// Update Active Dot on scroll
function updateSliderDots() {
    const slider = document.getElementById('modal-slider');
    const width = slider.offsetWidth;
    const index = Math.round(slider.scrollLeft / width);

    document.querySelectorAll('.slider-dot').forEach((dot, i) => {
        dot.classList.toggle('active', i === index);
    });
}

function addToCartFromModal() {
    if (!currentSelectedProduct) return;

    const selectedSize = document.querySelector('input[name="size"]:checked').value;

    // Create a unique ID for cart item based on product ID + Options
    // This allows adding same product with different sizes as separate items
    const cartItemId = `${currentSelectedProduct.id}-${selectedSize}`;

    const existingItem = AppState.cart.find(item => item.cartId === cartItemId);

    if (existingItem) {
        existingItem.qty++;
    } else {
        AppState.cart.push({
            ...currentSelectedProduct,
            cartId: cartItemId,
            selectedSize: selectedSize,
            qty: 1
        });
    }

    updateCartUI();
    closeModal('product-modal');

    // Show toast notification instead of opening cart
    showToast(`${currentSelectedProduct.title} added to cart!`, 'success');
}

function addToCart(id) {
    // Legacy function, redirected to modal now
    openProductDetails(id);
}

function updateQty(cartId, change) {
    // Note: cartId is now string (e.g. "1-M")
    // If passed as number from old HTML, might need check, but we updated render logic below
    const itemIndex = AppState.cart.findIndex(item => item.cartId === cartId);
    if (itemIndex === -1) return;

    const item = AppState.cart[itemIndex];
    item.qty += change;

    if (item.qty <= 0) {
        AppState.cart.splice(itemIndex, 1);
    }

    updateCartUI();
}

/* =========================================
   4. SCRATCH CARD LOGIC
   ========================================= */

let scratchCanvas = null;
let scratchCtx = null;
let isScratching = false;
let scratchedPercent = 0;

function initScratchCard() {
    scratchCanvas = document.getElementById('scratch-canvas');
    if (!scratchCanvas) return;

    scratchCtx = scratchCanvas.getContext('2d');

    // Set canvas size to match container
    const container = scratchCanvas.parentElement;
    scratchCanvas.width = container.offsetWidth;
    scratchCanvas.height = container.offsetHeight;

    // Draw scratch surface (metallic silver look)
    drawScratchSurface();

    // Add event listeners
    scratchCanvas.addEventListener('mousedown', startScratching);
    scratchCanvas.addEventListener('mousemove', scratch);
    scratchCanvas.addEventListener('mouseup', stopScratching);
    scratchCanvas.addEventListener('mouseleave', stopScratching);

    // Touch events for mobile
    scratchCanvas.addEventListener('touchstart', handleTouchStart);
    scratchCanvas.addEventListener('touchmove', handleTouchMove);
    scratchCanvas.addEventListener('touchend', stopScratching);
}

function drawScratchSurface() {
    if (!scratchCtx) return;

    const w = scratchCanvas.width;
    const h = scratchCanvas.height;

    // Create metallic gradient background
    const gradient = scratchCtx.createLinearGradient(0, 0, w, h);
    gradient.addColorStop(0, '#3a3a3a');
    gradient.addColorStop(0.3, '#5a5a5a');
    gradient.addColorStop(0.5, '#4a4a4a');
    gradient.addColorStop(0.7, '#5a5a5a');
    gradient.addColorStop(1, '#3a3a3a');

    scratchCtx.fillStyle = gradient;
    scratchCtx.fillRect(0, 0, w, h);

    // Add texture pattern
    scratchCtx.fillStyle = 'rgba(255, 255, 255, 0.03)';
    for (let i = 0; i < w; i += 4) {
        for (let j = 0; j < h; j += 4) {
            if (Math.random() > 0.5) {
                scratchCtx.fillRect(i, j, 2, 2);
            }
        }
    }

    // Add "SCRATCH HERE" text
    scratchCtx.fillStyle = '#ccff00';
    scratchCtx.font = '900 18px Oswald, sans-serif';
    scratchCtx.textAlign = 'center';
    scratchCtx.textBaseline = 'middle';
    scratchCtx.fillText('SCRATCH HERE', w / 2, h / 2);

    // Add border lines
    scratchCtx.strokeStyle = '#ccff00';
    scratchCtx.lineWidth = 2;
    scratchCtx.setLineDash([10, 5]);
    scratchCtx.strokeRect(15, 15, w - 30, h - 30);
}

function startScratching(e) {
    if (AppState.hasSpun) return;
    isScratching = true;
    scratch(e);
}

function handleTouchStart(e) {
    e.preventDefault();
    if (AppState.hasSpun) return;
    isScratching = true;
    handleTouchMove(e);
}

function handleTouchMove(e) {
    e.preventDefault();
    if (!isScratching || AppState.hasSpun) return;

    const touch = e.touches[0];
    const rect = scratchCanvas.getBoundingClientRect();
    const x = touch.clientX - rect.left;
    const y = touch.clientY - rect.top;

    scratchAt(x, y);
}

function scratch(e) {
    if (!isScratching || AppState.hasSpun) return;

    const rect = scratchCanvas.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    scratchAt(x, y);
}

function scratchAt(x, y) {
    if (!scratchCtx) return;

    // Use destination-out to "erase" the scratch surface
    scratchCtx.globalCompositeOperation = 'destination-out';

    // Draw a circle to scratch
    scratchCtx.beginPath();
    scratchCtx.arc(x, y, 25, 0, Math.PI * 2);
    scratchCtx.fill();

    // Check scratched percentage
    checkScratchProgress();
}

function stopScratching() {
    isScratching = false;
}

function checkScratchProgress() {
    if (!scratchCtx || AppState.hasSpun) return;

    const imageData = scratchCtx.getImageData(0, 0, scratchCanvas.width, scratchCanvas.height);
    const pixels = imageData.data;
    let transparentPixels = 0;

    // Count transparent pixels (alpha < 128)
    for (let i = 3; i < pixels.length; i += 4) {
        if (pixels[i] < 128) {
            transparentPixels++;
        }
    }

    const totalPixels = pixels.length / 4;
    scratchedPercent = (transparentPixels / totalPixels) * 100;

    // If more than 50% scratched, reveal the prize
    if (scratchedPercent > 50) {
        revealPrize();
    }
}

function revealPrize() {
    if (AppState.hasSpun) return;

    const resultText = document.getElementById('spin-result');

    // Clear remaining scratch surface
    scratchCtx.clearRect(0, 0, scratchCanvas.width, scratchCanvas.height);

    // Show result message
    resultText.innerText = 'YOU WON 10% OFF!';
    resultText.classList.add('revealed');

    // Update State
    AppState.discount = 10;
    AppState.hasSpun = true;

    // Persist
    localStorage.setItem('neon_hasSpun', 'true');
    localStorage.setItem('neon_discount', AppState.discount);

    // Update UI
    updateCartUI();

    // Close modal after delay and show Category Selection
    setTimeout(() => {
        closeModal('spin-modal');
        document.getElementById('spin-fab').classList.add('hidden');
        openCategorySelectionModal();
    }, 800);
}

// Open Category Selection Modal
function openCategorySelectionModal() {
    const container = document.getElementById('interest-selection');
    container.innerHTML = '';

    // Get unique categories
    const categories = [...new Set(productsData.map(p => p.category))];

    categories.forEach(cat => {
        const pill = document.createElement('button');
        pill.className = 'interest-pill';
        pill.innerText = cat;
        pill.onclick = () => {
            pill.classList.toggle('selected');
        };
        container.appendChild(pill);
    });

    openModal('category-modal');
}

// Handle Continue from Category Modal
document.getElementById('confirm-interests-btn').onclick = () => {
    const selectedPills = document.querySelectorAll('.interest-pill.selected');
    const selectedCategories = Array.from(selectedPills).map(p => p.innerText);

    closeModal('category-modal');
    localStorage.setItem('neon_interests_selected', 'true');

    if (selectedCategories.length > 0) {
        // Filter catalog to show only selected categories (optional per user request context, 
        // but user said "navigate/scroll to corresponding products", implying visibility).
        // Let's scroll to the first selected category.

        const firstCat = selectedCategories[0];
        scrollToCategory(firstCat);

        showToast(`Drip curated: ${selectedCategories.join(', ')}`, 'success');
    } else {
        showToast('Welcome to the Hype!', 'success');
    }
};

// Initialize scratch card when modal opens
function openScratchModal() {
    openModal('spin-modal');
    // Small delay to ensure modal is visible before initializing canvas
    setTimeout(initScratchCard, 100);
}

/* =========================================
   5. WHATSAPP CHECKOUT
   ========================================= */

// Open checkout modal (called from cart checkout button)
function openCheckoutModal() {
    if (AppState.cart.length === 0) {
        showToast('Your cart is empty!', 'error');
        return;
    }

    // Close cart modal
    closeModal('cart-modal');

    // Update checkout summary
    const totalItems = AppState.cart.reduce((sum, item) => sum + item.qty, 0);
    const subtotal = AppState.cart.reduce((sum, item) => sum + (item.price * item.qty), 0);
    const discountValue = (subtotal * AppState.discount) / 100;
    const total = subtotal - discountValue;

    document.getElementById('checkout-items-count').textContent = totalItems;
    document.getElementById('checkout-total').textContent = `₹${total.toFixed(2)}`;

    // Clear previous input
    document.getElementById('customer-name').value = '';
    document.getElementById('customer-phone').value = '';

    // Open checkout modal
    openModal('checkout-modal');

    // Focus on name input
    setTimeout(() => {
        document.getElementById('customer-name').focus();
    }, 100);
}

// Process checkout and redirect to WhatsApp
function processCheckout() {
    const customerName = document.getElementById('customer-name').value.trim();
    const customerPhone = document.getElementById('customer-phone').value.trim();
    const customerAddress = document.getElementById('customer-address').value.trim();

    if (!customerName) {
        showToast('Please enter your name', 'error');
        document.getElementById('customer-name').focus();
        return;
    }

    if (!customerPhone || customerPhone.length < 10) {
        showToast('Please enter a valid phone number', 'error');
        document.getElementById('customer-phone').focus();
        return;
    }

    if (!customerAddress) {
        showToast('Please enter your full delivery address', 'error');
        document.getElementById('customer-address').focus();
        return;
    }

    const phoneNumber = "918309223139"; // Merchant WhatsApp number

    let message = `*New Order from: ${customerName}*%0a`;
    message += `📞 Phone: ${customerPhone}%0a`;
    message += `📍 Address: ${customerAddress}%0a`;
    message += "-------------------%0a";
    message += "*Order Details:*%0a";

    AppState.cart.forEach(item => {
        message += `• ${item.title} [Size: ${item.selectedSize}] (x${item.qty}): ₹${item.price * item.qty}%0a`;
    });

    const subtotal = AppState.cart.reduce((sum, item) => sum + (item.price * item.qty), 0);
    const discountValue = (subtotal * AppState.discount) / 100;
    const total = subtotal - discountValue;

    message += "-------------------%0a";
    message += `Subtotal: ₹${subtotal}%0a`;
    if (AppState.discount > 0) {
        message += `🎉 Discount (${AppState.discount}%): -₹${discountValue.toFixed(2)}%0a`;
    }
    message += `*💰 Total: ₹${total.toFixed(2)}*%0a`;
    message += "-------------------%0a";
    message += "Please confirm availability and delivery details. 🙏";

    // Close modal and redirect
    closeModal('checkout-modal');
    showToast('Redirecting to WhatsApp...', 'success');

    setTimeout(() => {
        window.open(`https://wa.me/${phoneNumber}?text=${message}`, '_blank');
    }, 500);
}

// Legacy checkout function (kept for compatibility)
function checkout() {
    openCheckoutModal();
}

/* =========================================
   6. NEW FEATURES
   ========================================= */

// Toast Notifications
function showToast(message, type = 'success') {
    const container = document.getElementById('toast-container');
    const toast = document.createElement('div');
    toast.className = `toast ${type}`;
    toast.textContent = message;
    container.appendChild(toast);

    // Remove after animation
    setTimeout(() => {
        toast.remove();
    }, 2500);
}

// Category Pills - Render navigation pills
function renderCategoryPills() {
    const pillsContainer = document.getElementById('category-pills');
    if (!pillsContainer) return;

    // Get unique categories
    const categories = [...new Set(productsData.map(p => p.category))];

    pillsContainer.innerHTML = categories.map(category => `
        <button class="category-pill" onclick="scrollToCategory('${category}')">${category}</button>
    `).join('');
}

// Scroll to Category
function scrollToCategory(categoryName) {
    const categoryId = `category-${categoryName.replace(/[^a-zA-Z0-9]/g, '-').toLowerCase()}`;
    const section = document.getElementById(categoryId);

    if (section) {
        // Dynamic offset based on screen size
        const isMobile = window.innerWidth <= 768;
        const offset = isMobile ? 80 : 200; // Smaller offset on mobile since nav isn't sticky

        const elementPosition = section.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - offset;

        window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth'
        });

        // Update active pill
        document.querySelectorAll('.category-pill').forEach(pill => {
            pill.classList.remove('active');
            if (pill.textContent === categoryName) {
                pill.classList.add('active');
            }
        });
    }
}

// Search Functionality
function initSearch() {
    const searchInput = document.getElementById('search-input');
    if (!searchInput) return;

    let debounceTimer;
    searchInput.addEventListener('input', (e) => {
        clearTimeout(debounceTimer);
        debounceTimer = setTimeout(() => {
            const query = e.target.value;
            AppState.searchQuery = query;
            renderProducts(query);
        }, 300);
    });

    // Clear search on Escape
    searchInput.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            searchInput.value = '';
            AppState.searchQuery = '';
            renderProducts();
        }
    });
}

// Wishlist Functions
function toggleWishlist(productId) {
    const index = AppState.wishlist.indexOf(productId);

    if (index > -1) {
        // Remove from wishlist
        AppState.wishlist.splice(index, 1);
        showToast('Removed from wishlist', 'info');
    } else {
        // Add to wishlist
        AppState.wishlist.push(productId);
        showToast('Added to wishlist! ♥', 'success');
    }

    // Save to localStorage
    localStorage.setItem('neon_wishlist', JSON.stringify(AppState.wishlist));

    // Update UI
    updateWishlistUI();
    renderProducts(AppState.searchQuery);
}

function updateWishlistUI() {
    // Update wishlist count badge
    const wishlistCount = document.getElementById('wishlist-count');
    if (wishlistCount) {
        wishlistCount.textContent = AppState.wishlist.length;
    }

    // Update wishlist modal content
    const wishlistItems = document.getElementById('wishlist-items');
    if (!wishlistItems) return;

    if (AppState.wishlist.length === 0) {
        wishlistItems.innerHTML = '<p class="empty-msg">Your wishlist is empty. ♡</p>';
        return;
    }

    const wishlistProducts = productsData.filter(p => AppState.wishlist.includes(p.id));
    wishlistItems.innerHTML = wishlistProducts.map(product => `
        <div class="wishlist-item">
            <img src="${product.img}" alt="${product.title}" class="wishlist-item-img">
            <div class="wishlist-item-info">
                <h4>${product.title}</h4>
                <p>₹${product.price}</p>
            </div>
            <div class="wishlist-item-actions">
                <button onclick="openProductDetails(${product.id}); closeModal('wishlist-modal');">View</button>
                <button onclick="toggleWishlist(${product.id})">Remove</button>
            </div>
        </div>
    `).join('');
}

// Back to Top Button
function initBackToTop() {
    const backToTopBtn = document.getElementById('back-to-top');
    if (!backToTopBtn) return;

    // Show/hide based on scroll position
    window.addEventListener('scroll', () => {
        if (window.scrollY > 500) {
            backToTopBtn.classList.remove('hidden');
        } else {
            backToTopBtn.classList.add('hidden');
        }
    });

    // Scroll to top on click
    backToTopBtn.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
}

// Update addToCartFromModal to show toast instead of opening cart
const originalAddToCart = addToCartFromModal;

/* =========================================
   7. EVENT LISTENERS & UTILS
   ========================================= */

// Modal Utils
function openModal(id) {
    document.getElementById(id).classList.remove('hidden');
}

function closeModal(id) {
    document.getElementById(id).classList.add('hidden');
}

// Custom Cursor Logic
function initCursor() {
    const dot = document.querySelector('.cursor-dot');
    const outline = document.querySelector('.cursor-outline');

    // Movement
    window.addEventListener('mousemove', (e) => {
        const posX = e.clientX;
        const posY = e.clientY;

        // Dot follows instantly
        dot.style.left = `${posX}px`;
        dot.style.top = `${posY}px`;

        // Outline follows with slight delay
        outline.animate({
            left: `${posX}px`,
            top: `${posY}px`
        }, { duration: 500, fill: "forwards" });
    });

    // Hover Effects
    const interactables = document.querySelectorAll('a, button, .product-card, .thumbnail, input, label');

    interactables.forEach(el => {
        el.addEventListener('mouseenter', () => document.body.classList.add('hovering'));
        el.addEventListener('mouseleave', () => document.body.classList.remove('hovering'));
    });

    // Click Animation
    window.addEventListener('mousedown', () => {
        outline.classList.add('clicking');
    });

    window.addEventListener('mouseup', () => {
        outline.classList.remove('clicking');
    });
}

// Ripple Effect
function initRipple() {
    window.addEventListener('click', (e) => {
        const ripple = document.createElement('div');
        ripple.className = 'ripple';

        // Size of the ripple
        const size = 100;
        ripple.style.width = `${size}px`;
        ripple.style.height = `${size}px`;
        ripple.style.left = `${e.clientX - size / 2}px`;
        ripple.style.top = `${e.clientY - size / 2}px`;

        document.body.appendChild(ripple);

        // Remove after animation
        setTimeout(() => {
            ripple.remove();
        }, 600);
    });
}

// Background Particles
function initParticles() {
    const canvas = document.getElementById('bg-canvas');
    const ctx = canvas.getContext('2d');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    let particlesArray = [];
    const numberOfParticles = 500; // Increased from 100

    // Mouse position
    let mouse = {
        x: null,
        y: null,
        radius: 150
    }

    window.addEventListener('mousemove', (event) => {
        mouse.x = event.x;
        mouse.y = event.y;
    });

    class Particle {
        constructor(x, y, directionX, directionY, size, color) {
            this.x = x;
            this.y = y;
            this.directionX = (Math.random() * 0.4) - 0.2; // Random speed X
            this.directionY = (Math.random() * 0.4) - 0.2; // Random speed Y
            this.size = size;
            this.color = color;
            this.baseX = x;
            this.baseY = y;
            this.density = (Math.random() * 30) + 1;
        }
        draw() {
            ctx.beginPath();
            ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2, false);
            ctx.fillStyle = this.color;
            ctx.fill();
        }
        update() {
            // Check mouse distance
            let dx = mouse.x - this.x;
            let dy = mouse.y - this.y;
            let distance = Math.sqrt(dx * dx + dy * dy);
            let forceDirectionX = dx / distance;
            let forceDirectionY = dy / distance;
            let maxDistance = mouse.radius;
            let force = (maxDistance - distance) / maxDistance;
            let directionX = forceDirectionX * force * this.density;
            let directionY = forceDirectionY * force * this.density;

            if (distance < mouse.radius) {
                // Repel
                this.x -= directionX;
                this.y -= directionY;
            } else {
                // Random autonomous motion
                this.x += this.directionX;
                this.y += this.directionY;

                // Boundary check - bounce off edges
                if (this.x < 0 || this.x > canvas.width) this.directionX = -this.directionX;
                if (this.y < 0 || this.y > canvas.height) this.directionY = -this.directionY;

                // Return to base logic removed to allow free floating
                // But let's keep a loose tether or just let them float freely?
                // User asked for "random motion", so free floating is better.
            }
            this.draw();
        }
    }

    function init() {
        particlesArray = [];
        for (let i = 0; i < numberOfParticles; i++) {
            let x = Math.random() * canvas.width;
            let y = Math.random() * canvas.height;
            let size = (Math.random() * 3) + 1;
            let color = 'rgba(204, 255, 0, 0.3)'; // Neon Green

            particlesArray.push(new Particle(x, y, 0, 0, size, color));
        }
    }

    function animate() {
        requestAnimationFrame(animate);
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        for (let i = 0; i < particlesArray.length; i++) {
            particlesArray[i].update();
        }
    }

    init();
    animate();

    window.addEventListener('resize', () => {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
        init();
    });
}

// Event Binding
document.addEventListener('DOMContentLoaded', () => {
    // Check if already entered in this session
    checkIfAlreadyEntered();

    // Enter Site Button
    const enterBtn = document.getElementById('enter-site-btn');
    if (enterBtn) {
        enterBtn.addEventListener('click', enterSite);
    }

    init();
    initCursor();
    initRipple();
    initParticles();
    initSearch();
    initBackToTop();

    // Cart Modal
    document.getElementById('cart-btn').addEventListener('click', () => openModal('cart-modal'));

    // Wishlist Modal
    document.getElementById('wishlist-btn').addEventListener('click', () => openModal('wishlist-modal'));

    // Scratch Card Modal
    document.getElementById('spin-fab').addEventListener('click', openScratchModal);

    // Close Buttons
    document.querySelectorAll('.close-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
            const target = e.target.dataset.target;
            closeModal(target);
        });
    });

    // Close on outside click
    window.addEventListener('click', (e) => {
        if (e.target.classList.contains('modal')) {
            e.target.classList.add('hidden');
        }
    });

    // Close on Escape key
    window.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            const openModal = document.querySelector('.modal:not(.hidden)');
            if (openModal) {
                openModal.classList.add('hidden');
            }
        }
    });

    // Checkout - Open checkout modal
    document.getElementById('checkout-btn').addEventListener('click', checkout);

    // Confirm Checkout - Process and send to WhatsApp
    document.getElementById('confirm-checkout-btn').addEventListener('click', processCheckout);

    // Allow Enter key to submit checkout form
    document.getElementById('customer-name').addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            processCheckout();
        }
    });
});

// Expose functions to window for HTML onclick attributes
window.addToCart = addToCart;
window.updateQty = updateQty;
window.toggleWishlist = toggleWishlist;
window.scrollToCategory = scrollToCategory;
window.openProductDetails = openProductDetails;
window.closeModal = closeModal;

/* =========================================
   SECURITY: DISABLE RIGHT-CLICK & INSPECT
   ========================================= */

// Disable right-click context menu
document.addEventListener('contextmenu', (e) => {
    e.preventDefault();
    return false;
});

// Disable common developer tool keyboard shortcuts
document.addEventListener('keydown', (e) => {
    // F12 - Developer Tools
    if (e.key === 'F12') {
        e.preventDefault();
        return false;
    }

    // Ctrl+Shift+I - Inspect Element
    if (e.ctrlKey && e.shiftKey && e.key === 'I') {
        e.preventDefault();
        return false;
    }

    // Ctrl+Shift+C - Inspect Element (alternative)
    if (e.ctrlKey && e.shiftKey && e.key === 'C') {
        e.preventDefault();
        return false;
    }

    // Ctrl+Shift+J - Console
    if (e.ctrlKey && e.shiftKey && e.key === 'J') {
        e.preventDefault();
        return false;
    }

    // Ctrl+U - View Source
    if (e.ctrlKey && e.key === 'u') {
        e.preventDefault();
        return false;
    }

    // Ctrl+S - Save Page
    if (e.ctrlKey && e.key === 's') {
        e.preventDefault();
        return false;
    }
});
