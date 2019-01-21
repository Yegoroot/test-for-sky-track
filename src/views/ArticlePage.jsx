import React from 'react'

import { withStyles } from '@material-ui/core/styles'
import { Paper, Button } from '@material-ui/core/'
import Typography from '@material-ui/core/Typography'
import { connect } from 'react-redux'
import { moduleName as articlesModule } from '../ducks/article'
import { withRouter } from 'react-router'
import Comments from '../components/Comments/Comments'

const styles = theme => ({
    root: {
        ...theme.mixins.gutters(),
        paddingTop: theme.spacing.unit * 2,
        paddingBottom: theme.spacing.unit * 2,
    },
    p: {
        paddingTop: 30,
        paddingBottom: 30,
    },
})

class Article extends React.Component {
    render() {
        const { classes } = this.props,
            id = parseInt(this.props.match.params.id),
            { articles } = this.props.articles
        let article
        if (articles) article = articles.find(item => id === item.id)

        return (
            <div style={{ maxWidth: 1200, margin: 'auto', paddingTop: 70 }}>
                {!article ? (
                    'Нет данных'
                ) : (
                    <div className={classes.root}>
                        <Typography variant="display2" component="h3">
                            {article.company}
                        </Typography>
                        <Typography variant="body2" component="h4">
                            {`id article = ${id}`}
                        </Typography>
                        <Typography className={classes.p} component="p">
                            {article.lorem}
                        </Typography>
                        <Comments id={id} />
                    </div>
                )}
            </div>
        )
    }
}

export default connect(state => ({ articles: state[articlesModule] }))(withRouter(withStyles(styles)(Article)))
