import React from "react";
// import Test from "./pages/test";
// import "./pages/style/test.css";
import {BrowserRouter as Router,Routes,Route} from "react-router-dom";
import Dashb from "./pages/dashboar/dashb"
import Test from "./pages/test";

function App() {
  return (
//  <Dashb/>
<Router>
  <Routes>
    <Route path="/dashboard" element={<Dashb/>}/>
    <Route  path="/test" element={<Test/>}/>
  </Routes>
</Router>
 
  );
}

export default App;



