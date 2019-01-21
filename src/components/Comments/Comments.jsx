import React from 'react'

import { withStyles } from '@material-ui/core/styles'
import { Paper, Button } from '@material-ui/core/'
import Typography from '@material-ui/core/Typography'
import { connect } from 'react-redux'
import { moduleName as commentsModule, actionGetComments } from '../../ducks/comments'
import { moduleName as articlesModule } from '../../ducks/article'
import { withRouter } from 'react-router'

const styles = theme => ({
    root: {
        ...theme.mixins.gutters(),
        paddingTop: theme.spacing.unit * 2,
        paddingBottom: theme.spacing.unit * 2,
        margin: 10,
    },
    button: {
        marginTop: 10,
        marginBottom: 30,
    },
})

class Comments extends React.Component {
    render() {
        const { classes } = this.props,
            id = this.props.id,
            { comments } = this.props.comments

        const List = comments.map(item => (
            <Paper className={classes.root} elevation={1}>
                <Typography component="p" key={item.id}>
                    {item.text}
                </Typography>
            </Paper>
        ))

        return (
            <div>
                {!true ? (
                    'Нет данных'
                ) : (
                    <React.Fragment>
                        <Button
                            color="primary"
                            className={classes.button}
                            onClick={() => this.props.actionGetComments(id)}
                            variant="contained">
                            Show Comments
                        </Button>
                        {List}
                    </React.Fragment>
                )}
            </div>
        )
    }
}

export default connect(
    state => ({ comments: state[commentsModule] }),
    dispatch => ({
        actionGetComments: id => dispatch(actionGetComments(id)),
    }),
)(withRouter(withStyles(styles)(Comments)))
