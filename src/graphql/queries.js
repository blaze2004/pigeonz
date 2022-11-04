/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getUser = /* GraphQL */ `
  query GetUser($id: ID!) {
    getUser(id: $id) {
      id
      name
      email
      adminCommunities {
        items {
          id
          userID
          communityID
          createdAt
          updatedAt
          owner
          admins
        }
        nextToken
      }
      memberCommunities {
        items {
          id
          userID
          communityID
          createdAt
          updatedAt
          owner
          admins
        }
        nextToken
      }
      events {
        items {
          id
          name
          banner_image
          registration_link
          createdAt
          updatedAt
          userEventsId
          communityEventsId
          owner
        }
        nextToken
      }
      resources {
        items {
          id
          title
          content
          createdAt
          updatedAt
          userResourcesId
          communityResourcesId
          eventResourcesId
          owner
        }
        nextToken
      }
      posts {
        items {
          id
          content
          createdAt
          updatedAt
          userPostsId
          communityPostsId
        }
        nextToken
      }
      createdAt
      updatedAt
      owner
    }
  }
`;
export const listUsers = /* GraphQL */ `
  query ListUsers(
    $filter: ModelUserFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listUsers(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        email
        adminCommunities {
          nextToken
        }
        memberCommunities {
          nextToken
        }
        events {
          nextToken
        }
        resources {
          nextToken
        }
        posts {
          nextToken
        }
        createdAt
        updatedAt
        owner
      }
      nextToken
    }
  }
`;
export const getCommunity = /* GraphQL */ `
  query GetCommunity($id: ID!) {
    getCommunity(id: $id) {
      id
      name
      description
      profile_image
      banner_image
      links
      admins {
        items {
          id
          userID
          communityID
          createdAt
          updatedAt
          owner
          admins
        }
        nextToken
      }
      members {
        items {
          id
          userID
          communityID
          createdAt
          updatedAt
          owner
          admins
        }
        nextToken
      }
      events {
        items {
          id
          name
          banner_image
          registration_link
          createdAt
          updatedAt
          userEventsId
          communityEventsId
          owner
        }
        nextToken
      }
      resources {
        items {
          id
          title
          content
          createdAt
          updatedAt
          userResourcesId
          communityResourcesId
          eventResourcesId
          owner
        }
        nextToken
      }
      posts {
        items {
          id
          content
          createdAt
          updatedAt
          userPostsId
          communityPostsId
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const listCommunities = /* GraphQL */ `
  query ListCommunities(
    $filter: ModelCommunityFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listCommunities(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        description
        profile_image
        banner_image
        links
        admins {
          nextToken
        }
        members {
          nextToken
        }
        events {
          nextToken
        }
        resources {
          nextToken
        }
        posts {
          nextToken
        }
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getEvent = /* GraphQL */ `
  query GetEvent($id: ID!) {
    getEvent(id: $id) {
      id
      name
      banner_image
      registration_link
      resources {
        items {
          id
          title
          content
          createdAt
          updatedAt
          userResourcesId
          communityResourcesId
          eventResourcesId
          owner
        }
        nextToken
      }
      user {
        id
        name
        email
        adminCommunities {
          nextToken
        }
        memberCommunities {
          nextToken
        }
        events {
          nextToken
        }
        resources {
          nextToken
        }
        posts {
          nextToken
        }
        createdAt
        updatedAt
        owner
      }
      community {
        id
        name
        description
        profile_image
        banner_image
        links
        admins {
          nextToken
        }
        members {
          nextToken
        }
        events {
          nextToken
        }
        resources {
          nextToken
        }
        posts {
          nextToken
        }
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
      userEventsId
      communityEventsId
      owner
    }
  }
`;
export const listEvents = /* GraphQL */ `
  query ListEvents(
    $filter: ModelEventFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listEvents(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        banner_image
        registration_link
        resources {
          nextToken
        }
        user {
          id
          name
          email
          createdAt
          updatedAt
          owner
        }
        community {
          id
          name
          description
          profile_image
          banner_image
          links
          createdAt
          updatedAt
        }
        createdAt
        updatedAt
        userEventsId
        communityEventsId
        owner
      }
      nextToken
    }
  }
`;
export const getResource = /* GraphQL */ `
  query GetResource($id: ID!) {
    getResource(id: $id) {
      id
      title
      content
      user {
        id
        name
        email
        adminCommunities {
          nextToken
        }
        memberCommunities {
          nextToken
        }
        events {
          nextToken
        }
        resources {
          nextToken
        }
        posts {
          nextToken
        }
        createdAt
        updatedAt
        owner
      }
      community {
        id
        name
        description
        profile_image
        banner_image
        links
        admins {
          nextToken
        }
        members {
          nextToken
        }
        events {
          nextToken
        }
        resources {
          nextToken
        }
        posts {
          nextToken
        }
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
      userResourcesId
      communityResourcesId
      eventResourcesId
      owner
    }
  }
`;
export const listResources = /* GraphQL */ `
  query ListResources(
    $filter: ModelResourceFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listResources(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        title
        content
        user {
          id
          name
          email
          createdAt
          updatedAt
          owner
        }
        community {
          id
          name
          description
          profile_image
          banner_image
          links
          createdAt
          updatedAt
        }
        createdAt
        updatedAt
        userResourcesId
        communityResourcesId
        eventResourcesId
        owner
      }
      nextToken
    }
  }
`;
export const getPost = /* GraphQL */ `
  query GetPost($id: ID!) {
    getPost(id: $id) {
      id
      content
      user {
        id
        name
        email
        adminCommunities {
          nextToken
        }
        memberCommunities {
          nextToken
        }
        events {
          nextToken
        }
        resources {
          nextToken
        }
        posts {
          nextToken
        }
        createdAt
        updatedAt
        owner
      }
      community {
        id
        name
        description
        profile_image
        banner_image
        links
        admins {
          nextToken
        }
        members {
          nextToken
        }
        events {
          nextToken
        }
        resources {
          nextToken
        }
        posts {
          nextToken
        }
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
      userPostsId
      communityPostsId
    }
  }
`;
export const listPosts = /* GraphQL */ `
  query ListPosts(
    $filter: ModelPostFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listPosts(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        content
        user {
          id
          name
          email
          createdAt
          updatedAt
          owner
        }
        community {
          id
          name
          description
          profile_image
          banner_image
          links
          createdAt
          updatedAt
        }
        createdAt
        updatedAt
        userPostsId
        communityPostsId
      }
      nextToken
    }
  }
`;
export const getUserAdminCommunities = /* GraphQL */ `
  query GetUserAdminCommunities($id: ID!) {
    getUserAdminCommunities(id: $id) {
      id
      userID
      communityID
      user {
        id
        name
        email
        adminCommunities {
          nextToken
        }
        memberCommunities {
          nextToken
        }
        events {
          nextToken
        }
        resources {
          nextToken
        }
        posts {
          nextToken
        }
        createdAt
        updatedAt
        owner
      }
      community {
        id
        name
        description
        profile_image
        banner_image
        links
        admins {
          nextToken
        }
        members {
          nextToken
        }
        events {
          nextToken
        }
        resources {
          nextToken
        }
        posts {
          nextToken
        }
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
      owner
      admins
    }
  }
`;
export const listUserAdminCommunities = /* GraphQL */ `
  query ListUserAdminCommunities(
    $filter: ModelUserAdminCommunitiesFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listUserAdminCommunities(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        userID
        communityID
        user {
          id
          name
          email
          createdAt
          updatedAt
          owner
        }
        community {
          id
          name
          description
          profile_image
          banner_image
          links
          createdAt
          updatedAt
        }
        createdAt
        updatedAt
        owner
        admins
      }
      nextToken
    }
  }
`;
export const getUserMemberCommunities = /* GraphQL */ `
  query GetUserMemberCommunities($id: ID!) {
    getUserMemberCommunities(id: $id) {
      id
      userID
      communityID
      user {
        id
        name
        email
        adminCommunities {
          nextToken
        }
        memberCommunities {
          nextToken
        }
        events {
          nextToken
        }
        resources {
          nextToken
        }
        posts {
          nextToken
        }
        createdAt
        updatedAt
        owner
      }
      community {
        id
        name
        description
        profile_image
        banner_image
        links
        admins {
          nextToken
        }
        members {
          nextToken
        }
        events {
          nextToken
        }
        resources {
          nextToken
        }
        posts {
          nextToken
        }
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
      owner
      admins
    }
  }
`;
export const listUserMemberCommunities = /* GraphQL */ `
  query ListUserMemberCommunities(
    $filter: ModelUserMemberCommunitiesFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listUserMemberCommunities(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        userID
        communityID
        user {
          id
          name
          email
          createdAt
          updatedAt
          owner
        }
        community {
          id
          name
          description
          profile_image
          banner_image
          links
          createdAt
          updatedAt
        }
        createdAt
        updatedAt
        owner
        admins
      }
      nextToken
    }
  }
`;
