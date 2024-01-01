import './globals.css';
import './App.css';
import { BrowserRouter , Routes , Route } from 'react-router-dom';
import Home from './pages/Home';
import Github from './pages/Github';
import Gitredirect from './pages/Gitredirect';
import Login from './pages/Login';

function App() {
  
  return (
  <main className='flex  h-screen App'> 
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path="/github" element={<Github/>}></Route>
        <Route path="/gitredirect" element={<Gitredirect/>}></Route>
        <Route path='/Login' element={<Login/>}></Route>
      </Routes>
    </BrowserRouter>
  </main> 
  );
}

export default App;
