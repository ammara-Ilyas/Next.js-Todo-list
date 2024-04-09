import React, { useState } from "react";

function Button({ setTodoList, todoList }) {
  const [filter, setFilter] = useState("all"); // State to track the current filter

  const allTodo = [...todoList];
  console.log(allTodo);
  const handleAll = () => {
    setTodoList(allTodo);
    setFilter("all");

    console.log("todoList", allTodo);
  };
  const handleActive = () => {
    let updateTodo = todoList.filter((item) => item.completed !== true);
    console.log("active", updateTodo);
    setTodoList(updateTodo);
    setFilter("active");
  };
  // const handleCompleted = () => {
  //   let updateTodo = todoList.filter((item) => item.completed == true);
  //   console.log("comp", updateTodo);
  //   setTodoList(updateTodo);
  // };
  const handleCompleted = () => {
    // If already showing completed todos, show all todos instead
    if (todoList.some((item) => item.completed)) {
      setTodoList([...todoList]); // Show all todos
    } else {
      const completedTodos = todoList.filter((item) => item.completed);
      setTodoList(completedTodos); // Show only completed todos
      setFilter("completed");
    }
  };
  return (
    <ul className="flex justify-between my-4 w-2/3 text-2xl px-3">
      <li
        onClick={handleAll}
        className={`shadow-lg border-2 rounded-2xl p-3 cursor-pointer hover:bg-slate-50 ${
          filter === "all" ? "bg-gray-200" : ""
        }`}
      >
        All
      </li>
      <li
        onClick={handleActive}
        className={`shadow-lg border-2 rounded-2xl p-3 cursor-pointer hover:bg-slate-50 ${
          filter === "active" ? "bg-gray-200" : ""
        }`}
      >
        Active
      </li>
      <li
        onClick={handleCompleted}
        className={`shadow-lg border-2 rounded-2xl p-3 cursor-pointer hover:bg-slate-50 
        ${filter === "completed" ? "bg-gray-200" : ""}`}
      >
        Completed
      </li>{" "}
    </ul>
  );
}

export default Button;
