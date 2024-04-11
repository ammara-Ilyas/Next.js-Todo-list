import React, { useState } from "react";
import { FaRegEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
function TodoList({
  todoList,
  deleteTodo,
  findEditTodo,
  handleCompletedTodosCheck,
  setIsCompleted,
}) {
  const [toggleActive, setToggleActive] = useState();
  return (
    <>
      {toggleActive ? (
        <div>No one</div>
      ) : (
        <>
          {todoList.map((item) => (
            <div
              className="border-2 flex justify-between py-2 w-11/12 px-2 mt-3 rounded-sm scroll-y"
              key={item.id}
            >
              <div
                className="flex   justify-between text-2xl items-center
                  "
              >
                <input
                  type="checkbox"
                  name="check"
                  className="  mx-3"
                  checked={item.completed}
                  onChange={(e) => setIsCompleted(e.target.checked)}
                  onClick={() => handleCompletedTodosCheck(item.id)}
                />
                <h3 className={item.completed ? "line-through" : ""}>
                  {item.name}
                </h3>
              </div>
              <span className="flex basis-12  justify-between items-center text-xl">
                <FaRegEdit
                  className="text-gray-500 hover:text-gray-700"
                  onClick={() => findEditTodo(item.id)}
                />
                <MdDelete
                  className="text-gray-500 hover:text-gray-700"
                  onClick={() => deleteTodo(item.id)}
                />
              </span>
            </div>
          ))}
        </>
      )}
    </>
  );
}

export default TodoList;
