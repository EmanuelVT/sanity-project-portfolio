import {BrowserRouter, Route, Routes} from "react-router-dom"
import Home from "./components/Home";
import About from "./components/About";
import SinglePost from "./components/SinglePost";
import Post from "./components/Post";
import Project from "./components/Project";
import Navbar from "./components/Navbar";
function App() {
  return(
    <BrowserRouter>
    <Navbar />
      <Routes>
        <Route element={<Home/>} path='/' exact/>
        <Route element={<About/>} path='/about'/>
        <Route element={<SinglePost/>} path='/post/:slug'/>
        <Route element={<Post/>} path='/post'/>
        <Route element={<Project/>} path='/project'/>

      </Routes>
    </BrowserRouter>
  )
}

export default App;

