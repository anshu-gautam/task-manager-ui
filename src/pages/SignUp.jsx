import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Axios from "axios";
import toast from "react-hot-toast";

import TextInput from "../components/shared/TextInput";
import { Link } from "react-router-dom";

function SignUp() {
  const [formData, setFormData] = useState({});
  const navigate = useNavigate();
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      /* http://localhost:3001/api/v1//auth/SignUp */
      await Axios.post("http://localhost:3000/users", formData);
      toast.success("Signed up successfully!");
      navigate("/login");
    } catch (error) {
      error.response.data.errors.map((err) => toast.error(err));
    }
  };

  return (
    <main className="w-full h-screen flex justify-center items-center">
      <img
        src="https://images.pexels.com/photos/235621/pexels-photo-235621.jpeg?auto=compress&cs=tinysrgb"
        className="w-full h-full absolute top-0"
        alt="background"
      />
      <section className="flex flex-col shadow-lg p-10 w-2/5 z-10 backdrop-blur bg-white/40">
        <h2 className="text-3xl mb-8 uppercase font-bold underline">Sign up</h2>
        <form className="space-y-4" onSubmit={handleSubmit}>
          <TextInput
            label="Email"
            name="email"
            type="email"
            placeholder="john.doe@example.com"
            onChange={handleChange}
          />
          <TextInput
            label="Name"
            name="name"
            type="text"
            placeholder="John"
            onChange={handleChange}
          />
          {/* <TextInput
            label='Last name'
            name='last_name'
            type='text'
            placeholder='Doe'
            onChange={handleChange}
          /> */}
          {/* <TextInput
            label='Phone number'
            name='phone'
            type='text'
            placeholder='+91-1234567890'
            onChange={handleChange}
          /> */}
          <TextInput
            label="Password"
            name="password"
            type="password"
            placeholder="********"
            onChange={handleChange}
          />
          {/* <TextInput
            label='Confirm Password'
            name='confirm_password'
            type='password'
            placeholder='********'
            onChange={handleChange}
          /> */}
          <button
            type="submit"
            className="bg-purple-700 text-white uppercase py-2 w-full"
          >
            Submit
          </button>
        </form>
        <Link to="/login" className="text-blue-700 mt-4">
          Already have account? Sign in here
        </Link>
      </section>
    </main>
  );
}

export { SignUp };
