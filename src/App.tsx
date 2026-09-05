import TodoHeader from "./components/TodoHeader";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";
import { TodoContainer } from "./components/TodoContainer";
import { useTodo } from "./hooks/useTodo";


function App() {

  const { addTodo, toggleTodoCompleted, setFilter, filter, clearCompleted, filteredTodos } = useTodo();

  return (
    <TodoContainer>
      <TodoHeader></TodoHeader>
      <TodoForm onSubmit={addTodo}></TodoForm>
      <TodoList todos={filteredTodos} toggleTodoCompleted={toggleTodoCompleted} setFilter={setFilter} filter={filter} clearCompleted={clearCompleted}>
      </TodoList>
    </TodoContainer>

  );
};

export default App;
