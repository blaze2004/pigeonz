import React from 'react';
import { useParams } from 'react-router-dom';
import { View, Flex, Text, Heading } from '@aws-amplify/ui-react';
import { Avatar, CssBaseline } from '@mui/material';
import { Header } from './common';

function Community() {
    const { communityName }=useParams();
    return (
        <View as="div"
            width="100%"
            backgroundColor="#171718"
            color="#fff"
        >
            <CssBaseline />
            <Header></Header>
            <Flex justifyContent="center" alignItems="flex-end" direction={"row"} width="100%" height="300px">
                <Heading level={1} color="#fff" fontWeight={"bolder"}>{communityName}</Heading>
                <Avatar />
            </Flex>
            <Text>Hello</Text>
        </View>
    );

}

export default Community;