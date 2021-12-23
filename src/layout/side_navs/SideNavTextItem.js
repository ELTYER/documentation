import clsx from "clsx";
import React from "react";
import {useSideNavStyles, useTypographyStyles} from "../../styles";
import {useRouter} from "next/router";
import {ListItem, ListItemText, Typography} from "@mui/material";
import {pageLoadingActions} from "../../redux/actions";
import {useDispatch, useSelector} from "react-redux";

export const SideNavTextItem = ({item}) => {
    const sideNavClasses = useSideNavStyles();
    const typographyClasses = useTypographyStyles();
    const router = useRouter();
    const dispatch = useDispatch();
    const sideNavValue = useSelector(state => state.layout.sideNavValue);

    const isActive = () => {
        return item.id === sideNavValue;
    }

    const handleClick = () => {
        dispatch(pageLoadingActions.start());
        router.push(item.href)
    }

    return (
        <ListItem button onClick={() => handleClick(item)} className={clsx(sideNavClasses.sideNavListItem, isActive() && sideNavClasses.sideNavActiveItem)}>
            <ListItemText disableTypography>
                <Typography align={"left"} className={clsx(typographyClasses.bodySecondaryText, isActive() && typographyClasses.bodyPrimary)}>
                    {item.label}
                </Typography>
            </ListItemText>
        </ListItem>
    )
}