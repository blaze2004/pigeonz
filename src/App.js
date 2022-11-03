import { Authenticator } from '@aws-amplify/ui-react';
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
import './App.css';
import { Community, ExploreCommunities, Resource } from './screens/community';
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