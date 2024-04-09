import React from "react";

function Button({ setTodoList, todoList }) {
  const allTodo = [...todoList];
  console.log(allTodo);
  const handleAll = () => {
    setTodoList(allTodo);
    console.log("todoList", allTodo);
  };
  const handleActive = () => {
    let updateTodo = todoList.filter((item) => item.completed !== true);
    console.log("active", updateTodo);
    setTodoList(updateTodo);
  };
  const handleCompleted = () => {
    let updateTodo = todoList.filter((item) => item.completed == true);
    console.log("comp", updateTodo);
    setTodoList(updateTodo);
  };
  return (
    <ul className="flex justify-between  w-full text-2xl px-3">
      <li
        onClick={handleAll}
        className=" shadow-lg border-2 rounded-2xl   p-3 cursor-pointer hover:bg-slate-50"
      >
        All
      </li>
      <li
        onClick={handleActive}
        className=" shadow-lg border-2 rounded-2xl   p-3 cursor-pointer hover:bg-slate-50"
      >
        Active
      </li>
      <li
        onClick={handleCompleted}
        className=" shadow-lg border-2 rounded-2xl   p-3 cursor-pointer hover:bg-slate-50"
      >
        Completed
      </li>{" "}
    </ul>
  );
}

export default Button;
