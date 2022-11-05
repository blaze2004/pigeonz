import React, { useCallback, useEffect, useState } from 'react';
import { CssBaseline } from '@mui/material';
import { createEditor } from 'slate';
import { Slate, withReact } from 'slate-react';
import { useParams, useLocation } from 'react-router-dom';
import { Flex, View, Text, Heading } from '@aws-amplify/ui-react';
import { Header, LinkCopiedSnackbar, PeopleCard, titleCase } from './common';
import { EmailIcon, EmailShareButton, FacebookIcon, FacebookShareButton, TwitterIcon, TwitterShareButton } from 'react-share';
import { LinkOutlined } from '@mui/icons-material';
import { Avatar, IconButton, Snackbar } from '@mui/material';
import { host } from '../../values/routes';
import { API, graphqlOperation } from 'aws-amplify';
import { getResource } from '../../graphql/queries';
import TextEditor from '../editor/editor';

export function Resource(props) {
    const { communityName, resourceID }=useParams();
    const [open, setOpen]=useState(false);
    const [openMessage, setOpenMessage]=useState(false);
    const [resource, setResource]=useState({});
    const [editorArea, setEditorArea]=useState((<Text>Loading</Text>));
    const [editor]=useState(() => withReact(createEditor()));

    const fetchResource=useCallback(async () => {
        try {
            const resourcedata=await API.graphql(graphqlOperation(getResource, { id: resourceID }));
            const resource=resourcedata.data.getResource===null? window.location.pathname="/":resourcedata.data.getResource;
            const initialValue=JSON.parse(resource.content);
            const date=new Date(resource.createdAt);
            resource.content=initialValue;
            resource.createdAt=date.getDate()+','+date.toLocaleString('default', { month: 'short' })+' '+date.getFullYear();
            console.log(resource);
            setResource(resource);
            setEditorArea(
                (<Slate editor={editor} value={resource.content}>
                    <TextEditor editor={editor} readOnly={true} />
                </Slate>)
            );
        } catch (error) {
            setOpenMessage(true);
            console.log(error);
        }
    }, [resourceID, editor]);

    useEffect(() => {
        fetchResource();
    }, [fetchResource]);

    const handleOpen=() => {
        setOpen(true);
    }

    const location=useLocation();
    const url=host+location.pathname;

    function copyLink() {
        navigator.clipboard.writeText(url);
        handleOpen();
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
                    <Heading level={1} fontWeight="bold" color="#fff">{resource.title}</Heading>
                    <Flex justifyContent={"space-between"} alignItems="center" direction={"row"} paddingBottom="20px">
                        <PeopleCard name={titleCase(communityName)} >
                            <Text color="#999999">{resource.createdAt}</Text>
                        </PeopleCard>
                        <Flex aria-label="share buttons">
                            <IconButton onClick={() => copyLink()}>
                                <Avatar sx={{ width: 30, height: 30 }}>
                                    <LinkOutlined />
                                </Avatar>
                            </IconButton>
                            <EmailShareButton url={url}>
                                <EmailIcon size={32} round={true} />
                            </EmailShareButton>
                            <FacebookShareButton url={url}>
                                <FacebookIcon size={32} round={true} />
                            </FacebookShareButton>
                            <TwitterShareButton url={url}>
                                <TwitterIcon size={32} round={true} />
                            </TwitterShareButton>
                            <LinkCopiedSnackbar open={open} setOpen={setOpen} />

                        </Flex>
                    </Flex>
                    {editorArea}

                </View>
                <Snackbar
                    open={openMessage}
                    autoHideDuration={2000}
                    onClose={() => { setOpenMessage(false) }}
                    message="Error fetching resource details."
                >
                </Snackbar>
            </Flex>
        </View>
    );
}

export default Resource;