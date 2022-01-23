import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from "./pages/home";
import About from "./pages/about";
import Media from "./pages/media";
import Confirmation from "./pages/confirmation";
import Research from "./pages/solutions/research";
import Design from "./pages/solutions/design";
import Development from "./pages/solutions/develop";
import Improvement from "./pages/solutions/improvement";

const App = () => {
 return (
   <div>
     <BrowserRouter>
       <Routes>
         <Route path="" exact element={<Home />} />
         <Route path="about" exact element={<About />} />
         <Route path="media" exact element={<Media />} />
         <Route path="research" exact element={<Research />} />
         <Route path="design" exact element={<Design />} />
         <Route path="development" exact element={<Development />} />
         <Route path="improvement" exact element={<Improvement />} />
         <Route path="confirmation" exact element={<Confirmation />} />
       </Routes>
     </BrowserRouter>
   </div>
 );
}

export default App
