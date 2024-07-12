import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import Home from './pages/Home'
import Complaint from './pages/Complaint'
import ShowComplaint from './pages/ShowComplaint'

function App() {

  return (
    <>
      <Router>
        <Routes>
          <Route element={<Layout />}>
            <Route path='/' element={<Home />} />
            <Route path='/new_complaint' element={<Complaint />} />
            <Route path='/show_complaint' element={<ShowComplaint />} />

          </Route>
        </Routes>
      </Router>
    </>
  )
}

export default App
