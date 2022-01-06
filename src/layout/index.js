import React from 'react';
import HeaderContent from "./HeaderContent";
import Footer from "./Footer";
import {useLayoutStyles} from "../styles";
import {AppBar, Box, Container, useMediaQuery, useTheme} from "@mui/material";
import clsx from "clsx";
import {SideNav} from "./side_navs";
import {SIDE_NAV_ITEMS} from "../configuration";
import {useDispatch, useSelector} from "react-redux";
import CircleProgress from "../components/loading/CircleProgress";
import {sideNavOpenAction} from "../redux/actions";


const Layout = props => {
    const {children} = props;
    const layoutClasses = useLayoutStyles();
    const theme = useTheme();
    const pageLoading = useSelector(state => state.loading.pageLoading);
    const md = useMediaQuery(theme.breakpoints.only("md"));
    const lgDown = useMediaQuery(theme.breakpoints.down("lg"));
    const dispatch = useDispatch();
    const sideNavOpen = useSelector(state => state.layout.sideNavOpen);

    const getAppLogoLabel = () => {

        if(md) {
            return "Docs"
        }

        return "Documentation";
    }

    const getSideNavOpen = () => {

        if(!lgDown) {
            return true;
        }

        return sideNavOpen;
    }

    const getSideNavItems = () => {
        return [
            {
                id: 'spacerOne',
                itemStyle: SIDE_NAV_ITEMS.spacer,
            },
            {
                id: 'spacerTwo',
                itemStyle: SIDE_NAV_ITEMS.spacer,
            },
            {
                id: 'eltyer-platform',
                label: 'Eltyer Platform',
                itemStyle: SIDE_NAV_ITEMS.header,
            },
            {
                id: 'home',
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
                id: 'small-spacer-one',
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
                        id: 'python-client-introduction',
                        label: 'Introduction',
                        href: '/python-client/introduction',
                    },
                    {
                        id: 'python-client-orders',
                        label: 'Orders',
                        href: '/python-client/orders',
                    },
                    {
                        id: 'python-client-positions',
                        label: 'Positions',
                        href: '/python-client/positions',
                    },
                    {
                        id: 'python-client-portfolio',
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
                        id: 'investing-algorithm-framework-plugin-introduction',
                        label: 'Introduction',
                        href: '/investing-algorithm-framework-plugin/introduction',
                    },
                ]
            },
        ]
    }

    const handleSideNavOpenClick = () => {
        dispatch(sideNavOpenAction(!sideNavOpen));
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
                <AppBar
                    className={clsx(lgDown? layoutClasses.appBarMobile : layoutClasses.appBar)}
                    position={"sticky"}
                    color={"inherit"}
                >
                    <HeaderContent handleSideNavOpenClick={handleSideNavOpenClick}/>
                </AppBar>
                <SideNav
                    sideNavItems={getSideNavItems()}
                    sideNavOpen={getSideNavOpen()}
                    handleSideNavOpenClick={handleSideNavOpenClick}
                    appLogoLabel={getAppLogoLabel()}
                />
                <div className={clsx((getSideNavOpen() && !md)? layoutClasses.contentShiftLeft : layoutClasses.contentShiftRight)}>
                    <Container component="main" sx={{ mt: 8, mb: 2 }} maxWidth="md">
                        {children}
                    </Container>
                </div>
                <Box
                    className={clsx((getSideNavOpen() && !md)? layoutClasses.contentShiftLeft : layoutClasses.contentShiftRight, layoutClasses.footer)}
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
                        <Footer/>
                    </Container>
                </Box>
            </Box>
        </>
    );
};

// hide-end
export default Layout;