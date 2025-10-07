import AuthForm from "../components/AuthForm";

export default function Login() {
  const handleLogin = (data) => {
    console.log("Login data:", data);
  };
  

  return <AuthForm mode="login" onSubmit={handleLogin} />;
}