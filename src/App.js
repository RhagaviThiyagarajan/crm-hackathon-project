import "./App.css";
import { Routes, Route, Link } from "react-router-dom";
import { Dashboard } from "./pages/Dashboard";
import { useState } from 'react'
import TicketPage from './pages/TicketPage'
import { Nav } from "./components/Nav";
import CategoriesContext from './context'
function App() {
  const [categories, setCategories] = useState(null)
  const value = { categories, setCategories }
  return (
    <div className="App">
       <CategoriesContext.Provider value={value}>

     
      
      <Nav />
      <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/ticket" element={<TicketPage />} />
            <Route path="/ticket/:id" element={<TicketPage editMode={true} />} />
          </Routes>
          </CategoriesContext.Provider>
      
    </div>
  );
}

export default App;
