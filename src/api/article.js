import faker from 'faker'
// faker.locale = 'ru'

const getArticle = () => ({
    id: faker.random.number(),
    name: faker.name.findName(),
    email: faker.internet.email(),
    lorem: faker.lorem.paragraph(),
    image: faker.random.image(),
    company: faker.company.companyName(),
    // date: faker.date.past(),
})

const listArticle = []
for (let a = 0; a < 10; a++) {
    listArticle.push(getArticle())
}

export default listArticle
