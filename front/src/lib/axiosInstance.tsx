import axios from "axios";

const API_URL = import.meta.env.VITE_URL || "https://api.example.com";
// const ACCESS_TOKEN_KEY = "access_token";

// Axios 인스턴스 생성
const apiClient = axios.create({
  baseURL: API_URL,
  // timeout: 10000,
  headers: {
    "Content-Type": "application/json",
  },
});

// 요청 인터셉터 (로그인 후 발급된 토큰을 모든 요청에 포함)
apiClient.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("token"); // 저장된 토큰 가져오기
    if (token) {
      config.headers.Authorization = `Bearer ${token}`; // 토큰을 Authorization 헤더에 추가
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default apiClient;
