import { Heading, Button } from '@aws-amplify/ui-react';
import { useNavigate } from 'react-router-dom';
export function Home() {

  const navigate=useNavigate();

  return (
    <>
      <Heading level={3}>
        PigeonZ HomeScreen
      </Heading>
      <Button onClick={() => navigate('/app/auth')}>Login</Button>
    </>
  );
}