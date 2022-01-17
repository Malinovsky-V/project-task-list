import { useMemo, useState } from "react";
import MySelect from "./UI/select/MySelect";

export default function TaskSort({ tasks, setTasks }) {
  const [sortMethod, setSelectedSortMethod] = useState("");

  const sortOptions = [
    { value: "title", name: "За назвою" },
    { value: "deadline", name: "По Даті" },
    { value: "status", name: "За статусом" },
  ];

  useMemo(() => {
    setTasks(
      [...tasks].sort((a, b) => a[sortMethod].localeCompare(b[sortMethod]))
    );
  }, [sortMethod]);
  
  return (
    <div className="sortSelect">
      <MySelect
        options={sortOptions}
        defaultValue="Сортування"
        value={sortMethod}
        setMethod={setSelectedSortMethod}
      />
    </div>
  );
}
