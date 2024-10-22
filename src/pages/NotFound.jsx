import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <div className='inline-flex flex-col w-full h-full justify-center items-center'>
      <div className='flex flex-col w-full justify-center items-center m-4 gap-4'>
        <h1 className='text-5xl font-bold text-grey-950'>404</h1>
        <p className='text-lg font-semibold text-grey-900'>Whoops! We are struggling to find that page .o.</p>
      </div>
      <Link className='w-max px-4 py-2 m-6 rounded-md font-semibold text-grey-950 bg-primary-100' to='/'>Return Home</Link>
    </div>
  )
}

export default NotFound
