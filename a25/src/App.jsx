import Navbar from './Navbar';
import Home from './pages/Home';
import Contacts from './pages/Contacts'; // Import Contacts component
import About from './pages/About'; // Import About component
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <>
      <Navbar /> {/* Navbar should be always visible */}
      <div className="container">
        <Routes>
          {/* Define Route for Home Page */}
          <Route path="/" element={<Home />} />

          {/* Define Route for Contacts Page */}
          <Route path="/contacts" element={<Contacts />} />

          {/* Define Route for About Page */}
          <Route path="/about" element={<About />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
