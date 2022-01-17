import { useMemo, useState } from "react";
import MySelect from "./UI/select/MySelect";

export default function TaskItem({ task, removeTask, getStatus }) {

  const [newTask, setNewTask] = useState({});
  const taskStatus = [
    { value: "new", name: "NEW" },
    { value: "inprocces", name: "В процесі" },
    { value: "done", name: "виконано" },
  ];
  console.log("222");

  const getStatusSelectHandler = (selectedStatus) => {
    setNewTask({ ...task, status: selectedStatus });
  };
  useMemo(() => {
    getStatus(newTask);
  }, [newTask]);
  return (
    <div className={`task ${task.color} ${task.status}`}>
      <div className="taskContent">
        <strong>
          Завдання {task.title}.
        </strong>
        <div className="taskDescriptoin">
          <i>{task.description}</i>
        </div>
      </div>
      <div className="taskGroup">
        <span>Група завдань:</span>
        <br />
        {task.group}
      </div>
      <div className="taskDate">
        Виконати до: <br />
        {task.deadline}
      </div>
      <MySelect
        value={newTask.status}
        options={taskStatus}
        setMethod={getStatusSelectHandler}
        className="taskStatus"
        defaultValue="Статус задачі"
      ></MySelect>

      <button onClick={() => removeTask(task)} className="btn cancel-btn">
        Видалити
      </button>
    </div>
  );
}
