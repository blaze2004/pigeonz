import React, { useState } from 'react';
import { View, useAuthenticator, Heading, Flex, TextAreaField } from '@aws-amplify/ui-react';
import { AmplifyS3ImagePicker } from '@aws-amplify/ui-react/legacy';
import { Button, CssBaseline, TextField, Autocomplete } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { Routes } from '../../values/routes';
import { Header, Popup } from '../community/common';
import { CommunityCard } from '../community/common';
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
  const handlePost=() => {
    setOpen(false);
  }

  const Categories=[
    { label: "Technology" },
    { label: "Career" },
    { label: 'General' }
  ];

  var NewCommunity={
    name: "",
    description: "",
    category: "",
    slackLink: "",
    discordLink: "",
    profileImage: "",
    bannerImage: "",
  }

  const handleChange=(key, value) => {
    NewCommunity[key]=value;
    console.log(NewCommunity);
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
      <Popup open={open} setOpen={setOpen} title="New Community" handlePost={handlePost}>
        <Flex direction="column" minWidth={"500px"} minHeight="700px" justifyContent={"center"}>
          <TextField label="Name" aria-required="true" value={NewCommunity.name} onChange={(event)=>handleChange('name', event.target.value)}></TextField>

          <TextAreaField label="Description" aria-required="false" value={NewCommunity.description} onChange={(event)=>handleChange('description', event.target.value)}></TextAreaField>

          <Autocomplete
            disablePortal
            options={Categories}
            sx={{ width: 230 }}
            renderInput={(params) => <TextField {...params} label="Category" aria-required="true" value={NewCommunity.category} onChange={(event)=>handleChange('category', event.target.value)} />}
          />

          <TextField label="Slack Link" aria-required="false" value={NewCommunity.slackLink} onChange={(event)=>handleChange('slackLink', event.target.value)}></TextField>


          <TextField label="Discord Link" aria-required="false" value={NewCommunity.discordLink} onChange={(event)=>handleChange('discordLink', event.target.value)}></TextField>
          <AmplifyS3ImagePicker aria-required="false" />
          <AmplifyS3ImagePicker headerTitle='Add Banner Image' aria-required="false" />

        </Flex>
      </Popup>
    </View>
  );
}