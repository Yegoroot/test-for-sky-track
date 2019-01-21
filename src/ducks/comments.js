import { appName } from '../config'
import faker from 'faker'
import { takeEvery, put, call } from 'redux-saga/effects'

const Comment = id => ({
    id: faker.random.number(),
    idParent: id,
    name: faker.name.findName(),
    email: faker.internet.email(),
    text: faker.lorem.paragraph(),
    company: faker.company.companyName(),
})
const initialState = { comments: [] }
// const func = () => {
//     let art = []
//     for (let a = 0; a < 10; a++) {
//         art.push(new Article())
//     }
//     return art
// }

const getComments = id => {
    let list = []
    for (let a = 0; a < 4; a++) {
        list.push(new Comment(id))
    }
    return list
}
// constants
export const moduleName = 'comments'
const prefix = `${appName}/${moduleName}`
export const REQUEST_GET_COMMENTS = `${prefix}/REQUEST_GET_COMMENTS`
export const SUCCESS_GET_COMMENTS = `${prefix}/SUCCESS_GET_COMMENTS`

// reducer
export default function reducer(state = initialState, action) {
    const { type, payload } = action

    switch (type) {
        case SUCCESS_GET_COMMENTS:
            return {
                ...state,
                comments: payload,
            }

        default:
            return state
    }
}

// action creater
export function actionGetComments(id) {
    return {
        type: REQUEST_GET_COMMENTS,
        payload: id,
    }
}

// SAGAS
export const actionGetCommentsSaga = function*(action) {
    const id = action.payload
    const listComments = yield call(getComments, id)
    yield put({
        type: SUCCESS_GET_COMMENTS,
        payload: listComments,
    })
}

export const saga = function*() {
    yield takeEvery(REQUEST_GET_COMMENTS, actionGetCommentsSaga)
}
