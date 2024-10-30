import {Routes,Route} from 'react-router-dom'
import Home from './pages/Home'
import Result from './pages/Result'
import BuyCredit from './pages/BuyCredit'
import Navbar from './Components/Navbar'
import Footer from './Components/Footer'
import { ToastContainer, toast } from 'react-toastify';
import { SignInButton } from '@clerk/clerk-react'
import 'react-toastify/dist/ReactToastify.css';
const App = () => {
  return (
    <div className='min-h-screen bg-slate-50'>
      <ToastContainer position='bottom-right'/>
        <Navbar/>
        <signInButton />
          <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/result' element={<Result/>}/>
            <Route path='/buy' element={<BuyCredit/>}/>
          </Routes>
        <Footer/>
    </div>
  )
}

export default App