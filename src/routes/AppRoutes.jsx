import { Route, Routes, BrowserRouter } from "react-router-dom"
import { Home } from "../pages/home"

export function AppRoutes() {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Home />} />
                    
                </Routes>
            </BrowserRouter>
        </>
    )
}