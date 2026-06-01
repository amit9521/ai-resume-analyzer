import { useState } from "react";
import MainLayout from "../../layouts/MainLayout";
import Card from "../../components/common/Card";
import Input from "../../components/common/Input";
import Button from "../../components/common/Button";

function SignupPage() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

 const handleSubmit = (e) => {
  e.preventDefault();

  const {
    fullName,
    email,
    password,
    confirmPassword,
  } = formData;

  if (!fullName.trim()) {
    alert("Name is required");
    return;
  }

  if (!email.trim()) {
    alert("Email is required");
    return;
  }

  if (!password.trim()) {
    alert("Password is required");
    return;
  }

  if (password !== confirmPassword) {
    alert("Passwords do not match");
    return;
  }

  console.log(formData);
};

  return (
    <MainLayout>
      <div className="flex justify-center items-center min-h-[80vh]">
        <Card>
          <div className="w-[450px]">

            <h1 className="text-3xl font-bold text-center mb-2">
              Create Account
            </h1>

            <p className="text-center text-gray-500 mb-6">
              Join AI Resume Analyzer
            </p>

            <form onSubmit={handleSubmit}>

              <div className="mb-4">
                <Input
                  name="fullName"
                  placeholder="Full Name"
                  value={formData.fullName}
                  onChange={handleChange}
                />
              </div>

              <div className="mb-4">
                <Input
                  name="email"
                  type="email"
                  placeholder="Email"
                  value={formData.email}
                  onChange={handleChange}
                />
              </div>

              <div className="mb-4">
                <Input
                  name="password"
                  type="password"
                  placeholder="Password"
                  value={formData.password}
                  onChange={handleChange}
                />
              </div>

              <div className="mb-6">
                <Input
                  name="confirmPassword"
                  type="password"
                  placeholder="Confirm Password"
                  value={formData.confirmPassword}
                  onChange={handleChange}
                />
              </div>

              <Button
                type="submit"
                className="w-full"
              >
                Create Account
              </Button>

            </form>
          </div>
        </Card>
      </div>
    </MainLayout>
  );
}

export default SignupPage;