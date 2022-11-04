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
export const updateUser = /* GraphQL */ `
  mutation UpdateUser(
    $input: UpdateUserInput!
    $condition: ModelUserConditionInput
  ) {
    updateUser(input: $input, condition: $condition) {
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
export const deleteUser = /* GraphQL */ `
  mutation DeleteUser(
    $input: DeleteUserInput!
    $condition: ModelUserConditionInput
  ) {
    deleteUser(input: $input, condition: $condition) {
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
export const createResource = /* GraphQL */ `
  mutation CreateResource(
    $input: CreateResourceInput!
    $condition: ModelResourceConditionInput
  ) {
    createResource(input: $input, condition: $condition) {
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
export const updateResource = /* GraphQL */ `
  mutation UpdateResource(
    $input: UpdateResourceInput!
    $condition: ModelResourceConditionInput
  ) {
    updateResource(input: $input, condition: $condition) {
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
export const deleteResource = /* GraphQL */ `
  mutation DeleteResource(
    $input: DeleteResourceInput!
    $condition: ModelResourceConditionInput
  ) {
    deleteResource(input: $input, condition: $condition) {
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
export const createUserAdminCommunities = /* GraphQL */ `
  mutation CreateUserAdminCommunities(
    $input: CreateUserAdminCommunitiesInput!
    $condition: ModelUserAdminCommunitiesConditionInput
  ) {
    createUserAdminCommunities(input: $input, condition: $condition) {
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
export const updateUserAdminCommunities = /* GraphQL */ `
  mutation UpdateUserAdminCommunities(
    $input: UpdateUserAdminCommunitiesInput!
    $condition: ModelUserAdminCommunitiesConditionInput
  ) {
    updateUserAdminCommunities(input: $input, condition: $condition) {
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
export const deleteUserAdminCommunities = /* GraphQL */ `
  mutation DeleteUserAdminCommunities(
    $input: DeleteUserAdminCommunitiesInput!
    $condition: ModelUserAdminCommunitiesConditionInput
  ) {
    deleteUserAdminCommunities(input: $input, condition: $condition) {
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
export const createUserMemberCommunities = /* GraphQL */ `
  mutation CreateUserMemberCommunities(
    $input: CreateUserMemberCommunitiesInput!
    $condition: ModelUserMemberCommunitiesConditionInput
  ) {
    createUserMemberCommunities(input: $input, condition: $condition) {
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
export const updateUserMemberCommunities = /* GraphQL */ `
  mutation UpdateUserMemberCommunities(
    $input: UpdateUserMemberCommunitiesInput!
    $condition: ModelUserMemberCommunitiesConditionInput
  ) {
    updateUserMemberCommunities(input: $input, condition: $condition) {
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
export const deleteUserMemberCommunities = /* GraphQL */ `
  mutation DeleteUserMemberCommunities(
    $input: DeleteUserMemberCommunitiesInput!
    $condition: ModelUserMemberCommunitiesConditionInput
  ) {
    deleteUserMemberCommunities(input: $input, condition: $condition) {
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
