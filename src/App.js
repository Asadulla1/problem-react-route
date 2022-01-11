import logo from "./logo.svg";
import "./App.css";
import Home from "./components/Home/Home";
import NotFound from "./components/NotFound/NotFound";
import AboutUs from "./components/AboutUs/AboutUs";
import Friends from "./components/Friends/Friends";
import { BrowserRouter, Switch, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route path="/home">
            <Home></Home>
          </Route>
          <Route path="/about">
            <AboutUs></AboutUs>
          </Route>
          <Route path="/notFound">
            <NotFound></NotFound>
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
