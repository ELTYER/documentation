import React from "react";
import {useSideNavStyles} from "../../styles";
import {useRouter} from "next/router";
import {ListItem, ListItemIcon} from "@mui/material";
import {useSelector} from "react-redux";

export const SideNavIconItem = ({item}) => {
    const sideNavClasses = useSideNavStyles();
    const router = useRouter();
    const sideNavValue = useSelector(state => state.layout.sideNavValue);

    const isActive = () => {
        return item.id === sideNavValue;
    }

    const handleClick = () => {
        router.push(item.href)
    }

    return (
        <ListItem button className={sideNavClasses.sideNavListItem} button onClick={() => handleClick()}>
            <ListItemIcon>
                {isActive()? item.activeIcon : item.icon}
            </ListItemIcon>
        </ListItem>
    )
}