import clsx from "clsx";
import React from "react";
import {useRouter} from "next/router";
import {useSideNavStyles, useTypographyStyles} from "../../styles";
import {ListItem, ListItemText, Typography} from "@mui/material";
import {useDispatch, useSelector} from "react-redux";
import {pageLoadingActions} from "../../redux/actions";

export const SideNavIndentedTextItem = ({item}) => {
    const router = useRouter();
    const sideNavClasses = useSideNavStyles();
    const typographyClasses = useTypographyStyles();
    const dispatch = useDispatch();
    const sideNavValue = useSelector(state => state.layout.sideNavValue);

    const isActive = () => {
        return item.id === sideNavValue;
    }

    const handleClick = () => {
        dispatch(pageLoadingActions.start())
        router.push(item.href)
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