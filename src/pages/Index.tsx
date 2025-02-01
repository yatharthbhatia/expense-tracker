import { ExpenseCard } from "@/components/ExpenseCard";
import { ExpenseChart } from "@/components/ExpenseChart";
import { ExpenseList } from "@/components/ExpenseList";
import { AddExpenseButton } from "@/components/AddExpenseButton";
import { ThemeToggle } from "@/components/ThemeToggle";
import { DollarSign, TrendingDown, TrendingUp, Wallet } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen p-8 space-y-8 bg-pattern">
      <div className="max-w-7xl mx-auto space-y-8">
        <div className="flex justify-between items-center">
          <h1 className="text-4xl font-bold">Dashboard</h1>
          <ThemeToggle />
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <ExpenseCard
            title="Total Expenses"
            amount={1150}
            icon={<DollarSign className="h-4 w-4 text-primary" />}
            className="bg-gradient-to-br from-primary/10 to-primary/5"
          />
          <ExpenseCard
            title="Monthly Average"
            amount={950}
            icon={<Wallet className="h-4 w-4 text-cyan-500" />}
            className="bg-gradient-to-br from-cyan-500/10 to-cyan-500/5"
          />
          <ExpenseCard
            title="Highest Expense"
            amount={250}
            icon={<TrendingUp className="h-4 w-4 text-purple-500" />}
            className="bg-gradient-to-br from-purple-500/10 to-purple-500/5"
          />
          <ExpenseCard
            title="Lowest Expense"
            amount={15}
            icon={<TrendingDown className="h-4 w-4 text-pink-500" />}
            className="bg-gradient-to-br from-pink-500/10 to-pink-500/5"
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