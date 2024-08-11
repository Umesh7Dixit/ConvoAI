import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from './pages/Home';
import Verify from './pages/Verify';
import Login from './pages/Login';




const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/auth' element={<Login/>} />
          <Route path='/verify' element={<Verify/>}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App