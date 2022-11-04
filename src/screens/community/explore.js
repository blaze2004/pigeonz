import React, { useState, useMemo } from 'react';
import {
    View, Flex, Image, SearchField, Heading, Text
} from '@aws-amplify/ui-react';
import { API, graphqlOperation } from 'aws-amplify';
import { listCommunities } from '../../graphql/queries';
import { Routes } from '../../values/routes';
import { useNavigate } from 'react-router-dom';
import { Card, CardContent, CardActionArea, Snackbar } from '@mui/material';
import { Header } from './common';
import CssBaseline from '@mui/material/CssBaseline';
import image from '../../assets/profile_image.jpg';

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
                </CardContent>
            </CardActionArea>
        </Card>
    );
}

function ExploreCommunities() {
    const [openMessage, setOpenMessage]=useState(false);

    const [communities, setCommunities]=useState([]);

    useMemo(() => {
        fetchCommunities();
    }, []);

    async function fetchCommunities() {
        try {
            const communitiesData=await API.graphql(graphqlOperation(listCommunities));
            const communities=[];
            // console.log(communitiesData);
            communitiesData.data.listCommunities.items.map((item, index) => (
                communities.push({
                    name: item.name,
                    description: item.description,
                    image: item.profile_image===""? image:item.profile_image
                })
            ));
            // console.log(communities);
            setCommunities(communities);
        } catch (error) {
            setOpenMessage(true);
            console.log(error);
        }

    }

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
            minHeight="100%"
        >
            <style>{css}</style>
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
                                title={item.name}
                                description={item.description}
                            />
                        ))
                    }
                </View>
            </Flex>
            <Snackbar
                open={openMessage}
                autoHideDuration={2000}
                onClose={() => { setOpenMessage(false) }}
                message="Error fetching communities list."
            >
            </Snackbar>

        </View>
    );
}

export default ExploreCommunities;