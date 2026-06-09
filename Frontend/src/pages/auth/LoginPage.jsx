import { useState } from "react";
import MainLayout from "../../layouts/MainLayout";
import Card from "../../components/common/Card";
import Input from "../../components/common/Input";
import Button from "../../components/common/Button";
import PasswordInput from "../../components/common/PasswordInput";

function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
  e.preventDefault();

  if (!email.trim()) {
    alert("Email is required");
    return;
  }

  if (!password.trim()) {
    alert("Password is required");
    return;
  }

  console.log({
    email,
    password,
  });
};
  console.log(email)
  return (
    <MainLayout>
      <div className="flex justify-center items-center min-h-[80vh]">
        <Card>
          <div className="w-[400px]">
            <h1 className="text-3xl font-bold text-center mb-2">
              Welcome Back
            </h1>

            <p className="text-gray-500 text-center mb-6">
              Login to continue
            </p>

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

              <Button
                type="submit"
                className="w-full"
              >
                Login
              </Button>
            </form>
          </div>
        </Card>
      </div>
    </MainLayout>
  );
}

export default LoginPage;