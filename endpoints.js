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
};
