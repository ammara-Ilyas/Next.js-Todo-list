"use client";
import Hero from "@/components/Hero";
import Button from "@/components/Button";
import TodoList from "@/components/TodoList";
import Form from "@/components/TodoForm";
import { ThemeContext } from "../../components/contextApi/ThemeContext";

import React, { useState, useContext, useEffect } from "react";
import Navbar from "../components/layout/Navbar";
const Todo = () => {
  const [todo, setTodo] = useState("");
  const [todoList, setTodoList] = useState([]);
  const [toggle, setToggle] = useState(true);
  const [editTodo, setEditTodo] = useState(null);
  const [editPlaceholder, setEditPlaceholder] = useState(true);
  const [isCompleted, setIsCompleted] = useState(false);
  const [isEmpty, setIsEmpty] = useState(false);
  const [todoData, setTodoData] = useState([...todoList]);

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

  const { theme } = useContext(ThemeContext);
  console.log(theme);
  return (
    <div

    // className={`${theme}`}
    >
      <Navbar />
      {isEmpty && (
        <div
          style={{ width: "10%" }}
          className="  py-2 text-center rounded-md text-xl cursor-pointer shadow-md bg-red-400 text-white transition-all duration-500 transform animate-slideIn absolute top-10 right-28 -translate-y-full"
        >
          Write Todo
        </div>
      )}
      <div className=" w-3/4 mx-auto  flex flex-col my-4 items-center mt-3  ">
        <Hero />
        <Form
          addTodo={addTodo}
          saveTodo={saveTodo}
          todo={todo}
          editPlaceholder={editPlaceholder}
          toggle={toggle}
          setTodo={setTodo}
        />
        <Button setTodoList={setTodoData} todoList={todoList} />

        <div className=" w-7/12 shadow-md h-[20rem] b my-4 flex flex-col items-center overflow-y-auto  scroll-auto">
          <TodoList
            deleteTodo={deleteTodo}
            findEditTodo={findEditTodo}
            handleCompletedTodosCheck={handleCompletedTodosCheck}
            todoList={todoData}
            setIsCompleted={setIsCompleted}
          />
        </div>
      </div>
    </div>
  );
};

export default Todo;
