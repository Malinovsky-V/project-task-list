import React from "react";
import TaskList from "./TaskList";

export default function GroupList({
  groups,
  removeTask,
  removeGroup,
  getStatus,
  selectedStatus,
  setSelectedStatus,
  tasks,
}) {
  return (
    <div className="task-group">
     <h1  className="title title-main">To Do list...</h1>
      {groups.map((group) => (
        <TaskList
          nameGroup={group.value}
          removeTask={removeTask}
          removeGroup={removeGroup}
          getStatus={getStatus}
          selectedStatus={selectedStatus}
          setSelectedStatus={setSelectedStatus}
          tasks={tasks}
          key={group.id}
        />
      ))}
    </div>
  );
}