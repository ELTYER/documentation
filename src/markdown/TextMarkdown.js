import React from 'react';
import {useTypographyStyles} from "../styles";
import {Typography} from "@mui/material";

const TextMarkdownRenderer = props => {
    const typographyClasses = useTypographyStyles();

    return (
        <Typography className={typographyClasses.body}>
            {props.children}
        </Typography>
    );
}

export default TextMarkdownRenderer;

