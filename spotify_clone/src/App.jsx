import Navbar from "./components/navbar.jsx"
import './App.css'
import { Routes } from 'react-router-dom'
import Sidebar from "./components/sidebar.jsx"

function App() {
  return (
    <div>
      <Navbar />
      <Sidebar />
    </div>
  );
}

export default App