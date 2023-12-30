import './globals.css';
import './App.css';
import { BrowserRouter , Routes , Route } from 'react-router-dom';
import Home from './pages/Home';

function App() {
  
  return (
  <main className='flex  h-screen'> 
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
      </Routes>
    </BrowserRouter>
  </main> 
  );
}

export default App;
