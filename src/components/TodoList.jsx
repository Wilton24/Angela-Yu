import { useRef, useState } from "react";
import ListItems from "./ListItems";

export default function TodoList() {
  const [todo, setTodo] = useState("");
  const [tasks, setTasks] = useState([]);
  const [availableTasks, setAvailableTasks] = useState();

  const inputRef = useRef(undefined);

  function addTodoKeyDown(e) {
    if (e.key == "Enter") {
      addTodo();
    }
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
      setTasks((prevState) => {
        return [...prevState, { name: todo, isDone: false }];
      });
    }
    setTodo("");
    inputRef.current.focus();
  }

  function markDone(name, status) {
    const updatedTasks = tasks.map((element, index) => {
      if (name == element.name) {
        return { ...element, isDone: !status };
      }
      return element;
    });

    setTasks(updatedTasks);
    updateAvailableTasks();
  }

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
          onChange={(e) => setTodo(e.target.value)}
          ref={inputRef}
          onKeyDown={(e) => addTodoKeyDown(e)}
        />
        <button
          onClick={addTodo}
          className="border-2 border-[black] px-3 py-1 rounded-md hover:bg-slate-300 hover:border-slate-400 text-black outline-slate-400"
        >
          Add
        </button>
      </div>
      <ListItems tasks={tasks} deleteTask={deleteTask} markDone={markDone} />

      <h3 className="text-black mt-5 ms-2 font-semibold">
        You have {tasks.length} tasks maniga!
      </h3>
    </div>
  );
}
