import { Header } from './feature/ui/header';
import React, { Suspense } from 'react';

import { ListApp } from './apps';

const App = () => {
  return (
    <>
      <Header />
      <Suspense fallback="Loading remote component">
        <ListApp />
      </Suspense>
    </>
  );
};

export default App;
