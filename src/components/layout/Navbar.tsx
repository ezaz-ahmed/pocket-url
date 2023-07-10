import { Link } from 'wouter';
import { Button } from '../ui/button';

export const Navbar = () => {
  return (
    <nav className='sticky top-0 z-10 bg-transparent backdrop-filter backdrop-blur-lg'>
      <div className='max-w-5xl mx-auto px-4'>
        <div className='flex items-center justify-between h-16'>
          <Link
            href='/'
            className=' cursor-pointer text-2xl text-gray-900 font-semibold'
          >
            Pocket URL
          </Link>

          <div className='flex space-x-4 text-gray-900'>
            <Button variant='ghost'>
              <Link href='/list'>List</Link>
            </Button>
            <Button className=' rounded-full'>
              <Link href='/about'>About Me</Link>
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
};
