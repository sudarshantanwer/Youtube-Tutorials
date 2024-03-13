import create from 'zustand';

const useEmployeeStore = create((set) => ({
  employeeCode: '',
  salary: '',
  department: '',
  role: '',
  setEmployeeDetails: (employeeDetails) => set({ ...employeeDetails })
}));

export default useEmployeeStore;
