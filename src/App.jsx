import { useState } from 'react'
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import WelcomeScreen from "./Pages/WelcomeScreen"
// import Sidebar from "./Components/Sidebar"
// import ModelDropdown from './Components/ModelDropdown'
// import Textfield from "./Components/Textfield"
// import Header from "./Components/Header"
 import Chat from "./Pages/Chat"
// import Login from "./Pages/Login"
// import Forgotpassword from "./Pages/Forgotpassword"
// import ChatTexts from './Pages/ChatTexts'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      {/* <BrowserRouter>
      <Routes>
          <Route path="/" element={<WelsomeScreenCard />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/Chat" element={<Chat />} />
        </Routes>
      </BrowserRouter> */}
      <Chat />
      {/* <ChatTexts /> */}

    </>
  )
}

export default App
