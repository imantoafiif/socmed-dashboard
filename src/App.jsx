import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import User from "./pages/user"
import Detail from "./pages/detail"

const App = () => {
    return (
       <Router>
            <Routes>
                <Route exact path="/" element={ <User/> } />
                <Route exact path="/detail" element={ <Detail/> } />
            </Routes>
       </Router>
    )
}

export default App