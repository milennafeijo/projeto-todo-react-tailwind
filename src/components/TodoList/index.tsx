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

        <>
            <div className={themeConfig[theme].todo.backgroundColor + " rounded-md"}>

                <ul>
                    {todos.map((todo) => (
                        <li className={`border-b ${themeConfig[theme].todo.borderColorList} p-6 cursor-pointer`} key={todo.id}>
                            <div className="flex items-center gap-5">
                                <span className="w-6 h-6 rounded-full hover:bg-[linear-gradient(to_right,hsl(192,100%,67%),hsl(280,87%,65%))] flex justify-center items-center hover:p-px">
                                    <button className={themeConfig[theme].todo.borderColor + " " + themeConfig[theme].todo.backgroundColor + " w-full h-full border border-navy-850 rounded-full cursor-pointer"}></button>
                                </span>
                                <p className={themeConfig[theme].todo.textColor}>{todo.text}</p>
                            </div>
                        </li>
                    ))}
                </ul>

                <div className="text-sm flex justify-between items-center p-6">
                    <p className={themeConfig[theme].todo.textColor}>{todos.length} items total</p>

                    <div className="hidden md:flex gap-4">
                        <button className="text-bright-blue cursor-pointer hover:underline">All</button>
                        <button className={themeConfig[theme].todo.textColor + " cursor-pointer hover:underline"}>Active</button>
                        <button className={themeConfig[theme].todo.textColor + " cursor-pointer hover:underline"}>Completed</button>
                    </div>

                    <button className={themeConfig[theme].todo.textColor + " cursor-pointer hover:underline"}>Clear Completed</button>
                </div>



            </div>

            <div className={themeConfig[theme].todo.backgroundColor + " rounded-md flex justify-center gap-4 p-4 mt-6 md:hidden"}>
                <button className="text-bright-blue cursor-pointer hover:underline">All</button>
                <button className={themeConfig[theme].todo.textColor + " cursor-pointer hover:underline"}>Active</button>
                <button className={themeConfig[theme].todo.textColor + " cursor-pointer hover:underline"}>Completed</button>
            </div>
        </>

    )
}

export default TodoList; 