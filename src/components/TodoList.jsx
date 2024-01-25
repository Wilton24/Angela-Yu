import { useRef, useState } from "react";
import ListItems from "./ListItems";

export default function TodoList() {
  const [todo, setTodo] = useState("");
  const [tasks, setTasks] = useState([]);

  const inputRef = useRef(undefined);

  function addTodoInput(e) {
    // setTodo((prevState) => {
    //   return { ...prevState, name: e.target.value };
    // });
    setTodo(e.target.value);
  }

  function deleteTask(e) {
    const taskToDelete = e.target.getAttribute("data-name");
    const upatedTasks = tasks.filter((value) => value.name !== taskToDelete);

    setTasks(upatedTasks);
  }

  function addTodo() {
    if (!todo.trim()) {
      alert("Please input a task");
    } else {
      console.log(`${todo} added to list`); //logging the name of the recently added task

      setTasks((prevState) => {
        return [...prevState, { name: todo, isDone: false }];
      });
    }
    setTodo("");
    inputRef.current.focus();
  }
  console.log(todo);
  console.log(tasks);

  return (
    <div className="text-[grey] text-lg w-[440px] bg-slate-50 rounded-lg px-8 py-4 mt-10">
      <h1 className="text-center text-slate-900 text-3xl bg-[#ff9f3f] py-2 px-4 rounded-lg mb-4">
        Yuhoo Todo list baby!
      </h1>
      <div className="flex gap-2">
        <input
          className="border-b-[2px] border-[#ff7945] text-slate-800 w-[90%] outline-none rounded-md px-3 py-1"
          placeholder="Add task"
          value={todo}
          onChange={(e) => addTodoInput(e)}
          ref={inputRef}
        />
        <button
          onClick={addTodo}
          className="border-2 border-[black] px-3 py-1 rounded-md hover:bg-slate-300 hover:border-slate-400 text-black outline-slate-400"
        >
          Add
        </button>
      </div>
      <ListItems tasks={tasks} deleteTask={deleteTask} />
    </div>
  );
}
