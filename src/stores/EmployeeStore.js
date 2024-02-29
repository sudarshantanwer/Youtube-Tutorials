import create from 'zustand';

const useEmployeeStore = create((set) => ({
  employeeCode: '',
  salary: '',
  department: '',
  role: '',
  setEmployeeDetails: (employeeDetails) => set({ ...employeeDetails }),
  clearEmployeeDetails: () => set({ employeeCode: '', salary: '', department: '', role: '' }),
}));

export default useEmployeeStore;
