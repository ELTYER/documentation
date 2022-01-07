import React from 'react';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faGithub} from "@fortawesome/free-brands-svg-icons";
import {Button, IconButton, Stack, Toolbar, Typography, useMediaQuery, useTheme} from "@mui/material";
import {makeStyles} from "@mui/styles";
import {AppLogo} from "../components/logos";
import {useButtonStyles, useLogoStyles, useTypographyStyles} from "../styles";
import MenuIcon from '@mui/icons-material/Menu';
import clsx from "clsx";

const useStyles = makeStyles(theme => ({
    githubIcon: {
        color: "#000000"
    }
}), {  name: "MuiCustomStyleHeaderContent"});



const HeaderContent = ({handleSideNavOpenClick}) => {
    const classes = useStyles();
    const buttonClasses = useButtonStyles();
    const typographyClasses = useTypographyStyles();
    const logoClasses = useLogoStyles();
    const theme = useTheme();
    const smDown = useMediaQuery(theme.breakpoints.down("sm"));

    return (
        <Toolbar style={{paddingLeft: 0}}>
            <Stack
                direction="row"
                justifyContent="space-between"
                alignItems="center"
                style={{width: "100%"}}
            >
                <Stack
                    direction="row"
                    justifyContent="flex-start"
                    alignItems="center"
                >
                    <IconButton
                        style={{marginLeft: "4px"}}
                        onClick={() => handleSideNavOpenClick()}
                    >
                        <MenuIcon/>
                    </IconButton>
                    <AppLogo label={"Documentation"}/>
                </Stack>
                <Stack
                    direction="row"
                    justifyContent="flex-end"
                    alignItems="center"
                >
                    {smDown?
                        <IconButton
                            className={buttonClasses.standardButton}
                            href={'https://github.com/eltyer'}
                        >
                            <FontAwesomeIcon size={"2x"} className={classes.githubIcon} icon={faGithub}/>
                        </IconButton> :
                        <Button
                            className={buttonClasses.standardButton}
                            startIcon={<FontAwesomeIcon className={clsx(logoClasses.logoMedium, classes.githubIcon)} icon={faGithub}/>}
                            href={'https://github.com/eltyer'}
                        >
                            <Typography className={typographyClasses.body}>
                                Github
                            </Typography>
                        </Button>
                    }
                </Stack>
            </Stack>
        </Toolbar>
    )
};

export default HeaderContent;