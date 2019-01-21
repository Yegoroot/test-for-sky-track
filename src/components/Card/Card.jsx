import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import Card from '@material-ui/core/Card'
import CardActionArea from '@material-ui/core/CardActionArea'
import CardActions from '@material-ui/core/CardActions'
import CardContent from '@material-ui/core/CardContent'
import CardMedia from '@material-ui/core/CardMedia'
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'
import { Link } from 'react-router-dom'

const styles = {
    card: {
        maxWidth: 345,
    },
    media: {
        height: 140,
    },
}

function MediaCard(props) {
    const { classes, image, company, lorem, id } = props
    return (
        <Card className={classes.card} id={id}>
            <CardActionArea>
                <CardMedia className={classes.media} image={image} title={company} />
                <CardContent>
                    <Typography gutterBottom variant="display1" component="h2">
                        {company}
                    </Typography>
                    <Typography component="p">{lorem}</Typography>
                </CardContent>
            </CardActionArea>
            <CardActions>
                <Button size="small" color="primary">
                    <Link to={`/article/${id}`}>more</Link>
                </Button>
            </CardActions>
        </Card>
    )
}

MediaCard.propTypes = {
    classes: PropTypes.object.isRequired,
}

export default withStyles(styles)(MediaCard)
