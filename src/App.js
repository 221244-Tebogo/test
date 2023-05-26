/*The code imports necessary dependencies and components for the app, including the CSS file, routing components from react-router-dom, the Sidebar component, and various page components. */
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Sidebar from './components/sidebar';
import Dashboard from './pages/dashboard';
import Compare from './pages/compare';
import Timeline from './pages/timeline.js';  


/*The App component is the root component of the application. It renders the main structure of the app, including the Sidebar component and the content area.
The Routes component from react-router-dom is used to define the routes of the application.
Each Route defines a specific path and its corresponding component to be rendered when that path is accessed. For example, '/' renders the Dashboard component when the root path is accessed, '/timeline' renders the Timeline component, and '/compare' renders the Compare component.
The component elements are passed as values to the element prop of each Route.
The App component is wrapped in div elements with appropriate CSS classes for styling purposes. */
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
