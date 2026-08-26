import TodoHeader from "./components/TodoHeader";
import TodoForm from "./components/TodoForm";

function App() {
  return (
  <main className="bg-navy-950 h-screen">
    <div className="bg-[url('/images/bg-desktop-dark.jpg')] h-80 bg-cover bg-center">
      <div className="max-w-175 m-auto mb-6 px-6">
        <TodoHeader />
        <TodoForm />
      </div>
    </div>
  </main>
  )
}

export default App;
