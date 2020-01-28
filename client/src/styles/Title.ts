import { createStyles, Theme } from '@material-ui/core'

export const styles = (theme: Theme) =>
    createStyles({
        title: {
            marginTop: theme.spacing(8),
            marginLeft: 'auto',
            marginRight: 'auto',
            paddingTop: theme.spacing(5),
            textAlign: 'center'
        },
        subtitle: {
            marginTop: theme.spacing(3),
            marginLeft: 'auto',
            marginRight: 'auto',
            paddingTop: theme.spacing(5),
            textAlign: 'center'
        },
        typography: {
            color: theme.palette.common.black
        },
        green: {
            color: theme.palette.primary.main,
            fontWeight: 500
        },
        link: {
            color: 'inherit',
            textDecoration: 'none'
        },
        greenButton: {
            width: 88,
            backgroundColor: theme.palette.primary.main,
            color: theme.palette.common.white,
            textTransform: 'none',
            marginLeft: 2,
            marginRight: 2
        },
        register: {
            marginTop: theme.spacing(3),
            marginLeft: 'auto',
            marginRight: 'auto',
            textAlign: 'center'
        }
    })

export type Styles = typeof styles