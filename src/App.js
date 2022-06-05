import './App.css';
import { Route, Routes } from 'react-router-dom';
import Homeadmin from'./Components/homeadmin';
import User from'./Components/user';
import Navbar from'./Components/navbar';
function App() {
  return (
    <div >
      <Navbar />
      <Routes>
        <Route path="/" element={<User />} />
        <Route path="/admin" element={<Homeadmin />} />
      </Routes>
      </div>
  );
}

export default App;
