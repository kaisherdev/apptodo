import { useState, React } from 'react'
import { v4 as uuidv4 } from 'uuid'
import { AiOutlinePlusCircle } from "react-icons/ai";

function TodoForm(props) {
  const [input, setInput] = useState('')

  const handleChange = (e) => {
    setInput(e.target.value)
  }

  const handleSend = (e) => {
    e.preventDefault()
    const newTodo = {
      id: uuidv4(),
      text: input,
      completed: false,
    }

    props.onSubmit(newTodo)
  }

  return (
    <form
      className="flex flex-wrap justify-center items-center"
      onSubmit={handleSend}
    >
      <input
        required
        type="text"
        className="w-[442px] p-4 rounded-tl-lg rounded-bl-lg outline-none bg-white text-lg border-2 border-secondary text-gray-600"
        placeholder="Enter a task"
        name="text"
        onChange={handleChange}
      />
      <button className="p-5 bg-terciary rounded-tr rounded-br border-none"><AiOutlinePlusCircle className='size-6' /></button>
    </form>
  )
}

export { TodoForm }