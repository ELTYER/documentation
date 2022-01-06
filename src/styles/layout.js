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
        zIndex: theme.zIndex.drawer + 1,
        backgroundColor: theme.palette.white
    },
    appBarMobile: {
        zIndex: theme.zIndex.drawer - 1,
        backgroundColor: theme.palette.white
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
            maxWidth: `calc(100% - ${theme.drawerWidth}px)`,
            transition: theme.transitions.create(['width', 'margin'], {
                easing: theme.transitions.easing.sharp,
                duration: theme.transitions.duration.enteringScreen,
            }),
        }
    },
    contentShiftLeft: {
        marginLeft: theme.drawerWidth,
        [theme.breakpoints.up('md')]: {
            transition: theme.transitions.create(['width', 'margin'], {
                easing: theme.transitions.easing.sharp,
                duration: theme.transitions.duration.enteringScreen,
            }),
        }
    },
}), {  name: "MuiCustomStyleLayout"});