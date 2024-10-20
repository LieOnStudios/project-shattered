import { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'

const Nav = () => {
  const [isMobile, setIsMobile] = useState(false)
 
  //choose the screen size 
  const handleResize = () => {
    if (window.innerWidth < 640) {
        setIsMobile(true)
    } else {
        setIsMobile(false)
    }
  }

  useEffect(() => {
    window.addEventListener("resize", handleResize)
  })

  return (
    <nav className='flex justify-between items-center sticky top-0 z-10 px-page max-sm:px-page h-14 shadow-nav backdrop-blur-lg bg-colour-bg-500 bg-opacity-75 border-b border-colour-bg-300 text-colour-text-400'>
      <div>
        <NavLink to='/' className='flex items-center gap-2 font-bold text-xl text-colour-text-500'>
        <svg className='w-6 h-6'><use className='scale-24' href="/assets/v1/logo/svg/lieonlion.svg#lieonlion-logo"></use></svg>
        {!isMobile && "LieOnLion"}
        </NavLink>
      </div>
      <li className='flex gap-8 max-sm:gap-6 font-bold'>
        <ul><NavLink to='/projects'>Projects</NavLink></ul>
        <ul><NavLink to='/about-me'>About Me</NavLink></ul>
        <ul><NavLink to='/donate'>Donate</NavLink></ul>
      </li>
    </nav>
  );
}

export default Nav;