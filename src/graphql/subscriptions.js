/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateUser = /* GraphQL */ `
  subscription OnCreateUser(
    $filter: ModelSubscriptionUserFilterInput
    $owner: String
  ) {
    onCreateUser(filter: $filter, owner: $owner) {
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
export const onUpdateUser = /* GraphQL */ `
  subscription OnUpdateUser(
    $filter: ModelSubscriptionUserFilterInput
    $owner: String
  ) {
    onUpdateUser(filter: $filter, owner: $owner) {
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
export const onDeleteUser = /* GraphQL */ `
  subscription OnDeleteUser(
    $filter: ModelSubscriptionUserFilterInput
    $owner: String
  ) {
    onDeleteUser(filter: $filter, owner: $owner) {
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
export const onCreateCommunity = /* GraphQL */ `
  subscription OnCreateCommunity(
    $filter: ModelSubscriptionCommunityFilterInput
    $admins: String
  ) {
    onCreateCommunity(filter: $filter, admins: $admins) {
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
export const onUpdateCommunity = /* GraphQL */ `
  subscription OnUpdateCommunity(
    $filter: ModelSubscriptionCommunityFilterInput
    $admins: String
  ) {
    onUpdateCommunity(filter: $filter, admins: $admins) {
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
export const onDeleteCommunity = /* GraphQL */ `
  subscription OnDeleteCommunity(
    $filter: ModelSubscriptionCommunityFilterInput
    $admins: String
  ) {
    onDeleteCommunity(filter: $filter, admins: $admins) {
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
export const onCreateEvent = /* GraphQL */ `
  subscription OnCreateEvent(
    $filter: ModelSubscriptionEventFilterInput
    $owner: String
  ) {
    onCreateEvent(filter: $filter, owner: $owner) {
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
export const onUpdateEvent = /* GraphQL */ `
  subscription OnUpdateEvent(
    $filter: ModelSubscriptionEventFilterInput
    $owner: String
  ) {
    onUpdateEvent(filter: $filter, owner: $owner) {
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
export const onDeleteEvent = /* GraphQL */ `
  subscription OnDeleteEvent(
    $filter: ModelSubscriptionEventFilterInput
    $owner: String
  ) {
    onDeleteEvent(filter: $filter, owner: $owner) {
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
export const onCreateResource = /* GraphQL */ `
  subscription OnCreateResource(
    $filter: ModelSubscriptionResourceFilterInput
    $owner: String
  ) {
    onCreateResource(filter: $filter, owner: $owner) {
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
export const onUpdateResource = /* GraphQL */ `
  subscription OnUpdateResource(
    $filter: ModelSubscriptionResourceFilterInput
    $owner: String
  ) {
    onUpdateResource(filter: $filter, owner: $owner) {
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
export const onDeleteResource = /* GraphQL */ `
  subscription OnDeleteResource(
    $filter: ModelSubscriptionResourceFilterInput
    $owner: String
  ) {
    onDeleteResource(filter: $filter, owner: $owner) {
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
export const onCreatePost = /* GraphQL */ `
  subscription OnCreatePost(
    $filter: ModelSubscriptionPostFilterInput
    $user: String
  ) {
    onCreatePost(filter: $filter, user: $user) {
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
export const onUpdatePost = /* GraphQL */ `
  subscription OnUpdatePost(
    $filter: ModelSubscriptionPostFilterInput
    $user: String
  ) {
    onUpdatePost(filter: $filter, user: $user) {
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
export const onDeletePost = /* GraphQL */ `
  subscription OnDeletePost(
    $filter: ModelSubscriptionPostFilterInput
    $user: String
  ) {
    onDeletePost(filter: $filter, user: $user) {
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
export const onCreateUserAdminCommunities = /* GraphQL */ `
  subscription OnCreateUserAdminCommunities(
    $filter: ModelSubscriptionUserAdminCommunitiesFilterInput
    $owner: String
    $admins: String
  ) {
    onCreateUserAdminCommunities(
      filter: $filter
      owner: $owner
      admins: $admins
    ) {
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
export const onUpdateUserAdminCommunities = /* GraphQL */ `
  subscription OnUpdateUserAdminCommunities(
    $filter: ModelSubscriptionUserAdminCommunitiesFilterInput
    $owner: String
    $admins: String
  ) {
    onUpdateUserAdminCommunities(
      filter: $filter
      owner: $owner
      admins: $admins
    ) {
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
export const onDeleteUserAdminCommunities = /* GraphQL */ `
  subscription OnDeleteUserAdminCommunities(
    $filter: ModelSubscriptionUserAdminCommunitiesFilterInput
    $owner: String
    $admins: String
  ) {
    onDeleteUserAdminCommunities(
      filter: $filter
      owner: $owner
      admins: $admins
    ) {
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
export const onCreateUserMemberCommunities = /* GraphQL */ `
  subscription OnCreateUserMemberCommunities(
    $filter: ModelSubscriptionUserMemberCommunitiesFilterInput
    $owner: String
    $admins: String
  ) {
    onCreateUserMemberCommunities(
      filter: $filter
      owner: $owner
      admins: $admins
    ) {
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
export const onUpdateUserMemberCommunities = /* GraphQL */ `
  subscription OnUpdateUserMemberCommunities(
    $filter: ModelSubscriptionUserMemberCommunitiesFilterInput
    $owner: String
    $admins: String
  ) {
    onUpdateUserMemberCommunities(
      filter: $filter
      owner: $owner
      admins: $admins
    ) {
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
export const onDeleteUserMemberCommunities = /* GraphQL */ `
  subscription OnDeleteUserMemberCommunities(
    $filter: ModelSubscriptionUserMemberCommunitiesFilterInput
    $owner: String
    $admins: String
  ) {
    onDeleteUserMemberCommunities(
      filter: $filter
      owner: $owner
      admins: $admins
    ) {
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
