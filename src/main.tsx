import {StrictMode, Suspense} from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import './i18next.ts'
import {BrowserRouter} from "react-router-dom";

createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <Suspense fallback={<div>Loading...</div>}>
            <BrowserRouter basename="/dnshzk">
                <App />
            </BrowserRouter>
        </Suspense>
    </StrictMode>
  
)


