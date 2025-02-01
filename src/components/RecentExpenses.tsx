import { Expense } from "@/types/expense";
import { formatCurrency } from "@/lib/utils";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { formatDate } from "@/lib/utils";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";

interface RecentExpensesProps {
  expenses: Expense[];
}

export const RecentExpenses = ({ expenses }: RecentExpensesProps) => {
  return (
    <>
    {/* <Card className="glass-card col-span-2">
      <CardHeader>
        <CardTitle>Recent Expenses</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {expenses.map((expense) => (
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
  ); */}

    <Card className="glass-card col-span-3 space-y-4  shadow-sm">
    {/* <div className="col-span-3 space-y-4"> */}
      <div className="rounded-lg text-card-foreground">
        <div className="flex flex-col space-y-1.5 p-6">
          <h3 className="text-2xl font-semibold leading-none tracking-tight">
            Recent Expenses
          </h3>
          {/* <p className="text-sm text-muted-foreground">
            Your most recent transactions
          </p> */}
        </div>
        <div className="p-6 pt-0">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Date</TableHead>
                <TableHead>Description</TableHead>
                <TableHead>Category</TableHead>
                {/* <TableHead className="text-right">Amount</TableHead> */}
                <TableHead>Amount</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {expenses.map((expense) => (
                <TableRow key={expense.id}>
                  <TableCell>{formatDate(expense.date)}</TableCell>
                  <TableCell>{expense.description}</TableCell>
                  <TableCell>{expense.category}</TableCell>
                  {/* <TableCell className="text-right"> */}
                  <TableCell>
                    ₹{expense.amount.toFixed(2)}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </div>
    {/* </div> */}
</Card>
</>
  );
};