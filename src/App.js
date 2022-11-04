import { Authenticator } from '@aws-amplify/ui-react';
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
import './App.css';
import { Community, CreateResource, ExploreCommunities, Resource } from './screens/community';
import { BaseLayout, Dashboard, Home, Login, RequireAuth, PageNotFound } from './screens/screens';

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

            <Route path='*' element={<Navigate replace to="/404"/> } />

          </Route>

          <Route path="communities">
            <Route index element={ <RequireAuth><ExploreCommunities /></RequireAuth>} />
            <Route path=":communityName">
              <Route index element={<RequireAuth><Community /></RequireAuth>} />
              <Route path="resources/new" element={<RequireAuth><CreateResource /></RequireAuth>} />
              <Route path="resources/:resourceID">
                <Route index element={<RequireAuth><Resource /></RequireAuth>} />
                <Route path='*' element={<Navigate replace to="/404"/> } />
              </Route>
              <Route path='*' element={<Navigate replace to="/404"/> } />
            </Route>
            <Route path='*' element={<Navigate replace to="/404"/> } />
          </Route>

          <Route path='*' element={<Navigate replace to="/404"/> } />
        </Route>
        <Route path="/404" element={<PageNotFound />} />
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