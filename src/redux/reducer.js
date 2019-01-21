import { combineReducers } from 'redux'
import { connectRouter } from 'connected-react-router'
import articleReducer, { moduleName as articleModule } from '../ducks/article'
import commentsReducer, { moduleName as commentsModule } from '../ducks/comments'
import history from '../history'

export default combineReducers({
    router: connectRouter(history),
    [articleModule]: articleReducer,
    [commentsModule]: commentsReducer,
})
