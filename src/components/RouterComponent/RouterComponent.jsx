import React from 'react'
import './RouterComponent.css'
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom'

import Landing from '../../Pages/Landing'
import Login from '../../Pages/Login'
import Signup from '../../Pages/Signup'
import DMComponent from '../DMComponent/DMComponent'
import GetStarted from '../../Pages/GetStarted'
import CreateWorkspaceComponent from '../CreateWorkspaceComponent/CreateWorkspaceComponent'
import HomeComponent from '../HomeComponent/HomeComponent'
import ActivityComponent from '../ActivityComponent/ActivityComponent'
import NavbarComponent from '../NavbarComponent/NavbarComponent'


const RouterComponent = () => {
    
    return (
        <Router>
            <NavbarComponent />
            <div className="navbar-container">
                <Routes>
                    <Route path='/' element={<Landing />} />
                    <Route path='/landing' element={<Landing />} />
                    <Route path='/signup' element={<Signup />} />
                    <Route path='/login' element={<Login />} />
                    <Route path='/get-started' element={<GetStarted />} />
                    <Route path='/new-workspace' element={<CreateWorkspaceComponent />} />
                    <Route path='/dashboard' element={<HomeComponent />} />
                    <Route path='/dm' element={<DMComponent />} />
                    <Route path='/activity' element={<ActivityComponent />} />
                    {/* <Route path='/dm' element={<DMComponent />} /> */}
                </Routes>
            </div>
        </Router>
    )
}

export default RouterComponent