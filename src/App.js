import { Authenticator } from '@aws-amplify/ui-react';

import { ScheduleScreen } from './screens/schedule/schedule';
import { RequireAuth } from './screens/components/require_auth';
import { Login } from './screens/components/login';
import { Home } from './screens/home/home';
import { Dashboard } from './screens/dashboard/dashboard';
import { BaseLayout } from './screens/base/base';

import { BrowserRouter, Routes, Route,} from 'react-router-dom';

import './App.css';

function MyRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        {/* app routes */}
        <Route path="/app">

          <Route path='' element={
            <RequireAuth>
              <BaseLayout />
            </RequireAuth>
          }>
            <Route index
              element={<Dashboard />}
            />

            <Route
              path="schedule"
              element={<ScheduleScreen />}
            />
          </Route>

          <Route path="auth" element={<Login />} />

        </Route>
        
        {/* <Route path="/communities">
        </Route> */}
      </Routes>
    </BrowserRouter>
  );
}

function App() {
  return (
    <Authenticator.Provider>
      <MyRoutes />
    </Authenticator.Provider>
  );
}

export default App;