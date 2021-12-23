import React from 'react';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faGithub} from "@fortawesome/free-brands-svg-icons";
import {Button, IconButton, Stack, Toolbar, Typography, useMediaQuery, useTheme} from "@mui/material";
import {makeStyles} from "@mui/styles";
import {AppLogo} from "../components/logos";
import {useButtonStyles, useTypographyStyles} from "../styles";
import MenuIcon from '@mui/icons-material/Menu';
import {useDispatch} from "react-redux";

const useStyles = makeStyles(theme => ({
    githubIcon: {
        color: "#000000"
    }
}));



const HeaderContent = ({handleSideNavOpenClick}) => {
    const classes = useStyles();
    const buttonClasses = useButtonStyles();
    const typographyClasses = useTypographyStyles();
    const theme = useTheme();
    const smDown = useMediaQuery(theme.breakpoints.down("sm"));

    return (
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
                {smDown &&
                    <IconButton
                        style={{marginLeft: "4px"}}
                        onClick={() => handleSideNavOpenClick()}
                    >
                        <MenuIcon/>
                    </IconButton>
                }
                <AppLogo label={"Documentation"}/>
            </Stack>
            <Toolbar style={{paddingLeft: "8px"}}>
                {smDown?
                    <IconButton
                        className={buttonClasses.standardButton}
                        href={'https://github.com/eltyer'}
                    >
                        <FontAwesomeIcon size={"2x"} className={classes.githubIcon} icon={faGithub}/>
                    </IconButton> :
                    <Button
                        className={buttonClasses.standardButton}
                        startIcon={<FontAwesomeIcon className={classes.githubIcon} icon={faGithub}/>}
                        href={'https://github.com/eltyer'}
                    >
                        <Typography className={typographyClasses.body}>
                            Github
                        </Typography>
                    </Button>
                }
            </Toolbar>
        </Stack>
    )
};

export default HeaderContent;