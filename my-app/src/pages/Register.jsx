import AuthForm from "../components/AuthForm";

export default function Register() {
  const handleRegister = async (data) => {
    console.log("Register data:", data);

    try {
      const response = await fetch("http://localhost:8080/api/auth/register", {
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
        alert("✅ Registration successful!");
      } else {
        const error = await response.text();
        alert("❌ Registration failed: " + error);
      }
    } catch (err) {
      console.error("Error during registration:", err);
      alert("⚠️ Network error: Could not reach the server.");
    }
  };

  return <AuthForm mode="register" onSubmit={handleRegister} />;
}