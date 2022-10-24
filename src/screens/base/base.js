import React from 'react';
import { Outlet, useNavigate } from 'react-router-dom';
import { View, Flex, useAuthenticator, Button } from '@aws-amplify/ui-react';

import SideNavBar from '../components/sidenavigation';
import Header from '../components/header';
import './base.css';

export function BaseLayout() {

  const { signOut }=useAuthenticator((context) => [
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
        height={"100%"}
      >
        <View
          as="div"
          backgroundColor="#212332"
          width="220px"
          className="sidenavbarContainer"
          height="100%"
        >
          <SideNavBar />
        </View>

        <View>
          <Header />
          <Outlet />

          <Button onClick={() => logOut()}>Logout</Button>
        </View>
      </Flex>
    </>
  );
}