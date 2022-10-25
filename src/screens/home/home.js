import { Heading, Button } from '@aws-amplify/ui-react';
import { useNavigate } from 'react-router-dom';
import { Routes } from '../../values/routes';

export function Home() {

  const navigate=useNavigate();

  return (
    <>
      <Heading level={3}>
        PigeonZ HomeScreen
      </Heading>
      <Button onClick={() => navigate(Routes.get("Auth"))}>Login</Button>
    </>
  );
}