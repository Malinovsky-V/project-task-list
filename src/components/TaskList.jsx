import TaskItem from "./TaskItem";

export default function TaskList({ nameGroup, tasks, getStatus, removeTask, removeGroup}) {
    
  return (
    <div className="task-group-wrap">
        <span  className="close-btn" onClick={()=>removeGroup(nameGroup, tasks)}>
          +
        </span>
        <div className="task-group">
      <h1 className="title title-group">{nameGroup}</h1>
      { tasks.length !== 0 ?
      tasks.map((task) => (
          (task.group === nameGroup ?
        <TaskItem
        nameGroup={nameGroup}
          removeTask={removeTask}
          task={task}
          key={task.id}
          getStatus={getStatus}
        /> : ''
      ))) :
      <div className="withoutTask"> Створіть перше завдання в цій групі...</div>}
      </div>
    </div>
  );
}
