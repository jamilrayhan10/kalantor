import "./App.css";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home/Home";
import PreOrderAllItem from "./components/Pages/PreOrderAllItem/PreOrderAllItem";
import BookDetails from "./components/BookDetails/BookDetails";
import NovelBooks from "./components/DiffBooks/NovelBooks/NovelBooks";
import NovelBookDetails from "./components/DiffBooks/NovelBookDetails/NovelBookDetails";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/novelBooks" element={<NovelBooks/>} />
          <Route path="/preOrderAllItem" element={<PreOrderAllItem />} />
          <Route path="/home/bookdetails/:id" element={<BookDetails />} />
          <Route path="novelBooks/novelBookdetails/:id" element={<NovelBookDetails/>} />
          
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
