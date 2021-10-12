import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../../logo.png'

function Header() {
    return (
        <div className="relative h-20 backdrop-filter backdrop-blur-sm backdrop-brightness-50">
            <div className="w-full flex absolute bottom-0 mx-auto left-0 h-14 items-center justify-between">
                <img className="h-10 ml-6 sm:h-14 sm:ml-14" src={logo}></img>
                <div className="mr-0 flex sm:mr-14">
                <button className="border px-2 py-1  text-white rounded mx-6">Türkçe</button>
                <Link to="/login"><button className="px-3 py-1 bg-netflixred text-white rounded mx-2">Oturum Aç</button></Link>
                </div>

                
                
            </div>
            
        </div>
    )
}

export default Header
