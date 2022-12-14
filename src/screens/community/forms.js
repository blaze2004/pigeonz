import React, { useEffect, useState } from 'react';
import { API, graphqlOperation, Auth } from 'aws-amplify';
import { TextAreaField, Flex } from '@aws-amplify/ui-react';
import { createCommunity, createUserAdminCommunities } from '../../graphql/mutations';
import { listCommunities } from '../../graphql/queries';
import { TextField, DialogActions, Button, Snackbar, Backdrop, CircularProgress } from '@mui/material';

const initialState={
    name: "",
    description: "",
    profile_image: "",
    banner_image: "",
    slackLink: "",
    discordLink: ""
}

export function CommunityForm(props) {
    // Completion message
    const [openMessage, setOpenMessage]=useState(false);

    // loading animation
    const [loading, setLoading]=useState(false);
    const handleToggle=(status) => {
        setLoading(status);
    }

    // Form
    const { setOpen }=props;
    const [formState, setFormState]=useState(initialState);
    const [message, setMessage]=useState("Community created Successfully.");
    const [communitiesList, setCommunitiesList]=useState([]);

    useEffect(() => {
        fetchCommunitiesList()
    });

    function setInput(key, value) {
        setFormState({ ...formState, [key]: value });
    }

    async function fetchCommunitiesList() {
        try {
            const communities=await API.graphql(graphqlOperation(listCommunities));
            const communitiesList=Array.from(communities.data.listCommunities.items, (value) => value.name);
            setCommunitiesList(communitiesList);
        } catch (error) {
            setMessage("Error connecting to the server.");
            setOpenMessage(true);
            setTimeout(setOpen, 2000, false);
            // setOpen(false);
        }
    }

    async function addCommunity() {
        handleToggle(true);
        try {
            if (!formState.name) return

            if (communitiesList.indexOf(formState.name)>=0) {
                setMessage("Community name should be unique.");
                setOpenMessage(true);
                handleToggle(false);
                return;
            }

            const communityData={
                name: formState.name,
                description: formState.description,
                profile_image: formState.profile_image,
                banner_image: formState.banner_image,
                links: [
                    formState.slackLink,
                    formState.discordLink
                ]
            }

            const newCommunity=await API.graphql(graphqlOperation(createCommunity, { input: communityData }));
            const userId=await Auth.currentAuthenticatedUser();
            const userInput={
                userID: userId.username,
                communityID: newCommunity.data.createCommunity.id
            }

            await API.graphql(graphqlOperation(createUserAdminCommunities, { input: userInput }))
            setMessage("Community created Successfully.");
            setOpenMessage(true);
            setOpen(false);
            handleToggle(false);

        } catch (error) {
            handleToggle(false);
            setMessage("Error creating community.");
            console.log(error);
            setOpenMessage(true);
        }
    }

    return (
        <Flex direction="column" minWidth="500px" minHeight="700px" justifyContent={"center"}>
            <TextField
                label="Name"
                aria-required="true"
                value={formState.name}
                onChange={(event) => setInput('name', event.target.value)}
            />
            <TextAreaField
                label="Description"
                aria-required="false"
                value={formState.description}
                onChange={(event) => setInput('description', event.target.value)}
            />
            <TextField
                label="Slack Link"
                aria-required="false"
                value={formState.slackLink}
                onChange={(event) => setInput('slackLink', event.target.value)}
            />
            <TextField
                label="Discord Link"
                aria-required="false"
                value={formState.discordLink}
                onChange={(event) => setInput('discordLink', event.target.value)}
            />
            {/* <AmplifyS3ImagePicker
                aria-required="false"
                track

            />
            <AmplifyS3ImagePicker
                headerTitle='Add Banner Image'
                aria-required="false"
                track
            /> */}

            <DialogActions>
                <Button variant="text" onClick={() => { setOpen(false) }}>Discard</Button>
                <Button variant="contained" borderradius="2rem" onClick={addCommunity}>Publish</Button>
            </DialogActions>

            <Snackbar
                open={openMessage}
                autoHideDuration={2000}
                onClose={() => { setOpenMessage(false) }}
                message={message}
            >
            </Snackbar>

            <Backdrop
                open={loading}
                sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer+1 }}
            >
                <CircularProgress color="inherit" />
            </Backdrop>
        </Flex>

    );
}