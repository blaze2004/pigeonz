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
export const onUpdateUser = /* GraphQL */ `
  subscription OnUpdateUser(
    $filter: ModelSubscriptionUserFilterInput
    $owner: String
  ) {
    onUpdateUser(filter: $filter, owner: $owner) {
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
export const onDeleteUser = /* GraphQL */ `
  subscription OnDeleteUser(
    $filter: ModelSubscriptionUserFilterInput
    $owner: String
  ) {
    onDeleteUser(filter: $filter, owner: $owner) {
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
export const onCreateTag = /* GraphQL */ `
  subscription OnCreateTag($filter: ModelSubscriptionTagFilterInput) {
    onCreateTag(filter: $filter) {
      id
      title
      createdAt
      updatedAt
      resourceTagsId
    }
  }
`;
export const onUpdateTag = /* GraphQL */ `
  subscription OnUpdateTag($filter: ModelSubscriptionTagFilterInput) {
    onUpdateTag(filter: $filter) {
      id
      title
      createdAt
      updatedAt
      resourceTagsId
    }
  }
`;
export const onDeleteTag = /* GraphQL */ `
  subscription OnDeleteTag($filter: ModelSubscriptionTagFilterInput) {
    onDeleteTag(filter: $filter) {
      id
      title
      createdAt
      updatedAt
      resourceTagsId
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
export const onCreateResource = /* GraphQL */ `
  subscription OnCreateResource(
    $filter: ModelSubscriptionResourceFilterInput
    $owner: String
  ) {
    onCreateResource(filter: $filter, owner: $owner) {
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
export const onUpdateResource = /* GraphQL */ `
  subscription OnUpdateResource(
    $filter: ModelSubscriptionResourceFilterInput
    $owner: String
  ) {
    onUpdateResource(filter: $filter, owner: $owner) {
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
export const onDeleteResource = /* GraphQL */ `
  subscription OnDeleteResource(
    $filter: ModelSubscriptionResourceFilterInput
    $owner: String
  ) {
    onDeleteResource(filter: $filter, owner: $owner) {
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
