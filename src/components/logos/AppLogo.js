import React from "react";
import {useRouter} from "next/router";
import {ButtonBase, Divider, Paper, Stack, Typography, useMediaQuery, useTheme} from "@mui/material";
import {makeStyles} from "@mui/styles";
import {useLogoStyles, usePaperStyles, useTypographyStyles} from "../../styles";

const useStyles = makeStyles(theme => ({
    logoPaper: {
        backgroundColor: theme.palette.primary.main,
        minWidth: "45px",
        minHeight: "40px",
    },
    largeButtonBase: {
        "&:hover": {
            backgroundColor: theme.palette.hover.default,
        },
        borderRadius: 4,
        padding: "8px",
        justifyContent: "flex-start"
    },
    smallButtonBase: {
        "&:hover": {
            backgroundColor: theme.palette.hover.default,
        },
        borderRadius: 4,
        padding: "8px",
        marginLeft: "-8px",
        marginTop: "4px",
        justifyContent: "flex-start"
    },
    largeButtonBaseSideNav: {
        "&:hover": {
            backgroundColor: theme.palette.hover.default,
        },
        borderRadius: 4,
        padding: "8px",
        width: "228px",
        marginRight: "4px",
        marginTop: "4px",
        marginLeft: "4px",
        justifyContent: "flex-start"
    },
    smallButtonBaseSideNav: {
        "&:hover": {
            backgroundColor: theme.palette.hover.default,
        },
        borderRadius: 4,
        padding: "8px",
        marginLeft: "4px",
        marginRight: "4px",
        marginTop: "4px",
        justifyContent: "flex-start"
    },
    smallSideNavButton: {
        margin: "6px",
        padding: "8px",
        marginTop: "8px",
        marginLeft: "1px",
        // padding: "8px",
        "&:hover": {
            backgroundColor: theme.palette.hover.default,
        },
        borderRadius: 4,
    },
    sideNavButton: {
        marginTop: "8px",
        width: "220px",
        maxHeight: "50px",
        "&:hover": {
            backgroundColor: theme.palette.hover.default,
        },
    },
}));

export const AppLogo = ({sideNavItem = false, showText = true, clickAble = true, label = null, size = null, showEnvironmentText = false}) => {
    const classes = useStyles();
    const typographyClasses = useTypographyStyles();
    const logoClasses = useLogoStyles();
    const theme = useTheme();
    const sm = useMediaQuery(theme.breakpoints.only("sm"));
    const xs = useMediaQuery(theme.breakpoints.only("xs"));

    const getLogoClasses = () => {

        if(size === null) {
            if(xs) {
                return logoClasses.appLogoXsSmall
            } else if(sm) {
                return logoClasses.appLogoSmall;
            }
        }

        if(size === "xsSmall") {
            return logoClasses.appLogoXsSmall;
        } else if(size === "small") {
            return logoClasses.appLogoSmall;
        } else if(size === "large") {
            return logoClasses.appLogoLarge;
        }

        return logoClasses.appLogoMedium;
    }

    const getLogoTextClasses = () => {

        if(size === null) {
            if(xs) {
                return logoClasses.appTextXsSmall
            } else if(sm) {
                return logoClasses.appTextSmall;
            }
        }

        if(size === "small") {
            return logoClasses.appTextSmall;
        } else if(size === "large") {
            return logoClasses.appTextLarge;
        }

        return logoClasses.appTextMedium;
    }

    if(!showText && !sideNavItem) {

        return (
            <ButtonBase disabled={!clickAble} className={classes.smallButtonBase}>
                <Stack
                    direction="row"
                    justifyContent="flex-start"
                    alignItems="center"
                    spacing={1}
                >
                    <img
                        className={getLogoClasses()}
                        alt={"logo"}
                        src={"/logos/app/default_icon.svg"}
                    />
                </Stack>
            </ButtonBase>
        )
    }

    if(!showText && sideNavItem) {
        return (
            <ButtonBase href={"https://eltyer.com"} disabled={!clickAble} className={classes.smallButtonBaseSideNav}>
                <Stack
                    direction="row"
                    justifyContent="flex-start"
                    alignItems="center"
                    spacing={1}
                >
                    <img
                        className={getLogoClasses()}
                        alt={"logo"}
                        src={"/logos/app/default_icon.svg"}
                    />
                </Stack>
            </ButtonBase>
        )
    }

    if(sideNavItem) {
        return (
            <Stack
                direction="row"
                justifyContent="flex-start"
                alignItems="center"
            >
                <ButtonBase href={"https://eltyer.com"} disabled={!clickAble} className={classes.largeButtonBaseSideNav}>
                    <Stack
                        direction="row"
                        justifyContent="flex-start"
                        alignItems="center"
                        spacing={1}
                    >
                        <img
                            className={getLogoClasses()}
                            alt={"logo"}
                            src={"/logos/app/default_icon.svg"}
                            height={label !== null ? "35px" : "40px"}
                        />
                        <img
                            alt={"eltyer-logo"}
                            src={"/logos/app/text.svg"}
                            className={getLogoTextClasses()}
                        />
                        {label !== null &&
                            <>
                                <Divider orientation={"vertical"} style={{height: "25px"}}/>
                                <Typography className={typographyClasses.sectionHeader} style={{marginLeft: "8px"}}>
                                    {label}
                                </Typography>
                            </>
                        }
                    </Stack>
                </ButtonBase>
            </Stack>
        )
    }

    return (
        <Stack
            direction="row"
            justifyContent="flex-start"
            alignItems="center"
        >
            <ButtonBase href={"https://eltyer.com"} disabled={!clickAble} className={classes.largeButtonBase}>
                <Stack
                    direction="row"
                    justifyContent="flex-start"
                    alignItems="center"
                    spacing={1}
                >
                    <img
                        className={getLogoClasses()}
                        alt={"logo"}
                        src={"/logos/app/default_icon.svg"}
                    />
                    <img
                        alt={"eltyer-logo"}
                        src={"/logos/app/text.svg"}
                        className={getLogoTextClasses()}
                    />
                </Stack>
            </ButtonBase>
            {label !== null &&
                <>
                    <Divider orientation={"vertical"} style={{height: "25px"}}/>
                    <Typography className={typographyClasses.sectionHeader} style={{marginLeft: "8px"}}>
                        {label}
                    </Typography>
                </>
            }
        </Stack>
    )
}
