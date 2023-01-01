import { Routes, Route } from "react-router-dom";

import { About, Home, Login, SignUp } from "./pages";

function App() {
  return (
    <Routes>
      <Route path="login" element={<Login />} />
      <Route path="signup" element={<SignUp />} />
      <Route path="" element={<Home />} />
      <Route path="about" element={<About />} />
    </Routes>
  );
}

export default App;
