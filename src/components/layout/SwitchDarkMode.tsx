import { useEffect, useState } from 'react';
import MoonIcon from '~/assets/MoonIcon';
import SunIcon from '~/assets/SunIcon';

import { Button } from '../ui/button';

const SwitchDarkMode = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    if (
      localStorage.theme === 'dark' ||
      (!('theme' in localStorage) &&
        window.matchMedia('(prefers-color-scheme: dark)').matches)
    ) {
      toDark();
    } else {
      toLight();
    }
  }, []);

  const toDark = () => {
    setIsDarkMode(true);
    const root = document.querySelector('html');
    if (!root) return;
    !root.classList.contains('dark') && root.classList.add('dark');
    localStorage.theme = 'dark';
  };

  const toLight = () => {
    setIsDarkMode(false);
    const root = document.querySelector('html');
    if (!root) return;
    root.classList.remove('dark');
    localStorage.theme = 'light';
  };

  function _toogleDarkMode() {
    if (localStorage.theme === 'light') {
      toDark();
    } else {
      toLight();
    }
  }

  return (
    <Button
      variant='ghost'
      onClick={_toogleDarkMode}
      className=' dark:text-neutral-300 '
    >
      <span className='sr-only'>Enable dark mode</span>
      {isDarkMode ? <MoonIcon /> : <SunIcon />}
    </Button>
  );
};

export default SwitchDarkMode;
