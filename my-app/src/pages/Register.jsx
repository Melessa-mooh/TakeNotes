import AuthForm from "../components/AuthForm";
import { useNavigate } from "react-router-dom";

export default function Register() {
  const navigate = useNavigate();

  const handleRegister = (data) => {
    console.log("Register data:", data);

    if (data.fullName) {
      localStorage.setItem("userFullName", data.fullName);
    }

    navigate("/dashboard"); // ✅ redirect to dashboard after successful registration
  };

  return <AuthForm mode="register" onSubmit={handleRegister} />;
}
