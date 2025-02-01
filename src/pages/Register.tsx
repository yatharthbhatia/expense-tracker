import { RegisterForm } from "@/components/auth/RegisterForm";
import { ThemeToggle } from "@/components/themes/ThemeToggle";
import { useAuth } from "@/contexts/AuthContext";
import { Navigate } from "react-router-dom";

const Register = () => {
  const { user } = useAuth();

  if (user) {
    return <Navigate to="/" />;
  }

  return (
    <div className="min-h-screen bg-pattern flex items-center justify-center p-4">
      <div className="absolute top-4 right-4">
        <ThemeToggle />
      </div>
      <RegisterForm />
    </div>
  );
};

export default Register;