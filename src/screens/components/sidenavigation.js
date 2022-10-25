import React from "react";
import { useLocation, useNavigate } from 'react-router-dom';
import { Heading, Divider, Flex, View, Text } from '@aws-amplify/ui-react';
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import { grey } from '@mui/material/colors';
import { Routes } from '../../values/routes';
import { CalendarMonthOutlined, SettingsOutlined, DashboardOutlined, EventSeatOutlined, HelpOutline } from "@mui/icons-material";
import { Avatar } from "@mui/material";

function stringToColor(string) {
    let hash=0;
    let i;

    for (i=0; i<string.length; i+=1) {
        hash=string.charCodeAt(i)+((hash<<5)-hash);
    }

    let color='#';

    for (i=0; i<3; i+=1) {
        const value=(hash>>(i*8))&0xff;
        color+=`00${value.toString(16)}`.slice(-2);
    }

    return color;
}

function stringAvatar(name) {
    let avatarText;
    if (name.indexOf(' ')>=0) {
        avatarText=`${name.split(' ')[0][0]}${name.split(' ')[1][0]}`;
    } else {
        avatarText=`${name[0]}`;
    }
    return {
        sx: {
            bgcolor: stringToColor(name),
        },
        children: avatarText,
    };
}

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
            <ColorButton variant="text" startIcon={props.children} onClick={() => navigate(route)}>{props.title||"Text"}</ColorButton>
            <Divider orientation="horizontal" color={buttonColor} />
        </>
    );
}

export default function SideNavBar() {
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

                </Flex></View>
            <Flex
                direction={"row"}
                borderRadius="12px"
                border={"1px solid #fff"}
                backgroundColor="#2a2d3e"
                height="58px"
                justifyContent={"space-around"}
                alignItems="center"
                padding={"1rem"}
                margin="5px"
            >
                <Text color={"#fff"}>{name}</Text>
                <Avatar {...stringAvatar(name)} />
            </Flex>

        </Flex>
    );
}