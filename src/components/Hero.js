import React from "react";
import Image from "next/image";
import todoImg from "../../public/Image/todo.jpeg";
function Hero() {
  return (
    <div className=" mb-3">
      <Image
        src={todoImg}
        alt="todo"
        width={200}
        height={200}
        className="bg-yellow-400 mb-3"
      />
      <h2 className="text-4xl font-bold cursor-pointer">
        <i>ToDo List</i>
      </h2>
    </div>
  );
}

export default Hero;
