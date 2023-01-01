import React, { useState } from "react";
import Axios from "axios";
import toast from "react-hot-toast";
import { Link, useNavigate } from "react-router-dom";

import TextInput from "../components/shared/TextInput";

function Login() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({});
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const submitHandler = async (e) => {
    e.preventDefault();
    try {
      const response = await Axios.post(
        "http://localhost:3000/users/login",
        formData
      );

      localStorage.setItem("user-data", JSON.stringify(response.data));
      toast.success("Signed in");
      navigate("/");
    } catch (error) {
      error.response.data.errors.map((err) => toast.error(err));
    }
  };

  return (
    <main className="w-full h-screen flex justify-center items-center relative">
      <img
        src="https://images.pexels.com/photos/235621/pexels-photo-235621.jpeg?auto=compress&cs=tinysrgb"
        className="w-full h-full absolute top-0"
        alt="background"
      />
      <section className="flex flex-col shadow-lg p-10 w-2/5 z-10 backdrop-blur bg-white/40">
        <h2 className="text-3xl mb-8 uppercase font-bold underline">Sign In</h2>
        <form className="space-y-4" onSubmit={submitHandler}>
          <TextInput
            label={"Email"}
            name={"email"}
            type={"email"}
            placeholder="johdoe@example.com"
            onChange={handleChange}
          />
          <TextInput
            label={"Password"}
            name={"password"}
            type={"password"}
            placeholder="********"
            onChange={handleChange}
          />
          <button
            type="submit"
            className="bg-purple-700 text-white uppercase py-2 w-full"
          >
            Submit
          </button>
        </form>
        <Link to="/signup" className="text-blue-700 mt-4">
          Don't have account? Sign up here
        </Link>
      </section>
    </main>
  );
}
export { Login };
