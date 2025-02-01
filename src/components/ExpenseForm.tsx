import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useToast } from "@/components/ui/use-toast";
import { Expense, useExpenseStore } from "@/store/useExpenseStore";
import { Plus } from "lucide-react";
import { useState } from "react";

const categories = [
  "Food",
  "Transportation",
  "Entertainment",
  "Shopping",
  "Others",
];

interface ExpenseFormProps {
  expense?: Expense;
  mode?: "create" | "edit";
}

export function ExpenseForm({ expense, mode = "create" }: ExpenseFormProps) {
  const [amount, setAmount] = useState(expense?.amount?.toString() || "");
  const [category, setCategory] = useState(expense?.category?.toLowerCase() || "");
  const [description, setDescription] = useState(expense?.description || "");
  const [open, setOpen] = useState(false);
  const { toast } = useToast();

  const { addExpense, updateExpense } = useExpenseStore();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    const expenseData = {
      amount: parseFloat(amount),
      category: category,
      description: description,
    };

    if (mode === "create") {
      addExpense(expenseData);
      toast({
        title: "Success",
        description: "Expense added successfully",
      });
    } else if (expense?.id) {
      updateExpense(expense.id, expenseData);
      toast({
        title: "Success",
        description: "Expense updated successfully",
      });
    }

    setOpen(false);
    setAmount("");
    setCategory("");
    setDescription("");
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
      {/* <Button className="fixed bottom-8 right-8 h-14 w-14 rounded-full p-0 shadow-lg">
        <Plus className="h-6 w-6" />
      </Button> */}
        <Button className="bg-primary hover:bg-primary/90 fixed bottom-8 right-8 h-14 w-14 rounded-full p-0 shadow-lg">
          {mode === "create" ? <Plus className="h-6 w-6" /> : <span>Edit Expense</span>}
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>
            {mode === "create" ? "Add New Expense" : "Edit Expense"}
          </DialogTitle>
          <DialogDescription>
            Fill in the details of your expense below.
          </DialogDescription>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="space-y-4 pt-4">
          <div className="space-y-2">
            <label className="text-sm font-medium">Amount</label>
            <Input
              type="number"
              placeholder="Enter amount"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              required
            />
          </div>
          <div className="space-y-2">
            <label className="text-sm font-medium">Category</label>
            <Select value={category} onValueChange={setCategory}>
              <SelectTrigger>
                <SelectValue placeholder="Select category" />
              </SelectTrigger>
              <SelectContent>
                {categories.map((cat) => (
                  <SelectItem key={cat} value={cat.toLowerCase()}>
                    {cat}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
          <div className="space-y-2">
            <label className="text-sm font-medium">Description</label>
            <Input
              placeholder="Enter description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
          </div>
          <Button type="submit" className="w-full bg-primary hover:bg-primary/90">
            {mode === "create" ? "Add Expense" : "Save Changes"}
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  );
}