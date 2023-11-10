import { React , useState , useEffect } from "react"
import { BrowserRouter , Routes , Route } from "react-router-dom"
import HomePage from "./pages/homepage";
import About from "./pages/about";

const App = () => {
    return <>
        <BrowserRouter>
            <main>
            <Routes>
                <Route 
                    path = "/"
                    element = { <HomePage initialMoney = {0} /> }
                />
                <Route
                    path = "/about"
                    element = { <About /> }
                />
            </Routes>
            </main>
        </BrowserRouter>
    </>
};

export default App