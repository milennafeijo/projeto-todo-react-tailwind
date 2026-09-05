import { useEffect, useState, type FormEvent } from "react";

export interface Todo {
    id: number;
    text: string;
    completed: boolean;
}

export const useTodo = () => {

    const [todos, setTodos] = useState<Todo[]>(() => {
        const savedTodos = localStorage.getItem("todos");

        if (!savedTodos) return [];

        try {
            const parsedTodos = JSON.parse(savedTodos);
            return Array.isArray(parsedTodos) ? parsedTodos : [];
        } catch {
            return [];
        }
    });
    const [filter, setFilter] = useState<"all" | "active" | "completed">("all");

    useEffect(() => {
        localStorage.setItem("todos", JSON.stringify(todos));
    }, [todos]);

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

        setFilter("all");
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

    const filteredTodos = todos.filter(todo => {
        if (filter === "active") return !todo.completed;
        if (filter === "completed") return todo.completed;
        return true;
    })

    const clearCompleted = () => {
        setTodos(prev => prev.filter(todo => !todo.completed));
    };


    return {

        addTodo,
        toggleTodoCompleted,
        filteredTodos,
        setFilter,
        filter,
        clearCompleted


    }
}
