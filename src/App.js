import "./App.css";
import { BrowserRouter } from "react-router-dom";
import { Router } from "./router/Router";
// import { Navbar } from "./components/Navbar";
// import { Home } from "./pages/Home";
// import { Register } from "./pages/Register";

function App() {
  return (
    <BrowserRouter>
      <Router />
      {/* <Navbar />
      <h1>zzzz</h1>
      <Routes>
        <Route exact path="/" components={Home} />
        {/* <Route path="/register" components={Register} /> */}
      {/* </Routes>  */}
    </BrowserRouter>
  );
}

export default App;
