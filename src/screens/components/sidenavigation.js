import React from "react";
import { Heading, Divider, Flex, View, Text } from '@aws-amplify/ui-react';

export default function SideNavBar(props) {

    return (
        <View as="div" height="100%" backgroundColor="#212332" color="#ffffff">
            <Heading level={1}>PigeonZ</Heading>
            <Flex direction="column">
                <Text>Dashboard</Text>
                <Text>Analytics</Text>
                <Text>Schedule</Text>
                <Text>Settings</Text>
                <Text>Support</Text>

                <Button onClick={() => props.onlogOut()}>Logout</Button>
            </Flex>
        </View>
    );
}