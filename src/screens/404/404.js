import { Heading, Flex, Image } from '@aws-amplify/ui-react';
import { Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { Routes } from '../../values/routes';
import logo from '../../logo.png';

export function PageNotFound() {

  const navigate=useNavigate();

  const css=(
    `
    .pigeonz-home {
      background-image: linear-gradient(to right, #72306a, #6e3275, #663580, #5b398b, #4b3e96);
    }
    `
  );

  return (
    <Flex width="100%" height="100%" className="pigeonz-home" justifyContent={"center"} alignItems="center">
      <style>{css}</style>
      <Flex alignItems={"center"} justifyContent="center" direction={"column"} minWidth="40%" height="100%" padding="20px">
        <Image src={logo} width="96px" height="96px" alt="pigeonz logo" />
        <Heading level={1} color="#3378e8" fontWeight={"bolder"} fontSize="100px">404 Page Not Found</Heading>
        <Heading level={1} color="#fff" fontWeight={"bolder"}>The page you are looking for is not available.</Heading>
        <Button variant='contained' onClick={() => navigate(Routes.get("Home"))}> Go to Home</Button>
      </Flex>
    </Flex>
  );
}