import React, { useState, useEffect } from 'react';
import Header from "../Components/Header";
import Sidebar from "../Components/Sidebar";
import ChatTexts from './ChatTexts';
import { useMediaQuery } from '@mui/material';

export default function Chat() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [darkMode, setDarkMode] = useState(false);
  const [chatInstances, setChatInstances] = useState([{ id: Date.now(), messages: [] }]);
  const [activeChatId, setActiveChatId] = useState(chatInstances[0].id);
  const isMobile = useMediaQuery('(max-width:768px)');

  useEffect(() => {
    if (isMobile) {
      setIsSidebarOpen(false);
    }
  }, [isMobile]);

  const createNewChat = () => {
    const newChat = { id: Date.now(), messages: [] };
    setChatInstances([newChat, ...chatInstances]);
    setActiveChatId(newChat.id);
  };

  return (
    <div style={{ 
      display: 'flex', 
      flexDirection: 'column', 
      height: '100vh',
    }}>
      <Header isSidebarOpen={isSidebarOpen} setIsSidebarOpen={setIsSidebarOpen} isMobile={isMobile} />
      <div style={{ display: 'flex', flexGrow: 1, overflow: 'hidden' }}>
        <Sidebar 
          isSidebarOpen={isSidebarOpen} 
          setIsSidebarOpen={setIsSidebarOpen} 
          darkMode={darkMode} 
          setDarkMode={setDarkMode}
          createNewChat={createNewChat}
          chatInstances={chatInstances}
          setActiveChatId={setActiveChatId}
          isMobile={isMobile}
        />
        <div style={{ 
          flexGrow: 1, 
          width: '100%', 
          marginLeft: isSidebarOpen && !isMobile ? '240px' : '0', 
          padding: isMobile ? '10px' : '20px', 
          marginTop: '64px',
          transition: 'margin-left 0.3s',
          overflow: 'auto',
        }}>
          <ChatTexts 
            isSidebarOpen={isSidebarOpen} 
            darkMode={darkMode} 
            chatInstance={chatInstances.find(chat => chat.id === activeChatId)}
            updateChatInstance={(updatedChat) => {
              setChatInstances(chatInstances.map(chat => 
                chat.id === updatedChat.id ? updatedChat : chat
              ));
            }}
            isMobile={isMobile}
          />
        </div>
      </div>
    </div>
  );
}