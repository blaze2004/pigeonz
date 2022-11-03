/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createUser = /* GraphQL */ `
  mutation CreateUser(
    $input: CreateUserInput!
    $condition: ModelUserConditionInput
  ) {
    createUser(input: $input, condition: $condition) {
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
      communityAdminsId
      communityMembersId
      owner
    }
  }
`;
export const updateUser = /* GraphQL */ `
  mutation UpdateUser(
    $input: UpdateUserInput!
    $condition: ModelUserConditionInput
  ) {
    updateUser(input: $input, condition: $condition) {
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
      communityAdminsId
      communityMembersId
      owner
    }
  }
`;
export const deleteUser = /* GraphQL */ `
  mutation DeleteUser(
    $input: DeleteUserInput!
    $condition: ModelUserConditionInput
  ) {
    deleteUser(input: $input, condition: $condition) {
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
      communityAdminsId
      communityMembersId
      owner
    }
  }
`;
export const createCommunity = /* GraphQL */ `
  mutation CreateCommunity(
    $input: CreateCommunityInput!
    $condition: ModelCommunityConditionInput
  ) {
    createCommunity(input: $input, condition: $condition) {
      id
      name
      description
      profile_image
      banner_image
      links
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
      userCommunitiesId
    }
  }
`;
export const updateCommunity = /* GraphQL */ `
  mutation UpdateCommunity(
    $input: UpdateCommunityInput!
    $condition: ModelCommunityConditionInput
  ) {
    updateCommunity(input: $input, condition: $condition) {
      id
      name
      description
      profile_image
      banner_image
      links
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
      userCommunitiesId
    }
  }
`;
export const deleteCommunity = /* GraphQL */ `
  mutation DeleteCommunity(
    $input: DeleteCommunityInput!
    $condition: ModelCommunityConditionInput
  ) {
    deleteCommunity(input: $input, condition: $condition) {
      id
      name
      description
      profile_image
      banner_image
      links
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
      userCommunitiesId
    }
  }
`;
export const createTag = /* GraphQL */ `
  mutation CreateTag(
    $input: CreateTagInput!
    $condition: ModelTagConditionInput
  ) {
    createTag(input: $input, condition: $condition) {
      id
      title
      createdAt
      updatedAt
      resourceTagsId
    }
  }
`;
export const updateTag = /* GraphQL */ `
  mutation UpdateTag(
    $input: UpdateTagInput!
    $condition: ModelTagConditionInput
  ) {
    updateTag(input: $input, condition: $condition) {
      id
      title
      createdAt
      updatedAt
      resourceTagsId
    }
  }
`;
export const deleteTag = /* GraphQL */ `
  mutation DeleteTag(
    $input: DeleteTagInput!
    $condition: ModelTagConditionInput
  ) {
    deleteTag(input: $input, condition: $condition) {
      id
      title
      createdAt
      updatedAt
      resourceTagsId
    }
  }
`;
export const createEvent = /* GraphQL */ `
  mutation CreateEvent(
    $input: CreateEventInput!
    $condition: ModelEventConditionInput
  ) {
    createEvent(input: $input, condition: $condition) {
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
        userCommunitiesId
      }
      createdAt
      updatedAt
      userEventsId
      communityEventsId
      owner
    }
  }
`;
export const updateEvent = /* GraphQL */ `
  mutation UpdateEvent(
    $input: UpdateEventInput!
    $condition: ModelEventConditionInput
  ) {
    updateEvent(input: $input, condition: $condition) {
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
        userCommunitiesId
      }
      createdAt
      updatedAt
      userEventsId
      communityEventsId
      owner
    }
  }
`;
export const deleteEvent = /* GraphQL */ `
  mutation DeleteEvent(
    $input: DeleteEventInput!
    $condition: ModelEventConditionInput
  ) {
    deleteEvent(input: $input, condition: $condition) {
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
        userCommunitiesId
      }
      createdAt
      updatedAt
      userEventsId
      communityEventsId
      owner
    }
  }
`;
export const createResource = /* GraphQL */ `
  mutation CreateResource(
    $input: CreateResourceInput!
    $condition: ModelResourceConditionInput
  ) {
    createResource(input: $input, condition: $condition) {
      id
      title
      content
      tags {
        items {
          id
          title
          createdAt
          updatedAt
          resourceTagsId
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
      owner
    }
  }
`;
export const updateResource = /* GraphQL */ `
  mutation UpdateResource(
    $input: UpdateResourceInput!
    $condition: ModelResourceConditionInput
  ) {
    updateResource(input: $input, condition: $condition) {
      id
      title
      content
      tags {
        items {
          id
          title
          createdAt
          updatedAt
          resourceTagsId
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
      owner
    }
  }
`;
export const deleteResource = /* GraphQL */ `
  mutation DeleteResource(
    $input: DeleteResourceInput!
    $condition: ModelResourceConditionInput
  ) {
    deleteResource(input: $input, condition: $condition) {
      id
      title
      content
      tags {
        items {
          id
          title
          createdAt
          updatedAt
          resourceTagsId
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
      owner
    }
  }
`;
export const createPost = /* GraphQL */ `
  mutation CreatePost(
    $input: CreatePostInput!
    $condition: ModelPostConditionInput
  ) {
    createPost(input: $input, condition: $condition) {
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
export const updatePost = /* GraphQL */ `
  mutation UpdatePost(
    $input: UpdatePostInput!
    $condition: ModelPostConditionInput
  ) {
    updatePost(input: $input, condition: $condition) {
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
export const deletePost = /* GraphQL */ `
  mutation DeletePost(
    $input: DeletePostInput!
    $condition: ModelPostConditionInput
  ) {
    deletePost(input: $input, condition: $condition) {
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
