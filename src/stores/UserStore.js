import create from 'zustand';

const useUserStore = create((set) => ({
  firstName: '',
  lastName: '',
  email: '',
  setUserDetails: (userDetails) => set({ ...userDetails }),
}));

export default useUserStore;
