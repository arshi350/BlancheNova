import { Route, Routes, BrowserRouter } from "react-router-dom"
import { Home } from "../pages/home"
import { Contain } from "../components/contain"

export function AppRoutes() {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Contain />} />
                </Routes>
            </BrowserRouter>
        </>
    )
}