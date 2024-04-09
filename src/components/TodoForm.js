import React from "react";
import { MdAdd } from "react-icons/md";
import { CiSaveDown1 } from "react-icons/ci";

function Form({ addTodo, saveTodo, editPlaceholder, toggle, todo, setTodo }) {
  return (
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
  );
}

export default Form;
