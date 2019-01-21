import React, { Component } from 'react'

import withStyles from '@material-ui/core/styles/withStyles'
// import classNames from 'classnames'
import Card from '../components/Card/Card'
import { connect } from 'react-redux'
import { actionGetArticles, moduleName as articleModule } from '../ducks/article'

const styles = {
    root: {
        display: 'grid',
        gridGap: '20px',
        maxWidth: 1200,
        margin: 'auto',
        paddingTop: 70,
        gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
        '& > div': {
            margin: 'auto',
        },
    },
}

class Article extends Component {
    componentDidMount() {
        this.props.actionGetArticles()
    }
    render() {
        const { classes } = this.props
        const { articles } = this.props.articles

        return (
            <div className={classes.root}>
                {articles.map(item => (
                    <Card key={item.id} image={item.image} company={item.company} id={item.id} lorem={item.lorem} />
                ))}
            </div>
        )
    }
}

export default connect(
    state => ({
        articles: state[articleModule],
    }),
    dispatch => ({
        actionGetArticles: () => dispatch(actionGetArticles()),
    }),
)(withStyles(styles)(Article))
