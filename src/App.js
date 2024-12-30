import "./App.css";

import Home from "./component/Home";
import { Routes, Route } from "react-router-dom";
import SingleMovies from "./component/single movie/SingleMovies";
import Error from "./component/Error";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="movie/:id" element={<SingleMovies/>} />
        <Route path="*" element={<Error />} />
      </Routes>
    </>
  );
}

export default App;
