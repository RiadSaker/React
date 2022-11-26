import './App.css';
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Home from './Components/Home'
import Item from './Components/Item';
import ItemBg from './Components/ItemBg';

function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <Routes>
        <Route path='/home' element={<Home/>} />
        <Route path='/:item' element={<Item/>} />
        <Route path='/:item/:fontColor/:bgColor' element={<ItemBg/>} />
      </Routes>
    </div>
    </BrowserRouter>
  );
}

export default App;