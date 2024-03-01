import React from 'react'

export default function Header() {
  return (
    <header >
        <nav className=' flex justify-between bg-transparent items-center'>
          <div>
            <img src="../public/images/logo.png" alt="error" className='w-[50%]' />
          
          </div>
          <div>

            <ul className=' flex gap-8  text-2xl '>
              <li>Home</li>
              <li>About</li>
              <li>Fetures</li>
              <li>Contact</li>
            </ul>
          </div>
          <div>
            <img src="../public/images/cart.png" alt="error"  className=' w-[50%]'/>
          </div>
        </nav>
        
    </header>
  )
}
