import { BrowserRouter, Routes, Route } from "react-router-dom"
import Search from "../views/Search"
import RenderRouter from "./RenderRouter"

const RouterNavigation = () => {
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<RenderRouter element={<Search/>}/>}/>
            </Routes>
        </BrowserRouter>
    )
}
export default RouterNavigation