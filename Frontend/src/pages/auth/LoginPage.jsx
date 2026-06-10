import { useState } from "react";
import MainLayout from "../../layouts/MainLayout";
import Card from "../../components/common/Card";
import Input from "../../components/common/Input";
import Button from "../../components/common/Button";
import PasswordInput from "../../components/common/PasswordInput";
import { loginUser } from "../../services/authService";

function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!email.trim()) {
      setMessage("Email is required");
      return;
    }

    if (!password.trim()) {
      setMessage("Password is required");
      return;
    }

    try {
      setLoading(true);

      const response = await loginUser({
        email,
        password,
      });

      localStorage.setItem("token", response.data.token);

      localStorage.setItem("email", response.data.email);

      setMessage(response.data.message);

      localStorage.getItem("token")

      console.log("Login Response", response.data);
    } catch (error) {
      setMessage(error.response?.data || "Login Failed");
    } finally {
      setLoading(false);
    }
  };
  console.log(email);
  return (
    <MainLayout>
      <div className="flex justify-center items-center min-h-[80vh]">
        <Card>
          <div className="w-[400px]">
            <h1 className="text-3xl font-bold text-center mb-2">
              Welcome Back
            </h1>

            <p className="text-gray-500 text-center mb-6">Login to continue</p>
            {message && (
              <p
                className={`text-center mb-4 ${
                  message === "Login Successful"
                    ? "text-green-600"
                    : "text-red-600"
                }`}
              >
                {message}
              </p>
            )}
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <Input
                  type="email"
                  placeholder="Enter Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>

              <div className="mb-6">
                <PasswordInput
                  type="password"
                  placeholder="Enter Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>

              <Button type="submit" className="w-full">
                {loading ? "Logging In..." : "Login"}
              </Button>
            </form>
          </div>
        </Card>
      </div>
    </MainLayout>
  );
}

export default LoginPage;
