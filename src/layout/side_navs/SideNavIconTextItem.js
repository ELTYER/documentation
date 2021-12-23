import clsx from "clsx";
import React from "react";
import {useSideNavStyles, useTypographyStyles} from "../../styles";
import {useRouter} from "next/router";
import {Box, ListItem, Typography} from "@mui/material";
import {useDispatch, useSelector} from "react-redux";
import {pageLoadingActions} from "../../redux/actions";


export const SideNavIconTextItem = ({item}) => {
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