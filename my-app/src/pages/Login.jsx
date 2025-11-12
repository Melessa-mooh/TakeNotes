import { useNavigate } from "react-router-dom";
import AuthForm from "../components/AuthForm";

export default function Login() {
  const navigate = useNavigate();

  const handleLogin = async (data) => {
    console.log("Login data:", data);

    try {
      const response = await fetch("http://localhost:8080/api/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: data.email,
          password: data.password,
        }),
      });

      if (response.ok) {
        const result = await response.text();

        if (result.includes("successful")) {
          alert("✅ Login successful!");

          localStorage.setItem("userEmail", data.email);
          localStorage.setItem("userFullName", "Student");

          navigate("/dashboard");
        } else {
          alert("❌ " + result);
        }
      } else {
        alert("⚠️ Server error. Please try again later.");
      }
    } catch (error) {
      console.error("Login error:", error);
      alert("❌ Unable to connect to backend. Make sure it's running.");
    }
  };

  return <AuthForm mode="login" onSubmit={handleLogin} />;
}