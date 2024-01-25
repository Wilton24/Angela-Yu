import x from "/xmark-solid.svg";

export default function List({ task, deleteTask, markAsDone }) {
  let listClassName =
    "text-black block w-full cursor-pointer hover:bg-slate-300 hover:shadow-lg rounded-md px-1";

  if (task.isDone) {
    listClassName =
      "text-black block w-full cursor-pointer hover:bg-slate-300 hover:shadow-lg rounded-md px-1 line-through";
  } else {
    listClassName =
      "text-black block w-full cursor-pointer hover:bg-slate-300 hover:shadow-lg rounded-md px-1";
  }

  return (
    <div className="flex justify-between">
      <li
        className={listClassName}
        onClick={(e) => markAsDone(e)}
      >
        {task.name}
      </li>

      <div
        className="hover:bg-slate-600 items-center rounded-full p-[2px] h-6 w-6 cursor-pointer flex justify-center"
        onClick={(e) => deleteTask(e)}
        data-name={task.name}
      >
        {" "}
        <img
          src={x}
          alt="Close button"
          className="h-4 w-4"
          data-name={task.name}
        />
      </div>
    </div>
  );
}
