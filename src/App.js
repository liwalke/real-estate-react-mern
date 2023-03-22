import './App.css';
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home"
import About from "./pages/About/About"
import Properties from "./pages/Properties/Properties"
import Propertie from "./pages/Propertie/Propertie"
import Blog from "./pages/Blog/Blog"
import BlogPost from "./pages/BlogPost/BlogPost"
import Contact from "./pages/Contact/Contact"
import NoMatch from "./pages/NoMatch/NoMatch"
import Header from "./components/Header/Header"
import Footer from './components/Footer/Footer';

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/about' element={<About />}></Route>
        <Route path='/blog' element={<Blog />}></Route>
        <Route path='/blog/:id' element={<BlogPost />}></Route>
        <Route path='/properties' element={<Properties />}></Route>
        <Route path='/properties/:id' element={<Propertie />}></Route>
        <Route path='/contact' element={<Contact />}></Route>
        <Route path='*' element={<NoMatch />}></Route>
      </Routes>
      <Footer></Footer>
    </>
  );
}

export default App;
