import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { Home, Login, SignUp, NotFound, Profile } from '../pages/_index'


export default function RouterConfig() {
    return (
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/login" element={<Login/>}/>
            <Route path="/signup" element={<SignUp/>}/>
            <Route path="/profile" element={<Profile/>}/>

            <Route path="*" element={<NotFound/>}/>
        </Routes>
    )
}

