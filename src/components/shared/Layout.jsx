import Navbar from "./Navbar";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

function Layout({ children }) {
  const navigate = useNavigate();

  useEffect(() => {
    const token = JSON.parse(localStorage.getItem("user-data"))?.token;
    if (!token) {
      navigate("/login");
    }
  }, []);

  return (
    <main>
      <Navbar />
      <section className="w-full h-full">{children}</section>
    </main>
  );
}

export { Layout };
