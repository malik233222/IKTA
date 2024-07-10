import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import Home from './pages/Home'
import Complaint from './pages/Complaint'

function App() {

  return (
    <>
      <Router>
        <Routes>
          <Route element={<Layout />}>
            <Route path='/' element={<Home />} />
            <Route path='/new_complaint' element={<Complaint />} />

          </Route>
        </Routes>
      </Router>
    </>
  )
}

export default App
