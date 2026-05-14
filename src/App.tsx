import { Routes, Route } from "react-router-dom";
import Home from "./screens/Home";
import MovieDetails from "./screens/MovieDetails";
// import MovieDetails from "./pages/MovieDetails";
import "./App.css"
import { useState } from "react";
import Header from "./components/Header";

function App() {
  const [searchQuery, setSearchQuery] = useState<string>("")

  return (
    <>
      <Header searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
      <Routes>
        <Route path="/" element={<Home searchQuery={searchQuery} />} />
        <Route path="/movie/:id" element={<MovieDetails />} />
      </Routes>
    </>
  );
}

export default App;