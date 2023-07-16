import { FormEvent, useState, useRef, ChangeEvent, useEffect } from 'react';
import { FilesIcon, MoveRight, RefreshCcw } from 'lucide-react';

import { Button } from '~/components/ui/Button';
import { Input } from '~/components/ui/Input';
import { ShortenedUrl, ShortenedUrlResponse } from '~/lib/types';
import { isUrlValid } from '~/lib/utils';
import { Card } from '~/components/ui/Card';
import { Link } from 'wouter';

const Entry = () => {
  const linkInput = useRef<HTMLInputElement>(null);
  const [shortenedUrls, setShortenedUrls] = useState<ShortenedUrl[]>([]);
  const [link, setLink] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>('');

  useEffect(() => {
    linkInput.current?.focus();

    const savedUrls = localStorage.getItem('shortenedUrls');
    if (savedUrls) {
      setShortenedUrls(JSON.parse(savedUrls));
    }
  }, []);

  const latestUrl = shortenedUrls[shortenedUrls.length - 1];

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!linkInput.current) return;

    if (isUrlValid(link)) {
      try {
        setLoading(true);
        const response = await fetch(
          `https://api.shrtco.de/v2/shorten?url=${link}`
        );
        const data = (await response.json()) as ShortenedUrlResponse;

        setLoading(false);
        setLink('');

        if (data.ok) {
          const { result } = data;
          const updatedUrls = [...shortenedUrls, result];

          setShortenedUrls(updatedUrls);

          localStorage.setItem('shortenedUrls', JSON.stringify(updatedUrls));
        } else {
          throw new Error('Something went wrong!');
        }
      } catch (error: any) {
        setLoading(false);
        setLink('');

        if (error.message) {
          setError(error.message);
        } else {
          setError('Something went wrong!');
        }
      }
    } else {
      linkInput.current.setCustomValidity('Please enter a valid URL');
    }
  };

  const handleInput = (event: ChangeEvent<HTMLInputElement>) => {
    linkInput.current?.setCustomValidity('');
    setLink(event.target.value);
  };

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

      <form
        className='flex w-full max-w-sm items-center justify-between space-x-2'
        onSubmit={handleSubmit}
      >
        <Input
          type='text'
          ref={linkInput}
          required
          value={link}
          onChange={handleInput}
          placeholder='Paste your long URL here'
        />

        <Button disabled={loading} className=' w-28'>
          {loading ? (
            <RefreshCcw className='mr-3 h-5 w-5 animate-spin text-white dark:dark:text-gray-900' />
          ) : (
            <span className='font-medium'>Shorten</span>
          )}
        </Button>
      </form>

      {error && <p>{error}</p>}

      {latestUrl && (
        <>
          <Card className=' w-full max-w-sm mt-4 py-3 px-5 flex justify-between items-center'>
            <div>
              <a
                target='_blank'
                href={`https://${latestUrl.short_link}`}
                className='font-medium text-blue-600 underline dark:text-blue-500 hover:no-underline text-xl'
              >
                {latestUrl.short_link}
              </a>
              <p className=' text-base line-clamp-1 max-w-[220px]'>
                {latestUrl.original_link}
              </p>
            </div>

            <Button
              variant='outline'
              size='icon'
              onClick={() =>
                navigator.clipboard.writeText(latestUrl.short_link)
              }
            >
              <FilesIcon className='h-4 w-4' />
            </Button>
          </Card>

          <Link href='/list'>
            <Button className=' my-4'>
              See More <MoveRight className=' h-4 w-4 mx-3' />
            </Button>
          </Link>
        </>
      )}
    </div>
  );
};

export default Entry;
