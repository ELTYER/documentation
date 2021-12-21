import clsx from "clsx";
import React from "react";
import {useSideNavStyles, useTypographyStyles} from "../../styles";
import {useRouter} from "next/router";
import {ListItem, ListItemIcon, ListItemText, Typography} from "@mui/material";

export const SideNavButton = ({item, sideNavOpen, textAlign="center"}) => {
    const sideNavClasses = useSideNavStyles();
    const typographyClasses = useTypographyStyles();
    const router = useRouter();

    const handleClick = () => {
        router.push(item.href)
    }

    return (
        <ListItem
            key={item.id}
            button
            onClick={() => handleClick(item)}
            className={clsx(sideNavClasses.sideNavListItem, sideNavClasses.sideNavListItemButtonPrimary)}
        >
            {item.icon !== undefined &&
                <ListItemIcon className={clsx(typographyClasses.bodyWhite)}>
                    {item.icon}
                </ListItemIcon>
            }
            {sideNavOpen &&
                <ListItemText disableTypography >
                    <Typography className={typographyClasses.bodyWhite} align={textAlign}>
                        {item.label}
                    </Typography>
                </ListItemText>
            }
        </ListItem>
    )
}