import TodoHeader from "./components/TodoHeader";
import TodoForm from "./components/TodoForm";

const todos = [
  { id: 1, text: "Todo 1" },
  { id: 2, text: "Todo 2" },
  { id: 3, text: "Todo 3" },
]

function App() {
  return (
    <main className="bg-navy-950 h-screen">
      <div className="bg-[url('/images/bg-desktop-dark.jpg')] h-80 bg-cover bg-center">
        <div className="max-w-175 m-auto mb-6 px-6">
          <TodoHeader />
          <TodoForm />

          <div className="bg-navy-900 rounded-md">
            <ul>
              {todos.map((todo) => (
                <li className="border-b border-purple-700 p-6" key={todo.id}>
                  <div className="flex items-center gap-5">
                    <button className="w-6 h-6 border border-navy-850 rounded-full cursor-pointer"></button>
                    <p className="text-[#9c9a9a]">{todo.text}</p>
                  </div>
                </li>
              ))}
            </ul>

            <div className="flex justify-between items-center p-6">
              <p>{todos.length} items total</p>

              <div className="flex gap-4">
                <button className="text-[#9c9a9a] hover:text-white cursor-pointer">All</button>
                <button className="text-[#9c9a9a] hover:text-white cursor-pointer">Active</button>
                <button className="text-[#9c9a9a] hover:text-white cursor-pointer">Completed</button>
              </div>

              <button className="cursor-pointer">Clear Selected</button>
            </div>

          </div>


        </div>
      </div>
    </main>
  )
}

export default App;
