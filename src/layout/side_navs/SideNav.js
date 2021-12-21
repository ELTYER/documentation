import React from "react";
import {useRouter} from "next/router";
import {useSideNavStyles, useTypographyStyles} from "../../styles";
import {AppLogo} from "../../components/logos";
import {SIDE_NAV_ITEMS} from "../../configuration";
import {SideNavNestedItem} from "./SideNavNestedItem";
import {SideNavIconItem} from "./SideNavIconItem";
import {SideNavHeader} from "./SideNavHeader";
import {SideNavDivider} from "./SideNavDivider";
import {SideNavSpacer} from "./SideNavSpacer";
import {SideNavSmallSpacer} from "./SideNavSmallSpacer";
import {SideNavLink} from "./SideNavLink";
import {SideNavTextItem} from "./SideNavTextItem";
import {SideNavIndentedTextItem} from "./SideNavIndentedTextItem";
import {SideNavIconTextItem} from "./SideNavIconTextItem";
import {Drawer, IconButton, List, NoSsr, Stack, SwipeableDrawer, useMediaQuery, useTheme} from "@mui/material";
import {makeStyles} from "@mui/styles";
import CloseIcon from '@mui/icons-material/Close';

const useStyles = makeStyles(() => ({
    drawerPaper: {
        width: '100%',
    },
}));

export const SideNav = ({sideNavItems, footerItems, sideNavOpen, handleSideNavOpenClick, showAppLogo=true, appLogoLabel = null}) => {
    const classes = useStyles();
    const typographyClasses = useTypographyStyles();
    const sideNavClasses = useSideNavStyles();
    const router = useRouter();
    const theme = useTheme();
    const smDown = useMediaQuery(theme.breakpoints.down("sm"));

    const handleLogoClick = () => {
        router.push('/');
    }

    const renderSideNavList = (items) => {
        return (
            <List dense disablePadding>
                {items.map(function(item){
                    if(item.itemStyle === SIDE_NAV_ITEMS.divider) {
                        return <SideNavDivider key={item.id} item={item}/>
                    } else if(item.itemStyle === SIDE_NAV_ITEMS.spacer) {
                        return <SideNavSpacer key={item.id} item={item}/>
                    } else if(item.itemStyle === SIDE_NAV_ITEMS.smallSpacer) {
                        return <SideNavSmallSpacer key={item.id} item={item}/>
                    } else if(item.itemStyle === SIDE_NAV_ITEMS.nested) {
                        return <SideNavNestedItem key={item.id} item={item}/>
                    } else if(item.itemStyle === SIDE_NAV_ITEMS.header) {
                        return <SideNavHeader key={item.id} item={item}/>
                    } else if(item.itemStyle === SIDE_NAV_ITEMS.link) {
                        return <SideNavLink key={item.id} item={item}/>
                    } else if(item.itemStyle === SIDE_NAV_ITEMS.text) {
                        return <SideNavTextItem key={item.id} item={item}/>
                    } else if(item.itemStyle === SIDE_NAV_ITEMS.textIndented) {
                        return <SideNavIndentedTextItem key={item.id} item={item}/>
                    } else if(item.itemStyle === SIDE_NAV_ITEMS.icon) {
                        return <SideNavIconItem key={item.id} item={item}/>
                    } else if(item.itemStyle === SIDE_NAV_ITEMS.iconText) {
                        return <SideNavIconTextItem key={item.id} item={item}/>
                    }
                })}
            </List>
        )
    }

    if(smDown) {
        return (
            <NoSsr>
                <SwipeableDrawer
                    PaperProps={{ elevation: 2}}
                    open={sideNavOpen}
                    onOpen={() => handleSideNavOpenClick(true)}
                    onClose={() => handleSideNavOpenClick(false)}
                    classes={{
                        paper: classes.drawerPaper,
                    }}
                >
                    <Stack
                        direction="row"
                        justifyContent="space-between"
                        alignItems="center"
                        spacing={2}
                    >
                        <div style={{"overflow": "hidden"}}>
                            <AppLogo sideNavItem showText handleClick={handleLogoClick} label={appLogoLabel}/>
                        </div>
                        <IconButton onClick={() => handleSideNavOpenClick(false)}>
                            <CloseIcon/>
                        </IconButton>
                    </Stack>
                    <div className={sideNavClasses.sideNavListContainer}>
                        {sideNavItems !== undefined && sideNavItems !== null && renderSideNavList(sideNavItems)}
                    </div>
                    <div className={sideNavClasses.sideNavListFooterContainer}>
                        {footerItems !== undefined && footerItems !== null && renderSideNavList(footerItems)}
                    </div>
                </SwipeableDrawer>
            </NoSsr>
        )
    }

    return (
        <NoSsr>
            <Drawer
                PaperProps={{ elevation: 2}}
                variant="persistent"
                open={sideNavOpen}
            >
                {showAppLogo &&
                    <div style={{"overflow": "hidden"}}>
                        <AppLogo sideNavItem showText handleClick={handleLogoClick} label={appLogoLabel}/>
                    </div>
                }
                <div className={sideNavClasses.sideNavListContainer}>
                    {sideNavItems !== undefined && sideNavItems !== null && renderSideNavList(sideNavItems)}
                </div>
            </Drawer>
        </NoSsr>
    )
}