import { appName } from '../config'
import faker from 'faker'

// articles
const Article = () => ({
    id: faker.random.number(),
    name: faker.name.findName(),
    email: faker.internet.email(),
    lorem: faker.lorem.paragraph(),
    image: faker.random.image(),
    company: faker.company.companyName(),
})
const initialState = { articles: [] }
const func = () => {
    let art = []
    for (let a = 0; a < 10; a++) {
        art.push(new Article())
    }
    return art
}

// comments

// constants
export const moduleName = 'articles'
const prefix = `${appName}/${moduleName}`
export const GET_ARTICLE = `${prefix}/GET_ARTICLE`

// reducer
export default function reducer(state = initialState, action) {
    const { type } = action

    switch (type) {
        case GET_ARTICLE:
            return {
                ...state,
                articles: func(),
            }

        default:
            return state
    }
}

// action creater
export function actionGetArticles() {
    return {
        type: GET_ARTICLE,
    }
}

// sagas

export const sagas = []
