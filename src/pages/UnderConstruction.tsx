import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <>
      <h1 className='text-3xl font-bold text-grey-950'>
        Sorry! We are still working on this page.
      </h1>
      <p className='my-1 text-grey-900'>The page you are looking for is still under construction .o.</p>
      <Link className='underline my-3 text-grey-900' to='/'>Return Home?</Link>
    </>
  )
}

export default NotFound
