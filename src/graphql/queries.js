/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getCategory = /* GraphQL */ `
  query GetCategory($id: ID!) {
    getCategory(id: $id) {
      id
      title
      createdAt
      updatedAt
    }
  }
`;
export const listCategories = /* GraphQL */ `
  query ListCategories(
    $filter: ModelCategoryFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listCategories(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        title
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
        }
        nextToken
      }
      community {
        id
        name
        description
        profile_image
        banner_image
        links
        category {
          id
          title
          createdAt
          updatedAt
        }
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
        userCommunitiesId
      }
      createdAt
      updatedAt
      userEventsId
      communityEventsId
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
        community {
          id
          name
          description
          profile_image
          banner_image
          links
          createdAt
          updatedAt
          userCommunitiesId
        }
        createdAt
        updatedAt
        userEventsId
        communityEventsId
      }
      nextToken
    }
  }
`;
export const getResourceType = /* GraphQL */ `
  query GetResourceType($id: ID!) {
    getResourceType(id: $id) {
      id
      name
      createdAt
      updatedAt
    }
  }
`;
export const listResourceTypes = /* GraphQL */ `
  query ListResourceTypes(
    $filter: ModelResourceTypeFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listResourceTypes(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getResource = /* GraphQL */ `
  query GetResource($id: ID!) {
    getResource(id: $id) {
      id
      type {
        id
        name
        createdAt
        updatedAt
      }
      title
      content
      tags {
        items {
          id
          title
          createdAt
          updatedAt
          resourceTagsId
          owner
        }
        nextToken
      }
      user {
        id
        name
        email
        communities {
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
        communityAdminsId
        communityMembersId
        owner
      }
      community {
        id
        name
        description
        profile_image
        banner_image
        links
        category {
          id
          title
          createdAt
          updatedAt
        }
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
        userCommunitiesId
      }
      createdAt
      updatedAt
      userResourcesId
      communityResourcesId
      eventResourcesId
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
        type {
          id
          name
          createdAt
          updatedAt
        }
        title
        content
        tags {
          nextToken
        }
        user {
          id
          name
          email
          createdAt
          updatedAt
          communityAdminsId
          communityMembersId
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
          userCommunitiesId
        }
        createdAt
        updatedAt
        userResourcesId
        communityResourcesId
        eventResourcesId
      }
      nextToken
    }
  }
`;
export const getUser = /* GraphQL */ `
  query GetUser($id: ID!) {
    getUser(id: $id) {
      id
      name
      email
      communities {
        items {
          id
          name
          description
          profile_image
          banner_image
          links
          createdAt
          updatedAt
          userCommunitiesId
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
      communityAdminsId
      communityMembersId
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
        communities {
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
        communityAdminsId
        communityMembersId
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
      category {
        id
        title
        createdAt
        updatedAt
      }
      admins {
        items {
          id
          name
          email
          createdAt
          updatedAt
          communityAdminsId
          communityMembersId
          owner
        }
        nextToken
      }
      members {
        items {
          id
          name
          email
          createdAt
          updatedAt
          communityAdminsId
          communityMembersId
          owner
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
      userCommunitiesId
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
        category {
          id
          title
          createdAt
          updatedAt
        }
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
        userCommunitiesId
      }
      nextToken
    }
  }
`;
export const getTag = /* GraphQL */ `
  query GetTag($id: ID!) {
    getTag(id: $id) {
      id
      title
      createdAt
      updatedAt
      resourceTagsId
      owner
    }
  }
`;
export const listTags = /* GraphQL */ `
  query ListTags(
    $filter: ModelTagFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listTags(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        title
        createdAt
        updatedAt
        resourceTagsId
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
        communities {
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
        communityAdminsId
        communityMembersId
        owner
      }
      community {
        id
        name
        description
        profile_image
        banner_image
        links
        category {
          id
          title
          createdAt
          updatedAt
        }
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
        userCommunitiesId
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
          communityAdminsId
          communityMembersId
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
          userCommunitiesId
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
