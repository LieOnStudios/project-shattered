import { useState } from "react"

import { FaRegCircleQuestion } from "react-icons/fa6";
import Input from "../components/Input";

const Profiles = () => {
  const [curseforgeProfile, setCurseforgeProfile] = useState();
  const [modrithProfile, setModrithProfile] = useState();
  const [curseforgeProfilePicture, setCurseforgeProfilePicture] = useState();
  const [modrithProfilePicture, setModrithProfilePicture] = useState();

  return (
    <div className='flex flex-col w-full h-full gap-6 justify-center'>
      <div className='flex flex-grow p-4 gap-6 items-center rounded-lg bg-grey-300'>
        <h1 className='text-2xl text-grey-950'>Curseforge Profile</h1>
        {curseforgeProfilePicture && <img src={curseforgeProfilePicture}>
        </img>}
        {!curseforgeProfilePicture && 
          <div className='flex justify-center items-center w-48 h-48 rounded-full bg-grey-500'>
            <FaRegCircleQuestion className='text-4xl text-grey-200' />
          </div>
        }
        <Input id='modrinth-username' label='Username' bgColour='var(--colour-grey-300)' />
      </div>
      <div className='flex flex-grow p-4 gap-6 items-center rounded-lg bg-grey-300'>
        <h1 className='text-2xl text-grey-950'>Modrinth Profile</h1>
        {modrithProfilePicture && <img src={modrithProfilePicture}>
        </img>}
        {!modrithProfilePicture && 
          <div className='flex justify-center items-center w-48 h-48 rounded-full bg-grey-500'>
            <FaRegCircleQuestion className='text-4xl text-grey-200' />
          </div>
        }
      </div>
    </div>
  )
}

export default Profiles
