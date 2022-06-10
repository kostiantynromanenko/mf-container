import React, { useRef, useEffect } from 'react';

import mount from 'list/ListApp';

export default () => {
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (ref.current) {
      mount(ref.current);
    }
  });

  return <div ref={ref} />;
};
