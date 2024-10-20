import { Link } from 'react-router-dom';

function NotFound() {
  return (
    <div className='flex flex-col justify-center h-svh-no-nav'>
      <h1 className='text-3xl font-bold text-colour-text-500'>
        Whoops! We are struggling to find that page.
      </h1>
      <p className='my-1 text-colour-text-400'>Oh no! The page you are looking for doesn't seem to exist .o.</p>
      <Link className='underline my-3 text-colour-text-400' to='/'>Return Home?</Link>
    </div>
  )
}

export default NotFound
