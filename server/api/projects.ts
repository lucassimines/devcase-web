export default defineEventHandler(() => {
  return [
    {
      id: 1,
      name: 'PPA',
      description: 'Latin America’s most prominent gate, door, and barrier operator industry',
      image: '/images/dummy.jpeg',
      slug: 'ppa',
      url: 'https://ppa.com',
      blocks: [
        {
          id: 1,
          type: 'text',
          content: {
            text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.'
          }
        }
      ]
    },
    {
      id: 2,
      name: 'Kaaza',
      description:
        'Kaaza is a 3D and architecture studio focused on creating immersive experiences.',
      image: '/images/dummy2.jpg',
      slug: 'kaaza',
      url: 'https://kaaza.com.br',
      blocks: [
        {
          id: 1,
          type: 'text',
          content: {
            text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.'
          }
        }
      ]
    },
    {
      id: 3,
      name: 'Warner Bros Brasil',
      url: '',
      description:
        'Warner Bros Brasil is a subsidiary of Warner Bros. that produces and distributes movies and TV shows in Brazil.',
      image: '/images/dummy.jpeg',
      slug: 'warner-bros-brasil',
      blocks: [
        {
          id: 1,
          type: 'text',
          content: {
            text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.'
          }
        },
        {
          id: 2,
          type: 'image',
          content: {
            image: '/images/dummy.jpeg'
          }
        }
      ]
    }
  ] satisfies Project[]
})
