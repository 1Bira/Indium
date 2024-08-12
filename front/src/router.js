import { BrowserRouter, Routes, Route } from "react-router-dom"
import Cadastrar from "./pages/Cadastrar";
import Layout from "./pages/Layout";
import Blog from "./pages/blog/Blogs";

function AppRouter() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Layout/>}/>
                <Route path="/blog" element={<Blog/>}/>
                <Route path="/cadastrar" element={<Cadastrar/>}/>
            </Routes>
        </BrowserRouter>
    )
}

export default AppRouter;