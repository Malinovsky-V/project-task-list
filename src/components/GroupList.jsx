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