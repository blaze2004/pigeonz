import React, { useState } from 'react';
import { View, useAuthenticator, Heading, Flex } from '@aws-amplify/ui-react';
import { Button, CssBaseline} from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { Routes } from '../../values/routes';
import { Header, Popup } from '../community/common';
import { CommunityCard } from '../community/common';
import { CommunityForm } from '../community/forms';
import image from '../../assets/wallpaper.png';

export function Dashboard() {
  const { signOut }=useAuthenticator((context) => [
    context.signOut,
  ]);
  const navigate=useNavigate();

  function logOut() {
    signOut();
    navigate(Routes.get("Auth"));
  }
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
                title={item.title}
                description={item.description}
                membersCount={item.membersCount}
              />
            ))
          }
        </View>
      </Flex>
      <Popup open={open} title="New Community">
        <CommunityForm setOpen={setOpen} />
      </Popup>
    </View>
  );
}