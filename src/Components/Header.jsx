import React, { useState } from 'react'
import { BsMenuButton } from 'react-icons/bs'
import { FcMenu } from 'react-icons/fc'
import { Link } from 'react-router-dom'

const Header = () => {
  const [open, setOpen] = useState(false)

  return (
    <header className={`absolute left-0 top-0 z-20 flex w-full items-center`}>
      <div className='container'>
        <div className='relative -mx-4 flex items-center justify-between'>
          <div className='w-60 max-w-full px-4'>
            <a href='/home' className='block  py-5'>
              <h1 className=' text-white text-2xl ml-5  '>JKSMY</h1>
              {/* <img
                src='https://cdn.tailgrids.com/2.0/image/assets/images/logo/logo.svg'
                alt='logo'
                className='w-full dark:hidden'
              /> */}
              {/* <img
                src='https://cdn.tailgrids.com/2.0/image/assets/images/logo/logo-white.svg'
                alt='logo'
                className='w-full hidden dark:block'
              /> */}
              {/* <h1 className='text-4xl'>जिल्हा क्रीडा समिति यवतमाळ </h1> */}
            </a>
          </div>
          <div className='flex w-full items-center   justify-between px-4'>
            <div>
              <button
                onClick={() => setOpen(!open)}
                id='navbarToggler'
                className={` ${
                  open && 'navbarTogglerActive'
                } absolute right-4 top-1/2 block -translate-y-1/2 rounded-lg px-3 py-[6px] rin  g-primary focus:ring-2 lg:hidden  text-white   text-xl `}
              >
                {/* <span className='relative my-[6px] block h-[2px] w-[30px] bg-body-color text-white'></span>
                <span className='relative my-[6px] block h-[2px] w-[30px] bg-body-color text-white'></span>
                <span className='relative my-[6px] block h-[2px] w-[30px] bg-body-color text-white'></span> */}
                <FcMenu />
              </button>
              <nav
                id='navbarCollapse'
                className={`absolute right-4 top-full w-full max-w-[250px] rounded-lg  px-6 py-5 shadow dark:bg-dark-2 lg:static lg:block lg:w-full lg:max-w-full lg:bg-transparent lg:shadow-none lg:dark:bg-transparent bg-slate-900 ${
                  !open && 'hidden'
                } `}
              >
                <ul className='block lg:flex'>
                  <ListItem NavLink='/#'>Home</ListItem>s
                  <ListItem NavLink='/#'>Payment</ListItem>
                  <ListItem NavLink='/#'>About</ListItem>
                  <ListItem NavLink='/batches'>batches</ListItem>
                </ul>
              </nav>
            </div>
            <div className='justify-end gap-5 pr-16 sm:flex lg:pr-0'>
              <Link to='/login'>
                <button class='bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded'>
                  login
                </button>
              </Link>
              <Link to='/UserRegistration'>
                <button class='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'>
                  Signup
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}
export default Header

const ListItem = ({ children, NavLink }) => {
  return (
    <>
      <li>
        <a
          href={NavLink}
          className='flex py-2 text-base font-medium text-dark hover:text-primary text-white lg:ml-10 lg:inline-flex'
        >
          {children}
        </a>
      </li>
    </>
  )
}
