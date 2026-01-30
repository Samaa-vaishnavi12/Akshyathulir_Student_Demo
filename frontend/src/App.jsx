import React from "react";
import {BrowserRouter as Router,Routes,Route, BrowserRouter} from "react-router-dom";
import Test from "./pages/test"
import ExpertForm from "./pages/ExpertForm";
function App() {
  return (
    <>
  <Routes>
  <Route path="/" element={<Test />} />
  <Route path="/expertform" element={<ExpertForm />} />
  <Route path="/test" element={<Test />} />
</Routes>

</>
 
  );
}

export default App;


