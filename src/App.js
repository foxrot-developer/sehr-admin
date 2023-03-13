import { Suspense } from 'react';
import './App.css';
import { BrowserRouter as Router } from 'react-router-dom';
import { ProSidebarProvider } from 'react-pro-sidebar';

import Loading from './shared/Loading';
import NavigationRoutes from './routes/NavigationRoutes';

function App() {
  return (
    <Suspense fallback={<Loading />}>
      <ProSidebarProvider>
        <Router>
          <NavigationRoutes />
        </Router>
      </ProSidebarProvider>
    </Suspense>
  );
}

export default App;
