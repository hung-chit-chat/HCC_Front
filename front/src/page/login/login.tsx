import { useForm } from "react-hook-form";
import "../../index.css";

const Login = () => {
  const {
    register,
    // handleSubmit,
    // formState: { errors },
  } = useForm();

  // const onSubmit = (data: any) => {
  //   console.log(data);

  // };

  return (
    <div className="flex h-screen">
      <div className="w-1/3 bg-violet-50 flex flex-col justify-center px-12 items-center">
        <div className="w-4/5 justify-center flex flex-col ">
          <h2 className="text-3xl font-bold mb-4">
            로그인하여 더 많은 귀여움 얻기 이름수정
          </h2>
          <p className="text-gray-600 mb-6">
            계정이 없으신가요?{" "}
            <a href="/register" className="text-purple-600">
              등록하기
            </a>
          </p>

          <form
            // onSubmit={handleSubmit(onSubmit)}
            className="bg-white p-8 rounded-lg shadow-md"
          >
            <div className="mb-4">
              <label className="block text-gray-700 font-bold mb-2">
                이메일
              </label>
              <input
                type="email"
                placeholder="Email"
                {...register("email", { required: "이메일을 입력해주세요." })}
                className="w-full p-2 border border-gray-300 rounded"
              />
              {/* {errors.email && (
              <p className="text-red-500 text-sm">{errors.email.message}</p>
            )} */}
            </div>

            <div className="mb-6">
              <label className="block text-gray-700 font-bold mb-2">
                비밀번호
              </label>
              <input
                type="password"
                placeholder="Password"
                {...register("password", {
                  required: "비밀번호를 입력해주세요.",
                })}
                className="w-full p-2 border border-gray-300 rounded"
              />
              {/* {errors.password && (
              <p className="text-red-500 text-sm">{errors.password.message}</p>
            )} */}
            </div>

            <button
              type="submit"
              className="w-full bg-black text-white font-bold py-2 px-4 rounded"
            >
              로그인하기
            </button>
          </form>

          <div className="mt-4">
            <a href="/forgot-password" className="text-sm text-gray-600">
              비밀번호 찾기
            </a>{" "}
            |{" "}
            <a href="/privacy" className="text-sm text-gray-600">
              개인정보보호
            </a>
          </div>
        </div>
      </div>

      <div className="w-2/3 flex items-center justify-center">
        <img
          src="/image/background.jpg"
          alt="Cute Cat"
          className="w-full h-full object-cover"
        />
      </div>
    </div>
  );
};

export default Login;
