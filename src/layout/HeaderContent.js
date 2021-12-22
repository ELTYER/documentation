import React from 'react';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faGithub} from "@fortawesome/free-brands-svg-icons";
import {Button, Stack, Toolbar, Typography} from "@mui/material";
import {makeStyles} from "@mui/styles";
import {AppLogo} from "../components/logos";
import {useButtonStyles, useTypographyStyles} from "../styles";

const useStyles = makeStyles(theme => ({
    githubIcon: {
        color: "#000000"
    }
}));



const HeaderContent = props => {
    const classes = useStyles();
    const buttonClasses = useButtonStyles();
    const typographyClasses = useTypographyStyles();

    return (
        <Stack
            direction="row"
            justifyContent="space-between"
            alignItems="center"
            style={{width: "100%"}}
        >
            <AppLogo label={"Documentation"}/>
            <Toolbar>
                <Button
                    className={buttonClasses.standardButton}
                    startIcon={<FontAwesomeIcon className={classes.githubIcon} icon={faGithub}/>}
                    href={'https://github.com/eltyer'}
                >
                    <Typography className={typographyClasses.body}>
                        Github
                    </Typography>
                </Button>
            </Toolbar>
        </Stack>
    )
};

export default HeaderContent;