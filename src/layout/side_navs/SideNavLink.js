import clsx from "clsx";
import React from "react";
import {useSideNavStyles, useTypographyStyles} from "../../styles";
import {useRouter} from "next/router";
import {Link, ListItem, ListItemText, Typography} from "@mui/material";
import {useDispatch} from "react-redux";
import {pageLoadingActions} from "../../redux/actions";

export const SideNavLink = ({item}) => {
    const sideNavClasses = useSideNavStyles();
    const typographyClasses = useTypographyStyles();
    const router = useRouter();
    const dispatch = useDispatch();

    const handleClick = () => {
        dispatch(pageLoadingActions.start());
        router.push(item.href);
    }

    return (
        <ListItem className={sideNavClasses.sideNavListItem}>
            <ListItemText disableTypography>
                <Typography className={clsx(typographyClasses.bodyPrimary)}>
                    <Link href={item.href} onClick={() => handleClick()}>
                        {item.label}
                    </Link>
                </Typography>
            </ListItemText>
        </ListItem>
    )
}