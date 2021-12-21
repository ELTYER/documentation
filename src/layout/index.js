import React, {useEffect} from 'react';
import clsx from "clsx";
import {useRouter} from "next/router";
import AppBar from "@material-ui/core/AppBar";
import Drawer from "@material-ui/core/Drawer";
import {makeStyles} from "@material-ui/core/styles";
import HeaderContent from "./HeaderContent";
import SideNavContent from "./SideNavContent";
import Footer from "./Footer";
import {useSideNavStyles} from "../styles";

const drawerWidth = 256;

const useStyles = makeStyles((theme) => ({
    appBar: {
        zIndex: theme.zIndex.drawer + 2,
    },
    appBarSecond: {
        zIndex: theme.zIndex.drawer + 1,
        backgroundColor: theme.palette.primary.light
    },
    appBarSpacer: theme.mixins.toolbar,
    toolbar: theme.mixins.toolbar,
    drawer: {
        width: drawerWidth,
        flexShrink: 0,
    },
    drawerPaper: {
        width: drawerWidth,
    },
    drawerContainer: {
        overflow: 'auto',
    },
    content: {
        flexGrow: 1,
        justify: "center",
        transition: theme.transitions.create(['width', 'margin'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
    },
    contentShift: {
        marginLeft: theme.drawerWidth,
        width: `calc(100% - ${theme.drawerWidth}px)`,
        transition: theme.transitions.create(['width', 'margin'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
        }),
    },
    container: {
        paddingTop: theme.spacing(4),
        paddingBottom: theme.spacing(4),
    },
}));

const Layout = props => {
    const router = useRouter();
    const {pathname} = router;
    const {children} = props;
    const classes = useStyles();
    const sideNavClasses = useSideNavStyles();

    return (
        <>
            <AppBar className={classes.appBar} position={"sticky"} color={"default"}>
                <HeaderContent/>
            </AppBar>
            <Drawer
                variant="permanent"
                ModalProps={{
                    keepMounted: true,
                }}
                className={sideNavClasses.drawer}
            >
                <SideNavContent/>
            </Drawer>
            <div>
                {children}
            </div>
            <br/>
            <br/>
            <Footer drawerOpen/>
        </>
    );
};

// hide-end
export default Layout;