import AuthForm from "../components/AuthForm";

export default function Register() {
  const handleRegister = (data) => {
    console.log("Register data:", data);
  };
  

  return <AuthForm mode="register" onSubmit={handleRegister} />;
}