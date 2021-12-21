import React from 'react';
import {CustomTabSecondary, CustomTabsSecondary} from "../tabs";
import {useRouter} from "next/router";
import {Grid, Typography} from "@mui/material";


const useStyles = makeStyles(theme => ({
    header: {
        color: '#ffffff',
        [theme.breakpoints.up('sm')]: {
            fontSize: 18,
        },
        [theme.breakpoints.up('md')] : {
            fontSize: 20,
        }
    },
    grow: {
        flexGrow: 1,
    },
    toolbar: {
        backgroundColor: theme.palette.primary.light,
    },
    title: {
        marginTop: theme.spacing(2),
        marginBottom: theme.spacing(2)
    },
    active: {
        color: theme.palette.primary.main,
    }
}));

function a11yProps(index) {
    return {
        id: `simple-tab-${index}`,
        'aria-controls': `simple-tabpanel-${index}`,
    };
}

const DocumentationSubHeaderContent = props => {
    const classes = useStyles();
    const router = useRouter();

    const initialValue = () => {
        const {pathname} = router;

        if(pathname.includes('/investing-algorithm-framework-plugin/overview')) {
            return 0;
        } else if(pathname.includes('/investing-algorithm-framework-plugin/guides/overview')) {
            return 1;
        } else if(pathname.includes('/investing-algorithm-framework-plugin/framework-features/overview')) {
            return 2;
        }
        return 0;
    }

    const [value, setValue] = React.useState(initialValue());

    const handleChange = (event, newValue) => {
        setValue(newValue);

        if(newValue === 0) {
            router.push('/investing-algorithm-framework-plugin/general/overview');
        } else if(newValue === 1) {
            router.push('/investing-algorithm-framework-plugin/guides/overview');
        } else if(newValue === 2) {
            router.push('/investing-algorithm-framework-plugin/framework-features/overview');
        }
    };

    return (
        <>
            <Grid
                container
                direction="row"
                justify="flex-start"
                alignItems="center"
            >
                <Grid item xs={12} className={classes.title}>
                    <Typography noWrap color={'primary'} className={classes.header}>
                        Documentation
                    </Typography>
                </Grid>
                <Grid item xs={12}>
                    <CustomTabsSecondary
                        textColor="secondary"
                        value={value} onChange={handleChange}
                        aria-label="simple tabs example"
                    >
                        <CustomTabSecondary label="General" {...a11yProps(0)} />
                        <CustomTabSecondary label="Guides" {...a11yProps(1)} />
                        <CustomTabSecondary label="Framework Features" {...a11yProps(2)} />
                    </CustomTabsSecondary>
                </Grid>
            </Grid>
        </>
    )
};

const DevelopmentSubSubHeaderContent = props => {
    const classes = useStyles();
    const router = useRouter();

    const initialValue = () => {
        const {pathname} = router;

        if(pathname.includes('/python-client/general/')) {
            return 0;
        } else if(pathname.includes('/python-client/framework/')) {
            return 1;
        } else if(pathname.includes('/python-client/investing-algorithm-framework-plugin/')) {
            return 2;
        }
        return 0;
    }

    const [value, setValue] = React.useState(initialValue());

    const handleChange = (event, newValue) => {
        setValue(newValue);

        if(newValue === 0) {
            router.push('/python-client/general/overview');
        } else if(newValue === 1) {
            router.push('/python-client/framework/overview');
        } else if(newValue === 2) {
            router.push('/python-client/investing-algorithm-framework-plugin/overview');
        }
    };

    return (
        <>
            <Grid
                container
                direction="row"
                justify="flex-start"
                alignItems="center"
            >
                <Grid item xs={12} className={classes.title}>
                    <Typography noWrap color={'primary'} className={classes.header}>
                        Development
                    </Typography>
                </Grid>
                <Grid item xs={12}>
                    <CustomTabsSecondary
                        textColor="secondary"
                        value={value}
                        onChange={handleChange}
                        aria-label="simple tabs example"
                    >
                        <CustomTabSecondary label="General" {...a11yProps(0)} />
                        <CustomTabSecondary label="Framework" {...a11yProps(1)} />
                        <CustomTabSecondary label="Documentation" {...a11yProps(2)} />
                    </CustomTabsSecondary>
                </Grid>
            </Grid>
        </>
    )
};

function SubHeaderContent (props) {
    const router = useRouter();
    const {pathname} = router;

    if(pathname.includes('/python-client/')) {
        return <DevelopmentSubSubHeaderContent {...props}/>
    } else if(pathname.includes('/investing-algorithm-framework-plugin/')) {
        return <DocumentationSubHeaderContent {...props}/>;
    }
    return null;
}

export default SubHeaderContent;