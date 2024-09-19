import { BrowserRouter, Routes, Route } from 'react-router-dom';
import StudentInteraction from './students';
import Navbar from './navbar';
import Login from './login';
import AboutUs from './About';
export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navbar />} />
        <Route path="/login" element={<Login />} />
        <Route path="/AboutUs" element={<AboutUs />} />
        <Route path="/students" element={<StudentInteraction />} />
      </Routes>
    </BrowserRouter>
  );
}
