import logo from "./logo.svg";
import "./App.css";
import Home from "./components/Home/Home";
import NotFound from "./components/NotFound/NotFound";
import AboutUs from "./components/AboutUs/AboutUs";
import Friends from "./components/Friends/Friends";
import {
  BrowserRouter,
  Switch,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";

function App() {
  return (
    <div className="App">
      {/* <Home></Home> */}
      <BrowserRouter>
        <Routes>
          <Route path="/home" element={<Home />}></Route>
          <Route path="/about" element={<AboutUs />}></Route>
          <Route path="/notFound" element={<NotFound />}></Route>
          <Route path="/" element={<Navigate to="/home" />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
