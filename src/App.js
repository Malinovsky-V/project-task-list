import { useEffect, useState } from "react";
import GroupCreateForm from "./components/GroupCreateForm";
import GroupList from "./components/GroupList";
import TaskCreateForm from "./components/TaskCreateForm";
import TaskSort from "./components/TaskSort";
import MyModal from "./components/UI/MyModal/MyModal";
import './styles/App.css'


export default function App() {

  // Зберігаємо пости в Local Storage
  const saveLocalTasks = () => localStorage.setItem('tasks', JSON.stringify(tasks))
  const saveLocalGroup = () => localStorage.setItem('groups', JSON.stringify(groups))
  const getLocalTasks = () => {
    if(localStorage.getItem('tasks' === null)) {
      localStorage.setItem('tasks', JSON.stringify([]))
       } else {
        let tasksLocal = JSON.parse(localStorage.getItem('tasks'))
        console.log(tasksLocal)
        setTasks(tasksLocal)
       }
  }
  const getLocalGroups = () => {
    if(localStorage.getItem('groups' === null)) {
      localStorage.setItem('groups', JSON.stringify([]))
       } else {
        let groupsLocal = JSON.parse(localStorage.getItem('groups'))
        console.log(groupsLocal)
        setGroups(groupsLocal)
       }
  }

// Стейти нашого Проекту
const [tasks, setTasks] = useState([])
const [modalTask, setModalTask] = useState(false)
const [groups, setGroups] = useState([])
const [modalGroup, setModalGroup] = useState(false)
const [selectedStatus, setSelectedStatus] = useState('')

useEffect(()=> {
  getLocalTasks()
  getLocalGroups()
}, [])
useEffect(() => {
  saveLocalTasks()
  saveLocalGroup()
  } , [tasks, groups])

const createTask = (newTask) => {
  console.log(newTask)
 setTasks( [...tasks, newTask] )
}
const removeTask = (task) => {
 setTasks(tasks.filter(item => item.id !== task.id))
}
const getStatus = (newTaskWithStatus) => {
  setTasks(tasks.map(item =>{
    if(item.id === newTaskWithStatus.id){
     return newTaskWithStatus
    } else {
      return item
    }
  }))
}
const createGroup = (newGroup) =>{
  setGroups([...groups, newGroup])
console.log(newGroup)
}

const removeGroup = (group, tasks) => {
setGroups(groups.filter(itemGroup => itemGroup.value !== group))
setTasks(tasks. filter(itemTasks => itemTasks.group !== group) )

}
    
  return (
    <div className="App">
    
      <button  className="create-btn btn" style={{marginTop: 30}} onClick={()=> setModalGroup(true)}>
        Нова Група Завдань
      </button>
      <button  className="create-btn btn" style={{marginTop: 30}} onClick={()=> setModalTask(true)}>
        Нова задача
      </button>
      <MyModal visible={modalGroup} setVisible={setModalGroup}>
        <GroupCreateForm createGroup={createGroup} setVisibleGroup={setModalGroup} />
      </MyModal>
      <MyModal visible={modalTask} setVisible={setModalTask}>
      <TaskCreateForm createTask={createTask} setVisibleTask={setModalTask} groups={groups} />
      </MyModal>
      <TaskSort tasks={tasks} setTasks={setTasks} />
    
    {groups.length !== 0 ? 
    <GroupList 
    removeTask={removeTask} 
    removeGroup={removeGroup}
      getStatus={getStatus} 
      selectedStatus={selectedStatus}  
      setSelectedStatus={setSelectedStatus} 
      tasks={tasks} groups={groups} /> :
      <div className="withoutTask"> Створіть свою першу групу...</div>
  }  
    </div>
  );
}

