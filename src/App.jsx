import HomePage from './components/HomePage/HomePage'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import LoginPage from './components/LoginPage/LoginPage'
import SignUp from './components/SignUp/SignUp'

const App = () => {

  return (
        <BrowserRouter>
          <div className='text-white'>
          <Routes>
            <Route path="/" element = {<HomePage />}/>
            <Route path='/login' element = {<LoginPage />}/>
            <Route path='/signup' element = {<SignUp />}/>
          </Routes>
          </div>
        </BrowserRouter>
  )
}

export default App