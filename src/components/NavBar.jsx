import { NavLink } from 'react-router-dom'

import { FaHouseChimney, FaSyringe, FaArrowUpFromBracket, FaUser,  FaGear } from "react-icons/fa6";

const NavBar = () => {
  return (
    <nav className='flex flex-col justify-between items-center w-56 h-full px-4 py-6 border-r-2 border-grey-300 bg-grey-100'>
      <li className='flex flex-col gap-3 w-full text-sm text-grey-800'>
        <NavLink to='/' className='flex items-center px-4 py-2 gap-4 content-center rounded-md hover:bg-grey-200'>
          <FaHouseChimney />Home
        </NavLink>
        <NavLink to='/mods' className='flex items-center px-4 py-2 gap-4 content-center rounded-md hover:bg-grey-200'>
          <FaSyringe />Mods
        </NavLink>
        <NavLink to='/upload' className='flex items-center px-4 py-2 gap-4 content-center rounded-md hover:bg-grey-200'>
          <FaArrowUpFromBracket />Upload
        </NavLink>
      </li>
      <li className='flex flex-col gap-3 w-full text-sm text-grey-800'>
        <NavLink to='/profiles' className='flex items-center px-4 py-2 gap-4 content-center rounded-md hover:bg-grey-200'>
          <FaUser />Profiles
        </NavLink>
        <NavLink to='/settings' className='flex items-center px-4 py-2 gap-4 content-center rounded-md hover:bg-grey-200'>
          <FaGear />Settings
        </NavLink>
      </li>
    </nav>
  );
}

export default NavBar;