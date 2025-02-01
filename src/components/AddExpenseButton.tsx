import { Plus } from "lucide-react";
import { Button } from "@/components/ui/button";

export const AddExpenseButton = () => {
  return (
    <Button className="fixed bottom-8 right-8 h-14 w-14 rounded-full p-0 shadow-lg">
      <Plus className="h-6 w-6" />
    </Button>
  );
};