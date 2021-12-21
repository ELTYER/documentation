import React from 'react';
import ReactMarkdown from 'react-markdown'
import {useTypographyStyles} from "../../styles";
import {Typography} from "@mui/material";
import {makeStyles} from "@mui/styles";

const useStyles = makeStyles(() => ({
    markdown: {
        maxWidth: "1000px"
    }
}));

export const MarkdownField = ({value}) => {
    const classes = useStyles();
    const typographyClasses = useTypographyStyles();

    return (
        <div className={classes.markdown}>
            <ReactMarkdown
                components={{
                    h1: ({node, ...props}) => <Typography className={typographyClasses.sectionHeader} {...props} />,
                    h2: ({node, ...props}) => <Typography className={typographyClasses.sectionHeaderTwo} {...props} />,
                    h3: ({node, ...props}) => <Typography className={typographyClasses.sectionHeaderTwo} {...props} />,
                    h4: ({node, ...props}) => <Typography className={typographyClasses.sectionHeaderTwo} {...props} />,
                    p: ({node, ...props}) => <Typography className={typographyClasses.body} {...props} />,
                }}
            >
                {value}
            </ReactMarkdown>
        </div>
    )
}