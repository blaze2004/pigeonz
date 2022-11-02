import React from 'react';
import { Outlet } from 'react-router-dom';
import { View, Flex, Text } from '@aws-amplify/ui-react';

export function BaseLayout() {
  return (
    <View as="div" width="100%" height="100%">
      <Outlet />
      <Flex justifyContent="center" alignItems="center" backgroundColor={"#171718"}>
        <Text color="#fff">Made with ❤️ by Shubham Tiwari</Text>
      </Flex>
    </View>
  );

}

export default BaseLayout;