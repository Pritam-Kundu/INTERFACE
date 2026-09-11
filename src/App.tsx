
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Navbar } from './components/layout/Navbar';
import { Footer } from './components/layout/Footer';
import { Home } from './pages/Home';
import { Reader } from './pages/Reader';
import { About } from './pages/About';
import { SoundToggle } from './components/ui/SoundToggle';

function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-background text-primary selection:bg-accent/30 selection:text-white flex flex-col">
        <Navbar />
        
        <main className="flex-grow pt-24 pb-12">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/read/:id" element={<Reader />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </main>

        <SoundToggle />
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
