import "./App.css";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home/Home";
import PreOrderAllItem from "./components/Pages/PreOrderAllItem/PreOrderAllItem";
import BookDetails from "./components/BookDetails/BookDetails";
import NovelBooks from "./components/DiffBooks/NovelBooks/NovelBooks";
import NovelBookDetails from "./components/DiffBooks/NovelBookDetails/NovelBookDetails";
import HistoryBooksDetails from "./components/DiffBooks/HistoryBooksDetails/HistoryBooksDetails";
import HistoryBooks from "./components/DiffBooks/HistoryBooks/HistoryBooks";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/novelBooks" element={<NovelBooks/>} />
          <Route path="/historyBooks" element={<HistoryBooks/>} />
          <Route path="/preOrderAllItem" element={<PreOrderAllItem />} />
          <Route path="/home/bookdetails/:id" element={<BookDetails />} />
          <Route path="novelBooks/novelBookdetails/:id" element={<NovelBookDetails/>} />
          <Route path="historyBooks/historyBookdetails/:id" element={<HistoryBooksDetails/>} />
          
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
