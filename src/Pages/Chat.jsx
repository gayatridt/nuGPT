import React, { useState } from 'react';
import Header from "../Components/Header";
import ModelDropdown from "../Components/ModelDropdown";
import Sidebar from "../Components/Sidebar";
import ChatTexts from './ChatTexts';

// export default function Chat() {
//   const [isSidebarOpen, setIsSidebarOpen] = useState(true);

//   return (
//     <div style={{ display: 'flex', flexDirection: 'column', height: '100vh' }}>
//       {/* Header */}
//       <Header isSidebarOpen={isSidebarOpen} />

//       {/* Main content area */}
//       <div style={{ display: 'flex', flexGrow: 1 }}>
//         {/* Sidebar (always rendered because it's open by default) */}
//         <Sidebar isSidebarOpen={isSidebarOpen} setIsSidebarOpen={setIsSidebarOpen} />

//         {/* Chat interface */}
//         <div style={{ flexGrow: 1, marginLeft: isSidebarOpen ? '300px' : '0', padding: '20px' }}>
//           {/* Dropdown next to sidebar */}
//           <div style={{ position: 'absolute', top: '30px', left: isSidebarOpen ? '320px' : '20px', transition: 'left 0.3s' }}>
//             <ModelDropdown />
//           </div>
//           <ChatTexts />
//         </div>
//       </div>
//     </div>
//   );
// }


export default function Chat() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  return (
    <div style={{ display: 'flex', flexDirection: 'column', height: '100vh' }}>
      {/* Header */}
      <Header isSidebarOpen={isSidebarOpen} />

      {/* Main content area */}
      <div style={{ display: 'flex', flexGrow: 1 }}>
        {/* Sidebar (always rendered because it's open by default) */}
        <Sidebar isSidebarOpen={isSidebarOpen} setIsSidebarOpen={setIsSidebarOpen} />

        {/* Chat interface */}
        <div style={{ flexGrow: 1, marginLeft: isSidebarOpen ? '300px' : '0', padding: '20px', marginTop: '80px' }}>
          {/* Dropdown next to sidebar */}
          <div style={{ position: 'absolute', top: isSidebarOpen ? '12px' : '35px', left: isSidebarOpen ? '320px' : '20px', transition: 'left 0.3s' }}>
            <ModelDropdown />
          </div>
          <ChatTexts />
        </div>
      </div>
    </div>
  );
}
