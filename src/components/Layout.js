import { useState, useEffect } from 'react'
import Sidebar from './Sidebar'
import Navbar from './Navbar'

const Layout = ({ children }) => {
    return (
        <>
            <Navbar />
            <Sidebar />
            <main>
                <div className="">
                    {children}
                </div>
            </main>
        </>
    )
}

export default Layout