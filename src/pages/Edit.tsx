import { useEffect, useState } from 'react';
import { ShortenedUrl } from '~/lib/types';
import { Redirect, useRoute } from 'wouter';

const Edit = () => {
  const [urls, setUrls] = useState<ShortenedUrl[]>([]);
  const [selected, setSelected] = useState<ShortenedUrl>();

  const [match, params] = useRoute('/edit/:id');

  console.log(match, params);

  useEffect(() => {
    const savedUrls = localStorage.getItem('shortenedUrls');

    console.log(params);

    if (!params || !params.id) {
      <Redirect to={'/'} />;
    }

    if (savedUrls) {
      setUrls(JSON.parse(savedUrls));
    }

    console.log(params);

    setSelected(urls[Number(params?.id)]);
  }, []);

  return (
    <div className=' wrapper'>
      <p>{selected?.code}</p>
      <p>{selected?.full_short_link}</p>

      <p>Hi Hi</p>
    </div>
  );
};

export default Edit;
