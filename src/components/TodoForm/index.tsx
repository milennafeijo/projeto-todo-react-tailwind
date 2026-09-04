import { useContext } from "react";
import { ThemeContext } from "../../contexts/ThemeContext";
import { themeConfig } from "../../contexts/theme";

interface TodoFormProps {
    onSubmit: (event: React.FormEvent<HTMLFormElement>) => void;
}

const TodoForm = ({ onSubmit }: TodoFormProps) => {
    const { theme } = useContext(ThemeContext);
    return (
        <form className="relative mb-10" onSubmit={onSubmit}>
            <span className={`absolute w-6 h-6 border ${themeConfig[theme].todo.borderColor} top-1/2 transform -translate-y-1/2 rounded-full left-6`}></span>

            <input type="text" placeholder="Create a new todo..." name="todo" className={`${themeConfig[theme].todo.backgroundColor} ${themeConfig[theme].todo.textColor} rounded-md py-6 pl-16 outline-none text-lg w-full`} />

        </form>
    )
}

export default TodoForm;