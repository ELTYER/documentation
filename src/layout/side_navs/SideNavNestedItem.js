import React, {useState} from "react";
import clsx from "clsx";
import {useSideNavStyles, useTypographyStyles} from "../../styles";
import {useRouter} from "next/router";
import {Collapse, List, ListItem, ListItemText, Typography} from "@mui/material";
import {ChevronRight, ExpandLess} from "@mui/icons-material";

export const SideNavNestedItem = ({item}) => {
    const [open, setOpen] = useState(false);
    const sideNavClasses = useSideNavStyles();
    const typographyClasses = useTypographyStyles();
    const router = useRouter();

    const handleClick = (item) => {
        router.push(item.href)
    }

    const isActive = (childItem) => {
        return false;
    }

    return (
        <>
            <ListItem className={sideNavClasses.sideNavListItem} button onClick={() => setOpen(!open)}>
                <ListItemText disableTypography>
                    <Typography className={clsx(typographyClasses.boldBodySecondary)}>
                        {item.label}
                    </Typography>
                </ListItemText>
                {open ? <ExpandLess className={typographyClasses.largeBoldBodyPrimary} /> : <ChevronRight className={typographyClasses.largeBoldBodyPrimary} />}
            </ListItem>
            <Collapse in={open} timeout="auto" unmountOnExit>
                <List disablePadding>
                    {item.children.map((childItem, index) =>
                        <ListItem
                            onClick={() => handleClick(childItem)}
                            key={index}
                            button
                            className={clsx(sideNavClasses.sideNavListItemNested, isActive(childItem) && sideNavClasses.sideNavListItemNestedActive)}
                        >
                            <ListItemText disableTypography>
                                <Typography className={clsx(isActive(childItem)? typographyClasses.bodyPrimary: typographyClasses.bodySecondaryText)}>
                                    {childItem.label}
                                </Typography>
                            </ListItemText>
                        </ListItem>
                    )}
                </List>
            </Collapse>
        </>
    )
}