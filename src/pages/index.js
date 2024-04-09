"use client";
import Hero from "@/components/Hero";
import Button from "@/components/Button";
import TodoList from "@/components/TodoList";
import { ThemeContext } from "../../components/contextApi/ThemeContext";

import React, { useState, useContext } from "react";
import { MdAdd } from "react-icons/md";
// import { FaRegEdit } from "react-icons/fa";
// import { MdDelete } from "react-icons/md";
import { CiSaveDown1 } from "react-icons/ci";
import Navbar from "../../components/Navbar";
const Todo = () => {
  const [todo, setTodo] = useState("");
  const [todoList, setTodoList] = useState([]);
  const [toggle, setToggle] = useState(true);
  const [editTodo, setEditTodo] = useState(null);
  const [editPlaceholder, setEditPlaceholder] = useState(true);
  const [isCompleted, setIsCompleted] = useState(false);
  const [isEmpty, setIsEmpty] = useState(false);

  // const { theme } = useContext(ThemeContext);
  // console.log(theme);
  const addTodo = (e) => {
    e.preventDefault();
    if (todo.trim() !== "") {
      setTodoList([
        ...todoList,
        {
          id: Math.floor(Math.random() * 1000000),
          name: todo,
          completed: false,
        },
      ]);
      setIsEmpty(false);
    } else {
      setIsEmpty(true);
      setTimeout(() => {
        setIsEmpty(false);
      }, 2000);
    }

    setTodo("");
    setEditPlaceholder(true);
  };

  const findEditTodo = (id) => {
    const item = todoList.find((item) => {
      return item.id === id;
    });
    setTodo(item.name);
    setToggle(false);
    setEditTodo(id);
    setEditPlaceholder(false);
  };
  const saveTodo = () => {
    const index = todoList.findIndex((item) => {
      return item.id === editTodo;
    });
    let updatedTodos = [...todoList];
    updatedTodos[index].name = todo;
    setTodoList(updatedTodos);
    setToggle(true);
    setTodo("");
    setEditPlaceholder(true);
  };
  const deleteTodo = (id) => {
    const updatedTodos = todoList.filter((item) => {
      return item.id !== id;
    });
    ///another way
    // const editedTodoIndex = todoList.find((elem) => elem.id === id);
    // console.log(editedTodoIndex);
    // const updatedTodos[...todoList]
    // updatedTodos.splice(editedTodoIndex,1)
    setTodoList(updatedTodos);
  };

  const handleCompletedTodosCheck = (id) => {
    const index = todoList.findIndex((item) => item.id === id);
    const updatedTodoList = [...todoList];
    updatedTodoList[index] = {
      ...updatedTodoList[index],
      completed: !updatedTodoList[index].completed,
    };
    setTodoList(updatedTodoList);
  };

  return (
    <div
    // className={`${theme}`}
    >
      <Navbar />
      {isEmpty && (
        <div className="border-2 border-black w-1/6 py-2 text-center rounded-md text-xl cursor-pointer shadow-md bg-red-600 text-white hover:bg-white hover:text-black transition-all absolute right-28 top-15">
          Write Todo
        </div>
      )}
      <div className=" w-2/3 mx-auto flex flex-col p-9 items-center mt-3  ">
        <Hero />
        <div className="border-2 rounded-sm w-1/2 flex p-2 px-3 justify-between items-center text-xl">
          <input
            className="border-none outline-none basis-11/12"
            type="text"
            placeholder={editPlaceholder ? "Write new todo" : "Edit todo"}
            value={todo}
            onChange={(e) => setTodo(e.target.value)}
          />
          <span className="text-2xl">
            {toggle ? (
              <MdAdd
                className="text-gray-500 hover:text-gray-700"
                onClick={addTodo}
              />
            ) : (
              <CiSaveDown1
                className="text-gray-500 hover:text-gray-700"
                onClick={saveTodo}
              />
            )}
          </span>
        </div>
        <Button setTodoList={setTodoList} todoList={todoList} />

        <div className=" w-2/3 my-4 flex flex-col items-center">
          <TodoList
            deleteTodo={deleteTodo}
            findEditTodo={findEditTodo}
            handleCompletedTodosCheck={handleCompletedTodosCheck}
            todoList={todoList}
            setIsCompleted={setIsCompleted}
          />
        </div>
      </div>
    </div>
  );
};

export default Todo;
