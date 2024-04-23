import { Route, Routes } from "react-router-dom";
import "./App.css";
import NavBar from "./components/NavBar";
import Features from "./pages/Features";
import Home from "./pages/Home";
import Workouts from "./pages/Workouts";
// import { Home, Features, Workouts } from "./pages";
function App() {
  return (
    <>
      <NavBar />
      <Routes>
        {/* TODO: DA SE DODAT SITE ELEMENTI VO NAVBAR
        TODO: DA SE PREIMENUVAT / SREDAT VO ZAVISNOST SHO KE SE KORISTI */}
        <Route path="/" element={<Home />} />
        <Route path="/features" element={<Features />} />
        <Route path="/workouts" element={<Workouts />} />
      </Routes>
    </>
  );
}

export default App;
