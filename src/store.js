import createStore from './stateManagement/createStore'
import appReducer from './stateManagement/reducers/appReducer'
var store = createStore(appReducer)

export default store
