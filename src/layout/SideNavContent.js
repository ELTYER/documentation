import React, {useState} from 'react';
import {useRouter} from 'next/router'
import {useSideNavStyles, useTypographyStyles} from "../styles";
import clsx from "clsx";
import Link from "../Link";
import {Collapse, ListItem, ListItemText, Toolbar, Typography} from "@mui/material";
import {ExpandLess, ExpandMore, List} from "@mui/icons-material";

const SideNavContent = () => {
    const typographyClasses = useTypographyStyles();
    const sideNavClasses = useSideNavStyles();
    const router = useRouter()
    const [introductionOpen, setIntroductionOpen] = useState(false);
    const [tutorialsOpen, setTutorialsOpen] = useState(false);
    const [fundamentalsOpen, setFundamentalsOpen] = useState(false);
    const [recipesOpen, setRecipesOpen] = useState(false);

    const isActive = (link) => {
        const pathName = router.pathname;
        const { id } = router.query
        return pathName.includes(link) || id === link;
    }

    const renderDocumentationSideNav = () => {

        return (
            <Grid
                container
                direction="column"
                justify="center"
                alignItems="center"
                className={sideNavClasses.sideNavContainer}
            >
                <Grid item xs={12}>
                    <List className={sideNavClasses.sideNavList}>
                        <ListItem
                            button
                            onClick={() => setIntroductionOpen(!introductionOpen)}
                            className={
                                clsx(
                                    sideNavClasses.sideNavItem,
                                    !introductionOpen && isActive('/investing-algorithm-framework-plugin/introduction') && sideNavClasses.sideNavListItemActive
                                )
                            }
                        >
                            <ListItemText disableTypography>
                                <Typography
                                    className={typographyClasses.listItemHeaderText}
                                >
                                    Introduction
                                </Typography>
                            </ListItemText>
                            {introductionOpen ? <ExpandLess/> : <ExpandMore/>}
                        </ListItem>
                        <Collapse in={introductionOpen} timeout="auto" unmountOnExit>
                            <List component="div" disablePadding>
                                <ListItem
                                    component={Link}
                                    href={'/investing-algorithm-framework-plugin/introduction/getting-started'}
                                    button
                                    className={
                                        clsx(
                                            sideNavClasses.nestedSideNavItem,
                                            isActive('getting-started') && sideNavClasses.sideNavListItemActive
                                        )
                                    }
                                    naked
                                >
                                    <ListItemText disableTypography>
                                        <Typography className={typographyClasses.listItemText}>
                                            Getting Started
                                        </Typography>
                                    </ListItemText>
                                </ListItem>
                                <ListItem
                                    component={Link}
                                    href={'/investing-algorithm-framework-plugin/introduction/installation'}
                                    button
                                    className={
                                        clsx(
                                            sideNavClasses.nestedSideNavItem,
                                            isActive('installation') && sideNavClasses.sideNavListItemActive
                                        )
                                    }
                                    naked
                                >
                                    <ListItemText disableTypography>
                                        <Typography className={typographyClasses.listItemText}>
                                            Installation
                                        </Typography>
                                    </ListItemText>
                                </ListItem>
                            </List>
                        </Collapse>
                        <ListItem
                            button
                            onClick={() => setTutorialsOpen(!tutorialsOpen)}
                            className={
                                clsx(
                                    sideNavClasses.sideNavItem,
                                    !tutorialsOpen && isActive('/investing-algorithm-framework-plugin/tutorials') && sideNavClasses.sideNavListItemActive
                                )
                            }
                        >
                            <ListItemText disableTypography>
                                <Typography
                                    className={typographyClasses.listItemHeaderText}
                                >
                                    Tutorials
                                </Typography>
                            </ListItemText>
                            {tutorialsOpen ? <ExpandLess/> : <ExpandMore/>}
                        </ListItem>
                        <Collapse in={tutorialsOpen} timeout="auto" unmountOnExit>
                            <List component="div" disablePadding>
                                <ListItem
                                    button
                                    className={
                                        clsx(
                                            sideNavClasses.nestedSideNavItem,
                                            !fundamentalsOpen && isActive('/investing-algorithm-framework-plugin/tutorials/fundamentals') && sideNavClasses.sideNavListItemActive
                                        )
                                    }
                                    onClick={() => setFundamentalsOpen(!fundamentalsOpen)}
                                >
                                    <ListItemText disableTypography>
                                        <Typography className={typographyClasses.listItemText}>
                                            Fundamentals
                                        </Typography>
                                    </ListItemText>
                                    {fundamentalsOpen ? <ExpandLess/> : <ExpandMore/>}
                                </ListItem>
                                <Collapse in={fundamentalsOpen} timeout="auto" unmountOnExit>
                                    <List component="div" disablePadding>
                                        <ListItem
                                            button
                                            className={
                                                clsx(
                                                    sideNavClasses.doubleNestedSideNavItem,
                                                    isActive('core-concepts') && sideNavClasses.sideNavListItemActive
                                                )
                                            }
                                            component={Link}
                                            href={'/investing-algorithm-framework-plugin/tutorials/fundamentals/core-concepts'}
                                            naked
                                        >
                                            <ListItemText disableTypography>
                                                <Typography className={typographyClasses.listItemText}>
                                                    Core Concepts
                                                </Typography>
                                            </ListItemText>
                                        </ListItem>
                                        <ListItem
                                            button
                                            className={
                                                clsx(
                                                    sideNavClasses.doubleNestedSideNavItem,
                                                    isActive('algorithm-context') && sideNavClasses.sideNavListItemActive
                                                )
                                            }
                                            component={Link}
                                            href={'/investing-algorithm-framework-plugin/tutorials/fundamentals/algorithm-context'}
                                            naked
                                        >
                                            <ListItemText disableTypography>
                                                <Typography className={typographyClasses.listItemText}>
                                                    Algorithm Context
                                                </Typography>
                                            </ListItemText>
                                        </ListItem>
                                        <ListItem
                                            button
                                            className={
                                                clsx(
                                                    sideNavClasses.doubleNestedSideNavItem,
                                                    isActive('data-providers') && sideNavClasses.sideNavListItemActive
                                                )
                                            }
                                            component={Link}
                                            href={'/investing-algorithm-framework-plugin/tutorials/fundamentals/data-providers'}
                                            naked
                                        >
                                            <ListItemText disableTypography>
                                                <Typography className={typographyClasses.listItemText}>
                                                    Data Providers
                                                </Typography>
                                            </ListItemText>
                                        </ListItem>
                                        <ListItem
                                            button
                                            className={
                                                clsx(
                                                    sideNavClasses.doubleNestedSideNavItem,
                                                    isActive('strategies') && sideNavClasses.sideNavListItemActive
                                                )
                                            }
                                            component={Link}
                                            href={'/investing-algorithm-framework-plugin/tutorials/fundamentals/strategies'}
                                            naked
                                        >
                                            <ListItemText disableTypography>
                                                <Typography className={typographyClasses.listItemText}>
                                                    Strategies
                                                </Typography>
                                            </ListItemText>
                                        </ListItem>
                                        <ListItem
                                            button
                                            className={
                                                clsx(
                                                    sideNavClasses.doubleNestedSideNavItem,
                                                    isActive('order-executors') && sideNavClasses.sideNavListItemActive
                                                )
                                            }
                                            component={Link}
                                            href={'/investing-algorithm-framework-plugin/tutorials/fundamentals/order-executors'}
                                            naked
                                        >
                                            <ListItemText disableTypography>
                                                <Typography className={typographyClasses.listItemText}>
                                                    Order Executors
                                                </Typography>
                                            </ListItemText>
                                        </ListItem>
                                        <ListItem
                                            button
                                            className={
                                                clsx(
                                                    sideNavClasses.doubleNestedSideNavItem,
                                                    isActive('portfolio-managers') && sideNavClasses.sideNavListItemActive
                                                )
                                            }
                                            component={Link}
                                            href={'/investing-algorithm-framework-plugin/tutorials/fundamentals/portfolio-managers'}
                                            naked
                                        >
                                            <ListItemText disableTypography>
                                                <Typography className={typographyClasses.listItemText}>
                                                    Portfolio Managers
                                                </Typography>
                                            </ListItemText>
                                        </ListItem>
                                    </List>
                                </Collapse>
                                <ListItem
                                    button
                                    className={sideNavClasses.nestedSideNavItem}
                                    onClick={() => setRecipesOpen(!recipesOpen)}
                                >
                                    <ListItemText disableTypography>
                                        <Typography className={typographyClasses.listItemText}>
                                            Recipes
                                        </Typography>
                                    </ListItemText>
                                    {recipesOpen ? <ExpandLess/> : <ExpandMore/>}
                                </ListItem>
                                <Collapse in={recipesOpen} timeout="auto" unmountOnExit>
                                    <List component="div" disablePadding>
                                        <ListItem
                                            button
                                            className={
                                                clsx(
                                                    sideNavClasses.doubleNestedSideNavItem,
                                                    isActive('overview') && sideNavClasses.sideNavListItemActive
                                                )
                                            }
                                            component={Link}
                                            href={'/investing-algorithm-framework-plugin/tutorials/recipes/overview'}
                                            naked
                                        >
                                            <ListItemText disableTypography>
                                                <Typography className={typographyClasses.listItemText}>
                                                    Overview
                                                </Typography>
                                            </ListItemText>
                                        </ListItem>
                                        <ListItem
                                            button
                                            className={
                                                clsx(
                                                    sideNavClasses.doubleNestedSideNavItem,
                                                    isActive('moving-average') && sideNavClasses.sideNavListItemActive
                                                )
                                            }
                                            component={Link}
                                            href={'/investing-algorithm-framework-plugin/tutorials/recipes/moving-average'}
                                            naked
                                        >
                                            <ListItemText disableTypography>
                                                <Typography className={typographyClasses.listItemText}>
                                                    Moving Average
                                                </Typography>
                                            </ListItemText>
                                        </ListItem>
                                        <ListItem
                                            button
                                            className={
                                                clsx(
                                                    sideNavClasses.doubleNestedSideNavItem,
                                                    isActive('telegram-integration') && sideNavClasses.sideNavListItemActive
                                                )
                                            }
                                            component={Link}
                                            href={'/investing-algorithm-framework-plugin/tutorials/recipes/telegram-integration'}
                                            naked
                                        >
                                            <ListItemText disableTypography>
                                                <Typography className={typographyClasses.listItemText}>
                                                    Telegram Integration
                                                </Typography>
                                            </ListItemText>
                                        </ListItem>
                                        <ListItem
                                            button
                                            className={
                                                clsx(
                                                    sideNavClasses.doubleNestedSideNavItem,
                                                    isActive('digitalocean-deployment') && sideNavClasses.sideNavListItemActive
                                                )
                                            }
                                            component={Link}
                                            href={'/investing-algorithm-framework-plugin/tutorials/recipes/digitalocean-deployment'}
                                            naked
                                        >
                                            <ListItemText disableTypography>
                                                <Typography className={typographyClasses.listItemText}>
                                                    Digitalocean Deployment
                                                </Typography>
                                            </ListItemText>
                                        </ListItem>
                                    </List>
                                </Collapse>
                            </List>
                        </Collapse>
                    </List>
                </Grid>
            </Grid>
        )
    }
    const {pathname} = router;

    return (
        <div className={sideNavClasses.sideNavContainer}>
            <Toolbar/>
            <br/>
            {pathname.includes('/investing-algorithm-framework-plugin/') && renderDocumentationSideNav()}
        </div>
    );
};

export default SideNavContent;