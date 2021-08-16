module.exports = {
  'GET /api': {
    description:
      'serves up a json representation of all the available endpoints of the api',
    queries: [],
    exampleResponse: 'this',
  },
  'GET /api/breeds': {
    description: 'serves an array of all dog breeds',
    queries: [],
    exampleResponse: {
      allDogs: [
        {
          _id: '610a844c07ab87a4addaa900',
          breed_param: 'labradorretriever',
          breed: 'Labrador Retriever',
          dog_url:
            'https://weu-az-mfv-live-cdnep.azureedge.net/mediacontainer/medialibraries/myfamilyvets/my-family-vets/lifestyle/dog/labrador-body-1.jpg',
          temperament: 'Intelligent and kindly nature',
          characteristics: 'Devoted companion and keen love of water',
          exercise: '1 hour and 20 minutes +',
          size: 'medium-large',
        },
      ],
    },
  },
  'GET /api/breeds/:breed': {
    description: 'serves a dog object',
    queries: ['category', 'sort_by', 'order'],
    exampleResponse: {
      breedInformation: {
        _id: '610a844c07ab87a4addaa8f7',
        breed_param: 'beagle',
        breed: 'Beagle',
        dog_url:
          'https://www.k9web.com/wp-content/uploads/2018/03/beagle-puppy-sitting-on-the-grass.jpg',
        temperament: 'Amiable and alert',
        characteristics: 'Bold, with great determination',
        exercise: '1 hour +',
        size: 'medium',
      },
    },
  },
  'GET /api/reviews/:review_id': {
    description: 'serves a review object including comment count',
    queries: [],
    exampleResponse: {
      review: {
        title: 'Jenga',
        category: 'dexterity',
        review_body: 'Fiddly fun for all the family',
        owner: 'philippaclaire9',
        designer: 'Leslie Scott',
        review_img_url:
          'https://www.golenbock.com/wp-content/uploads/2015/01/placeholder-user.png',
        created_at: '2021-01-18T10:01:41.251Z',
        review_id: 2,
        votes: 5,
        comment_count: 3,
      },
    },
  },
  'PATCH /api/reviews/:review_Id': {
    description: 'serves a review object with updated votes',
    queries: [],
    exampleResponse: {
      updatedReview: {
        title: 'Ultimate Werewolf',
        category: 'social deduction',
        review_body: "We couldn't find the werewolf!",
        owner: 'bainesface',
        review_img_url:
          'https://www.golenbock.com/wp-content/uploads/2015/01/placeholder-user.png',
        designer: 'Akihisa Okui',
        created_at: '2021-01-18T10:01:41.251Z',
        review_id: 3,
        votes: 4,
      },
    },
  },
  'GET /api/reviews/:review_id/comments': {
    description: 'serves an array of comments for the specified review',
    queries: [],
    exampleResponse: {
      comments: [
        {
          author: 'mallionaire',
          body: 'My dog loved this game too!',
          created_at: '2021-01-18T10:09:05.410Z',
          comment_id: 2,
          votes: 13,
        },
      ],
    },
  },
  'POST /api/reviews/:review_id/comments': {
    description: 'serves the new comment',
    queries: [],
    exampleResponse: { newComment: 'this is a new comment' },
  },
  'DELETE /api/comments/:comment_id': {
    description: 'serves status 204 with no content',
    queries: [],
    exampleResponse: 204,
  },
  'GET /api/users': {
    description: 'serves an array of all users',
    queries: [],
    exampleResponse: {
      users: [{ username: 'mallionaire' }, { username: 'philippaclaire9' }],
    },
  },
  'GET /api/users/:username': {
    description: 'serves the requested user object',
    queries: [],
    exampleResponse: {
      user: {
        username: 'bainesface',
        name: 'sarah',
        avatar_url:
          'https://avatars2.githubusercontent.com/u/24394918?s=400&v=4',
      },
    },
  },
  'PATCH /api/comments/:comment_id': {
    description: 'serves a comment object with updated votes',
    queries: [],
    exampleResponse: {
      updatedComment: {
        author: 'philippaclaire9',
        body: 'Not sure about dogs, but my cat likes to get involved with board games, the boxes are their particular favourite',
        created_at: '2021-03-27T19:49:48.110Z',
        comment_id: 6,
        review_id: 3,
        votes: 11,
      },
    },
  },
  'POST /api/reviews': {
    description: 'serves the newly added review',
    queries: [],
    exampleResponse: {
      newReview: {
        title: 'Mario Kart',
        review_body: 'This is a fun game',
        category: "children's games",
        owner: 'dav3rid',
        designer: 'Nintendo',
        created_at: '2021-06-21T07:51:50.906Z',
        review_id: 14,
        votes: 0,
        comment_count: 0,
      },
    },
  },
  'POST /api/categories': {
    description: 'serves the newly added category',
    queries: [],
    exampleResponse: {
      newCategory: {
        slug: 'adventure',
        description:
          'Games that involve the player in an interactive story driven by exploring and/or problem solving',
      },
    },
  },
  'DELETE /api/reviews/:review_id': {
    description: 'serves status 204 with no content',
    queries: [],
    exampleResponse: 204,
  },
};
