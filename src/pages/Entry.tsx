import { useState } from 'react';
import { Button } from '~/components/ui/Button';

import { Input } from '~/components/ui/Input';

const Entry = () => {
  const [link, setLink] = useState<string>('');

  return (
    <div className=' flex flex-col items-center'>
      <div className='mx-auto mb-10 mt-12 max-w-md px-2.5 text-center sm:max-w-lg sm:px-0'>
        <h1 className='mt-5 font-display text-4xl font-extrabold leading-[1.15] text-black sm:text-6xl sm:leading-[1.15]'>
          Short Links With
          <br />
          <span className='bg-gradient-to-r from-amber-500 via-orange-600 to-yellow-500 bg-clip-text text-transparent'>
            Pocket URL
          </span>
        </h1>
      </div>

      <form className='flex w-full max-w-sm items-center space-x-2'>
        <Input
          type='text'
          required
          value={link}
          onChange={event => setLink(event.target.value)}
          placeholder='Enter your long URL here'
        />
        <Button type='submit'>Shorten</Button>
      </form>
    </div>
  );
};

export default Entry;
