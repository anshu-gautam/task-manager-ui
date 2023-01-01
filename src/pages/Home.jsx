import React from "react";
import { useEffect, useState } from "react";
import Axios from "axios";
import { Trash, CheckCircle } from "react-feather";
import { toast } from "react-hot-toast";

import { Layout } from "../components/shared/Layout";
import { CustomModal } from "../components/shared/CustomModal";
import { AddTask } from "../components/home/AddTask";
import { Edit } from "react-feather";
import { EditTask } from "../components/home/EditTask";

function Home() {
  const [tasks, setTasks] = useState([]);
  const [isOpen, setIsOpen] = useState(false);
  const [isEditOpen, setIsEditOpen] = useState(false);
  const [activeTask, setActiveTask] = useState(null);

  useEffect(() => {
    fetchTasks();
  }, []);

  const fetchTasks = async () => {
    const token = JSON.parse(localStorage.getItem("user-data")).token;

    try {
      const response = await Axios.get("http://localhost:3000/tasks", {
        headers: {
          Authorization: `Bearer ${token}`,
          Accept: "application/json",
        },
      });

      setTasks(response.data);
      // console.log(response.data);
    } catch (error) {
      toast.error(error.message);
    }
  };

  const deleteTask = async (id) => {
    const token = JSON.parse(localStorage.getItem("user-data")).token;
    try {
      await Axios.delete(`http://localhost:3000/tasks/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
          Accept: "application/json",
        },
      });
      toast.success("Task deleted successfully!");
      fetchTasks();
    } catch (error) {
      toast.error(error.message);
    }
  };
  const markComplete = async (id) => {
    const token = JSON.parse(localStorage.getItem("user-data")).token;
    try {
      await Axios.patch(
        `http://localhost:3000/tasks/${id}`,
        { completed: true },
        {
          headers: {
            Authorization: `Bearer ${token}`,
            Accept: "application/json",
          },
        }
      );
      toast.success("Task marked completed!");
      fetchTasks();
    } catch (error) {
      toast.error(error.message);
    }
  };

  const handleEdit = (id) => {
    setActiveTask(tasks.find((task) => task._id === id));
    setIsEditOpen(true);
  };

  return (
    <Layout>
      {isOpen && (
        <CustomModal
          title={"Add task"}
          isOpen={isOpen}
          closeModal={() => setIsOpen(false)}
        >
          <AddTask
            closeModal={() => setIsOpen(false)}
            fetchTasks={fetchTasks}
          />
        </CustomModal>
      )}
      {isEditOpen && (
        <CustomModal
          title={"Edit task"}
          isOpen={isEditOpen}
          closeModal={() => setIsEditOpen(false)}
        >
          <EditTask
            closeModal={() => setIsEditOpen(false)}
            fetchTasks={fetchTasks}
            activeTask={activeTask}
          />
        </CustomModal>
      )}
      <section className="px-32 py-10">
        <header className="flex justify-between items-center">
          <h1 className="text-4xl font-thin">Tasks</h1>
          <button
            className="bg-gray-700 text-white px-2 py-1 hover:scale-105 transition"
            onClick={() => setIsOpen(true)}
          >
            Add task
          </button>
        </header>
        <ul className="my-5 space-y-3">
          {tasks.length === 0 ? (
            <div>No tasks to show</div>
          ) : (
            tasks.map(({ _id, description, completed }) => (
              <li
                key={_id}
                className={`${
                  completed ? "bg-green-600 text-white" : "bg-white"
                } border py-3 px-6 font-semibold  flex justify-between items-center`}
              >
                <span>{description}</span>
                <div className="flex items-center space-x-3">
                  {!completed && (
                    <button
                      className="hover:shadow-lg active: outline-none"
                      onClick={() => {
                        markComplete(_id);
                      }}
                    >
                      <CheckCircle />
                    </button>
                  )}

                  <button
                    className="hover:shadow-lg  active: outline-none"
                    onClick={() => {
                      handleEdit(_id);
                    }}
                  >
                    <Edit />
                  </button>

                  <button
                    className="hover:shadow-lg  active: outline-none"
                    onClick={() => {
                      deleteTask(_id);
                    }}
                  >
                    <Trash />
                  </button>
                </div>
              </li>
            ))
          )}
        </ul>
      </section>
    </Layout>
  );
}

export { Home };
