import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import WelcomeScreen from "./Pages/WelcomeScreen";
import Chat from "./Pages/Chat";
import Login from "./Pages/Login";
import Forgotpassword from "./Pages/Forgotpassword";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      {
        <Router>
          <Routes>
            <Route path="/" element={<WelcomeScreen />} />
            <Route path="/Login" element={<Login />} />
            <Route path="/Forgotpassword" element={<Forgotpassword />} />
            <Route path="/Chat" element={<Chat />} />
          </Routes>
        </Router>
      }
      {/* <WelcomeScreen /> */}
    </>
  );
}

export default App;
