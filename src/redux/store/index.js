import { createStore } from 'redux'
import reducer from '../reducer'

const initValue = {
  userInfo: {
    name: '张三'
  }
}

export default createStore(reducer, initValue)
