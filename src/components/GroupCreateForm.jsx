import React, { useState } from 'react'
import MyInput from './UI/input/MyInput'

export default function GroupCreateForm({createGroup, setVisibleGroup}) {
    const [createdGroupTitle, setCreatedGroupTitle] = useState({value: '', name: ''})
    const [emptyFill, setEmptyFill] = useState('')

const addNewGroup = (e) => {
   e.preventDefault()
   if(createdGroupTitle.value){
    createGroup(createdGroupTitle)
    setCreatedGroupTitle({value: '', name: '', id:''})
    setEmptyFill('')
   } else {
    setEmptyFill('error')
   }
   
}
const canselTaskCreating = (e) => {
    e.preventDefault()
    setVisibleGroup(false)
}
const createdGroupHandler = (e) => {
    setCreatedGroupTitle({ value: e.target.value, name: e.target.value, id:e.target.value + e.target.value })
}

    return (
        <form>
            <MyInput
        emptyField={!createdGroupTitle.value ? emptyFill : ""}
        value={createdGroupTitle.value}
        onChange={createdGroupHandler}
        type="text"
        placeholder="назва групи"
      />

      <button className="btn create-btn" onClick={addNewGroup}>
        Створити групу
      </button>
      <button className="btn cancel-btn" onClick={canselTaskCreating}>
        Відмінити створення
      </button>
        </form>
    )
}
