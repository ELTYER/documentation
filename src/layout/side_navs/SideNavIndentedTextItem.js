import clsx from "clsx";
import React from "react";
import {useRouter} from "next/router";
import {useSideNavStyles, useTypographyStyles} from "../../styles";
import {ListItem, ListItemText, Typography} from "@mui/material";

export const SideNavIndentedTextItem = ({item}) => {
    const router = useRouter();
    const sideNavClasses = useSideNavStyles();
    const typographyClasses = useTypographyStyles();

    const handleClick = () => {
        router.push(item.href)
    }

    const isActive = () => {
        return false;
    }

    return (
        <ListItem
            button
            onClick={() => handleClick()}
            className={clsx(sideNavClasses.sideNavListItemNested, isActive(item) && sideNavClasses.sideNavListItemNestedActive)}
        >
            <ListItemText disableTypography>
                <Typography align={"left"} className={clsx(typographyClasses.bodySecondaryText, isActive() && typographyClasses.bodyPrimary)}>
                    {item.label}
                </Typography>
            </ListItemText>
        </ListItem>
    )
}