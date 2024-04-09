import React from "react";
import Image from "next/image";
import todoImg from "../../public/Image/todo.jpeg";
function Hero() {
  return (
    <div className=" mb-3">
      <h2 className="text-4xl font-bold cursor-pointer">
        <i>ToDo List</i>
      </h2>
    </div>
  );
}

export default Hero;
