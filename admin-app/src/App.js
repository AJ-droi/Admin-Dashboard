import SignUp from "./Components/SignUp";
import { BrowserRouter, Routes, Route} from "react-router-dom"
import Login from "./Components/Login";
import Dashboard from "./Dashboard/Dashboard";
import Homepage from "./Components/Homepage";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="login" element={<Login/>} />
          <Route path="signup" element={<SignUp />} />
          <Route path="dashboard/*" element={<Dashboard />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
