import x from "/xmark-solid.svg";

export default function List({ task, deleteTask }) {
  // function deleteTask(e) {
  //   console.log("Deleted my " + task.name);
  // }
  // console.log(task);

  return (
    <div className="flex justify-between">
      <li className="text-black block">{task.name}</li>

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
