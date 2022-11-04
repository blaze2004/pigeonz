export const getPostsList= /* GraphQL */ `
  query PostsList(
    $filter: ModelPostFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listPosts(filter: $filter, limit: $limit, nextToken: $nextToken) {
        items {
            content
            communityPostsId
            createdAt
            id
            userPostsId
            updatedAt
        }
    }
      
  }`

export const getEventsList= /* GraphQL */`
    query EventsList(
        $filter: ModelEventFilterInput
        $limit: Int
        $nextToken: String
    ){
        listEvents(filter: $filter, limit: $limit, nextToken: $nextToken){
            items {
                name
                registration_link
                communityEventsId
                createdAt
                id
                updatedAt
            }
        }
    }
`

export const getResourcesList= /* GraphQL */`
    query ResourcesList(
        $filter: ModelResourceFilterInput
        $limit: Int
        $nextToken: String
    ){
        listResources(filter: $filter, limit: $limit, nextToken: $nextToken){
            items {
                communityResourcesId
                content
                createdAt
                eventResourcesId
                title
                id
                updatedAt
                userResourcesId
            }
        }
    }
`

export const getUserDetails= /* GraphQL */`
    query UserDetails(
        $id: ID!
    ){
        getUser(id: $id){
            id
            name
            email
        }
    }
`

export const createUserPost= /* GraphQL */`
    mutation CreateUserPost(
        $input: CreatePostInput!
        $condition: ModelPostConditionInput
    ){
        createPost(input: $input, condition: $condition){
            id
        }
    }
`

export const createUserEvent= /* GraphQL */`
    mutation CreateUserEvent(
        $input: CreateEventInput!
        $condition: ModelEventConditionInput
    ){
        createEvent(input: $input, condition: $condition){
            id
        }
    }
`

export const createUserResource= /* GraphQL */`
    mutation CreateUserResource(
        $input: CreateResourceInput!
        $condition: ModelResourceConditionInput
    ) {
        createResource(input: $input, condition: $condition) {
            id
        }
    }
`

export const getUserAdminCommunitiesList= /* GraphQL */`
    query UserAdminCommunities(
        $filter: ModelUserAdminCommunitiesFilterInput
        $limit: Int
        $nextToken: String
    ) {listUserAdminCommunities(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
        items {
            community {
                name
                id
                description
                profile_image
            }
        }
    }
    }
`