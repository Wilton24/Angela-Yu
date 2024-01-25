import List from "./ui/List.jsx";

export default function ListItems({ tasks, deleteTask }) {
  return (
    <div className="mt-3 ms-3">
      <ul className="shit">
        {tasks.map((task, index) => {
          return <List task={task} key={index} deleteTask={deleteTask} />;
        })}
      </ul>
    </div>
  );
}
