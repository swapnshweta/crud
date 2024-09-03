import './App.css';
import Create from './Component/create';
import Read from './Component/read';
import Update from './Component/update';
//import { BrowserRouter as Router, Routes } from 'react-router-dom'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
  <div className="main">
    <h2 className="main-header">React CRUD Operations</h2>
    <div>
      <Routes>
        <Route path='/create' element={<Create />} />
      </Routes>
    </div>
    <div style={{ marginTop: 20 }}>
      <Routes>
        <Route path='/read' element={<Read />} />
      </Routes>
    </div>
    <Routes>
      <Route path='/update' element={<Update />} />
    </Routes>
  </div>
</Router>
  );
}

export default App;
