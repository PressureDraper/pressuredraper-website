import { Navigate, Route, BrowserRouter as Router, Routes } from "react-router-dom"
import { HomePage } from "../pages/HomePage"


export const AppRouter = () => {
    return (
        <Router>
            <Routes>
                <Route
                    path="/"
                    element={<HomePage />}
                />

                <Route path="*" element={<Navigate to="/" />} />
            </Routes>
        </Router>
    )
}
