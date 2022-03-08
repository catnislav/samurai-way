const FOLLOW = 'FOLLOW'
const UNFOLLOW = 'UNFOLLOW'
const SET_USERS = 'SET_USERS'
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE'
const SET_TOTAL_USERS_COUNT = 'SET_TOTAL_USERS_COUNT'
const TOOGLE_IS_FETCHING = 'TOOGLE_IS_FETCHING'

let initialState = {
  usersList: [],
  usersPerPage: 12,
  // totalUsersCount: 31,
  totalUsersCount: 0,
  currentPage: 1,
  isFetching: false
  // usersList: [
  //   {
  //     id: 0,
  //     abbr: 'SP',
  //     name: 'Stanislav Petrov',
  //     avatar: 'https://i.ytimg.com/vi/JbBUlojyvhs/maxresdefault.jpg',
  //     location: {
  //       city: 'Dnipro',
  //       country: 'Ukraine'
  //     },
  //     followed: true
  //   },
  //   {
  //     id: 1,
  //     abbr: 'GK',
  //     name: 'Gregory Krieger',
  //     avatar: 'https://www.highsnobiety.com/static-assets/wp-content/uploads/2021/10/20190855/kanye-west-mcdonalds-meal-main.gif',
  //     location: {
  //       city: 'Montreux',
  //       country: 'Switzerland'
  //     },
  //     followed: true
  //   },
  //   {
  //     id: 2,
  //     abbr: 'AF',
  //     name: 'Anthony Fasano',
  //     avatar: 'https://i.ytimg.com/vi/LPN1XGZzf98/maxresdefault.jpg',
  //     location: {
  //       city: 'Villeneuve',
  //       country: 'Switzerland'
  //     },
  //     followed: true
  //   },
  //   {
  //     id: 3,
  //     abbr: 'DN',
  //     name: 'Denis Nikitin',
  //     avatar: 'https://content.fortune.com/wp-content/uploads/2020/11/McDonalds-CEO_Chris-Kempczinski_web.jpg',
  //     location: {
  //       city: 'Kyiv',
  //       country: 'Ukraine'
  //     },
  //     followed: true
  //   },
  // ]
}

const usersReducer = (state = initialState, action) => {
  // let newState = { ...state, usersList: [ ...state.usersList ]}
  let newState

  switch(action.type) {
    case FOLLOW:
      newState = { ...state, usersList: [ ...state.usersList.map(el => {
        if (el.id === action.id) {
          return { ...el, followed: true }
        }
        return el
      })]}
      return newState
    case UNFOLLOW:
      newState = { ...state, usersList: [ ...state.usersList.map(el => {
        if (el.id === action.id) {
          return { ...el, followed: false }
        }
        return el
      })]}
      return newState
    case SET_USERS:
      // return { ...state, usersList: [ ...state.usersList, ...action.usersList ] }
      return { ...state, usersList: [ ...action.usersList ] }
    case SET_CURRENT_PAGE:
      return { ...state, currentPage: action.currentPage }
    case SET_TOTAL_USERS_COUNT:
      return { ...state, totalUsersCount: action.totalUsersCount }
    case TOOGLE_IS_FETCHING:
      return { ...state, isFetching: action.isFetching }
    default:
      return state
  }
}

// export const followAC = (id) => ({type: FOLLOW, id})
// export const unfollowAC = (id) => ({type: UNFOLLOW, id})
// export const setUsersAC = (usersList) => ({type: SET_USERS, usersList})
// export const setCurrentPageAC = (currentPage) => ({type: SET_CURRENT_PAGE, currentPage})
// export const setTotalUsersCountAC = (totalUsersCount) => ({type: SET_TOTAL_USERS_COUNT, totalUsersCount: totalUsersCount > 120 ? 120 : totalUsersCount})
// export const toggleIsFetchingAC = (isFetching) => ({type: TOOGLE_IS_FETCHING, isFetching})

export const follow = (id) => ({type: FOLLOW, id})
export const unfollow = (id) => ({type: UNFOLLOW, id})
export const setUsers = (usersList) => ({type: SET_USERS, usersList})
export const setCurrentPage = (currentPage) => ({type: SET_CURRENT_PAGE, currentPage})
export const setTotalUsersCount = (totalUsersCount) => ({type: SET_TOTAL_USERS_COUNT, totalUsersCount: totalUsersCount > 120 ? 120 : totalUsersCount})
export const toggleIsFetching = (isFetching) => ({type: TOOGLE_IS_FETCHING, isFetching})

export default usersReducer