import {create} from 'zustand';

const useStore = create((set) => ({
  cart: [], // Array to store cart items
  likedCoffees: [], // Array to store liked coffees
  isDarkMode: false, // Boolean to toggle dark/light mode

  // Add an item to the cart or update quantity if it already exists
  addToCart: (item) => set((state) => {
    const existingItem = state.cart.find((i) => i.id === item.id);
    if (existingItem) {
      // Update quantity if item already exists
      return {
        cart: state.cart.map((i) =>
          i.id === item.id ? { ...i, quantity: i.quantity + 1 } : i
        ),
      };
    } else {
      // Add new item with quantity 1
      return {
        cart: [...state.cart, { ...item, quantity: 1 }],
      };
    }
  }),

  // Remove an item from the cart
  removeFromCart: (itemId) => set((state) => ({
    cart: state.cart.filter((item) => item.id !== itemId),
  })),

  // Update the quantity of a cart item
  updateQuantity: (itemId, quantity) => set((state) => ({
    cart: state.cart.map((item) =>
      item.id === itemId ? { ...item, quantity } : item
    ),
  })),

  // Toggle dark/light mode
  toggleDarkMode: () => set((state) => ({ isDarkMode: !state.isDarkMode })),

  // Add a coffee to liked coffees
  likeCoffee: (coffee) => set((state) => ({
    likedCoffees: [...state.likedCoffees, coffee],
  })),

  // Remove a coffee from liked coffees
  unlikeCoffee: (coffeeId) => set((state) => ({
    likedCoffees: state.likedCoffees.filter((coffee) => coffee.id !== coffeeId),
  })),

    // Reset the store to its initial state
    resetStore: () => set({
        cart: [],
        likedCoffees: [],
        isDarkMode: false,
      }),
}));

export default useStore;
