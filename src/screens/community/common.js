import React from 'react';
import logo from '../../logo.png';
import { Routes } from '../../values/routes';
import { useNavigate } from 'react-router-dom';
import { Avatar, IconButton } from '@mui/material';
import { stringAvatar } from '../components/avatar';
import { PersonAddOutlined } from '@mui/icons-material';
import { useAuthenticator, Flex, Image, SearchField } from '@aws-amplify/ui-react';

export function Header() {
    const name="Shubham Tiwari";
    const navigate=useNavigate();
    const { route }=useAuthenticator((context) => [context.route])
    const signInAvatar=(
        <IconButton aria-label="profile" onClick={() => navigate(Routes.get('Auth'))}>
            <Avatar sx={{ bgcolor: "transparent", border: "1px solid #fff" }}>
                <PersonAddOutlined />
            </Avatar>
        </IconButton>
    );
    const profileAvatar=(
        <IconButton aria-label="profile" onClick={() => navigate(Routes.get('Dashboard'))}>
            <Avatar {...stringAvatar(name)} />
        </IconButton>
    );
    const profile=route==='authenticated'? profileAvatar:signInAvatar;

    return (
        <Flex
            direction="row"
            justifyContent={"space-around"}
            alignItems={"center"}
            width={"100%"}
            className="header"
        >
            <Image src={logo} width="48px" height="48px" alt="pigeonz logo" />
            <SearchField
                color={"#fff"}
                width={"50%"}
                name="search"
                label="search"
                placeholder="Search communities..."
            ></SearchField>
            {profile}

        </Flex>
    );
}
