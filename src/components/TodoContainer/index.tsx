import { useContext } from "react";
import { themeConfig } from "../../contexts/theme";
import { ThemeContext } from "../../contexts/ThemeContext";


interface TodoContainerProps {
    children: React.ReactNode;
};


export const TodoContainer = ({children}: TodoContainerProps) => {

    const {theme} = useContext(ThemeContext);

    return (

        <main className={`h-screen ${themeConfig[theme].layout.backgroundColor}`}>
            <div className={`${themeConfig[theme].layout.heroClass} h-80 b-cover bg-center`}>
                <div className="max-w-175 m-auto mb-6 px-6"> 
                    {children}
                </div>
            </div>
        </main>

    );
};
