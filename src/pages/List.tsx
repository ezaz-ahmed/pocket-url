import { useEffect, useState } from 'react';
import { FilesIcon, Pencil } from 'lucide-react';
import { Button } from '~/components/ui/Button';
import { Card } from '~/components/ui/Card';
import { ShortenedUrl } from '~/lib/types';
import { Link } from 'wouter';

const List = () => {
  const [urls, setUrls] = useState<ShortenedUrl[]>([]);

  useEffect(() => {
    const savedUrls = localStorage.getItem('shortenedUrls');

    if (savedUrls) {
      setUrls(JSON.parse(savedUrls));
    }
  }, []);

  return (
    <div className=' wrapper'>
      <h2 className='text-3xl font-bold mb-4'>Your Generated URLs</h2>

      {urls.length > 0 ? (
        <ul className=' grid grid-cols-1 md:grid-cols-2 gap-4'>
          {urls.map((url, index) => (
            <li key={index}>
              <Card className=' w-full mt-4 py-3 px-5 flex justify-between items-center'>
                <div className=' overflow-hidden max-w-sm'>
                  <a
                    target='_blank'
                    href={`https://${url.short_link}`}
                    className='font-medium text-blue-600 underline dark:text-blue-500 hover:no-underline text-xl'
                  >
                    {url.short_link}
                  </a>
                  <p className=' text-base line-clamp-1'>{url.original_link}</p>
                </div>

                <div className=' flex gap-2'>
                  <Link href={`/edit/${index}`}>
                    <Button
                      variant='outline'
                      size='icon'
                      onClick={() =>
                        navigator.clipboard.writeText(url.short_link)
                      }
                    >
                      <Pencil className='h-4 w-4' />
                    </Button>
                  </Link>

                  <Button
                    variant='outline'
                    size='icon'
                    onClick={() =>
                      navigator.clipboard.writeText(url.short_link)
                    }
                  >
                    <FilesIcon className='h-4 w-4' />
                  </Button>
                </div>
              </Card>
            </li>
          ))}
        </ul>
      ) : (
        <p>No URLs generated yet.</p>
      )}
    </div>
  );
};

export default List;
