const db = {

  client: {
    fetcher: (...args: [any, any]) => fetch(...args).then(res => res.json())
  },

  notion: {
    databases: {
      media: '56249c8ad5af446995d711fb0c3291ae',
      events: '824b76cf856345d19debb747fd1cc963',
      partners: ''
    },

  }
}

export default db

