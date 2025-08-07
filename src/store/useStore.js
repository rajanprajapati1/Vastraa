import { create } from 'zustand';
import { persist } from 'zustand/middleware';

const useStore = create(
  persist(
    (set, get) => ({
      // Cart state
      cart: [],
      
      // Wishlist state
      wishlist: [],
      
      // User state
      user: null,
      
      // UI state
      isCartOpen: false,
      isSearchOpen: false,
      
      // Cart actions
      addToCart: (product) => {
        const { cart } = get();
        const existingItem = cart.find(
          item => item.id === product.id && 
                  item.selectedSize === product.selectedSize && 
                  item.selectedColor === product.selectedColor
        );
        
        if (existingItem) {
          set({
            cart: cart.map(item =>
              item.id === product.id && 
              item.selectedSize === product.selectedSize && 
              item.selectedColor === product.selectedColor
                ? { ...item, quantity: item.quantity + (product.quantity || 1) }
                : item
            )
          });
        } else {
          set({
            cart: [...cart, { 
              ...product, 
              quantity: product.quantity || 1,
              cartId: `${product.id}-${product.selectedSize}-${product.selectedColor}-${Date.now()}`
            }]
          });
        }
      },
      
      removeFromCart: (cartId) => {
        set({
          cart: get().cart.filter(item => item.cartId !== cartId)
        });
      },
      
      updateQuantity: (cartId, quantity) => {
        if (quantity <= 0) {
          get().removeFromCart(cartId);
          return;
        }
        
        set({
          cart: get().cart.map(item =>
            item.cartId === cartId
              ? { ...item, quantity }
              : item
          )
        });
      },
      
      clearCart: () => {
        set({ cart: [] });
      },
      
      // Wishlist actions
      toggleWishlist: (product) => {
        const { wishlist } = get();
        const isInWishlist = wishlist.some(item => item.id === product.id);
        
        if (isInWishlist) {
          set({
            wishlist: wishlist.filter(item => item.id !== product.id)
          });
        } else {
          set({
            wishlist: [...wishlist, product]
          });
        }
      },
      
      isInWishlist: (productId) => {
        return get().wishlist.some(item => item.id === productId);
      },
      
      // UI actions
      toggleCart: () => {
        set({ isCartOpen: !get().isCartOpen });
      },
      
      closeCart: () => {
        set({ isCartOpen: false });
      },
      
      toggleSearch: () => {
        set({ isSearchOpen: !get().isSearchOpen });
      },
      
      closeSearch: () => {
        set({ isSearchOpen: false });
      },
      
      // Computed values
      getCartTotal: () => {
        return get().cart.reduce((total, item) => total + (item.price * item.quantity), 0);
      },
      
      getCartItemCount: () => {
        return get().cart.reduce((total, item) => total + item.quantity, 0);
      },
    }),
    {
      name: 'Vastraa-store',
      partialize: (state) => ({
        cart: state.cart,
        wishlist: state.wishlist,
        user: state.user,
      }),
    }
  )
);

export default useStore;