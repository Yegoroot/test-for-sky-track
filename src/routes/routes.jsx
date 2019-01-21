// import AdminPage from 'views/AdminPage'
import ArticlePage from '../views/ArticlePage'
import ArticlesPage from '../views/ArticlesPage'

var indexRoutes = [
    { path: '/', exact: true, name: 'Articles', component: ArticlesPage },
    { path: '/article/:id', name: 'Article', component: ArticlePage },
]

export default indexRoutes
