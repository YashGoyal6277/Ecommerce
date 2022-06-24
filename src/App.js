import './App.css';
import { BrowserRouter as Router,Route,Routes} from 'react-router-dom';
import {Header} from './components/layouts/Header'
import {Footer} from './components/layouts/Footer'
import {Home} from './components/Home'
import { Login } from './components/user/Login';
import { Register } from './components/user/Register';
import {ProductDetails} from './components/product/ProductDetails'
function App() {
  return (
    <div className="App"> 
     <Header/>
     <div className='container container-fluid'>
       <Routes>
       <Route path='/' element={<Home />} exact></Route>
       <Route path='/search/:keyword' element={<Home />} exact></Route>
       <Route path='/product/:id' element={<ProductDetails />} exact></Route>
       <Route path='/login' element={<Login />} exact></Route>
       <Route path='/register' element={<Register />} exact></Route>
      
       </Routes>
      </div>
     <Footer />
    </div>
   
  );
}

export default App;
