import {makeStyles} from "@mui/styles";
import {alpha} from "@mui/material";

export const useSideNavStyles = makeStyles((theme) => ({
    mobileLogo: {
        marginTop: theme.spacing(1)
    },
    mobilePaper: {
        width: theme.drawerWidth,
        height: "100vh",
        marginTop: theme.spacing(2),
        marginLeft: theme.spacing(2)
    },
    mobileDrawerPaper: {
        zIndex: theme.zIndex.modal,
        marginTop: theme.spacing(2),
        marginLeft: theme.spacing(2),
        // border: "1px solid !important",
        borderRadius: 5,
        width: theme.drawerWidthSemiClosed
    },
    drawer: {
        width: "240px",
        flexShrink: 0,
        whiteSpace: 'nowrap',
    },
    drawerOpen: {
        width: theme.drawerWidth,
        // transition: theme.transitions.create('width', {
        //     easing: theme.transitions.easing.sharp,
        //     duration: theme.transitions.duration.enteringScreen,
        // }),
    },
    drawerClose: {
        transition: theme.transitions.create('width', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
        overflowX: 'hidden',
        width: "72px",
        [theme.breakpoints.up('sm')]: {
            width: "72px"
        },
    },
    spacer: {
        height: "40px !important"
    },
    smallSpacer: {
        height: "10px !important"
    },
    sideNavDivider: {
        marginBottom: "8px !important",
        marginTop: "8px !important",
    },
    sideNavListFooterContainer: {
        marginLeft: "8px",
        marginRight: "8px",
        marginTop: "auto",
        overflow: "hidden"
    },
    sideNavListContainer: {
        marginLeft: "8px",
        marginRight: "8px",
        overflow: "hidden"
    },
    sideNavListItem: {
        borderRadius: "0.3em !important",
        height: "40px"
    },
    sideNavListItemNested: {
        paddingLeft: "28px !important",
        height: "40px",
        borderRadius: "0.3em !important",
    },
    sideNavActiveItem: {
        backgroundColor: alpha(theme.palette.background.dark, 0.5)
    },
    sideNavListItemNestedActive: {
        backgroundColor: alpha(theme.palette.background.dark, 0.5)
    },
    sideNavListItemActive: {
        backgroundColor: "#efefef",
    },
    sideNavFooter: {
        position: "fixed",
        bottom: 0,
        textAlign: "center",
        width: theme.drawerWidth,
        transition: theme.transitions.create(['width', 'margin'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
        }),
    },
    sideNavFooterCollapsed: {
        width: theme.drawerWidthSemiClosed,
        transition: theme.transitions.create(['width', 'margin'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
        }),
    },
    sideNavListItemButtonCollapsed: {
        maxWidth: "45px !important",
        maxHeight: "45px !important",
        marginBottom: theme.spacing(1),
        borderRadius: 4,
    },
    sideNavListItemButtonPrimary: {
        backgroundColor: `${theme.palette.primary.main} !important`,
        textAlign: "left",
    },
    sideNavListItemButton: {
        borderRadius: 5,
        backgroundColor: `${theme.palette.primary.main} !important`,
        marginBottom: theme.spacing(1),
    },
    sideNavListItemIcon: {
        fontSize: 10,
        marginLeft: -2
    },
    sideNavListItemIconFontAwesome: {
        fontSize: 14,
        marginLeft: 3
    },
    sideNavListItemIconButtonCollapsed: {
    },
    dividerCollapsed: {
        marginRight: 0,
        marginLeft: 0
    },
    sideNavLogo: {
        marginTop: "15px",
        paddingLeft: "12px",
        transition: theme.transitions.create('width', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
        }),
    },
    sideNavLogoText: {
        transition: theme.transitions.create('width', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
        }),
    },
}));

export const useMenuSideNavStyles = makeStyles((theme) => ({
    sideNavMenuListItem: {
        paddingLeft: theme.spacing(4),
        "&:hover": {
            backgroundColor: "#dfdbf2",
        },
    },
    sideNavMenuListItemNoStyle: {
        paddingLeft: theme.spacing(4),
    },
    sideNavListItemActive: {
        backgroundColor: theme.palette.primary.main,
    },
    listItemHeaderText: {
        fontSize: 14,
    },
    listItemText: {
        fontSize: 14,
        color: '#757575'
    },
    listItemActiveText: {
        fontSize: 14,
        color: "#ffffff",
        "&:hover": {
            color: theme.palette.primary.main,
        },
    },
}), { index: 10 })