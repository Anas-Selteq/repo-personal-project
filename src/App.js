import Homepage from './Pages/Homepage/Homepage';
import Aboutus from './Pages/Aboutus/Aboutus';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/About-me" element={<Aboutus />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
