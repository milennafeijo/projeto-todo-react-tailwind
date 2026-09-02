import IconSun from '/images/icon-sun.svg';
import IconMoon from '/images/icon-moon.svg';

export const themeConfig = {
    light: {
        name: 'light',
        layout: {
            backgroundColor: 'bg-gray-600',
            textColor: 'text-purple-600',
        },
        todo: {
            backgroundColor: 'bg-gray-50',
            borderColor: 'border-navy-950',
            borderColorList: 'border-purple-300',
            textColor: 'text-navy-950'
        },
        icon: IconSun,
    },

    dark: {
        name: 'dark',
        layout: {
            backgroundColor: 'bg-navy-950',
            textColor: 'text-[#9c9a9a]',
        },
        todo: {
            backgroundColor: 'bg-navy-900',
            borderColor: 'border-purple-700',
            borderColorList: 'border-purple-800',
            textColor: 'text-[#9c9a9a]'
        },
        icon: IconMoon
    },
}

