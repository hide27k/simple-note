import * as React from 'react'
import { Link } from 'react-router-dom'
import { Button, Typography } from '@material-ui/core'
import { withStyles, WithStyles } from '@material-ui/core/styles'

import { styles, Styles } from '../styles/Title'

interface Props extends WithStyles<Styles> { }

interface State {
    url: string
}

class Title extends React.Component<Props, State> {
    constructor(props: Props) {
        super(props)
        this.state = {
            url : ''
        }
    }

    public render() {
        return (
            <div>
                <div className={this.props.classes.title}>
                    <Typography variant="h2" className={this.props.classes.typography}>
                        Welcome to <span className={this.props.classes.green}>Hack</span> MD
                    </Typography>
                </div>
                <div className={this.props.classes.subtitle}>
                    <Typography variant="h4" className={this.props.classes.typography}>
                        Get no one on the same page with Markdown
                    </Typography>
                </div>
                <div className={this.props.classes.register}>
                    <Link to="/register" className={this.props.classes.link}>
                        <Button className={this.props.classes.greenButton}>Sign up</Button>
                    </Link>
                </div>
                {/* IMPORTANT! DONT! FORGET */}
                {/* TODO: remove this link before deploying to production */}
                <a hidden href="/debug"> debug </a>
                {/* IMPORTANT! DONT! FORGET */}
            </div>
        )
    }
}

export default withStyles(styles)(Title)