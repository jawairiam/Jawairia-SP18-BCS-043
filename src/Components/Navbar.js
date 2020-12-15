import React from 'react'

export const Navbar = () => {
    return (
        <nav className='navbar'>
            <div className='navbar__text'>
                <div className='logo'>
                    <im src="/34.png" alt= "logo"></im>
                </div>
                <ul className='navbar__ul'>
                        <li>
                            Home
                        </li>
                        <li>
                            Menu
                        </li>
                        <li>
                            Shop
                        </li>
                        <li>
                            News
                        </li>
                        <li>
                            Contact
                        </li>
                    </ul>

            </div>
        </nav>
    )
}
