import apiClient from "../../lib/axiosInstance";

interface SignupData {
  name: string;
  email: string;
  password: string;
  gender: "MALE" | "FEMALE";
  phoneNumber: string;
  role: "USER" | "ADMIN";
}

const signup = async (signupData: SignupData) => {
  try {
    const response = await apiClient.post("/members/auth/signUp", signupData);
    console.log("Signup successful:", response.data);
  } catch (error) {
    console.error("Signup failed:", error.response?.data || error.message);
  }
};

export default signup;
