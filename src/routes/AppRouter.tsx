import { Navigate, Route, BrowserRouter as Router, Routes } from "react-router-dom"
import { HomePage } from "../pages/HomePage"
import { TemplateRoute } from "./TemplateRoute"


export const AppRouter = () => {
    return (
        <Router>
            <Routes>
                <Route path='/' element={<TemplateRoute />}>
                    <Route
                        index
                        element={<HomePage />}
                    />

                    <Route path="*" element={<Navigate to="/" />} />
                </Route>
            </Routes>
        </Router>
    )
}
