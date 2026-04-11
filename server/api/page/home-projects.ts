export default defineEventHandler(() => {
  return [
    {
      id: 1,
      name: 'PPA',
      description: 'Latin America’s most prominent gate, door, and barrier operator industry',
      image: '/images/dummy.jpeg',
      slug: 'ppa'
    },
    {
      id: 2,
      name: 'Kaaza',
      description:
        'Kaaza is a 3D and architecture studio focused on creating immersive experiences.',
      image: '/images/dummy2.jpg',
      slug: 'kaaza'
    },
    {
      id: 3,
      name: 'Warner Bros Brasil',
      description:
        'Warner Bros Brasil is a subsidiary of Warner Bros. that produces and distributes movies and TV shows in Brazil.',
      image: '/images/dummy.jpeg',
      slug: 'warner-bros-brasil'
    }
  ] satisfies Project[]
})
