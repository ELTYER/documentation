import clsx from "clsx";
import React from "react";
import {useSideNavStyles, useTypographyStyles} from "../../styles";
import {Box, ListItem, Typography} from "@mui/material";

export const SideNavHeader = ({item}) => {
    const sideNavClasses = useSideNavStyles();
    const typographyClasses = useTypographyStyles();

    return (
        <ListItem className={sideNavClasses.sideNavListItem}>
            <Box display="flex" justifyContent="flex-start">
                <Box>
                    <Typography align={"left"} className={clsx(typographyClasses.boldBody)}>
                        {item.label}
                    </Typography>
                </Box>
            </Box>
        </ListItem>
    )
}