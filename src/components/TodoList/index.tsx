import { useContext } from "react";
import { ThemeContext } from "../../contexts/ThemeContext";
import { themeConfig } from "../../contexts/theme";
import IconCheck from "/images/icon-check.svg";

interface Todo {
    id: number;
    text: string;
    completed: boolean;
}

interface TodoListProps {
    todos: Todo[];
    toggleTodoCompleted: (id: number) => void;
    setFilter: (filter: "all" | "active" | "completed") => void;
    filter: "all" | "active" | "completed";
    clearCompleted: () => void;
}

const TodoList = ({ todos, toggleTodoCompleted, setFilter, filter, clearCompleted }: TodoListProps) => {

    const { theme } = useContext(ThemeContext);

    return (

        <>
            <div className={themeConfig[theme].todo.backgroundColor + " rounded-md"}>

                <ul>
                    {todos.map((todo) => (
                        <li className={`border-b ${themeConfig[theme].todo.borderColorList} p-6 cursor-pointer`} key={todo.id}>
                            <div className="flex items-center gap-5">
                                <span className="w-6 h-6 rounded-full hover:bg-[linear-gradient(to_right,hsl(192,100%,67%),hsl(280,87%,65%))] flex justify-center items-center hover:p-px">
                                    <button
                                        onClick={() => toggleTodoCompleted(todo.id)}
                                        className={themeConfig[theme].todo.borderColor + " " + themeConfig[theme].todo.backgroundColor + " w-full h-full border border-navy-850 rounded-full cursor-pointer" + (todo.completed ? " bg-[linear-gradient(to_right,hsl(192,100%,67%),hsl(280,87%,65%))] border-none" : "")}>

                                        {todo.completed && <img src={IconCheck} alt="check icon" className="m-auto" />}

                                    </button>
                                </span>
                                <p className={`${themeConfig[theme].todo.textColor} ${todo.completed ? "line-through opacity-50" : ""}`}>{todo.text}</p>
                            </div>
                        </li>
                    ))}
                </ul>

                <div className="text-sm flex justify-between items-center p-6">
                    <p className={themeConfig[theme].todo.textColor}>{todos.length} items total</p>

                    <div className="hidden md:flex gap-4">
                        <button onClick={() => setFilter("all")} className={`${filter === "all" ? "text-bright-blue" : themeConfig[theme].todo.textColor} cursor-pointer ${themeConfig[theme].todo.hoverTextColor}`}>All</button>

                        <button onClick={() => setFilter("active")} className={`${filter === "active" ? "text-bright-blue" : themeConfig[theme].todo.textColor} cursor-pointer ${themeConfig[theme].todo.hoverTextColor}`}>Active</button>

                        <button onClick={() => setFilter("completed")} className={`${filter === "completed" ? "text-bright-blue" : themeConfig[theme].todo.textColor} cursor-pointer ${themeConfig[theme].todo.hoverTextColor}`}>Completed</button>
                    </div>

                    <button 
                    onClick={clearCompleted}
                    className={`${themeConfig[theme].todo.textColor} cursor-pointer ${themeConfig[theme].todo.hoverTextColor}`}>Clear Completed</button>
                </div>


            </div>



            <div className={themeConfig[theme].todo.backgroundColor + " rounded-md flex justify-center gap-4 p-4 mt-6 md:hidden"}>

                <button onClick={() => setFilter("all")} className={`${filter === "all" ? "text-bright-blue" : themeConfig[theme].todo.textColor} cursor-pointer ${themeConfig[theme].todo.hoverTextColor}`}>All</button>

                <button onClick={() => setFilter("active")} className={`${filter === "active" ? "text-bright-blue" : themeConfig[theme].todo.textColor} cursor-pointer ${themeConfig[theme].todo.hoverTextColor}`}>Active</button>

                <button onClick={() => setFilter("completed")} className={`${filter === "completed" ? "text-bright-blue" : themeConfig[theme].todo.textColor} cursor-pointer ${themeConfig[theme].todo.hoverTextColor}`}>Completed</button>
            </div>



        </>

    )
}

export default TodoList; 