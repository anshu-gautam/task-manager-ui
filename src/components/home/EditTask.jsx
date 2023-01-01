import React, { useState } from "react";
import Axios from "axios";
import TextInput from "../shared/TextInput";
import { toast } from "react-hot-toast";

function EditTask({ closeModal, fetchTasks, activeTask }) {
  const [task, setTask] = useState({ ...activeTask });

  // console.log({ activeTask });

  const handleSubmit = async (e) => {
    e.preventDefault();

    const token = JSON.parse(localStorage.getItem("user-data")).token;
    try {
      await Axios.patch(
        `http://localhost:3000/tasks/${task._id}`,
        { description: task.description },
        {
          headers: {
            Authorization: `Bearer ${token}`,
            Accept: "application/json",
          },
        }
      );
      toast.success("Task updated successfully");
      fetchTasks();
      closeModal();
    } catch (error) {
      toast.error(error.message);
    }
  };

  const handleChange = (e) => {
    setTask({ ...task, [e.target.name]: e.target.value });
  };

  // debugger
  return (
    <section className="flex flex-col p-10">
      <form
        onSubmit={handleSubmit}
        className="flex flex-col  text-xl space-y-5"
      >
        <TextInput
          name="description"
          label="Description"
          value={task.description}
          onChange={handleChange}
        />
        <button
          type="submit"
          className="bg-purple-700 text-white uppercase py-2 w-full"
        >
          Update
        </button>
      </form>
    </section>
  );
}
export { EditTask };
