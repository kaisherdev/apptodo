import { useState } from 'react'
import { v4 as uuidv4 } from 'uuid'
import { AiOutlinePlusCircle } from "react-icons/ai";
import PropTypes from 'prop-types';

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
    setInput('')
  }

  return (
    <form
      className="flex flex-wrap justify-end items-center relative"
      onSubmit={handleSend}>
      <input
        required
        type="text"
        className="w-full p-4 rounded-lg outline-none bg-white text-lg border-2 border-secondary text-gray-600"
        placeholder="Start writing your task..."
        name="text"
        value={input}
        onChange={handleChange}/>
      <button className="p-5 bg-terciary rounded-tr-lg rounded-br-lg border-none absolute">
        <AiOutlinePlusCircle className='size-6' />
      </button>
    </form>
  )
}

TodoForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export { TodoForm }