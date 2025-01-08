import React, { useState } from 'react';
import Main from "./Pages/Main.tsx";

const App: React.FC = () => {
    const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 });

    // Обробник для оновлення координат курсора
    const cursor = (e: MouseEvent) => {
        setCursorPos({
            x: e.pageX, // X-координата курсора
            y: e.pageY, // Y-координата курсора
        });
    };


    const customStyle = {
        '--x': `${cursorPos.x}px`,
        '--y': `${cursorPos.y}px`,
    } as React.CSSProperties;

    return (
        <div className="card" onMouseMove={(e) => cursor(e)} style={customStyle}>
            <Main/>
        </div>
    );
};

export default App;

