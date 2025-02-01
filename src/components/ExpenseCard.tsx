import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { formatCurrency } from "@/lib/utils";
interface ExpenseCardProps {
  title: string;
  amount: number;
  trend?: number;
  className?: string;
  icon: React.ReactNode;
}

export const ExpenseCard = ({ title, amount, trend, className = "" , icon}: ExpenseCardProps) => {
  return (
    <Card className={`glass-card ${className}`}>
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-sm font-medium">{title}</CardTitle>
        {icon}
      </CardHeader>
      <CardContent>
        <div className="text-2xl font-bold">{formatCurrency(amount)}</div>
        {trend && (
          <p className={`text-xs ${trend > 0 ? "text-green-500" : "text-red-500"}`}>
            {trend > 0 ? "+" : ""}{trend}% from last month
          </p>
        )}
      </CardContent>
    </Card>
  );
};