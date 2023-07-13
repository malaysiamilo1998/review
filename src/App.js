import { Routes, Route } from 'react-router-dom'
// import logo from './assets/ReviewHub.svg'
// import { Fragment } from 'react'
import NavbarWithDropdown from './routes/navigation/navigation-component'
import Companies from './components/companies-list/companies-list'
import Thread from './components/thread/thread-component'

function App () {
  return (
    <Routes>
      <Route path='/' element={<NavbarWithDropdown />}>
        <Route path='discussion' element={<Companies />}>
          <Route path=':slug' element={<Thread />}></Route>
        </Route>
      </Route>
    </Routes>
  )
}

export default App
