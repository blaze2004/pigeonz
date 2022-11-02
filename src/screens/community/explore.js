import React from 'react';
import {
    View, Flex, Image, SearchField, Heading, Text
} from '@aws-amplify/ui-react';
import { Routes } from '../../values/routes';
import { useNavigate } from 'react-router-dom';
import { Card, CardContent, CardActionArea } from '@mui/material';
import { Group } from '@mui/icons-material';
import { Header } from './common';
import CssBaseline from '@mui/material/CssBaseline';

// for testing only
import image from '../../assets/nft.png';

function CommunityCard(props) {
    const navigate=useNavigate();
    return (
        <Card sx={{ maxWidth: 345, backgroundColor: "#2c2c2c", borderRadius: "1rem" }}>
            <CardActionArea>
                <CardContent onClick={() => navigate(`${Routes.get("Explore")}/${props.title}`)}>
                    <Image
                        height="64px"
                        width="64px"
                        src={props.image}
                        alt="community profile image"
                    />
                    <Heading color="#fff" paddingTop={"10px"}>{props.title}</Heading>
                    <Text color="#f9f9f8" paddingTop={"10px"}>{props.description}</Text>
                    <Flex paddingTop={"20px"} color="#666666">
                        <Group />
                        <Text color="#666666">{props.membersCount}</Text>
                    </Flex>
                </CardContent>
            </CardActionArea>
        </Card>
    );
}

function ExploreCommunities() {
    const communities=[
        {
            image: image,
            title: "Nft 1",
            description: "Hang out, chat, learn and connect with like minded developers...",
            membersCount: 248
        },
        {
            image: image,
            title: "Nft 3",
            description: "Hang out, chat, learn and connect with like minded developers...",
            membersCount: 216
        },
        {
            image: image,
            title: "Nft 2",
            description: "Hang out, chat, learn and connect with like minded developers...",
            membersCount: 248
        },
        {
            image: image,
            title: "Nft 5",
            description: "Hang out, chat, learn and connect with like minded developers...",
            membersCount: 249
        },
        {
            image: image,
            title: "Nft 3",
            description: "Hang out, chat, learn and connect with like minded developers...",
            membersCount: 216
        },
        {
            image: image,
            title: "Nft 2",
            description: "Hang out, chat, learn and connect with like minded developers...",
            membersCount: 248
        },
        {
            image: image,
            title: "Nft 5",
            description: "Hang out, chat, learn and connect with like minded developers...",
            membersCount: 249
        },
        {
            image: image,
            title: "Nft 3",
            description: "Hang out, chat, learn and connect with like minded developers...",
            membersCount: 216
        }
    ];

    const css=(
        `
        .explore-communities-search {
            background-image: linear-gradient(to right, #72306a, #6e3275, #663580, #5b398b, #4b3e96);
        }
        
        .communities-list {
            display: grid;
            gap: 30px;
            padding: 20px 80px;
            grid-template-columns: repeat(1, 1fr);
        }
        
        @media screen and (min-width: 768px){
            .communities-list {
                grid-template-columns: repeat(2, 1fr);
            }
        }
        
        @media screen and (min-width: 1080px) {
            .communities-list {
                grid-template-columns: repeat(3, 1fr);
            }
        }
        @media screen and (min-width: 1280px) {
            .communities-list {
                grid-template-columns: repeat(4, 1fr);
            }
        }
        `
    );
    return (
        <View
            as="div"
            width="100%"
            backgroundColor="#171718"
            color="#fff"
        >
            <style>{ css}</style>
            <CssBaseline />
            <Header></Header>
            <Flex alignItems={"center"} justifyContent="center" direction={"column"} width="98%" height="300px" className="explore-communities-search" margin="1%" borderRadius={"1rem"} padding="20px">
                <Heading level={1} color="#fff" fontWeight={"bolder"}>Explore Communities</Heading>
                <Text color="#fff">From python, to React, to Web3, to Career Advice, there’s a community for everyone.</Text>
                <SearchField
                    color={"#fff"}
                    width={"50%"}
                    name="search"
                    label="search"
                    placeholder="Search communities..."
                ></SearchField>
            </Flex>

            <Flex width="98%" padding="1%" direction="column">
                <Heading level={3} fontWeight="bold" color="#fff">Featured Communities</Heading>
                <View as="div" className="communities-list">
                    {
                        communities.map((item, index) => (
                            <CommunityCard
                                image={item.image}
                                title={item.title}
                                description={item.description}
                                membersCount={item.membersCount}
                            />
                        ))
                    }
                </View>
            </Flex>

        </View>
    );
}

export default ExploreCommunities;