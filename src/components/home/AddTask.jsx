import React, { useState } from "react";
import Axios from "axios";
import TextInput from "../shared/TextInput";
import { toast } from "react-hot-toast";
// import { useNavigate } from "react-router-dom";

function AddTask({ closeModal, fetchTasks }) {
  const [task, setTask] = useState({});
  // const navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();

    const token = JSON.parse(localStorage.getItem("user-data")).token;
    try {
      await Axios.post("http://localhost:3000/tasks", task, {
        headers: {
          Authorization: `Bearer ${token}`,
          Accept: "application/json",
        },
      });
      toast.success("Task created successfully");
      fetchTasks();
      closeModal();
    } catch (error) {
      toast.error(error.message);
    }
  };

  const handleChange = (e) => {
    setTask({ ...task, [e.target.name]: e.target.value });
  };

  return (
    <section className="flex flex-col p-10">
      <form
        onSubmit={handleSubmit}
        className=" flex flex-col  text-xl space-y-5"
      >
        <TextInput
          label="Description"
          name="description"
          type="text"
          placeholder="Task description"
          onChange={handleChange}
        />
        <button
          type="submit"
          className="bg-purple-700 text-white uppercase py-2 w-full "
        >
          Add task
        </button>
      </form>
    </section>
  );
}
export { AddTask };
