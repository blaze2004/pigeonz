import { useAuthenticator, Heading } from '@aws-amplify/ui-react';

export function ScheduleScreen() {
  const { route } = useAuthenticator((context) => [context.route]);

  const message =
    route === 'authenticated' ? 'Schedule' : 'Loading...';
  return <Heading level={1}>{message}</Heading>;
}