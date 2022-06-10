import { Header } from './feature/ui/header';
import React, { Suspense } from 'react';

const RemoteListApp = React.lazy(() => import('listApp/List'));

const App = () => {
  return (
    <>
      <Header />
      <Suspense fallback="Loading remote component">
        <RemoteListApp />
      </Suspense>
    </>
  );
};

export default App;
