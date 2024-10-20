import { Link } from 'react-router-dom';

function NotFound() {
  return (
    <div className='flex flex-col justify-center h-svh-no-nav'>
      <h1 className='text-3xl font-bold text-colour-text-500'>
        Sorry! We are still working on this page.
      </h1>
      <p className='my-1 text-colour-text-400'>The page you are looking for is still under construction .o.</p>
      <Link className='underline my-3 text-colour-text-400' to='/'>Return Home?</Link>
    </div>
  )
}

export default NotFound
