import { useNavigate } from "react-router-dom";
import AuthForm from "../components/AuthForm";

export default function Login() {
  const navigate = useNavigate();

  const handleLogin = (data) => {
    console.log("Login data:", data);

    alert("✅ Successfully logged in!");

    localStorage.setItem("userEmail", data.email);

    navigate("/dashboard");
  };

  return <AuthForm mode="login" onSubmit={handleLogin} />;
}