import React, { Suspense } from "react";
import { HashRouter, Route, Routes } from "react-router-dom";

const loading = (
  <div className="pt-3 text-center">
    <div className="sk-spinner sk-spinner-pulse"></div>
  </div>
);

const Login = React.lazy(() => import("./page/login/login"));

const App = () => {
  const session = "a";

  return (
    <HashRouter>
      <Suspense fallback={loading}>
        <Routes>
          <Route path="/login" element={session ? <Login /> : <Login />} />
        </Routes>
      </Suspense>
    </HashRouter>
  );
};

export default App;
