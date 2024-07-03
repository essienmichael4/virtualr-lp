import { useState } from 'react'
import logo from '../assets/logo.png'
import {navItems} from '../constants/index'
import { Menu, X } from 'lucide-react'

const Navbar = () => {
  const [mobileDrawerOpen, setMobileDrawerOpen] = useState(false)

  const toggleNavbar = ()=>{
    setMobileDrawerOpen(!mobileDrawerOpen)
  }

  return (
    <nav className="sticky top-0 z-50 py-3 backdrop-blur-lg border-b border-neutral-100/80">
      <div className="container px-4 mx-auto relative text-sm">
        <div className="flex justify-between items-center">
          <div className="flex items-center flex-shrink-0">
            <img src={logo} alt="logo" className='h-10 w-10 mr-2' />
            <span className="text-xl tracking-tight">VirtualR</span>
          </div>
          <ul className="hidden lg:flex ml-14 space-x-12">
            {navItems.map((item:{
              href:string, label: string
            }, i:number) => {
              return (
                <li key={i}>
                  <a href={item.href} className='text-neutral-500'>{item.label}</a>
                </li>
              )
            })}
          </ul>
          <div className="hidden lg:flex justify-center items-center space-x-4">
            <a href="#" className='py-2 px-3 rounded-md border text-neutral-500'>
              Sign in
            </a>
            <a href="#" className='text-white bg-gradient-to-r from-orange-500 to-orange-800 py-2 px-3 rounded-md'>
              Create an account
            </a>
          </div>
          <div className="lg:hidden md:flex flex-col justify-end">
            <button onClick={toggleNavbar}>{mobileDrawerOpen ? <X /> : <Menu />}</button>
          </div>
        </div>
        {mobileDrawerOpen && 
          <div className="fixed right-0 z-20 w-full bg-white p-12 flex flex-col justify-center items-center lg:hidden">
            <ul>
              {navItems.map((item:{
                href:string, label: string
              }, i:number) => {
                return (
                  <li key={i} className='py-4'>
                    <a href={item.href}>{item.label}</a>
                  </li>
                )
              })}
            </ul>
            <div className=" flex space-x-6">
            <a href="#" className='py-2 px-3 rounded-md border '>
              Sign in
            </a>
            <a href="#" className='text-white bg-gradient-to-r from-orange-500 to-orange-800 py-2 px-3 rounded-md'>
              Create an account
            </a>
            </div>
          </div>
        }
      </div>

    </nav>
  )
}

export default Navbar
