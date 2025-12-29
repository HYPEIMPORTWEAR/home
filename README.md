# NeonMarket - E-commerce Single Page Interface

## Project Overview
NeonMarket is a responsive, single-page e-commerce interface built with Vanilla HTML, CSS, and JavaScript. It features a modern dark-mode design with neon accents, a dynamic product grid, a functional cart system with WhatsApp checkout, and a gamified "Spin to Win" discount feature.

## Workflow & User Journey

1.  **Landing**:
    -   User arrives at the page.
    -   They see a header with the brand name and a cart counter.
    -   A "Spin to Win" floating action button (FAB) is visible if they haven't spun yet.

2.  **Spin to Win (Gamification)**:
    -   User clicks the FAB.
    -   A modal opens with a wheel.
    -   User clicks "Spin". The wheel rotates visually.
    -   The result (e.g., 10% OFF) is stored in `localStorage` and applied to the global state.
    -   The FAB disappears to prevent re-spinning.

3.  **Shopping**:
    -   User browses the Product Grid.
    -   Hovering over cards lifts them up.
    -   Clicking "Add to Cart" updates the global state and the UI (cart counter).

4.  **Cart Management**:
    -   User opens the Cart (sidebar or modal).
    -   They can see selected items, adjust quantities, or remove items.
    -   The Total Price is calculated live, showing the subtotal and the discount (if applied).

5.  **Checkout**:
    -   User clicks "Checkout via WhatsApp".
    -   The system formats the order details (Items, Quantities, Prices, Discount, Final Total) into a text message.
    -   A new tab opens `wa.me` with the pre-filled message, ready to send to the merchant.

## Technical Architecture

### File Structure
-   `index.html`: Main structure containing the App container, Product Grid, Cart Modal, and Spin Wheel Modal.
-   `styles.css`: Contains CSS Variables for the theme, Grid layout definitions, and Animation keyframes.
-   `script.js`: Handles the application logic.

### State Management
A simple global object manages the application state:
```javascript
const AppState = {
    products: [...], // Dummy data
    cart: [],        // Array of cart items
    discount: 0,     // Percentage (0, 10, 20)
    hasSpun: false   // Boolean, persisted in localStorage
};
```

### Modules (Logical Separation)
1.  **State & Render**: Central function to re-draw the UI based on `AppState`.
2.  **Cart Logic**: Functions to add, remove, update quantities, and calculate totals.
3.  **Wheel Logic**: Handling the spin animation, random result generation, and persistence.
4.  **WhatsApp Serializer**: transforming the cart object into a readable string URL.
# Hype-Import-Wear
