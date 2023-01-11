import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './component/Home/Home';
import Cart from './component/Cart/Cart';
import Navbar from './component/Navbar/Navbar';

function App() {
  return (
    <>

<BrowserRouter>
<Navbar/>
<Routes>
  <Route path='/' element={<Home/> }/>
  <Route path='/cart' element={<Cart/> }/>

</Routes>
</BrowserRouter>


</>

  );
}

export default App;
