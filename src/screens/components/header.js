import React from "react";
import { Text } from '@aws-amplify/ui-react';
import { Auth } from 'aws-amplify';

function Header() {
    return (
        <nav>
            <Text>
                Welcome, {Auth.currentAuthenticatedUser.name}
            </Text>
        </nav>
    );
}

export default Header;