import { useState } from "react";
import MainLayout from "../../layouts/MainLayout";
import Card from "../../components/common/Card";
import Input from "../../components/common/Input";
import Button from "../../components/common/Button";
import { signupUser } from "../../services/authService";
import { validateSignup } from "../../utils/validation";
import PasswordInput from "../../components/common/PasswordInput";

function SignupPage() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [loading, setLoading] = useState(false);

  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const error = validateSignup(formData);

    if (error) {
      setMessage(error);
      return;
    }

    try {
      setLoading(true);

      const payload = {
        fullName: formData.fullName,

        email: formData.email,

        password: formData.password,
      };

      const response = await signupUser(payload);
      setMessage(response.data);

      setFormData({
        fullName: "",
        email: "",
        password: "",
        confirmPassword: "",
      });
      // eslint-disable-next-line no-unused-vars
    } catch (error) {
      setMessage(error.response?.data || "Signup Failed");
    } finally {
      setLoading(false);
    }
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
            {message && (
              <p className="mb-4 text-center text-green-600">{message}</p>
            )}
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
                <PasswordInput
                  name="password"
                  type="password"
                  placeholder="Password"
                  value={formData.password}
                  onChange={handleChange}
                />
              </div>

              <div className="mb-6">
                <PasswordInput
                  name="confirmPassword"
                  type="password"
                  placeholder="Confirm Password"
                  value={formData.confirmPassword}
                  onChange={handleChange}
                />
              </div>

              <Button type="submit" className="w-full">
                {loading ? "Creating..." : "Create Account1"}
              </Button>
            </form>
          </div>
        </Card>
      </div>
    </MainLayout>
  );
}

export default SignupPage;
