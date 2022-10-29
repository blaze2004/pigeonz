import React from 'react';
import { Header } from './common';
import { useParams } from 'react-router-dom';
import { Avatar, CssBaseline, Button, IconButton } from '@mui/material';
import { stringAvatar } from '../components/avatar';
import { View, Flex, Text, Heading, TabItem, Tabs } from '@aws-amplify/ui-react';
import { CalendarTodayOutlined, CategoryOutlined, Group } from '@mui/icons-material';

// for testing only
import image from '../../assets/nft.png';
import banner from '../../assets/wallpaper.png';

function PeopleCard(props) {
    return (
        <Flex paddingTop={"20px"} color="#999999" paddingLeft={"20px"} alignItems="center">
            <Avatar {...stringAvatar(props.name)} />
            <Text color="#999999">{props.name}</Text>
        </Flex>
    );
}

function MembersTab(props) {

    return (
        <View as="div">
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
        </View>
    );
}

function Post(props) {
    const post=props.post;
    return (
        <View as="div" borderRadius="1rem" backgroundColor="#666666" padding="5px">
            {post.content}
            <Flex justifyContent={"space-between"}>
                <PeopleCard name={post.user.name} />
                <Text color="#fff">{post.createdAt}</Text>
            </Flex>

        </View>
    );
}

function PostsTab(props) {
    return (
        <Flex direction={"column"} paddingTop="20px">
            {
                props.posts.map((post, _) => (
                    <Post post={post} />
                ))
            }
        </Flex>
    );
}

function Links(props) {
    return (
        <Flex alignItems={"center"} paddingTop="20px">
            {
                props.links.map((link, _) => (
                    <IconButton href={link}>
                        <Avatar {...stringAvatar(link)} />
                    </IconButton>
                ))
            }
        </Flex>
    );
}

function Community() {
    const { communityName }=useParams();

    function titleCase(str) {
        str=str.toLowerCase().split(' ');
        for (var i=0; i<str.length; i++) {
            str[i]=str[i].charAt(0).toUpperCase()+str[i].slice(1);
        }
        return str.join(' ');
    }

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
            "https://slack.com/dev",
            "https://discord.com/dev",
            "https://link.me/dev",
        ],
        posts: [
            {
                content: "<p>Hi everyone, <br> I am new to this community.<p>",
                user: {
                    name: "Shubham Tiwari"
                },
                createdAt: "2/02/2022"
            },
            {
                content: "<p>Hi everyone, <br> I am new to this community.<p>",
                user: {
                    name: "Shubham Tiwari"
                },
                createdAt: "2/02/2022"
            },
            {
                content: "<p>Hi everyone, <br> I am new to this community.<p>",
                user: {
                    name: "Shubham Tiwari"
                },
                createdAt: "2/02/2022"
            },
            {
                content: "<p>Hi everyone, <br> I am new to this community.<p>",
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
    )
    return (
        <View as="div"
            width="100%"
            backgroundColor="#171718"
            color="#fff"
        >
            <CssBaseline />
            <style>{css}</style>
            <Header></Header>
            <Flex width="100%" height="300px" className='community-banner'>
            </Flex>
            <Flex direction={"column"} alignItems={"center"}>
                <View as="div" minWidth="50%" paddingLeft="20px" paddingRight="20px" paddingBottom="20px" minHeight="70vh">
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
                        <TabItem title="Events">Events</TabItem>
                        <TabItem title="Resources">Resources</TabItem>
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