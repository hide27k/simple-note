import { createMuiTheme } from '@material-ui/core/'
import { green } from '@material-ui/core/colors'

export const theme = createMuiTheme({
    palette: {
        primary: green,
        common: {
            black: '#444',
            white: '#fff'
        }
    }
})