import React from 'react';
import {useRouter} from "next/router";
import HeaderContent from "./HeaderContent";
import Footer from "./Footer";
import {useLayoutStyles, useSideNavStyles} from "../styles";
import {AppBar, Box, Container} from "@mui/material";
import {makeStyles} from "@mui/styles";
import clsx from "clsx";
import {SideNav} from "./side_navs";
import {SIDE_NAV_ITEMS} from "../configuration";

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
    const {children} = props;
    const classes = useStyles();
    const sideNavClasses = useSideNavStyles();
    const layoutClasses = useLayoutStyles();

    const getSideNavItems = () => {
        return [
            {
                id: 'spacerOne',
                itemStyle: SIDE_NAV_ITEMS.spacer,
            },
            {
                id: 'spacerOne',
                itemStyle: SIDE_NAV_ITEMS.spacer,
            },
            {
                id: 'introduction',
                label: 'Introduction',
                itemStyle: SIDE_NAV_ITEMS.text,
                href: "/"
            },
            {
                id: 'platform',
                label: 'Platform',
                itemStyle: SIDE_NAV_ITEMS.text,
                href: "/platform"
            },
            {
                id: 'small-spacer',
                itemStyle: SIDE_NAV_ITEMS.smallSpacer,
            },
            {
                id: 'developer-tools',
                label: 'Developer Tools',
                itemStyle: SIDE_NAV_ITEMS.header,
            },
            {
                id: 'python-client',
                label: 'Python client',
                itemStyle: SIDE_NAV_ITEMS.nested,
                children: [
                    {
                        id: 'introduction',
                        label: 'Introduction',
                        href: '/python-client/introduction',
                    },
                    {
                        id: 'orders',
                        label: 'Orders',
                        href: '/python-client/orders',
                    },
                    {
                        id: 'positions',
                        label: 'Positions',
                        href: '/python-client/positions',
                    },
                    {
                        id: 'portfolio',
                        label: 'Portfolio',
                        href: '/python-client/portfolio',
                    },
                ]
            },
            {
                id: 'investing-algorithm-framework-plugin',
                label: 'Investing Algorithm Framework plugin',
                itemStyle: SIDE_NAV_ITEMS.nested,
                children: [
                    {
                        id: 'introduction',
                        label: 'Introduction',
                        href: '/investing-algorithm-framework-plugin/introduction',
                    },
                ]
            },
        ]
    }

    return (
        <>
            <Box
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    minHeight: '100vh',
                }}
            >
                <AppBar className={classes.appBar} position={"sticky"} color={"default"}>
                    <HeaderContent/>
                </AppBar>
                <SideNav sideNavItems={getSideNavItems()} sideNavOpen/>
                <Container component="main" sx={{ mt: 8, mb: 2 }} maxWidth="md">
                    {children}
                </Container>
                <Box
                    className={clsx(layoutClasses.contentShiftRight, layoutClasses.footer)}
                    component="footer"
                    sx={{
                        justifyContent: 'center',
                        py: 3,
                        px: 2,
                        mt: 'auto',
                        backgroundColor: (theme) =>
                            theme.palette.mode === 'light'
                                ? theme.palette.grey[200]
                                : theme.palette.grey[800],
                    }}
                >
                    <Container>
                        <Footer sideNavOpen/>
                    </Container>
                </Box>
            </Box>
        </>
    );
};

// hide-end
export default Layout;