import React, { Suspense } from 'react';
import { Loader2 } from 'lucide-react';

// Lazy load the Home page
const Home = React.lazy(() => import('./pages/Home'));

function App() {
  return (
    <Suspense 
      fallback={
        <div className="flex h-screen items-center justify-center">
          <Loader2 className="h-8 w-8 animate-spin text-[#473BF0]" />
        </div>
      }
    >
      <Home />
    </Suspense>
  );
}

export default App;