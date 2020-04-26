import { useState, useEffect } from 'react';

const getWidth = () =>
  window.innerWidth ||
  document.documentElement.clientWidth ||
  document.body.clientWidth;

export function checkIfSmallDevice() {
  // save current window width in the state object
  // eslint-disable-next-line react-hooks/rules-of-hooks
  let [width, setWidth] = useState(getWidth());

  // in this case useEffect will execute only once because
  // it does not have any dependencies.
  // eslint-disable-next-line react-hooks/rules-of-hooks
  useEffect(() => {
    // timeoutId for debounce mechanism
    let timeoutId: any = null;
    const resizeListener = () => {
      // prevent execution of previous setTimeout
      clearTimeout(timeoutId);
      // change width from the state object after 150 milliseconds
      timeoutId = setTimeout(() => setWidth(getWidth()), 150);
    };
    // set resize listener
    window.addEventListener('resize', resizeListener);

    // clean up function
    return () => {
      // remove resize listener
      window.removeEventListener('resize', resizeListener);
    };
  }, []);

  if (width <= 576) {
    return true;
  }
  return false;
}
