import AuthForm from "../components/AuthForm";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const navigate = useNavigate();

  const handleLogin = (data) => {
    console.log("Login data:", data);

  
    if (data.email && data.password) {
      navigate("/dashboard"); 
    } else {
      alert("Please enter valid credentials.");
    }
  };

  return <AuthForm mode="login" onSubmit={handleLogin} />;
}
