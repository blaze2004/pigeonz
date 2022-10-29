import React from "react";
import { useLocation, useNavigate } from 'react-router-dom';
import { Heading, Divider, Flex, View, Text } from '@aws-amplify/ui-react';
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import { grey } from '@mui/material/colors';
import { Routes } from '../../values/routes';
import { CalendarMonthOutlined, SettingsOutlined, DashboardOutlined, EventSeatOutlined, HelpOutline, LogoutOutlined } from "@mui/icons-material";
import { Avatar } from "@mui/material";
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import { stringAvatar } from './avatar';


function ExtendedButton(props) {
    const location=useLocation();
    const navigate=useNavigate();

    let buttonColor;
    if (location.pathname.replace(/\/$/, '')===props.route) {
        buttonColor="#fff";
    } else {
        buttonColor=grey[400];
    }

    const ColorButton=styled(Button)((_) => ({
        color: buttonColor,
        justifyContent: "left",
    }));

    const route=props.route||location.pathname.replace(/\/$/, '')

    return (
        <>
            <ColorButton startIcon={props.children} onClick={() => navigate(route)}>{props.title||"Text"}</ColorButton>
            <Divider border={`1px solid ${buttonColor}`} orientation="horizontal"/>
        </>
    );
}

export default function SideNavBar(props) {

    const [anchorEl, setAnchorEl]=React.useState(null);
    const open=Boolean(anchorEl);

    const handleClick=(event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose=() => {
        setAnchorEl(null);
    };

    let name="Blaze2004";

    return (
        <Flex
            height="100%"
            minHeight={"768px"}
            backgroundColor="#212332"
            color="#ffffff"
            width="220px"
            direction={"column"}
            justifyContent="space-between">
            <View as="div">
                <Heading level={1} color="#ffffff" fontWeight={"bold"} margin="20px">PigeonZ</Heading>
                <Flex direction="column" padding={"20px"}>

                    <ExtendedButton title="Dashboard" route={Routes.get("Dashboard")}>
                        <DashboardOutlined />
                    </ExtendedButton>

                    <ExtendedButton title="Events">
                        <EventSeatOutlined />
                    </ExtendedButton>

                    <ExtendedButton title="Schedule" route={Routes.get("Schedule")}>
                        <CalendarMonthOutlined />
                    </ExtendedButton>

                    <ExtendedButton title="Settings">
                        <SettingsOutlined />
                    </ExtendedButton>

                    <ExtendedButton title="Support">
                        <HelpOutline />
                    </ExtendedButton>

                </Flex>
            </View>
            <Button
                onClick={handleClick}
                aria-controls={open? 'account-menu':undefined}
                aria-haspopup="true"
                aria-expanded={open? 'true':undefined}
            >
                <Flex
                    direction={"row"}
                    borderRadius="12px"
                    border={"1px solid #fff"}
                    backgroundColor="#2a2d3e"
                    height="58px"
                    justifyContent={"space-between"}
                    alignItems="center"
                    padding={"1rem"}
                >
                    <Text color={"#fff"}>{name}</Text>
                    <Avatar {...stringAvatar(name)} />
                </Flex>
            </Button>

            <Menu
                anchorEl={anchorEl}
                id="account-menu"
                open={open}
                onClose={handleClose}
                onClick={handleClose}
                transformOrigin={{ horizontal: 'left', vertical: 'bottom' }}
                anchorOrigin={{ horizontal: 'right', vertical: 'top' }}
            >
                <MenuItem onClick={props.onlogOut}>
                    <ListItemIcon>
                        <LogoutOutlined fontSize="small" />
                    </ListItemIcon>
                    Logout
                </MenuItem>
            </Menu>

        </Flex>
    );
}