﻿import { useLayoutEffect, useState } from 'react';

const isDarkTheme = window.matchMedia('(prefers-color-scheme: dark)').matches;
const defaultTheme = isDarkTheme ? 'dark' : 'light';
export const useTheme = () => {
    const [theme, setTheme] = useState(localStorage.getItem('theme') || defaultTheme );

    useLayoutEffect(() => {
        document.documentElement.setAttribute('data-theme', theme);
        localStorage.setItem('theme', theme);
        
    }, [theme]);

    // Return an array or object with both values
    return [theme, setTheme] as const;
};
