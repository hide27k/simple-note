import * as React from 'react'

import { withStyles, WithStyles } from '@material-ui/core/styles'

import { styles, Styles } from '../styles/Footer'

interface Props extends WithStyles<Styles> { }

const Footer: React.FC<Props> = (props: Props) => (
    <footer className={props.classes.footer}> Hideyuki, Seonjun, Patrick.</footer>
)

export default withStyles(styles)(Footer)