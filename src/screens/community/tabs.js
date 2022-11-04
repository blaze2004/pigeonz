import React, { useState, useEffect, useCallback } from 'react';
import { createEditor } from 'slate';
import { API, Auth, graphqlOperation } from 'aws-amplify';
import { Slate, Editable, withReact } from 'slate-react';
import { useNavigate, useLocation } from 'react-router-dom';
import { LinkCopiedSnackbar, PeopleCard, Popup } from './common';
import { useParams } from 'react-router-dom';
import { Button, TextField, Card, CardContent, CardActionArea, DialogActions, Snackbar, Backdrop, CircularProgress } from '@mui/material';
import { View, Flex, Text, Heading, Divider } from '@aws-amplify/ui-react';
import { CalendarTodayOutlined, } from '@mui/icons-material';
import { host, Routes } from '../../values/routes';
import TextEditor from '../editor/editor';
import { listUserAdminCommunities, listUserMemberCommunities } from '../../graphql/queries';
import { getPostsList, getEventsList, getResourcesList, getUserDetails, createUserPost, createUserEvent } from '../../graphql/customQueries';

export function ResourceCard(props) {
    const { communityName }=useParams();
    const navigate=useNavigate();
    const { resourceID, title, date }=props;

    const _date=new Date(date);
    const postDate=_date.getDate()+','+_date.toLocaleString('default', { month: 'short' })+' '+_date.getFullYear();

    return (
        <Card sx={{ maxWidth: 345, backgroundColor: "#2c2c2c", borderRadius: "1rem" }}>
            <CardActionArea>
                <CardContent onClick={() => navigate(`${Routes.get("Explore")}/${communityName}/resources/${resourceID}`)}>
                    <Heading color="#fff" paddingTop={"10px"}>{title}</Heading>
                    <Text color="#f9f9f8" paddingTop={"10px"}>Click to see this resource.</Text>
                    <Flex paddingTop={"10px"} color="#999999" justifyContent={"center"} alignItems="center">
                        <CalendarTodayOutlined />
                        <Text color="#999999">{postDate}</Text>
                    </Flex>
                </CardContent>
            </CardActionArea>
        </Card>
    );

}

export function ResourcesTab(props) {
    const [openMessage, setOpenMessage]=useState(false);
    const [resources, setResources]=useState([]);
    const { communityId }=props;
    const navigate=useNavigate();
    const { communityName }=useParams();

    const fetchResources=useCallback(async () => {
        try {
            const resourcesData=await API.graphql(graphqlOperation(getResourcesList, { filter: { communityResourcesId: { eq: communityId } } }));
            const resources=resourcesData.data.listResources.items;
            setResources(resources);
        } catch (error) {
            setOpenMessage(true);
            console.log(error);
        }
    }, [communityId]);

    useEffect(() => {
        fetchResources();
    }, [fetchResources]);

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
            <Button variant="contained" onClick={()=>navigate(`/communities/${communityName}/resources/new`)} style={{display: props.create ? 'block': 'hidden'}}>New Resource</Button>
            <View as="div" className="resources-list">
                {
                    resources.map((item, index) => (
                        <ResourceCard
                            title={item.title}
                            resourceID={item.id}
                            date={item.createdAt}
                        />
                    ))
                }
            </View>
            <Snackbar
                open={openMessage}
                autoHideDuration={2000}
                onClose={() => { setOpenMessage(false) }}
                message="Error fetching resources."
            >
            </Snackbar>
        </Flex>
    );
}

export function EventCard(props) {
    return (
        <Flex direction={"column"} padding="5px" borderRadius={"1rem"} border="1px solid #f8f8f9" marginBottom={"2px"} marginTop="2px" width={'100%'} justifyContent="center" alignItems={"center"}>
            <Text color="#fff" width={"100%"}>{props.title}</Text>
            <a href={props.registrationLink} style={{ textDecoration: 'none' }} target="_blank" rel="noreferrer"><Button variant="contained">Register</Button></a>
        </Flex>
    );
}

export function EventsTab(props) {
    const [open, setOpen]=useState(false);
    const [openMessage, setOpenMessage]=useState(false);
    const [loading, setLoading]=useState(false);
    const [formState, setFormState]=useState({
        name: "",
        registration_link: ""
    })
    const handleToggle=(status) => {
        setLoading(status);
    }

    function setInput(key, value) {
        setFormState({ ...formState, [key]: value });
    }

    const [events, setEvents]=useState([]);
    const { communityId }=props;

    const fetchEvents=useCallback(async () => {
        try {
            const eventsData=await API.graphql(graphqlOperation(getEventsList, { filter: { communityEventsId: { eq: communityId } } }));
            const events=eventsData.data.listEvents.items;
            setEvents(events);
        } catch (error) {
            setOpenMessage(true);
            console.log(error);
        }
    }, [communityId])

    useEffect(() => {
        fetchEvents();
    }, [fetchEvents]);

    const handleClose=() => {
        setOpen(false);
    }
    const handleOpen=() => {
        setOpen(true);
    }

    const handlePost=async () => {
        handleToggle(true);
        try {
            if (!formState.name||!formState.registration_link) return
            const user=await Auth.currentAuthenticatedUser();
            const EventInput={
                name: formState.name,
                registration_link: formState.registration_link,
                communityEventsId: communityId,
                userEventsId: user.username
            }

            await API.graphql(graphqlOperation(createUserEvent, { input: EventInput }));
            handleToggle(false);
            setOpen(false);
            fetchEvents();
        } catch (error) {
            setOpenMessage(true);
            console.log(error);
            handleToggle(false);
        }
    }

    return (
        <Flex direction={"column"} paddingTop="20px">
            <Button variant="contained" onClick={handleOpen} style={{display: props.create ? 'block': 'hidden'}}>New Event</Button>
            {
                events.map((event, _) => (
                    <EventCard
                        title={event.name}
                        registrationLink={event.registration_link}
                    />
                ))
            }
            <Popup
                open={open}
                title={"New Event"}
            >
                <Flex direction="column" minWidth={"500px"} minHeight="700px" justifyContent={"center"}>
                    <TextField label="Name" aria-required="true" value={formState.name} onChange={(event)=> setInput("name", event.target.value)}></TextField>

                    <TextField label="Registration Link" aria-required="true" value={formState.registration_link} onChange={(event)=>setInput("registration_link", event.target.value)}></TextField>
                </Flex>
                <DialogActions>
                    <Button variant="text" onClick={handleClose}>Discard</Button>
                    <Button variant="contained" borderRadius="2rem" onClick={handlePost}>Publish</Button>
                </DialogActions>
            </Popup>
            <Snackbar
                open={openMessage}
                autoHideDuration={2000}
                onClose={() => { setOpenMessage(false) }}
                message="Error fetching events."
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

export function MembersTab(props) {

    const [open, setOpen]=useState(false);
    const [members, setMembers]=useState([]);
    const [admins, setAdmins]=useState([]);
    const [openMessage, setOpenMessage]=useState(false);

    const getUsers=useCallback(async () => {
        try {
            const membersData=await API.graphql(graphqlOperation(listUserMemberCommunities, { filter: { communityID: { eq: props.communityId } } }));
            const adminsData=await API.graphql(graphqlOperation(listUserAdminCommunities, { filter: { communityID: { eq: props.communityId } } }));
            const members=Array.from(membersData.data.listUserMemberCommunities.items, (item) => item.user.name);
            const admins=Array.from(adminsData.data.listUserAdminCommunities.items, (item) => item.user.name);
            setMembers(members);
            setAdmins(admins);
        } catch (error) {
            setOpenMessage(true);
            console.log(error);
        }
    }, [props.communityId])

    useEffect(() => {
        getUsers();
    }, [getUsers]);

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
            <Button variant="contained" onClick={() => copyLink()} style={{display: props.create ? 'block': 'hidden'}}>Invite</Button>
            <Heading level={5} fontWeight="bold" color="#fff" paddingTop={"20px"}>Admins</Heading>
            {
                admins.map((name, _) => (
                    <PeopleCard name={name} />
                ))
            }
            <Heading level={5} fontWeight="bold" color="#fff" paddingTop={"20px"}>Members</Heading>
            {
                members.map((name, _) => (
                    <PeopleCard name={name} />
                ))
            }
            <LinkCopiedSnackbar open={open} setOpen={setOpen} />
            <Snackbar
                open={openMessage}
                autoHideDuration={2000}
                onClose={() => { setOpenMessage(false) }}
                message="Error fetching members and admins list."
            >
            </Snackbar>
        </Flex>
    );
}

export function Post(props) {
    const { post }=props;
    const date=new Date(post.createdAt);
    post.createdAt=date.getDate()+','+date.toLocaleString('default', { month: 'short' })+' '+date.getFullYear();
    const initialValue=JSON.parse(post.content);
    const [editor]=useState(() => withReact(createEditor()));
    const [username, setUserName]=useState("");

    const getUserName=useCallback(async () => {
        try {
            const user=await API.graphql(graphqlOperation(getUserDetails, { id: post.userPostsId }));
            setUserName(user.data.getUser.name);
        } catch (error) {
            console.log(error);
        }
    }, [post.userPostsId])

    useEffect(() => {
        getUserName();
    }, [getUserName]);

    return (
        <View as="div">
            <PeopleCard name={username}>
                <Text color="#999999">{post.createdAt}</Text>
            </PeopleCard>
            <Flex direction="column" paddingTop={"10px"} paddingLeft="20px" paddingRight={"20px"}>
                <Slate editor={editor} value={initialValue}>
                    <Editable readOnly={true} />
                </Slate>
                <Divider orientation="horizontal" />
            </Flex>

        </View>
    );
}

export function PostsTab(props) {
    const [open, setOpen]=useState(false);
    const [editor]=useState(() => withReact(createEditor()));
    const [posts, setPosts]=useState([]);
    const [openMessage, setOpenMessage]=useState(false);
    const [loading, setLoading]=useState(false);
    const handleToggle=(status) => {
        setLoading(status);
    }

    const handleClose=() => {
        setOpen(false);
    }
    const handleOpen=() => {
        setOpen(true);
    }

    const { communityId }=props;

    const [initialValue, setInitialValue]=useState([
        {
            type: 'paragraph',
            children: [
                {
                    text: 'Type your post here...',
                },
            ],
        },
    ]);

    

    const fetchPosts=useCallback(async () => {
        try {
            const postsData=await API.graphql(graphqlOperation(getPostsList, { filter: { communityPostsId: { eq: communityId } } }));
            const posts=postsData.data.listPosts.items;
            console.log(posts)
            setPosts(posts);
        } catch (error) {
            setOpenMessage(true);
            console.log(error);
        }
    }, [communityId])

    const handlePost=async () => {
        handleToggle(true)
        try {
            if (!initialValue||initialValue.length===0) return

            const user=await Auth.currentAuthenticatedUser();
            
            const PostInput={
                communityPostsId: communityId,
                content: JSON.stringify(initialValue),
                userPostsId: user.username
            }

            await API.graphql(graphqlOperation(createUserPost, { input: PostInput }));
            handleToggle(false);
            setOpen(false);
            fetchPosts();
        } catch (error) {
            setOpenMessage(true);
            console.log(error);
            handleToggle(false);
        }
    }

    useEffect(() => {
        fetchPosts();
    }, [fetchPosts]);


    return (
        <Flex direction={"column"} paddingTop="20px">
            <Button variant="contained" onClick={handleOpen} style={{display: props.create ? 'block': 'hidden'}}>New Post</Button>
            {
                posts.map((post, _) => (
                    <Post post={post} />
                ))
            }
            <Popup
                open={open}
                title={"New Post"}
            >
                <Flex minWidth={"500px"} minHeight="700px" border={"1px solid #f8f8f9"}>
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
                </Flex>
                <DialogActions>
                    <Button variant="text" onClick={handleClose}>Discard</Button>
                    <Button variant="contained" borderRadius="2rem" onClick={handlePost}>Publish</Button>
                </DialogActions>
            </Popup>
            <Snackbar
                open={openMessage}
                autoHideDuration={2000}
                onClose={() => { setOpenMessage(false) }}
                message="Error fetching posts."
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