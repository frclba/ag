export default {
  data: [
    {
      name: 'Item1',
      url: '/item1',
    },
    {
      name: 'Item2',
      url: '/item2',
    },
    {
      name: 'Item3',
      children: [
        {
          name: 'Child31',
          url: '/child31',
        },
        {
          name: 'Child32',
          url: '/child32',
        },
        {
          name: 'Child33',
          url: '/child33',
        },
      ],
    },
    {
      name: 'Item4',
      children: [
        {
          name: 'Child41',
          url: '/child41',
        },
        {
          name: 'Child42',
          url: '/child42',
        },
      ],
    },
  ],
};
