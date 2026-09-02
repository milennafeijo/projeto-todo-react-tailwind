import IconSun from '/images/icon-sun.svg';
import IconMoon from '/images/icon-moon.svg';

export const themeConfig = {
    light: {
        name: 'light',
        layout: {
            heroClass: 'theme-light',
            backgroundColor: 'bg-gray-300',
            textColor: 'text-purple-600',
        },
        todo: {
            backgroundColor: 'bg-gray-50',
            borderColor: 'border-navy-950',
            borderColorList: 'border-purple-300',
            textColor: 'text-navy-950'
        },
        icon: IconMoon,
    },

    dark: {
        name: 'dark',
        layout: {
            heroClass: 'theme-dark',
            backgroundColor: 'bg-navy-950',
            textColor: 'text-[#9c9a9a]',
        },
        todo: {
            backgroundColor: 'bg-navy-900',
            borderColor: 'border-purple-700',
            borderColorList: 'border-purple-800',
            textColor: 'text-[#9c9a9a]'
        },
        icon: IconSun
    },
}

