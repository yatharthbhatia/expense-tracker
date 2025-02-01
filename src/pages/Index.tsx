import { ExpenseCard } from "@/components/ExpenseCard";
import { ExpenseChart } from "@/components/ExpenseChart";
import { ExpenseList } from "@/components/ExpenseList";
import { AddExpenseButton } from "@/components/AddExpenseButton";
import { ThemeToggle } from "@/components/ThemeToggle";

const Index = () => {
  return (
    <div className="min-h-screen p-8 space-y-8 bg-pattern">
      <div className="max-w-7xl mx-auto space-y-8">
        <div className="flex justify-between items-center">
          <h1 className="text-4xl font-bold">Dashboard</h1>
          <ThemeToggle />
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <ExpenseCard 
            title="Total Expenses" 
            amount={4521.59} 
            trend={2.5} 
          />
          <ExpenseCard 
            title="Monthly Average" 
            amount={1507.20} 
            trend={-1.2} 
          />
          <ExpenseCard 
            title="Largest Expense" 
            amount={890.00} 
          />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-4">
          <ExpenseChart />
          <ExpenseList />
        </div>
      </div>

      <AddExpenseButton />
    </div>
  );
};

export default Index;