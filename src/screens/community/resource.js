import React, { useState } from 'react';
import { CssBaseline } from '@mui/material';
import { createEditor } from 'slate';
import { Slate, Editable, withReact } from 'slate-react';
import { useParams, useLocation } from 'react-router-dom';
import { Flex, View, Text, Heading } from '@aws-amplify/ui-react';
import { Header, LinkCopiedSnackbar, PeopleCard, titleCase } from './common';
import { EmailIcon, EmailShareButton, FacebookIcon, FacebookShareButton, TwitterIcon, TwitterShareButton } from 'react-share';
import { LinkOutlined } from '@mui/icons-material';
import { Avatar, IconButton } from '@mui/material';
import { host } from '../../values/routes';
import TextEditor from '../editor/editor';

export function Resource(props) {
    const { communityName, resourceID }=useParams();
    const [open, setOpen]=useState(false);

    const handleOpen=() => {
        setOpen(true);
    }

    const location=useLocation();
    const url=host+location.pathname;

    function copyLink() {
        navigator.clipboard.writeText(url);
        handleOpen();
    }
    const readOnly=!props.edit||false;
    const resourceData={
        date: "2/2/2022",
        content: [
            {
                type: 'paragraph',
                children: [
                    {
                        text:
                            'This is a resource.',
                    },
                ],
            },
        ],
        title: "AI: The New Age"
    }

    const [editor]=useState(() => withReact(createEditor()));

    const EditWidget=readOnly? <Editable readOnly={true} />:<TextEditor editor={editor} readOnly={readOnly} />;

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
                    <Heading level={1} fontWeight="bold" color="#fff">{resourceData.title+resourceID}</Heading>
                    <Flex justifyContent={"space-between"} alignItems="center" direction={"row"} paddingBottom="20px">
                        <PeopleCard name={titleCase(communityName)} >
                            <Text color="#999999">{resourceData.date}</Text>
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
                    <Slate editor={editor} value={resourceData.content}>
                        {EditWidget}
                    </Slate>

                </View>
            </Flex>
        </View>
    );
}

export default Resource;