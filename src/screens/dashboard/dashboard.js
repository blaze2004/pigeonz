import React, { useState, useMemo } from 'react';
import { API, Auth, graphqlOperation } from 'aws-amplify';
import { View, useAuthenticator, Heading, Flex } from '@aws-amplify/ui-react';
import { Button, CssBaseline, Snackbar } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { Routes } from '../../values/routes';
import { Header, Popup } from '../community/common';
import { CommunityCard } from '../community/common';
import { CommunityForm } from '../community/forms';
import image from '../../assets/profile_image.jpg';
import { getUserAdminCommunitiesList } from '../../graphql/customQueries';

export function Dashboard() {
  const { signOut }=useAuthenticator((context) => [
    context.signOut,
  ]);
  const navigate=useNavigate();

  function logOut() {
    signOut();
    navigate(Routes.get("Auth"));
  }
  const [openMessage, setOpenMessage]=useState(false);

  const [communities, setCommunities]=useState([]);

  useMemo(() => {
    fetchCommunities();
  }, []);

  async function fetchCommunities() {
    try {
      const user=await Auth.currentAuthenticatedUser();
      const communitiesData=await API.graphql(graphqlOperation(getUserAdminCommunitiesList, { filter : {userID : {eq: user.username}}}));
      const communities=[];
      // console.log(communitiesData);
      communitiesData.data.listUserAdminCommunities.items.map((item, index) => (
        communities.push({
          name: item.community.name,
          description: item.community.description,
          image: image
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
    }`
  );

  const [open, setOpen]=useState(false);
  const openCommunityForm=() => {
    setOpen(true);
  }

  return (
    <View
      as="div"
      backgroundColor="#171718"
      color="#fff"
      width="100%"
      minHeight="100%"
    >
      <style>{css}</style>
      <CssBaseline />
      <Header></Header>
      <Flex justifyContent="space-between" alignItems="center" padding="20px">
        <Heading level={3} color="#fff">Welcome, Shubham Tiwari</Heading>
        <Flex>
          <Button variant="contained" onClick={openCommunityForm}>New Community</Button>
          <Button variant="contained" onClick={() => logOut()}>Logout</Button>
        </Flex>

      </Flex>

      <Flex width="98%" padding="1%" direction="column">
        <Heading level={3} fontWeight="bold" color="#fff">Your Communities</Heading>
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
      <Popup open={open} title="New Community">
        <CommunityForm setOpen={setOpen} />
      </Popup>
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