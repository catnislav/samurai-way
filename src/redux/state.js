export let userList = [
  {
    id: 0,
    abbr: 'SP',
    name: 'Stanislav Petrov',
    avatar: 'https://i.ytimg.com/vi/JbBUlojyvhs/maxresdefault.jpg',
  },
  {
    id: 1,
    abbr: 'GK',
    name: 'Gregory Krieger',
    avatar: 'https://www.highsnobiety.com/static-assets/wp-content/uploads/2021/10/20190855/kanye-west-mcdonalds-meal-main.gif',
  },
  {
    id: 2,
    abbr: 'AF',
    name: 'Anthony Fasano',
    avatar: 'https://i.ytimg.com/vi/LPN1XGZzf98/maxresdefault.jpg',
  },
  {
    id: 3,
    abbr: 'DN',
    name: 'Denis Nikitin',
    avatar: 'https://content.fortune.com/wp-content/uploads/2020/11/McDonalds-CEO_Chris-Kempczinski_web.jpg',
  },
]

export let chatList = [
  {
    id: 1,
    abbr: 'GK',
    name: 'Gregory Krieger',
    avatar: '',
    messages: [
      {
        id: 0,
        user: 1,
        content: 'Hello there Stas !',
        own: false,
      },
      {
        id: 1,
        user: 0,
        content: 'Hello there Gregory !',
        own: true,
      },
      {
        id: 2,
        user: 1,
        content: 'What are you working now ?',
        own: false,
      },
      {
        id: 3,
        user: 0,
        content: 'I\'m working on the chat !',
        own: true,
      },
      {
        id: 4,
        user: 1,
        content: 'Ok, I\'m count on you !',
        own: false,
      },
    ]
  },
  {
    id: 2,
    abbr: 'AF',
    name: 'Anthony Fasano',
    avatar: '',
    messages: [
      {
        id: 0,
        user: 0,
        content: 'Hello there Anthony !',
        own: true,
      },
      {
        id: 1,
        user: 2,
        content: 'Hello there Stanislav !',
        own: false,
      },
    ]
  },
  {
    id: 3,
    abbr: 'DN',
    name: 'Denis Nikitin',
    avatar: '',
    messages: [
      {
        id: 0,
        user: 0,
        content: 'Hello there Denis !',
        own: true,
      },
      {
        id: 1,
        user: 3,
        content: 'Hello there Catnislav !',
        own: false,
      },
      {
        id: 2,
        user: 0,
        content: 'Do you have any tasks for me ?',
        own: true,
      },
      {
        id: 3,
        user: 3,
        content: 'Yes, I\'m going to call you !',
        own: false,
      },
      {
        id: 4,
        user: 0,
        content: 'I\'m waiting for',
        own: true,
      },
    ]
  },
]

export let commentList = [
  {
    id: 0,
    user: 2,
    content: 'Wow ! I like the service !',
    likes: 56,
  },
  {
    id: 1,
    user: 1,
    content: 'Hello there guys ! Thank you for the coffe with milk ! I mean cappuccino !',
    likes: 7,
  },
  {
    id: 2,
    user: 3,
    content: 'I like it !',
    likes: 99,
  },
]

let state = {
  userList,
  chatList,
  commentList
}

export default state
