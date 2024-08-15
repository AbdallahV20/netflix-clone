import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LandingPage from "./pages/LandingPage/LandingPage";
import SignIn from "./pages/SignIn/SignIn";
import SignUp from "./pages/SignUp/SignUp";
import Home from "./pages/Home/Home";
const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" Component={LandingPage} />
        <Route path="/signin" Component={SignIn} />
        <Route path="/signup" Component={SignUp} />
        <Route path="/home" Component={Home} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
