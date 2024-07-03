import React, { useState } from 'react';
import Header from "../Components/Header";
import Sidebar from "../Components/Sidebar";
import ChatTexts from './ChatTexts';

export default function Chat() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div style={{ display: 'flex', flexDirection: 'column', height: '100vh' }}>
      <Header isSidebarOpen={isSidebarOpen} />
      <div style={{ display: 'flex', flexGrow: 1 }}>
        <Sidebar isSidebarOpen={isSidebarOpen} setIsSidebarOpen={setIsSidebarOpen} darkMode={darkMode} setDarkMode={setDarkMode} />
        <div style={{ flexGrow: 1, width: '1500px', marginLeft: isSidebarOpen ? '240px' : '0', padding: '20px', marginTop: '80px' }}>
          <ChatTexts isSidebarOpen={isSidebarOpen} darkMode={darkMode} />
        </div>
      </div>
    </div>
  );
}
