import { TodoList } from './components/TodoList'
import './App.css'
import { Header } from './components/Header'

function App() {

  return (
    <>
      <div className="flex flex-wrap justify-center items-center">
        <div className="bg-primary w-[600px] min-h-[500px] rounded-3xl p-6 m-2">
          <Header />
          <TodoList />
        </div>
      </div>
    </>
  )
}

export default App
