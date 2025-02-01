import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { formatCurrency } from "@/lib/utils";

const recentExpenses = [
  { id: 1, description: "Groceries", amount: -120.50, date: "2024-03-20" },
  { id: 2, description: "Gas", amount: -45.00, date: "2024-03-19" },
  { id: 3, description: "Restaurant", amount: -65.75, date: "2024-03-18" },
  { id: 4, description: "Internet", amount: -89.99, date: "2024-03-17" },
];

export const ExpenseList = () => {
  return (
    <Card className="glass-card col-span-2">
      <CardHeader>
        <CardTitle>Recent Expenses</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {recentExpenses.map((expense) => (
            <div 
              key={expense.id} 
              className="flex items-center justify-between p-2 hover:bg-black/5 rounded-lg transition-colors"
            >
              <div>
                <p className="font-medium">{expense.description}</p>
                <p className="text-sm text-muted-foreground">{expense.date}</p>
              </div>
              <div className="text-red-500 font-medium">
                {formatCurrency(expense.amount)}
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};