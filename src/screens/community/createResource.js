import React, { useState } from 'react';
import { CssBaseline, TextField } from '@mui/material';
import { createEditor } from 'slate';
import { Slate, withReact } from 'slate-react';
import { useParams } from 'react-router-dom';
import { Flex, View } from '@aws-amplify/ui-react';
import { Header } from './common';
import { Snackbar, Backdrop, CircularProgress, Button } from '@mui/material';
import TextEditor from '../editor/editor';
import { API, Auth, graphqlOperation } from 'aws-amplify';
import { listCommunities } from '../../graphql/queries';
import { createUserResource } from '../../graphql/customQueries';

export function CreateResource(props) {
    const { communityName }=useParams();
    const [openMessage, setOpenMessage]=useState(false);
    const [loading, setLoading]=useState(false);
    const handleToggle=(status) => {
        setLoading(status);
    }

    const [initialValue, setInitialValue]=useState([
        {
            type: 'paragraph',
            children: [
                {
                    text: 'Create your resource here...',
                },
            ],
        },
    ]);
    const [title, setTitle]=useState("");

    const [editor]=useState(() => withReact(createEditor()));

    async function addResource() {
        handleToggle(true);
        try {
            if (!initialValue||initialValue.length===0||!title) return

            const getCommunityId=await API.graphql(graphqlOperation(listCommunities, { filter: { name: { eq: communityName } } }));
            const communityDetails=(getCommunityId.data.listCommunities.items.length===0)? window.location.pathname="/":getCommunityId.data.listCommunities.items[0];
            const user=await Auth.currentAuthenticatedUser();

            const ResourceInput={
                communityResourcesId: communityDetails.id,
                userResourcesId: user.username,
                content: JSON.stringify(initialValue),
                title: title,
            }

            const newResource=await API.graphql(graphqlOperation(createUserResource, { input: ResourceInput }));
            handleToggle(false);
            window.location.pathname=`/communities/${communityName}/resources/${newResource.data.CreateResource.id}`;
        } catch (error) {
            console.log(error);
            handleToggle(false);
            setOpenMessage(true);
        }
    }

    return (
        <View
            as="div"
            minWidth="100%"
            minHeight="100%"
            backgroundColor="#171718"
            color="#fff"
        >
            <CssBaseline />
            <Header></Header>
            <Flex direction="column" alignItems="center">
                <View as="div" minWidth="50%" padding="20px">
                    <Flex justifyContent={"space-between"} color="#fff">
                        <TextField
                            label="Title"
                            aria-required={true}
                            value={title}
                            variant="standard"
                            onChange={(event) => setTitle(event.target.value)}
                        />
                        <Button variant="contained" onClick={addResource}>Publish</Button>
                    </Flex>
                    <Slate editor={editor} value={initialValue} onChange={
                        value => {
                            const isAstChange=editor.operations.some(
                                op => 'set_selection'!==op.type
                            )
                            if (isAstChange) {
                                setInitialValue(value);
                            }
                        }
                    }>
                        <TextEditor editor={editor} readOnly={false} />
                    </Slate>

                </View>
                <Snackbar
                    open={openMessage}
                    autoHideDuration={2000}
                    onClose={() => { setOpenMessage(false) }}
                    message="Error saving resource."
                >
                </Snackbar>
                <Backdrop
                    open={loading}
                    sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer+1 }}
                >
                    <CircularProgress color="inherit" />
                </Backdrop>
            </Flex>
        </View>
    );
}

export default CreateResource;