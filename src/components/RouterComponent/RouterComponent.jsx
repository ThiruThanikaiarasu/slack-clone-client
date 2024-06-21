import React from 'react'
import './RouterComponent.css'
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom'

import Landing from '../../Pages/Landing'
import Login from '../../Pages/Login'
import Signup from '../../Pages/Signup'
import ResponsiveDrawer from '../ResponsiveDrawer/ResponsiveDrawer'
import DMComponent from '../DMComponent/DMComponent'
import GetStarted from '../../Pages/GetStarted'
import CreateWorkspaceComponent from '../CreateWorkspaceComponent/CreateWorkspaceComponent'


const RouterComponent = () => {
    
    return (
        <Router>
            <div className="navbar-container">
                <Routes>
                    <Route path='/' element={<Landing />} />
                    <Route path='/landing' element={<Landing />} />
                    <Route path='/signup' element={<Signup />} />
                    <Route path='/login' element={<Login />} />
                    <Route path='/get-started' element={<GetStarted />} />
                    <Route path='/new-workspace' element={<CreateWorkspaceComponent />} />
                    {/* <Route path='/dm' element={<DMComponent />} /> */}
                </Routes>
            </div>
        </Router>
    )
}

export default RouterComponent