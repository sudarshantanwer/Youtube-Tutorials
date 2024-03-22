import create from 'zustand';

const useUserStore = create((set) => ({
  firstName: '',
  product: {},
  lastName: '',
  email: '',
  setUserDetails: (userDetails) => set({ ...userDetails }),
  fetchData: async () => {
    console.log('fetching data')
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

export default useUserStore;
