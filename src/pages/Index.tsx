import { ExpenseCard } from "@/components/ExpenseCard";
import { ExpenseChart } from "@/components/ExpenseChart";
import { ExpenseList } from "@/components/ExpenseList";
import { AddExpenseButton } from "@/components/AddExpenseButton";
import { ThemeToggle } from "@/components/themes/ThemeToggle";
import { DollarSign, TrendingDown, TrendingUp, Wallet } from "lucide-react";
import { RecentExpenses } from "@/components/RecentExpenses";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useToast } from "@/hooks/use-toast";
import { useExpenseStore } from "@/store/useExpenseStore";
import { ExpenseForm } from "@/components/ExpenseForm";

const Index = () => {
  const expenses = useExpenseStore((state) => state.expenses);
  const { toast } = useToast();
  const navigate = useNavigate();

  // useEffect(() => {
  //   // Check if user is authenticated (you can use your auth store or context here)
  //   const isAuthenticated = true; // Replace with actual auth check
    
  //   if (!isAuthenticated) {
  //     toast({
  //       title: "Authentication Required",
  //       description: "Please log in to access the expense tracker.",
  //       variant: "destructive",
  //     });
  //     navigate("/login");
  //     return;
  //   }
  // }, [navigate, toast]);

  const totalExpenses = expenses.reduce((sum, expense) => sum + expense.amount, 0);
  const monthlyAverage = totalExpenses / (expenses.length || 1);
  const highestExpense = expenses.length
    ? Math.max(...expenses.map((e) => e.amount))
    : 0;
  const lowestExpense = expenses.length
    ? Math.min(...expenses.map((e) => e.amount))
    : 0;

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
            amount={totalExpenses}
            icon={<DollarSign className="h-4 w-4 text-primary" />}
            className="bg-gradient-to-br from-primary/10 to-primary/5"
          />
          <ExpenseCard
            title="Monthly Average"
            amount={monthlyAverage}
            icon={<Wallet className="h-4 w-4 text-cyan-500" />}
            className="bg-gradient-to-br from-cyan-500/10 to-cyan-500/5"
          />
          <ExpenseCard
            title="Highest Expense"
            amount={highestExpense}
            icon={<TrendingUp className="h-4 w-4 text-purple-500" />}
            className="bg-gradient-to-br from-purple-500/10 to-purple-500/5"
          />
          <ExpenseCard
            title="Lowest Expense"
            amount={lowestExpense}
            icon={<TrendingDown className="h-4 w-4 text-pink-500" />}
            className="bg-gradient-to-br from-pink-500/10 to-pink-500/5"
          />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-6 gap-4">
          <ExpenseChart />
          {/* <ExpenseList /> */}
          <RecentExpenses expenses={expenses} />
        </div>
        {/* <RecentExpenses expenses={expenses} /> */}
        <ExpenseForm />
      </div>
    </div>
  );
};

export default Index;