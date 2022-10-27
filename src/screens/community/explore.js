import React from 'react';
import {
    View, Flex, Image, SearchField
} from '@aws-amplify/ui-react';

import { Avatar } from '@mui/material';
import logo from '../../logo.png';

function Header() {
    return (
        <Flex
            direction={"row"}
            justifyContent={"space-around"}
            alignItems={"center"}
            width={"100%"}
        >
            <Image src={logo} width="48px" height="48px" alt="pigeonz logo" />
            <SearchField color={"#fff"}></SearchField>
            <Avatar />
        </Flex>
    );
}

function ExploreCommunities() {
    return (
        <View
            as="div"
            width="100%"
            height="100%"
            backgroundColor="#171718"
            color="#fff"
        >
            <Header></Header>
        </View>
    );
}

export default ExploreCommunities;