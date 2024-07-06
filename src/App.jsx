import { BrowserRouter } from 'react-router-dom';
import './App.css';
import Appcontent from './components/appcontent';
import Appfooter from './components/appfooter';
import Appheader from './components/appheader';

function App() {
  return (
    <div className='app'>
      <BrowserRouter>
        <Appheader />
        <Appcontent />
        <Appfooter />
      </BrowserRouter>
    </div>
  );
}

export default App;
