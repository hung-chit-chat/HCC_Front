import React from "react";
import { useForm } from "react-hook-form";
import signup from "../../hook/api/signupApi.tsx";
interface SignupFormInputs {
  name: string;
  email: string;
  password: string;
  gender: "MALE" | "FEMALE";
  phoneNumber: string;
  role: "USER" | "ADMIN";
}

const SignupForm: React.FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm<SignupFormInputs>();

  const onSubmit = async (data: SignupFormInputs) => {
    try {
      // 회원가입 API 호출
      const response = await signup(data);
      console.log("회원가입 성공:", response);
      alert("회원가입이 성공적으로 완료되었습니다!");
    } catch (error: any) {
      console.error("회원가입 실패:", error.message);
      alert("회원가입에 실패했습니다.");
    }
  };

  // const password = watch("password");

  return (
    <div className="flex items-center justify-center min-h-screen bg-violet-50">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md"
      >
        <h2 className="text-2xl font-bold mb-6 text-center">Sign Up</h2>

        {/* Name */}
        <div className="mb-4">
          <label htmlFor="name" className="block text-sm font-medium">
            Name
          </label>
          <input
            id="name"
            {...register("name", { required: "Name is required" })}
            className="mt-1 p-2 block w-full border border-gray-300 rounded-md shadow-sm"
          />
          {errors.name && (
            <p className="text-red-500 text-sm">{errors.name.message}</p>
          )}
        </div>

        {/* Email */}
        <div className="mb-4">
          <label htmlFor="email" className="block text-sm font-medium">
            Email
          </label>
          <input
            id="email"
            {...register("email", {
              required: "Email is required",
              pattern: {
                value: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
                message: "Enter a valid email address",
              },
            })}
            className="mt-1 p-2 block w-full border border-gray-300 rounded-md shadow-sm"
          />
          {errors.email && (
            <p className="text-red-500 text-sm">{errors.email.message}</p>
          )}
        </div>

        {/* Password */}
        <div className="mb-4">
          <label htmlFor="password" className="block text-sm font-medium">
            Password
          </label>
          <input
            id="password"
            type="password"
            {...register("password", {
              required: "Password is required",
              minLength: {
                value: 6,
                message: "Password must be at least 6 characters",
              },
            })}
            className="mt-1 p-2 block w-full border border-gray-300 rounded-md shadow-sm"
          />
          {errors.password && (
            <p className="text-red-500 text-sm">{errors.password.message}</p>
          )}
        </div>

        {/* Gender */}
        <div className="mb-4">
          <label className="block text-sm font-medium">Gender</label>
          <div className="mt-1">
            <label className="inline-flex items-center">
              <input
                type="radio"
                value="MALE"
                {...register("gender", { required: "Gender is required" })}
                className="form-radio"
              />
              <span className="ml-2">Male</span>
            </label>
            <label className="inline-flex items-center ml-4">
              <input
                type="radio"
                value="FEMALE"
                {...register("gender", { required: "Gender is required" })}
                className="form-radio"
              />
              <span className="ml-2">Female</span>
            </label>
          </div>
          {errors.gender && (
            <p className="text-red-500 text-sm">{errors.gender.message}</p>
          )}
        </div>

        {/* Phone Number */}
        <div className="mb-4">
          <label htmlFor="phoneNumber" className="block text-sm font-medium">
            Phone Number
          </label>
          <input
            id="phoneNumber"
            {...register("phoneNumber", {
              required: "Phone number is required",
              pattern: {
                value: /^[0-9]+$/,
                message: "Enter a valid phone number",
              },
            })}
            className="mt-1 p-2 block w-full border border-gray-300 rounded-md shadow-sm"
          />
          {errors.phoneNumber && (
            <p className="text-red-500 text-sm">{errors.phoneNumber.message}</p>
          )}
        </div>

        {/* Role */}
        <div className="mb-6">
          <label htmlFor="role" className="block text-sm font-medium">
            Role
          </label>
          <select
            id="role"
            {...register("role", { required: "Role is required" })}
            className="mt-1 p-2 block w-full border border-gray-300 rounded-md shadow-sm"
          >
            <option value="USER">User</option>
            <option value="ADMIN">Admin</option>
          </select>
          {errors.role && (
            <p className="text-red-500 text-sm">{errors.role.message}</p>
          )}
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-md"
        >
          Sign Up
        </button>
      </form>
    </div>
  );
};

export default SignupForm;
