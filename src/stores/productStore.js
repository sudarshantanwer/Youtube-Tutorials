import create from 'zustand';

const productStore = create((set) => ({
  product: {},
  isLoading: false,
  error: null,
  fetchData: async () => {
    // Set isLoading to true while fetching data
    set({ isLoading: true });

    try {
      // Perform your async API call
      const response = await fetch('https://dummyjson.com/products/1');
      const data = await response.json();

      // Set the fetched data in the store
      set({ product: data });
    } catch (error) {
      // Set error in case of failure
      set({ error: error.message });
    } finally {
      // Set isLoading to false once the operation is complete
      set({ isLoading: false });
    }
  },
}));

export default productStore;
