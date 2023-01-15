import React, { useContext } from "react";
import Landing from "./pages/landing";
import Login from "./pages/login";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import Home from "./pages/home";
import AuthContext from "./store/auth-context";

function App() {
  const authCtx = useContext(AuthContext)
  return (
    <div className="App">
      {/* <Router>
      <Routes>
        <Route exact path="/" element={<Landing />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/home" element={<Home />}></Route>
        </Routes>
    </Router> */}
      <Router>
        <Routes>
          {<Route exact path="/" element={<Landing />} />}
          {!authCtx.isLoggedIn && <Route path="/" element={<Landing />} />}
          {!authCtx.isLoggedIn && <Route path="/login" element={<Login />} />}
          {/* {<Route exact path="/home" element={<Home />} />} */}
          {authCtx.isLoggedIn && <Route exact path="/home" element={<Home />} />}
          {!authCtx.isLoggedIn && <Route  path="/home" element={<Home />} />}
        </Routes>
      </Router>
    </div>
  );
}

export default App;
