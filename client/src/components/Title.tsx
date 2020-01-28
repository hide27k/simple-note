import * as React from 'react'
import { Typography } from '@material-ui/core'
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
                         <span className={this.props.classes.purple}>Husky</span> Note
                    </Typography>
                </div>
                <div className={this.props.classes.subtitle}>
                    <Typography variant="h4" className={this.props.classes.typography}>
                    </Typography>
                </div>
                <div className={this.props.classes.logo}>
                    <img src="../images/siberianHusky.png"/>
                </div>
            </div>
        )
    }
}

export default withStyles(styles)(Title)