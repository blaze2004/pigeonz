import React, { useState } from 'react';
import { createEditor } from 'slate';
import { Slate, Editable, withReact } from 'slate-react';
import { useNavigate, useLocation } from 'react-router-dom';
import { Header, LinkCopiedSnackbar, PeopleCard, Popup, titleCase } from './common';
import { useParams } from 'react-router-dom';
import { Avatar, CssBaseline, Button, IconButton, TextField, Card, CardContent, CardActionArea } from '@mui/material';
import { View, Flex, Text, Heading, TabItem, Tabs, Divider } from '@aws-amplify/ui-react';
import { CalendarTodayOutlined, CategoryOutlined, Group, LinkOutlined, Event } from '@mui/icons-material';
import { host, Routes } from '../../values/routes';
import { AmplifyS3ImagePicker } from '@aws-amplify/ui-react/legacy';
// for testing only
import image from '../../assets/nft.png';
import banner from '../../assets/wallpaper.png';
import TextEditor from '../editor/editor';

function ResourceCard(props) {
    const { communityName }=useParams();
    const navigate=useNavigate();
    const { resourceID, title, description }=props;

    return (
        <Card sx={{ maxWidth: 345, backgroundColor: "#2c2c2c", borderRadius: "1rem" }}>
            <CardActionArea>
                <CardContent onClick={() => navigate(`${Routes.get("Explore")}/${communityName}/resources/${resourceID}`)}>
                    <Heading color="#fff" paddingTop={"10px"}>{title}</Heading>
                    <Text color="#f9f9f8" paddingTop={"10px"}>{description}...</Text>
                </CardContent>
            </CardActionArea>
        </Card>
    );

}

function ResourcesTab(props) {
    const [open, setOpen]=useState(false);
    const [editor]=useState(() => withReact(createEditor()));

    const handleClose=() => {
        setOpen(false);
    }
    const handleOpen=() => {
        setOpen(true);
    }

    const handlePost=() => {
        setOpen(false);
    }
    const initialValue=[
        {
            type: 'paragraph',
            children: [
                {
                    text: 'Type your post here...',
                },
            ],
        },
    ];

    const resources=[
        {
            title: "Programming with python",
            description: "This book contains basics of python documentation.",
            id: 1,
        },
        {
            title: "Programming with python",
            description: "This book contains basics of python documentation.",
            id: 1,
        },
        {
            title: "Programming with python",
            description: "This book contains basics of python documentation.",
            id: 1,
        },
        {
            title: "Programming with python",
            description: "This book contains basics of python documentation.",
            id: 1,
        },
        {
            title: "Programming with python",
            description: "This book contains basics of python documentation.",
            id: 1,
        },
        {
            title: "Programming with python",
            description: "This book contains basics of python documentation.",
            id: 1,
        },
        {
            title: "Programming with python",
            description: "This book contains basics of python documentation.",
            id: 1,
        },
        {
            title: "Programming with python",
            description: "This book contains basics of python documentation.",
            id: 1,
        },
        {
            title: "Programming with python",
            description: "This book contains basics of python documentation.",
            id: 1,
        },
        {
            title: "Programming with python",
            description: "This book contains basics of python documentation.",
            id: 1,
        },
        {
            title: "Programming with python",
            description: "This book contains basics of python documentation.",
            id: 1,
        }
    ];
    const css=(
        `
        .resources-list {
            display: grid;
            gap: 30px;
            padding: 20px 80px;
            grid-template-columns: repeat(1, 1fr);
        }
        
        @media screen and (min-width: 768px){
            .resources-list {
                grid-template-columns: repeat(2, 1fr);
            }
        }
        `
    );
    return (
        <Flex width="100%" direction="column" paddingTop="20px">
            <style>{css}</style>
            <Button variant="contained" onClick={handleOpen}>New Resource</Button>
            <View as="div" className="resources-list">
                {
                    resources.map((item, index) => (
                        <ResourceCard
                            title={item.title}
                            description={item.description}
                            resourceID={item.id}
                        />
                    ))
                }
            </View>
            <Popup
                open={open}
                setOpen={setOpen}
                handleClose={handleClose}
                handlePost={handlePost}
                title={"New Resource"}
            >
                <Flex minWidth={"500px"} minHeight="700px" border={"1px solid #f8f8f9"}>
                    <Slate editor={editor} value={initialValue}>
                        <TextEditor editor={editor} readOnly={false} />
                    </Slate>
                </Flex>
            </Popup>
        </Flex>
    );
}

function EventCard(props) {
    const navigate=useNavigate();
    return (
        <Flex direction={"column"} padding="5px" borderRadius={"1rem"} border="1px solid #f8f8f9" marginBottom={"2px"} marginTop="2px">
            <Flex justifyContent={"space-between"} alignItems="center" marginBottom={"5px"} marginTop="5px">
                <Flex alignItems={"center"}>
                    <Avatar>
                        <Event />
                    </Avatar>
                    <Text color="#fff" fontWeight="bold">{props.title}</Text>
                </Flex>
                <Button variant="contained" onClick={() => navigate(props.registrationLink)}>Register</Button>
            </Flex>
            <Text color="#fff">{props.description}</Text>
            <Button variant="text" onClick={() => navigate(props.url)}>More info</Button>
        </Flex>
    );
}

function EventsTab(props) {
    const [open, setOpen]=useState(false);

    const handleClose=() => {
        setOpen(false);
    }
    const handleOpen=() => {
        setOpen(true);
    }

    const handlePost=() => {
        setOpen(false);
    }

    // var NewEvent={
    //     name: "",
    //     bannerImage: "",
    //     registrationLink: "",
    //     resources: []
    // }
    return (
        <Flex direction={"column"} paddingTop="20px">
            <Button variant="contained" onClick={handleOpen}>New Event</Button>
            {
                props.events.map((event, _) => (
                    <EventCard
                        title={event.title}
                        description={event.description}
                        url={event.url}
                        registrationLink={event.registrationLink}
                    />
                ))
            }
            <Popup
                open={open}
                setOpen={setOpen}
                handleClose={handleClose}
                handlePost={handlePost}
                title={"New Event"}
            >
                <Flex direction="column" minWidth={"500px"} minHeight="700px" justifyContent={"center"}>
                    <TextField label="Name" aria-required="true"></TextField>

                    <TextField label="Registration Link" aria-required="true"></TextField>
                    <AmplifyS3ImagePicker headerTitle='Add Banner Image' aria-required="false" />

                </Flex>
            </Popup>
        </Flex>
    );
}

function MembersTab(props) {

    const [open, setOpen]=useState(false);

    const handleOpen=() => {
        setOpen(true);
    }

    const location=useLocation();

    function copyLink() {
        navigator.clipboard.writeText(host+location.pathname);
        handleOpen();
    }

    return (
        <Flex direction={"column"} paddingTop="20px">
            <Button variant="contained" onClick={() => copyLink()}>Invite</Button>
            <Heading level={5} fontWeight="bold" color="#fff" paddingTop={"20px"}>Admins</Heading>
            {
                props.admins.map((name, _) => (
                    <PeopleCard name={name} />
                ))
            }
            <Heading level={5} fontWeight="bold" color="#fff" paddingTop={"20px"}>Members</Heading>
            {
                props.members.map((name, _) => (
                    <PeopleCard name={name} />
                ))
            }
            <LinkCopiedSnackbar open={open} setOpen={setOpen} />
        </Flex>
    );
}

function Post(props) {
    const post=props.post;
    const [editor]=useState(() => withReact(createEditor()));
    return (
        <View as="div">
            <PeopleCard name={post.user.name}>
                <Text color="#999999">{post.createdAt}</Text>
            </PeopleCard>
            <Flex direction="column" paddingTop={"10px"} paddingLeft="20px" paddingRight={"20px"}>
                <Slate editor={editor} value={post.content}>
                    <Editable readOnly={true} />
                </Slate>
                <Divider orientation="horizontal" />
            </Flex>

        </View>
    );
}

function PostsTab(props) {
    const [open, setOpen]=useState(false);
    const [editor]=useState(() => withReact(createEditor()));

    const handleClose=() => {
        setOpen(false);
    }
    const handleOpen=() => {
        setOpen(true);
    }

    const handlePost=() => {
        setOpen(false);
    }

    const initialValue=[
        {
            type: 'paragraph',
            children: [
                {
                    text: 'Type your post here...',
                },
            ],
        },
    ];

    return (
        <Flex direction={"column"} paddingTop="20px">
            <Button variant="contained" onClick={handleOpen}>New Post</Button>
            {
                props.posts.map((post, _) => (
                    <Post post={post} />
                ))
            }
            <Popup
                open={open}
                setOpen={setOpen}
                handleClose={handleClose}
                handlePost={handlePost}
                title={"New Post"}
            >
                <Flex minWidth={"500px"} minHeight="700px" border={"1px solid #f8f8f9"}>
                    <Slate editor={editor} value={initialValue}>
                        <TextEditor editor={editor} readOnly={false} />
                    </Slate>
                </Flex>
            </Popup>
        </Flex>
    );
}

function Links(props) {

    return (
        <Flex alignItems={"center"} paddingTop="20px">
            {
                props.links.map((link, _) => (
                    <IconButton href={link}>
                        <Avatar>
                            <LinkOutlined />
                        </Avatar>
                    </IconButton>
                ))
            }
        </Flex>
    );
}

function Community() {
    const { communityName }=useParams();

    const communityData={
        name: titleCase(communityName),
        description: "A community to share your experience and understand the life of a working developer.",
        profileImage: image,
        bannerImage: banner,
        date: "12, Nov 2022",
        category: "Technology",
        membersCount: 250,
        admins: [
            "Mark Zuckerberg",
            "Shubham Tiwari",
            "Vivek IITM",
            "IronMan",
            "Tony Stark"
        ],
        members: [
            "Steve Rogers",
            "Natasha Romanoff",
            "Phil Colson",
            "Nick Fury",
            "Peter Parker",
            "Miles Morales"
        ],
        links: [
            "https://slack.com/",
            "https://discord.com/",
        ],
        events: [
            {
                title: "General MeetUp",
                description: "This is a general meetup organised by the community to help fellow develoeprs know each other.",
                url: "/",
                registrationLink: "https://meetup.com/general-meetup-2"
            },
            {
                title: "General MeetUp",
                description: "This is a general meetup organised by the community to help fellow develoeprs know each other.",
                url: "/",
                registrationLink: "https://meetup.com/general-meetup-2"
            },
            {
                title: "General MeetUp",
                description: "This is a general meetup organised by the community to help fellow develoeprs know each other.",
                url: "/",
                registrationLink: "https://meetup.com/general-meetup-2"
            },
            {
                title: "General MeetUp",
                description: "This is a general meetup organised by the community to help fellow develoeprs know each other.",
                url: "/",
                registrationLink: "https://meetup.com/general-meetup-2"
            },
            {
                title: "General MeetUp",
                description: "This is a general meetup organised by the community to help fellow develoeprs know each other.",
                url: "/",
                registrationLink: "https://meetup.com/general-meetup-2"
            },
            {
                title: "General MeetUp",
                description: "This is a general meetup organised by the community to help fellow develoeprs know each other.",
                url: "/",
                registrationLink: "https://meetup.com/general-meetup-2"
            },
            {
                title: "General MeetUp",
                description: "This is a general meetup organised by the community to help fellow develoeprs know each other.",
                url: "/",
                registrationLink: "https://meetup.com/general-meetup-2"
            },
            {
                title: "General MeetUp",
                description: "This is a general meetup organised by the community to help fellow develoeprs know each other.",
                url: "/",
                registrationLink: "https://meetup.com/general-meetup-2"
            },
            {
                title: "General MeetUp",
                description: "This is a general meetup organised by the community to help fellow develoeprs know each other.",
                url: "/",
                registrationLink: "https://meetup.com/general-meetup-2"
            }
        ],
        posts: [
            {
                content: [
                    {
                        type: 'paragraph',
                        children: [
                            {
                                text:
                                    'Hey, Everyone I am new to this community. I would love to work with you all.',
                            },
                        ],
                    },
                ],
                user: {
                    name: "Shubham Tiwari"
                },
                createdAt: "2/02/2022"
            },
            {
                content: [
                    {
                        type: 'paragraph',
                        children: [
                            {
                                text:
                                    'Hey, Everyone I am new to this community. I would love to work with you all.',
                            },
                        ],
                    },
                ],
                user: {
                    name: "Shubham Tiwari"
                },
                createdAt: "2/02/2022"
            },
            {
                content: [
                    {
                        type: 'paragraph',
                        children: [
                            {
                                text:
                                    'Hey, Everyone I am new to this community. I would love to work with you all.',
                            },
                        ],
                    },
                ],
                user: {
                    name: "Shubham Tiwari"
                },
                createdAt: "2/02/2022"
            },
            {
                content: [
                    {
                        type: 'paragraph',
                        children: [
                            {
                                text:
                                    'Hey, Everyone I am new to this community. I would love to work with you all.',
                            },
                        ],
                    },
                ],
                user: {
                    name: "Shubham Tiwari"
                },
                createdAt: "2/02/2022"
            }
        ]
    }

    const css=(
        `.community-banner {
            background-image: url(${communityData.bannerImage});
            background-repeat: no-repeat;
            background-size: cover;
            padding-left: 20%;
        }
        .community-avatar {
            transform: translateY(-50%);
        }
        .amplify-tabs-item:hover {
          color: white;
        }
        
        .amplify-tabs-item[data-state='active'] {
            color: #1976d2;
            border-color: #1976d2;
        }
        .amplify-tabs-item{
            color: #999999;
        }
        
        .amplify-tabs-item:focus {
        color: #1976d2;
        }
        `
    );

    return (
        <View
            as="div"
            minwidth="100%"
            minHeight="100%"
            backgroundColor="#171718"
            color="#fff"
        >
            <CssBaseline />
            <style>{css}</style>
            <Header></Header>
            <Flex width="100%" height="300px" className='community-banner'>
            </Flex>
            <Flex direction={"column"} alignItems={"center"}>
                <View as="div" minWidth="50%" paddingLeft="20px" paddingRight="20px" paddingBottom="20px">
                    <Avatar
                        className='community-avatar'
                        sx={{ width: 126, height: 126 }}
                        alt="community profile image"
                        src={communityData.profileImage}
                    />
                    <Flex justifyContent="space-between">
                        <Heading level={1} color="#fff" fontWeight={"bolder"}>{communityData.name}</Heading>
                        <Button variant="contained">Join</Button>
                    </Flex>
                    <Flex>
                        <Flex paddingTop={"20px"} color="#999999" justifyContent={"center"} alignItems="center">
                            <CategoryOutlined />
                            <Text color="#999999">{communityData.category}</Text>
                        </Flex>
                        <Flex paddingTop={"20px"} color="#999999" justifyContent={"center"} alignItems="center">
                            <CalendarTodayOutlined />
                            <Text color="#999999">{communityData.date}</Text>
                        </Flex>
                        <Flex paddingTop={"20px"} color="#999999" justifyContent={"center"} alignItems="center">
                            <Group />
                            <Text color="#999999">{communityData.membersCount}</Text>
                        </Flex>
                    </Flex>
                    <Links links={communityData.links} />
                    <Text color={"#f9f9f8"} paddingTop="10px" paddingBottom="10px">{communityData.description}</Text>
                    <Tabs>
                        <TabItem title="Posts">
                            <PostsTab posts={communityData.posts} />
                        </TabItem>
                        <TabItem title="Events">
                            <EventsTab events={communityData.events} />
                        </TabItem>
                        <TabItem title="Resources">
                            <ResourcesTab />
                        </TabItem>
                        <TabItem title="Members">
                            <MembersTab admins={communityData.admins} members={communityData.members} />
                        </TabItem>
                    </Tabs>

                </View>
            </Flex>


        </View>
    );

}

export default Community;