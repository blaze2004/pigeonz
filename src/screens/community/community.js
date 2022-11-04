import React, { useState, useEffect, useCallback } from 'react';
import { API, graphqlOperation } from 'aws-amplify';
import { Header } from './common';
import { useParams } from 'react-router-dom';
import { Avatar, CssBaseline, Snackbar} from '@mui/material';
import { View, Flex, Text, Heading, TabItem, Tabs, useAuthenticator } from '@aws-amplify/ui-react';
import { CalendarTodayOutlined } from '@mui/icons-material';
import banner from '../../assets/profile_image.jpg';
import { getCommunity, listCommunities } from '../../graphql/queries';
import { PostsTab, MembersTab, ResourcesTab, EventsTab } from './tabs.js';


function Community() {
    const { communityName }=useParams();
    const [openMessage, setOpenMessage]=useState(false);
    const [communityData, setCommunityData]=useState([]);
    const { route } = useAuthenticator((context) => [context.route]);

    const fetchCommunitiesData=useCallback(async () => {
        try {
            const getCommunityId=await API.graphql(graphqlOperation(listCommunities, { filter: { name: { eq: communityName } } }));
            // console.log(getCommunityId);
            const communityDetails=(getCommunityId.data.listCommunities.items.length===0)? window.location.pathname="/":getCommunityId.data.listCommunities.items[0];
            // console.log(communityDetails);
            const community=await API.graphql(graphqlOperation(getCommunity, { id: communityDetails.id }));
            const communityData=community.data.getCommunity;
           
            if (communityData.profile_image==="") {
                communityData.profile_image=banner;
            }
            if (communityData.banner_image==="") {
                communityData.banner_image=banner;
            }
            
            const date=new Date(communityData.createdAt);
            communityData.createdAt=date.getDate()+','+date.toLocaleString('default', { month: 'short' })+' '+date.getFullYear();
            // console.log({ ...communityData, membersCount: membersCount });
            setCommunityData({ ...communityData });
        } catch (error) {
            setOpenMessage(true);
            console.log(error);
        }
    }, [communityName])

    useEffect(() => {
        fetchCommunitiesData();
    }, [fetchCommunitiesData]);



    const css=(
        `.community-banner {
            background-image: url(${communityData.banner_image});
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
                        src={communityData.profile_image}
                    />
                    <Flex justifyContent="space-between">
                        <Heading level={1} color="#fff" fontWeight={"bolder"}>{communityData.name}</Heading>
                    </Flex>
                    <Flex>
                        <Flex paddingTop={"20px"} color="#999999" justifyContent={"center"} alignItems="center">
                            <CalendarTodayOutlined />
                            <Text color="#999999">{communityData.createdAt}</Text>
                        </Flex>
                    </Flex>
                    <Text color={"#f9f9f8"} paddingTop="10px" paddingBottom="10px">{communityData.description}</Text>
                    <Tabs>
                        <TabItem title="Posts">
                            <PostsTab communityId={communityData.id} create={route==="authenticated"?true:false}/>
                        </TabItem>
                        <TabItem title="Events">
                            <EventsTab communityId={communityData.id} create={route==="authenticated"?true:false}/>
                        </TabItem>
                        <TabItem title="Resources">
                            <ResourcesTab communityId={communityData.id} create={route==="authenticated"?true:false}/>
                        </TabItem>
                        <TabItem title="Members">
                            <MembersTab communityId={communityData.id} create={route==="authenticated"?true:false}/>
                        </TabItem>
                    </Tabs>

                </View>
            </Flex>
            <Snackbar
                open={openMessage}
                autoHideDuration={2000}
                onClose={() => { setOpenMessage(false) }}
                message="Error fetching community details."
            >
            </Snackbar>
        </View>
    );

}

export default Community;