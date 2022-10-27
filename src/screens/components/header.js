import React from "react";
import { Flex } from '@aws-amplify/ui-react';
import { Button } from '@mui/material';
import { Add } from "@mui/icons-material";
import { styled } from '@mui/material/styles';

function Header(props) {
    const ComposeButton=styled(Button)(({ theme }) => ({
        color: theme.palette.getContrastText("#000000"),
        backgroundColor: "#000000",
        '&:hover': {
            backgroundColor: "#2e2d2d",
        },
        width: "200px",
    }))
    return (

        <Flex direction={"row"} width={"100%"} justifyContent="space-between" alignItems={"center"} backgroundColor={"#f5f1f0"} paddingRight="5px">
            {props.children}
            <ComposeButton variant="contained" startIcon={<Add />}>Compose</ComposeButton>
        </Flex>
    );
}

export default Header;