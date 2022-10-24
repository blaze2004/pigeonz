import React from "react";
import { useLocation, useNavigate } from 'react-router-dom';
import { Heading, Divider, Flex, View } from '@aws-amplify/ui-react';
import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';
import { styled } from '@mui/material/styles';
import { grey } from '@mui/material/colors';
import { Routes } from '../../values/routes';

function ExtendedButton(props) {
    const location=useLocation();
    const navigate=useNavigate();

    let buttonColor;
    if (location.pathname===props.route) {
        buttonColor="#fff";
    } else {
        buttonColor=grey[400];
    }

    const ColorButton=styled(Button)(({ }) => ({
        color: buttonColor,
        textAlign: "left",
        alignItems: "start"
    }));


    return (
        <>
            <ColorButton variant="text" startIcon={<DeleteIcon />} onClick={() => navigate(props.route)}>{props.title}</ColorButton>
            <Divider orientation="horizontal" color={buttonColor} />
        </>
    );
}

export default function SideNavBar(props) {

    return (
        <View as="div" height="100%" backgroundColor="#212332" color="#ffffff" width="220px" padding="20px">
            <Heading level={1} color="#ffffff" fontWeight={"bold"}>PigeonZ</Heading>
            <Flex direction="column" paddingTop={"20px"}>
                <ExtendedButton title="Dashboard" route={Routes.get("Dashboard")}></ExtendedButton>
                <ExtendedButton title="Schedule" route={Routes.get("Schedule")}></ExtendedButton>
            </Flex>
        </View>
    );
}