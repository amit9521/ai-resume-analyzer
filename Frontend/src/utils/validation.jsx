export const validateSignup = (
  formData
) => {
  const {
    fullName,
    email,
    password,
    confirmPassword,
  } = formData;

  if (!fullName.trim()) {
    return "Name is required";
  }

  if (!email.trim()) {
    return "Email is required";
  }

  if (!password.trim()) {
    return "Password is required";
  }

  if (password !== confirmPassword) {
    return "Passwords do not match";
  }

  return null;
};
