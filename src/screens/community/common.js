import React from 'react';
import logo from '../../logo.png';
import { Routes } from '../../values/routes';
import { useNavigate } from 'react-router-dom';
import { Avatar, IconButton, Card, CardContent, CardActionArea, Dialog, useTheme, useMediaQuery, DialogTitle, DialogContent, Snackbar } from '@mui/material';
import { stringAvatar } from '../components/avatar';
import { PersonAddOutlined, Group } from '@mui/icons-material';
import { useAuthenticator, Flex, Image, SearchField, Text, Heading } from '@aws-amplify/ui-react';

export function titleCase(str) {
    str=str.toLowerCase().split(' ');
    for (var i=0; i<str.length; i++) {
        str[i]=str[i].charAt(0).toUpperCase()+str[i].slice(1);
    }
    return str.join(' ');
}

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

    const css=(
        `
        .header {
            border-bottom: 1px solid #f9f8f9;
        }
        `
    );
    return (
        <Flex
            direction="row"
            justifyContent={"space-around"}
            alignItems={"center"}
            width={"100%"}
            className="header"
        >
            <style>{css}</style>
            <IconButton aria-label="pigeonz-logo" onClick={() => navigate(Routes.get('Explore'))}>
                <Image src={logo} width="48px" height="48px" alt="pigeonz logo" />
            </IconButton>
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

export function PeopleCard(props) {
    return (
        <Flex paddingTop={"20px"} color="#999999" paddingLeft={"20px"} alignItems="center">
            <Avatar {...stringAvatar(props.name)} />
            <Text color="#fff">{props.name}</Text>
            {props.children}
        </Flex>
    );
}

export function CommunityCard(props) {
    const navigate=useNavigate();
    return (
        <Card sx={{ maxWidth: 345, backgroundColor: "#2c2c2c", borderRadius: "1rem" }}>
            <CardActionArea>
                <CardContent onClick={() => navigate(`${Routes.get("Explore")}/${props.title}`)}>
                    <Image
                        height="64px"
                        width="64px"
                        src={props.image}
                        alt="community profile image"
                    />
                    <Heading color="#fff" paddingTop={"10px"}>{props.title}</Heading>
                    <Text color="#f9f9f8" paddingTop={"10px"}>{props.description}</Text>
                    <Flex paddingTop={"20px"} color="#666666">
                        <Group />
                        <Text color="#666666">{props.membersCount}</Text>
                    </Flex>
                </CardContent>
            </CardActionArea>
        </Card>
    );
}

export function Popup(props) {
    const { children, open, title }=props;
    const theme=useTheme();
    const fullScreen=useMediaQuery(theme.breakpoints.down('md'));

    return (
        <Dialog open={open} fullScreen={fullScreen} className="editor-dialog">
            <DialogTitle>{title}</DialogTitle>
            <DialogContent>{children}</DialogContent>
        </Dialog>
    );
}

export function LinkCopiedSnackbar(props) {
    const { open, setOpen }=props;
    const handleClose=() => {
        setOpen(false);
    }
    return (
        <Snackbar
            open={open}
            autoHideDuration={2000}
            onClose={handleClose}
            message="Link copied to clipboard"
        >
        </Snackbar>
    );
}
export default Header;