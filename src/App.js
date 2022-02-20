
import Home from "./pages/Home";
import SignIn from "./pages/SignIn";

import { Routes, Route, Link ,Navigate} from "react-router-dom";



function App() {
  return (
    <div className="App">
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/login" element={<SignIn />} />
   
      </Routes>
    </div>
    
  );
}

export default App;
