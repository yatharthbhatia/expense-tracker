import { create } from 'zustand';

export interface Expense {
  id: number;
  amount: number;
  category: string;
  description: string;
  date: string;
}

interface ExpenseStore {
  expenses: Expense[];
  addExpense: (expense: Omit<Expense, 'id' | 'date'>) => void;
  updateExpense: (id: number, expense: Partial<Omit<Expense, 'id'>>) => void;
  deleteExpense: (id: number) => void;
}

export const useExpenseStore = create<ExpenseStore>((set) => ({
  expenses: [],
  addExpense: (expense) =>
    set((state) => ({
      expenses: [
        ...state.expenses,
        {
          ...expense,
          id: Date.now(),
          date: new Date().toISOString().split('T')[0],
        },
      ],
    })),
  updateExpense: (id, expense) =>
    set((state) => ({
      expenses: state.expenses.map((e) =>
        e.id === id ? { ...e, ...expense } : e
      ),
    })),
  deleteExpense: (id) =>
    set((state) => ({
      expenses: state.expenses.filter((e) => e.id !== id),
    })),
}));