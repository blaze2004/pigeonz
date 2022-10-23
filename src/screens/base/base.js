import React from 'react';
import { Outlet, useNavigate } from 'react-router-dom';
import { useAuthenticator, View, Flex } from '@aws-amplify/ui-react';

import SideNavBar from '../components/sidenavigation';
import Header from '../components/header';
import './base.css';

export function BaseLayout() {
  const { route, signOut }=useAuthenticator((context) => [
    context.route,
    context.signOut,
  ]);
  const navigate=useNavigate();

  function logOut() {
    signOut();
    navigate('/app/auth');
  }
  return (
    <>
      <Flex
        direction="row"
        justifyContent="flex-start"
        alignItems="flex-start"
      >
        <View
          as="div"
          backgroundColor="#212332"
          width="220px"
          className="sidenavbarContainer"
        >
          <SideNavBar />
        </View>

        <View>
      <Header />

        </View>
      </Flex>
      <Outlet />
    </>
  );
}