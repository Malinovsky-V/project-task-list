import { useState } from "react";
import MyInput from "./UI/input/MyInput";
import MySelect from "./UI/select/MySelect";

export default function TaskCreateForm({ createTask, setVisibleTask, groups }) {
  const [task, setTask] = useState({});
  const [emptyField, setEmptyField] = useState("");
  // Задісейблене створення таски, якщо не всі пункти заповнені
  const isDisabled =
    !task.title ||
    !task.description ||
    !task.group ||
    !task.color ||
    !task.deadline;
 
  const taskColors = [
    { value: "red", name: "Червоний" },
    { value: "green", name: "Зелений" },
    { value: "blue", name: "Синій" },
    { value: "yellow", name: "Жовтий" },
  ];

  // Функція створення нової таски
  const addNewTask = (e) => {
    e.preventDefault();

    let newTask = {
      title: task.title,
      description: task.description,
      group: task.group,
      color: task.color,
      id: task.title + task.description,
      deadline: task.deadline,
      status: 'new',
    };
    if (!isDisabled) {
      createTask(newTask);
      setVisibleTask(false);
      setTask({ title: "", description: "", group: "", deadline: "" });
      setEmptyField("");
    } else {
      setEmptyField("error");
    }
  };
  const canselTaskCreating = (e) => {
    e.preventDefault();
    setVisibleTask(false);
  };

  const getTaskTitleHandler = (e) =>
    setTask({ ...task, title: e.target.value });
  const getTaskDescriptonHandler = (e) =>
    setTask({ ...task, description: e.target.value });
  const getTaskGroupHandler = (selectedGroup) =>
    setTask({ ...task, group: selectedGroup });
  const getTaskColorHandler = (selectedColor) =>
    setTask({ ...task, color: selectedColor });
  const getTaskTimeHandler = (e) =>
    setTask({ ...task, deadline: e.target.value });
  const date = new Date();

  return (
    <form>
      <MyInput
        emptyField={!task.title ? emptyField : ""}
        value={task.title}
        onChange={getTaskTitleHandler}
        type="text"
        placeholder="назва завдання"
      ></MyInput>
      <MyInput
        emptyField={!task.description ? emptyField : ""}
        value={task.description}
        onChange={getTaskDescriptonHandler}
        type="text"
        placeholder="опис завдання"
      ></MyInput>
      <MySelect
        emptyField={!task.group ? emptyField : ""}
        value={task.group}
        setMethod={getTaskGroupHandler}
        defaultValue="Група завдань"
        options={groups}
      />
      <MySelect
        emptyField={!task.color ? emptyField : ""}
        value={task.color}
        setMethod={getTaskColorHandler}
        defaultValue="Колір Завдання"
        options={taskColors}
      />
      <input
        value={task.deadline}
        className={`input-date ${!task.deadline ? emptyField : ""}`}
        type="date"
        min={date.toLocaleDateString("en-CA")}
        onChange={getTaskTimeHandler}
      />

      <button className="btn create-btn" onClick={addNewTask}>
        Створити завдання
      </button>
      <button className="btn cancel-btn" onClick={canselTaskCreating}>
        Відмінити створення
      </button>
    </form>
  );
}
