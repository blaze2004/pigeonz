/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateCategory = /* GraphQL */ `
  subscription OnCreateCategory($filter: ModelSubscriptionCategoryFilterInput) {
    onCreateCategory(filter: $filter) {
      id
      title
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateCategory = /* GraphQL */ `
  subscription OnUpdateCategory($filter: ModelSubscriptionCategoryFilterInput) {
    onUpdateCategory(filter: $filter) {
      id
      title
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteCategory = /* GraphQL */ `
  subscription OnDeleteCategory($filter: ModelSubscriptionCategoryFilterInput) {
    onDeleteCategory(filter: $filter) {
      id
      title
      createdAt
      updatedAt
    }
  }
`;
export const onCreateEvent = /* GraphQL */ `
  subscription OnCreateEvent($filter: ModelSubscriptionEventFilterInput) {
    onCreateEvent(filter: $filter) {
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
export const onUpdateEvent = /* GraphQL */ `
  subscription OnUpdateEvent($filter: ModelSubscriptionEventFilterInput) {
    onUpdateEvent(filter: $filter) {
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
export const onDeleteEvent = /* GraphQL */ `
  subscription OnDeleteEvent($filter: ModelSubscriptionEventFilterInput) {
    onDeleteEvent(filter: $filter) {
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
export const onCreateResourceType = /* GraphQL */ `
  subscription OnCreateResourceType(
    $filter: ModelSubscriptionResourceTypeFilterInput
  ) {
    onCreateResourceType(filter: $filter) {
      id
      name
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateResourceType = /* GraphQL */ `
  subscription OnUpdateResourceType(
    $filter: ModelSubscriptionResourceTypeFilterInput
  ) {
    onUpdateResourceType(filter: $filter) {
      id
      name
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteResourceType = /* GraphQL */ `
  subscription OnDeleteResourceType(
    $filter: ModelSubscriptionResourceTypeFilterInput
  ) {
    onDeleteResourceType(filter: $filter) {
      id
      name
      createdAt
      updatedAt
    }
  }
`;
export const onCreateResource = /* GraphQL */ `
  subscription OnCreateResource($filter: ModelSubscriptionResourceFilterInput) {
    onCreateResource(filter: $filter) {
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
export const onUpdateResource = /* GraphQL */ `
  subscription OnUpdateResource($filter: ModelSubscriptionResourceFilterInput) {
    onUpdateResource(filter: $filter) {
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
export const onDeleteResource = /* GraphQL */ `
  subscription OnDeleteResource($filter: ModelSubscriptionResourceFilterInput) {
    onDeleteResource(filter: $filter) {
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
export const onCreateTag = /* GraphQL */ `
  subscription OnCreateTag(
    $filter: ModelSubscriptionTagFilterInput
    $owner: String
  ) {
    onCreateTag(filter: $filter, owner: $owner) {
      id
      title
      createdAt
      updatedAt
      resourceTagsId
      owner
    }
  }
`;
export const onUpdateTag = /* GraphQL */ `
  subscription OnUpdateTag(
    $filter: ModelSubscriptionTagFilterInput
    $owner: String
  ) {
    onUpdateTag(filter: $filter, owner: $owner) {
      id
      title
      createdAt
      updatedAt
      resourceTagsId
      owner
    }
  }
`;
export const onDeleteTag = /* GraphQL */ `
  subscription OnDeleteTag(
    $filter: ModelSubscriptionTagFilterInput
    $owner: String
  ) {
    onDeleteTag(filter: $filter, owner: $owner) {
      id
      title
      createdAt
      updatedAt
      resourceTagsId
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
