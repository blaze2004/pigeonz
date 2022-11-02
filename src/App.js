import { Authenticator } from '@aws-amplify/ui-react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import { Community, ExploreCommunities, Resource } from './screens/community';
import { BaseLayout, Dashboard, Home, Login, RequireAuth } from './screens/screens';

function MyRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<BaseLayout />}>
          <Route index element={<Home />} />

          <Route path="app">

            <Route path=''>
              <Route index
                element={
                  <RequireAuth>
                    <Dashboard />
                  </RequireAuth>
                }
              />
            </Route>

            <Route path="auth" element={<Login />} />

          </Route>

          <Route path="communities">
            <Route index element={<ExploreCommunities />} />
            <Route path=":communityName">
              <Route index element={<Community />} />
              <Route path="resources/:resourceID">
                <Route index element={<Resource />} />
                <Route
                  path="edit"
                  element={
                    <Resource edit={true} />
                  }
                />
              </Route>
            </Route>
          </Route>
        </Route>
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