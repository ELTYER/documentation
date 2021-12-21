import {makeStyles} from "@mui/styles";

export const useLayoutStyles = makeStyles(theme => ({
    footer: {
        backgroundColor: theme.palette.white
    },
    footerShift: {
        [theme.breakpoints.up('md')]: {
            marginLeft: theme.drawerWidth,
            width: `calc(100% - ${theme.drawerWidth}px)`,
            transition: theme.transitions.create(['width', 'margin'], {
                easing: theme.transitions.easing.sharp,
                duration: theme.transitions.duration.enteringScreen,
            }),
        }
    },
    appBar: {
        backgroundColor: theme.palette.background.default,
    },
    developerDashboardAppBar: {
        backgroundColor: theme.palette.background.paper,
    },
    dashboardAppBar: {
        backgroundColor: theme.palette.background.paper,
    },
    appBarSpacer: theme.mixins.toolbar,
    storeAppBar: {
        backgroundColor: theme.palette.background.default,
    },
    contentShiftRight: {
        [theme.breakpoints.up('md')]: {
            marginLeft: theme.drawerWidth,
            maxWidth: `calc(100% - ${theme.drawerWidth}px)`,
            transition: theme.transitions.create(['width', 'margin'], {
                easing: theme.transitions.easing.sharp,
                duration: theme.transitions.duration.enteringScreen,
            }),
        }
    },
    contentShiftLeft: {
        [theme.breakpoints.up('md')]: {
                transition: theme.transitions.create(['width', 'margin'], {
                easing: theme.transitions.easing.sharp,
                duration: theme.transitions.duration.enteringScreen,
            }),
        }
    },
}));