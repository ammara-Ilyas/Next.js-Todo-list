"use client";
import { ThemeContext } from "../../components/contextApi/ThemeContext";
import Image from "next/image";
import todoImg from "../../public/Image/todo.jpeg";
import React, { useState, useContext } from "react";
import { MdAdd } from "react-icons/md";
import { FaRegEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import { CiSaveDown1 } from "react-icons/ci";
import Navbar from "../../components/Navbar";
const Todo = () => {
  const [todo, setTodo] = useState();
  const [todoList, setTodoList] = useState([]);
  const [toggle, setToggle] = useState(true);
  const [editTodo, setEditTodo] = useState(null);
  const [editPlaceholder, setEditPlaceholder] = useState(true);
  const [isFullTodo, setFullTodo] = useState(true);
  const { theme } = useContext(ThemeContext);
  console.log(theme);
  const addTodo = (e) => {
    e.preventDefault();
    todo !== ""
      ? setTodoList([
          ...todoList,
          { id: Math.floor(Math.random() * 1000000), name: todo },
        ])
      : alert("write todo");
    setTodo("");
    setEditPlaceholder(true);
  };

  const findTodos = (id) => {
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
      console.log(item);
      return item.id !== id;
    });
    ///another way
    // const editedTodoIndex = todoList.find((elem) => elem.id === id);
    // console.log(editedTodoIndex);
    // const updatedTodos[...todoList]
    // updatedTodos.splice(editedTodoIndex,1)
    console.log(updatedTodos);
    setTodoList(updatedTodos);
  };
  return (
    <div className={`${theme}`}>
      <Navbar />
      <div className=" w-2/3 mx-auto flex flex-col p-9 items-center mt-3 shadow-lg ">
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
        <div className=" w-2/3 my-4 flex flex-col items-center">
          <ul className="flex justify-between  w-full text-2xl px-3">
            <li className=" shadow-lg border-2 rounded-2xl   p-3 cursor-pointer hover:bg-slate-50">
              All
            </li>
            <li className=" shadow-lg border-2 rounded-2xl   p-3 cursor-pointer hover:bg-slate-50">
              Active
            </li>
            <li className=" shadow-lg border-2 rounded-2xl   p-3 cursor-pointer hover:bg-slate-50">
              Completed
            </li>{" "}
          </ul>

          {todoList.map((item) => (
            <div
              className="border-2 flex justify-between py-2 w-3/4 px-2 mt-3 rounded-sm"
              key={item.id}
            >
              <div
                className="flex   justify-between text-2xl items-center
              "
              >
                <input type="checkbox" name="check" className="  mx-3" />
                <h3 className={isFullTodo ? "line-through" : "no-underline"}>
                  {item.name}
                </h3>
              </div>
              <span className="flex basis-12  justify-between items-center text-xl">
                <FaRegEdit
                  className="text-gray-500 hover:text-gray-700"
                  onClick={() => findTodos(item.id)}
                />
                <MdDelete
                  className="text-gray-500 hover:text-gray-700"
                  onClick={() => deleteTodo(item.id)}
                />
              </span>
            </div>
          ))}
        </div>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Est modi
          obcaecati, quas voluptate hic suscipit veritatis voluptatum illo
          aspernatur tempora nostrum numquam animi, debitis officiis inventore
          non ex eligendi minima natus adipisci repudiandae dicta pariatur
          ducimus! Qui eligendi officia quos quaerat iusto, architecto soluta
          nihil harum ad, quisquam exercitationem corporis corrupti ab minus
          nostrum ducimus! Ab, accusamus sapiente blanditiis vitae maiores
          quaerat enim itaque omnis et aliquam? Cupiditate veniam, sapiente,
          architecto repellendus aspernatur aut ad voluptatibus ab dignissimos
          maiores quam fuga odio culpa tempora nemo explicabo aliquid ratione
          velit adipisci! Quisquam, nostrum accusantium eligendi rerum ullam
          inventore illum voluptates dolor harum? Odio ut blanditiis
          perspiciatis dicta placeat. Explicabo reprehenderit reiciendis quasi
          est in perspiciatis nisi dolorem laudantium! Consequuntur nam dolorum
          blanditiis, beatae ullam quibusdam voluptatum et alias molestiae
          atque! Fuga, asperiores repudiandae? Ut eligendi labore cumque totam
          unde, aliquid in alias ipsa veritatis numquam repellat at? Odio illo
          iure aliquid! Voluptates possimus culpa nulla facere quisquam
          repellendus sit reprehenderit vero reiciendis autem. Pariatur
          perspiciatis corporis sequi itaque quidem quis adipisci magni libero,
          sunt necessitatibus exercitationem maxime nobis reprehenderit eum rem
          corrupti, velit doloribus ipsa blanditiis! Praesentium accusantium ex,
          atque laboriosam quis voluptatum voluptatem assumenda voluptatibus
          nemo odio debitis ut libero?
        </p>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Soluta
          molestiae praesentium alias officia, fugiat dolor eos eligendi
          delectus minus explicabo itaque earum, cum omnis nesciunt quae atque
          velit mollitia in? Dicta totam eaque est, dolorum, dolor magnam quod
          fuga eum possimus consequatur voluptas aliquam, repudiandae incidunt
          dolorem maiores molestias. Eos sit necessitatibus delectus
          exercitationem reprehenderit maiores, quibusdam porro laborum
          voluptates laudantium fugiat nesciunt itaque quidem cum officia
          aspernatur magni nulla, natus ea? Eveniet autem fuga necessitatibus
          esse vel! Eos eius amet earum minus alias officia quas cupiditate,
          deleniti fugit, veritatis laboriosam cum necessitatibus quasi odit
          illo animi ipsam, soluta fuga numquam dignissimos. Alias perspiciatis
          earum placeat pariatur nisi numquam ex incidunt accusamus nesciunt,
          expedita blanditiis nostrum dolorum asperiores aliquam reprehenderit
          eligendi voluptate officiis repellendus veritatis cumque? Assumenda,
          amet neque. Molestiae deleniti, labore voluptate illo hic incidunt
          esse libero quod! In nobis veniam suscipit hic inventore iure eligendi
          earum debitis provident dolorem pariatur rem eum beatae dolore ullam
          consequuntur voluptate repellendus, at sed aperiam omnis ab aspernatur
          facilis! Explicabo beatae corporis ipsam veritatis sequi consequatur
          voluptate dolores, ratione dignissimos itaque vero quo blanditiis
          expedita eius vel impedit doloremque et nihil enim. Repellendus enim
          corrupti atque veniam adipisci animi. Exercitationem quos
          reprehenderit fugiat, explicabo vel delectus culpa ipsum pariatur
          inventore ab provident labore ea temporibus? Mollitia eligendi
          reiciendis voluptas quo illum vel consequuntur dolores aut explicabo!
          Sequi id fuga, aspernatur adipisci culpa fugit unde? Porro
          reprehenderit voluptas dignissimos, voluptatum laborum a voluptatem
          ad, praesentium eius in dolorem magnam ex placeat accusantium debitis
          at? Deleniti saepe iure eaque inventore cum hic quas velit illum atque
          veniam, ut amet nam numquam beatae necessitatibus, eum architecto vero
          vitae! At, sed quaerat quasi magnam molestias obcaecati! Omnis cumque
          quas quae optio facilis possimus, nostrum dolores alias a magni
          ratione dignissimos esse mollitia incidunt fugit accusantium aperiam?
          Cupiditate consectetur, aspernatur soluta delectus voluptas eum eius
          totam sequi quisquam dignissimos nisi perferendis! Autem voluptas
          cumque corrupti aliquid error adipisci cupiditate ut. Deserunt
          laudantium sed perferendis, nisi numquam blanditiis facere labore
          magnam impedit similique assumenda aliquam obcaecati doloribus. Sit
          laudantium, quam quaerat tempore excepturi aut quas eveniet, ipsam
          adipisci ratione nihil voluptate totam mollitia, maiores dolorem quia
          sapiente quidem. Vel ab voluptates, qui possimus nemo veniam, corporis
          expedita iste iure inventore quam quo officiis necessitatibus odio
          dolorem maxime. Voluptatum rerum temporibus consequatur numquam
          doloremque culpa incidunt eos iusto recusandae? Nesciunt eius
          voluptatem excepturi praesentium et eveniet eligendi exercitationem
          perspiciatis, accusantium dignissimos, aut inventore, deleniti nobis
          recusandae sequi placeat architecto molestias soluta! Quas corporis
          consequatur, sit suscipit voluptas aliquid alias obcaecati expedita
          quo perferendis sequi laborum porro hic quos quaerat odit dignissimos
          officiis ex dolorum cumque quisquam totam quasi nobis. Ea dignissimos
          ipsum sunt, odit iusto obcaecati quis soluta voluptates non
          reprehenderit repudiandae error aperiam iure vitae tempore at
          excepturi qui suscipit? Voluptatibus corporis, cupiditate impedit,
          recusandae odio dolorem modi consequuntur debitis harum quibusdam
          molestiae unde dignissimos ipsam pariatur delectus adipisci eius
          consequatur sed expedita alias architecto. Fuga sequi deserunt iusto
          architecto repellendus obcaecati atque, aliquam totam exercitationem
          repudiandae autem!
        </p>
      </div>
    </div>
  );
};

export default Todo;
