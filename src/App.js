import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Home from "./pages/home/Home/Home";
import List from "./pages/home/list/List";
import Match from "./pages/home/match/Match";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/matches" element={<List />}></Route>
        <Route path="/matches/:id" element={<Match />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
