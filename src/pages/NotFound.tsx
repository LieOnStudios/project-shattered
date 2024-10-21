import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <>
      <h1 className='text-3xl font-bold text-grey-950'>
        Whoops! We are struggling to find that page.
      </h1>
      <p className='my-1 text-grey-900'>Oh no! The page you are looking for doesn't seem to exist .o.</p>
      <Link className='underline my-3 text-grey-900' to='/'>Return Home?</Link>
    </>
  )
}

export default NotFound
