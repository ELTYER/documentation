import clsx from "clsx";
import React from "react";
import {useSideNavStyles, useTypographyStyles} from "../../styles";
import {useRouter} from "next/router";
import {ListItem, ListItemText, Typography} from "@mui/material";

export const SideNavTextItem = ({item}) => {
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
            <ListItemText disableTypography>
                <Typography align={"left"} className={clsx(typographyClasses.bodySecondaryText, isActive(item) && typographyClasses.bodyPrimary)}>
                    {item.label}
                </Typography>
            </ListItemText>
        </ListItem>
    )
}