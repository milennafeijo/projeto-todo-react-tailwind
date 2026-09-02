import { useContext } from "react";
import { ThemeContext } from "../../contexts/ThemeContext";
import { themeConfig } from "../../contexts/theme";
 
 const todos = [
        { id: 1, text: "Todo 1" },
        { id: 2, text: "Todo 2" },
        { id: 3, text: "Todo 3" },
    ]

const TodoList = () => { 
    
    const { theme } = useContext(ThemeContext);

    return (


        <div className={themeConfig[theme].todo.backgroundColor + " rounded-md"}>
            <ul>
                {todos.map((todo) => (
                    <li className={`border-b ${themeConfig[theme].todo.borderColorList} p-6`} key={todo.id}>
                        <div className="flex items-center gap-5">
                            <button className="w-6 h-6 border border-navy-850 rounded-full cursor-pointer"></button>
                            <p className={themeConfig[theme].todo.textColor}>{todo.text}</p>
                        </div>
                    </li>
                ))}
            </ul>

            <div className="flex justify-between items-center p-6">
                <p className={themeConfig[theme].todo.textColor + " cursor-pointer"}>{todos.length} items total</p>

                <div className="flex gap-4">
                    <button className="text-bright-blue cursor-pointer">All</button>
                    <button className={themeConfig[theme].todo.textColor + " cursor-pointer"}>Active</button>
                    <button className={themeConfig[theme].todo.textColor + " cursor-pointer"}>Completed</button>
                </div>

                <button className={themeConfig[theme].todo.textColor + " cursor-pointer"}>Clear Selected</button>
            </div>

        </div>

    )
}

export default TodoList; 