import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/Home.js';
import About from './components/About.js'

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/About' element={<About />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;