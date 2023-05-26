
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Sidebar from './components/sidebar';
import Dashboard from './pages/dashboard';
import Compare from './pages/compare';
import Timeline from './pages/timeline.js';  
//import Rightside from './components/rightside';

//div it's a parent ele
function App() {
  return (
    <div className="App">
        <div className="AppContainer">
      <Sidebar />
      <div>
      <Routes>
        <Route path='/' element= {<Dashboard />} />
        <Route path='/timeline' element={<Timeline/>} />
        <Route path='/compare' element={<Compare />} />
      </Routes>
      </div>
  
        </div>
    </div>
  );
}

export default App;
