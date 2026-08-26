const TodoForm = () => {
    return (
        <form className="relative mb-10">
            <span className="absolute w-6 h-6 border border-navy-850 top-1/2 transform -translate-y-1/2 rounded-full left-6"></span>

            <input type="text" placeholder="Create a new todo..." name="todo" className="bg-navy-900 w-full text-white rounded-md py-6 pl-16 outline-none text-lg" />

        </form>
    )
}

export default TodoForm;