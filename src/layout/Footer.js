import React from 'react';
import PropTypes from 'prop-types';
import {Divider, Link, Paper, Typography} from "@mui/material";
import {AppLogo} from "../components/logos";
import {usePaperStyles, useTypographyStyles} from "../styles";

const Footer = () =>  {
    const paperClasses = usePaperStyles();
    const typographyClasses = useTypographyStyles();

    return (
        <>
            <br/>
            <Paper color={'primary'} className={paperClasses.contentPaper}>
                <Typography align={"center"} className={typographyClasses.body}>
                    The documentation website by ELTYER is licensed under a <Link
                        className={typographyClasses.bodyPrimary}
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
