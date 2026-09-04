import { useState, type FormEvent } from "react";
import TodoHeader from "./components/TodoHeader";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";
import { TodoContainer } from "./components/TodoContainer";


interface Todo {
  id: number;
  text: string;
  completed: boolean;
}


function App() {

  const [todos, setTodos] = useState<Todo[]>([]);

  const addTodo = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);
    const todoItem = formData.get("todo") as string;  

    if (!todoItem.trim()) return;

    setTodos(prev => [...prev, {
      id: Date.now(),
      text: todoItem,
      completed: false
    }]);

    event.currentTarget.reset();
  };

  const toggleTodoCompleted = (id: number) => {
    const newTodoList = todos.map(todo => {
      if (todo.id === id) {

        const completed = !todo.completed;

        return {
          ...todo,
          completed,
        };
      }
      return todo;
    });

    setTodos(newTodoList);
  };


  return (
    <TodoContainer>
      <TodoHeader></TodoHeader>
      <TodoForm onSubmit={addTodo}></TodoForm>
      <TodoList todos={todos} toggleTodoCompleted={toggleTodoCompleted}></TodoList>
    </TodoContainer>

  );
};

export default App;
