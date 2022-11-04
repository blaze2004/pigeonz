import { useEffect } from "react";

import { Authenticator, useAuthenticator, View, Flex, Image } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';
import { Routes } from "../../values/routes";
import logo from '../../logo.png';
import { useNavigate, useLocation } from 'react-router';

export function Login() {
  const { route }=useAuthenticator((context) => [context.route]);
  const location=useLocation();
  const navigate=useNavigate();
  let from=location.state?.from?.pathname||Routes.get("Dashboard");
  useEffect(() => {
    if (route==='authenticated') {
      navigate(from, { replace: true });
    }
  }, [route, navigate, from]);

  const css=(
    `
    .auth-view {
      background-image: linear-gradient(to right, #72306a, #6e3275, #663580, #5b398b, #4b3e96);
    }`
  );
  return (
    <View as="div" width="100%" height="97.4%" className="auth-view">
      <style>{css}</style>
      <Flex width="100%" justifyContent={"center"}>
        <Image
          alt="logo"
          height="15rem"
          src={logo}
        />
      </Flex>

      <View className="auth-wrapper">
        <Authenticator></Authenticator>
      </View>

    </View>
  );
}