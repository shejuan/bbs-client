import { SetUserInfo } from '../action'

export default (state, action) => {
  switch (action.type) {
    case SetUserInfo:
      state.userInfo = action.userInfo
      return state
    default:
      return state
  }
}
