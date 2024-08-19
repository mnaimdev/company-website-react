import { BrowserRouter, Route, Routes } from 'react-router-dom'
import ForgotPassword from './components/frontend/ForgotPassword'
import Header from './components/frontend/Header'
import Home from './components/frontend/Home'
import Login from './components/frontend/Login'
import Profile from './components/frontend/Profile'
import ProtectedRoute from './components/frontend/ProtectedRoute'
import Register from './components/frontend/Register'
import ResetPassword from './components/frontend/ResetPassword'

// import 'bootstrap/dist/css/bootstrap.min.css'
import CourseDetails from './components/frontend/CourseDetails'
import Footer from './components/frontend/footer/Footer'
import AboutPage from './components/frontend/pages/AboutPage'
import ContactPage from './components/frontend/pages/ContactPage'


function App() {
  // const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/about" element={<AboutPage />}></Route>
          <Route path="/contact" element={<ContactPage />}></Route>
          <Route path="/course/:id" element={<CourseDetails />}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/register" element={<Register />}></Route>
          <Route path="/forgot-password" element={<ForgotPassword />}></Route>
          <Route path="/reset-password/:token" element={<ResetPassword />}></Route>

          <Route path="/profile" element={
            <ProtectedRoute >
                <Profile />
            </ProtectedRoute>}>
          </Route>

          <Route path="/forgot-password" element={<ForgotPassword />}></Route>
        </Routes>

        <Footer />
      </BrowserRouter>

      <div>
      {/* <button onClick={() => setIsLoggedIn(!isLoggedIn)}>{isLoggedIn ? 'Logout': 'Login'}</button> */}

      </div>
    </>
  )
}

export default App
