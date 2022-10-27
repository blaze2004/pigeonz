/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const updateCategory = /* GraphQL */ `
  mutation UpdateCategory(
    $input: UpdateCategoryInput!
    $condition: ModelCategoryConditionInput
  ) {
    updateCategory(input: $input, condition: $condition) {
      id
      title
      createdAt
      updatedAt
      owner
    }
  }
`;
export const deleteCategory = /* GraphQL */ `
  mutation DeleteCategory(
    $input: DeleteCategoryInput!
    $condition: ModelCategoryConditionInput
  ) {
    deleteCategory(input: $input, condition: $condition) {
      id
      title
      createdAt
      updatedAt
      owner
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
      owner
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
      owner
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
          owner
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
          owner
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
          owner
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
export const createResourceType = /* GraphQL */ `
  mutation CreateResourceType(
    $input: CreateResourceTypeInput!
    $condition: ModelResourceTypeConditionInput
  ) {
    createResourceType(input: $input, condition: $condition) {
      id
      name
      createdAt
      updatedAt
    }
  }
`;
export const updateResourceType = /* GraphQL */ `
  mutation UpdateResourceType(
    $input: UpdateResourceTypeInput!
    $condition: ModelResourceTypeConditionInput
  ) {
    updateResourceType(input: $input, condition: $condition) {
      id
      name
      createdAt
      updatedAt
    }
  }
`;
export const deleteResourceType = /* GraphQL */ `
  mutation DeleteResourceType(
    $input: DeleteResourceTypeInput!
    $condition: ModelResourceTypeConditionInput
  ) {
    deleteResourceType(input: $input, condition: $condition) {
      id
      name
      createdAt
      updatedAt
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
          owner
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
export const updateResource = /* GraphQL */ `
  mutation UpdateResource(
    $input: UpdateResourceInput!
    $condition: ModelResourceConditionInput
  ) {
    updateResource(input: $input, condition: $condition) {
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
          owner
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
export const deleteResource = /* GraphQL */ `
  mutation DeleteResource(
    $input: DeleteResourceInput!
    $condition: ModelResourceConditionInput
  ) {
    deleteResource(input: $input, condition: $condition) {
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
          owner
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
      category {
        id
        title
        createdAt
        updatedAt
        owner
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
      category {
        id
        title
        createdAt
        updatedAt
        owner
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
      category {
        id
        title
        createdAt
        updatedAt
        owner
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
export const createCategory = /* GraphQL */ `
  mutation CreateCategory(
    $input: CreateCategoryInput!
    $condition: ModelCategoryConditionInput
  ) {
    createCategory(input: $input, condition: $condition) {
      id
      title
      createdAt
      updatedAt
      owner
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
        category {
          id
          title
          createdAt
          updatedAt
          owner
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
        category {
          id
          title
          createdAt
          updatedAt
          owner
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
        category {
          id
          title
          createdAt
          updatedAt
          owner
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
