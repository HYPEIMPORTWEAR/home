/* =========================================
   PRODUCTS DATA - Shared Product Catalog
   Used across all pages
   ========================================= */

const productsData = [
    // Jackets & Bombers
    {
        id: 1,
        category: "Jackets & Bombers",
        slug: "urban-style-jacket",
        title: "Urban Style Premium Jacket",
        price: 3199,
        img: "assets/products/1_urban_style_jacket/main.jpg",
        images: [
            "assets/products/1_urban_style_jacket/main.jpg",
            "assets/products/1_urban_style_jacket/590401509_17845016277654572_4264836126902837239_n.jpg"
        ],
        post_url: "https://www.instagram.com/hypeimportwear/p/DSofzubAf36/",
        description: "Premium fabric with cartoon print blend. Free delivery available.",
        features: ["Color: Black/White", "Material: Premium fabric", "Stock: Limited"],
        options: ["M", "L", "XL"]
    },
    {
        id: 2,
        category: "Jackets & Bombers",
        slug: "sinister-yellow-jacket",
        title: "SINISTER Yellow Jacket",
        price: 2999,
        img: "assets/products/2_sinister_yellow_jacket/main.jpg",
        images: [
            "assets/products/2_sinister_yellow_jacket/main.jpg",
            "assets/products/2_sinister_yellow_jacket/587213518_17844921213654572_3721632825071335872_n.jpg",
            "assets/products/2_sinister_yellow_jacket/590376687_17844921177654572_8262411541084572688_n.jpg",
            "assets/products/2_sinister_yellow_jacket/602652948_17844921186654572_2289652092599002921_n.jpg"
        ],
        post_url: "https://www.instagram.com/hypeimportwear/p/DSof0AngZuD/",
        description: "Yellow jacket with backprint. Perfect for Bikers, Clubbing, and Streetwear lovers.",
        features: ["Color: Yellow", "Use Case: Bikers, Clubbing", "Stock: Limited"],
        options: ["M", "L", "XL"]
    },
    {
        id: 3,
        category: "Jackets & Bombers",
        slug: "hellstar-avirex-bomber",
        title: "Hellstar x Avirex Bomber",
        price: 3499,
        img: "assets/products/3_hellstar_avirex_bomber/main.jpg",
        images: [
            "assets/products/3_hellstar_avirex_bomber/main.jpg",
            "assets/products/3_hellstar_avirex_bomber/588897759_17844897318654572_769284691381029834_n.jpg",
            "assets/products/3_hellstar_avirex_bomber/590429944_17844897336654572_4425432447961678708_n.jpg"
        ],
        post_url: "https://www.instagram.com/hypeimportwear/p/DSof2Ueglrc/",
        description: "Limited 50th Anniversary Bomber. Genuine European Lamb material.",
        features: ["Brand: Hellstar x Avirex", "Color: Salvage Red", "Material: Genuine European Lamb"],
        options: ["M", "L", "XL"]
    },
    {
        id: 4,
        category: "Jackets & Bombers",
        slug: "varsity-bomber-vegan",
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
        slug: "steelers-varsity",
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
        slug: "heavy-backprint-hoodie",
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
        slug: "adidas-brown-white-set",
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
        slug: "adidas-red-track-suit",
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
        slug: "white-jordan-track-suit",
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
        slug: "nocta-air-force-1",
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
        slug: "nike-sb-dunk-low",
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
        slug: "jordan-1-mid",
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
        slug: "jordan-4-breds",
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
        slug: "adidas-samba",
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
    }
];

// Helper function to get product by slug
function getProductBySlug(slug) {
    return productsData.find(p => p.slug === slug);
}

// Helper function to get product by ID
function getProductById(id) {
    return productsData.find(p => p.id === id);
}

// Helper function to get products by category
function getProductsByCategory(category) {
    return productsData.filter(p => p.category === category);
}

// Get unique categories
function getCategories() {
    return [...new Set(productsData.map(p => p.category))];
}

// Make available globally
window.allProducts = productsData;
