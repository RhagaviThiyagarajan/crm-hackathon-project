import "./App.css";
import { Routes, Route, Link } from "react-router-dom";
import { Dashboard } from "./pages/Dashboard";
import { TicketPage } from "./pages/TicketPage";
import { Nav } from "./components/Nav";
function App() {
  return (
    <div className="App">
      
      <Nav />
      <Routes>
        <Route path="/home" element={<Dashboard />}> </Route>
         
       
        <Route path="/ticket" element={<TicketPage />} />
        <Route path="/ticket/:id" element={<TicketPage editMode={true} />} />
      </Routes>
      
    </div>
  );
}

export default App;
