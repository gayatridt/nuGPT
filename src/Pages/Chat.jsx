import * as React from 'react';
import Header from "../Components/Header"
import ModelDropdown from "../Components/ModelDropdown"
import Sidebar from "../Components/Sidebar"
import Textfield from "../Components/Textfield"


export default function Chat() {
  return (
    <div>
      <Header />
      <Sidebar />
      <ModelDropdown />
      <Textfield />
    </div>
  );
}
