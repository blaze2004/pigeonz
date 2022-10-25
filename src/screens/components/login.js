import { useEffect } from "react";

import { Authenticator, useAuthenticator, View, Flex, Image } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';
import { Routes } from "../../values/routes";

import { useNavigate, useLocation } from 'react-router';

export function Login() {
  const { route }=useAuthenticator((context) => [context.route]);
  const location=useLocation();
  const navigate=useNavigate();
  let from=location.state?.from?.pathname|| Routes.get("Dashboard");
  useEffect(() => {
    if (route==='authenticated') {
      navigate(from, { replace: true });
    }
  }, [route, navigate, from]);
  return (
    <>
      <Flex width="100%" justifyContent={"center"}>
        <Image
          alt="logo"
          height="15rem"
          src="https://images.unsplash.com/photo-1580980407668-6bb45a674180?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1974&q=80"
        />
      </Flex>

      <View className="auth-wrapper">
        <Authenticator></Authenticator>
      </View>

    </>
  );
}