import { React , useState , useEffect } from "react"
import { BrowserRouter , Routes , Route } from "react-router-dom"
import HomePage from "./pages/homepage";

const App = () => {
    return <>
        <BrowserRouter>
            <main>
            <Routes>
                <Route 
                    path = "/"
                    element = { <HomePage /> }
                />
                <Route
                    path = "/about"
                    element = { 'About' }
                />
            </Routes>
            </main>
        </BrowserRouter>
    </>
};

export default App