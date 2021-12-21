import React from 'react';
import PropTypes from 'prop-types';
import coding_kitties from "../images/coding-kitties.svg"
import {Divider, Paper, Typography} from "@mui/material";
import Link from "../Link";
import {makeStyles} from "@mui/styles";
import {AppLogo} from "../components/logos";

const useStyles = makeStyles(theme => ({
    footer: {
        zIndex: theme.zIndex.drawer + 1,
        transition: theme.transitions.create(['width', 'margin'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
    },
    footerShift: {
        marginLeft: theme.drawerWidth,
        width: `calc(100% - ${theme.drawerWidth}px)`,
        transition: theme.transitions.create(['width', 'margin'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
        }),
    },
    linkList: {
        paddingLeft: theme.spacing(8)
    },
    header: {
        fontWeight: 'bold'
    },
    licensePaper: {
        backgroundColor: theme.palette.primary.light,
        marginTop: theme.spacing(1),
        marginBottom: theme.spacing(1),
        paddingTop: theme.spacing(1),
        paddingBottom: theme.spacing(1),
        [theme.breakpoints.down('sm')]: {
            height: 90,
        },
        [theme.breakpoints.down('xs')]: {
            height: 120,
        },
    },
    infoText: {
        color: '#fafafa',
    },
    headerLink: {
        color: '#000000'
    },
    linkButton: {
        textTransform: 'none',
        padding: 0
    },
    codingKittiesHeader: {
        fontSize: 14,
    }
}));

const CodingKitties = props => {
    return (
        <img src={coding_kitties} alt="" {...props}/>
    )
}

const Footer = ({sideNavOpen}) =>  {
    const classes = useStyles();

    return (
        <>
            <br/>
            <Paper color={'primary'} className={classes.licensePaper}>
                <Typography align={"center"} className={classes.infoText}>
                    The documentation website by ELTYER is licensed under a <Link
                        className={classes.headerLink}
                        href="https://creativecommons.org/licenses/by-nc-sa/4.0/"
                    >
                         Creative Commons Attribution-NonCommercial-ShareAlike 4.0 International License
                    </Link>.
                </Typography>
            </Paper>
            <br/>
            <br/>
            <Divider/>
            <br/>
            <AppLogo/>
            <br/>
            <Divider/>
            <br/>
            <br/>
        </>
    )
}

Footer.propTypes = {
    drawerOpen: PropTypes.bool.isRequired
}

Footer.defaultProps = {
    drawerOpen: false
}

export default Footer;
