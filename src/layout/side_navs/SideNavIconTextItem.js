import clsx from "clsx";
import React from "react";
import {useSideNavStyles, useTypographyStyles} from "../../styles";
import {useRouter} from "next/router";
import {Box, ListItem, Typography} from "@mui/material";


export const SideNavIconTextItem = ({item}) => {
    const sideNavClasses = useSideNavStyles();
    const typographyClasses = useTypographyStyles();
    const router = useRouter();

    const handleClick = () => {
        router.push(item.href)
    }

    const isActive = () => {
        return false;
    }

    return (
        <ListItem button onClick={() => handleClick(item)} className={sideNavClasses.sideNavListItem}>
            <Box paddingTop={0.4} display="flex" justifyContent="flex-start" alignItems={"flex-start"}>
                <Box marginRight={1} paddingTop={0.15}>
                    {isActive()? item.activeIcon : item.icon}
                </Box>
                <Box>
                    <Typography
                        align={"left"}
                        className={clsx(typographyClasses.bodySecondaryText, isActive() && typographyClasses.bodyPrimary)}
                    >
                        {item.label}
                    </Typography>
                </Box>
            </Box>
        </ListItem>
    )
}