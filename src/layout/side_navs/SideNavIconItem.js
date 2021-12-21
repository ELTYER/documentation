import React from "react";
import {useSideNavStyles} from "../../styles";
import {useRouter} from "next/router";
import {ListItem, ListItemIcon} from "@mui/material";

export const SideNavIconItem = ({item}) => {
    const sideNavClasses = useSideNavStyles();
    const router = useRouter();

    const handleClick = () => {
        router.push(item.href)
    }

    const isActive = () => {
        return false;
    }

    return (
        <ListItem button className={sideNavClasses.sideNavListItem} button onClick={() => handleClick()}>
            <ListItemIcon>
                {isActive()? item.activeIcon : item.icon}
            </ListItemIcon>
        </ListItem>
    )
}