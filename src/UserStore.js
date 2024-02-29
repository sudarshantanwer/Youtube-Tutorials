import create from 'zustand';

const useUserStore = create((set) => ({
  firstName: '',
  lastName: '',
  email: '',
  salary: '',
  setUserDetails: (userDetails) => set({ ...userDetails }),
  clearUserDetails: () => set({ firstName: '', lastName: '', email: '', salary: '' }),
}));

export default useUserStore;
