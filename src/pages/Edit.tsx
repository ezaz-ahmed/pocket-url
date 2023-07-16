import { useEffect, useState } from 'react';
import { ShortenedUrl } from '~/lib/types';

const Edit = ({ id }: { id: string }) => {
  const [urls, setUrls] = useState<ShortenedUrl[]>([]);

  const selected = Number(id);

  useEffect(() => {
    const savedUrls = localStorage.getItem('shortenedUrls');

    if (savedUrls) {
      setUrls(JSON.parse(savedUrls));
    }
  }, []);

  return (
    <div className=' wrapper'>
      <p>{urls.length}</p>

      <p>{selected}</p>
      <p>{selected}</p>
      {/* {urls && <p>{urls[selected].code}</p>} */}

      <p>Hi Hi</p>
    </div>
  );
};

export default Edit;
