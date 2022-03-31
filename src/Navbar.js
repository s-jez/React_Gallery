import './Navbar.css'
import React, {useState, useEffect} from 'react'

export default function Navbar() {
    const [toggleMenu, setToggleMenu] = useState(false)
    const [screenWidth, setScreenWidth] = useState(window.innerWidth)
    const toggleNav = () => {
        setToggleMenu(!toggleMenu);
    }
    useEffect(() => {

        const changeWidth = () => {
          setScreenWidth(window.innerWidth);
        }
    
        window.addEventListener('resize', changeWidth)
    
        return () => {
            window.removeEventListener('resize', changeWidth)
        }
      }, [])
    return (
        <nav>
        {(toggleMenu || screenWidth > 500) && (
                    <ul className="list">
                        <li className="items">Koło turystyczne - Joanna Adamczak</li>
                  </ul>
        )}
         <button className="btn" onClick={toggleNav}>Menu</button>
        </nav>
    )
}
