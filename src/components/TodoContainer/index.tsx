import { useContext } from "react";
import { themeConfig } from "../../contexts/theme";
import { ThemeContext } from "../../contexts/ThemeContext";


interface TodoContainerProps {
    children: React.ReactNode;
};


export const TodoContainer = ({children}: TodoContainerProps) => {

    const {theme} = useContext(ThemeContext);

    return (

        <main className={`relative min-h-screen ${themeConfig[theme].layout.backgroundColor}`}>
            <div className={`${themeConfig[theme].layout.heroClass} absolute inset-x-0 top-0 h-80 bg-center`}>
            </div>
            <div className="relative max-w-175 m-auto pb-6 px-6">
                {children}
            </div>
        </main>

    );
};
