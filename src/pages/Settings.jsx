import { Link } from "react-router-dom"

const Home = () => {
  return (
    <>
      <Link className='w-max px-4 py-2 m-6 rounded-md font-semibold text-grey-950 bg-primary-100' to='/'>
        Return Home
      </Link>
    </>
  )
}

export default Home
