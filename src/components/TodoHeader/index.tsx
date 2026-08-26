import IconSun from '/images/icon-sun.svg';

const TodoHeader = () => {
    return (<header className="flex justify-between pt-20 mb-14" >
        <h1 className="text-white text-[2.5rem] font-bold tracking-[1rem]">TODO</h1>

        <button>
            <img className="w-8 h-8" src={IconSun} alt="Toggle Theme" />
        </button>
    </header>
    )
}

export default TodoHeader;