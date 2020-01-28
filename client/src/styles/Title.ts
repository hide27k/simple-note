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
        purple: {
            color: '#4b2e83',
            fontWeight: 500
        },
        link: {
            color: 'inherit',
            textDecoration: 'none'
        },
        purpleButton: {
            width: 88,
            backgroundColor: '#4b2e83',
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
        },
        logo: {
            margin: 'center',
            textAlign: 'center'

        }
    })

export type Styles = typeof styles