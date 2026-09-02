import { useContext } from "react";
import TodoHeader from "./components/TodoHeader";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";
import { themeConfig } from "./contexts/theme";
import { ThemeContext } from "./contexts/ThemeContext";



function App() { 
  const { theme } = useContext(ThemeContext);

  return (
    <main className={`h-screen ${themeConfig[theme].layout.backgroundColor}`}>
      <div className={`${themeConfig[theme].layout.heroClass} h-80 b-cover bg-center`}>
        <div className="max-w-175 m-auto mb-6 px-6">
          <TodoHeader />
          <TodoForm />  
          <TodoList />    

        </div>
      </div>
    </main>
  )
}

export default App;
