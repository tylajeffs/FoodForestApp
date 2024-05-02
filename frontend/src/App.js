import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import { useAuthContext } from './hooks/useAuthContext'

//pages & components
import Home from './pages/Home'
import Login from './pages/Login'
import Signup from './pages/Signup'
import Navbar from './components/Navbar'
import ForestPicker from './pages/ForestPicker'
import Map from './components/Map'

function App() {
  const { user } = useAuthContext()
  console.log("THIS IS THE USER: ",user)

  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <div className="pages">
          <Routes>
            <Route
              path="/"
              element={user ? <Home/> : <Navigate to="/login"/>}
            />
            <Route
              path="/signup"
              element={!user ? <Signup/> : <Navigate to="/"/>}
            />
            <Route
              path="/login"
              element={!user ? <Login/> : <Navigate to="/"/>}
            />
            <Route
              path="/generate"
              element={user ? <ForestPicker/> : <Navigate to="/green"/>}
            />
            <Route
              path="/map"
              element={ <Map/> }
            />
            <Route
              path="/generates"
              element={ <ForestPicker/> }
            />
          </Routes>
        </div>
      
      </BrowserRouter>

    </div>
  );
}

export default App;
