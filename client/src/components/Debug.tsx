import * as React from 'react'
import { Typography } from '@material-ui/core'
import { withStyles, WithStyles } from '@material-ui/core/styles'
import { RouteComponentProps, withRouter } from 'react-router-dom'

import { styles, Styles } from '../styles/Title'

interface Props extends RouteComponentProps, WithStyles<Styles> { }

interface State {
    url: string
}

class Debug extends React.Component<Props, State> {
    constructor(props: Props) {
        super(props)
        this.state = {
            url: ''
        }
    }

    public render() {
        return (
            <div>
                <div className={this.props.classes.title}>
                    <Typography variant="h2" className={this.props.classes.typography}>
                        Welcome to <span className={this.props.classes.green}>Secret</span> Page
                    </Typography>
                </div>
            </div>
        )
    }
}

export default withRouter(withStyles(styles)(Debug))