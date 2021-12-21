import React from "react";
import PropTypes from "prop-types";
import {Tab, Tabs, useMediaQuery} from "@mui/material";
import {withStyles} from "@mui/styles";

function a11yProps(index) {
    return {
        id: `full-width-tab-${index}`,
        'aria-controls': `full-width-tabpanel-${index}`,
    };
}

const CustomTab = withStyles((theme) => ({
    root: {
        textTransform: "none",
        [theme.breakpoints.only('sm')]: {
            fontSize: 14,
        },
        [theme.breakpoints.only('xs')]: {
            fontSize: 10,
        },
        fontSize: 16
    }
}))(Tab);

export const CustomTabs = withStyles(theme => ({
    root: {
        borderBottom: '2px solid #e8e8e8',
    },
    indicator: {
        display: "flex",
        justifyContent: "center",
        backgroundColor: "transparent",
        height: 3,
        "& > div": {
            borderTopLeftRadius: 3,
            borderTopRightRadius: 3,
            maxWidth: 40,
            width: "100%",
            backgroundColor: theme.palette.primary.main
        }
    }
}))(props => <Tabs {...props} TabIndicatorProps={{ children: <div /> }} />);

const SwipeableTabs = props => {
    const {labels} = props;
    const xs = useMediaQuery(theme => theme.breakpoints.only("xs"));

    return (
        <>
            <CustomTabs
                value={0}
                indicatorColor="primary"
                textColor="primary"
                variant={xs? "fullWidth" : "standard"}
                aria-label="full width tabs example"
            >
                {labels.map((label, index) =>
                    <CustomTab key={index} wrapped label={label} {...a11yProps(index)} />
                )}
            </CustomTabs>
        </>
    )
}

SwipeableTabs.propTypes = {
    labels: PropTypes.arrayOf(PropTypes.string).isRequired
};

export default SwipeableTabs;