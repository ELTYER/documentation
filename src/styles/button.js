import {makeStyles} from "@mui/styles";
import {alpha} from "@mui/material";

export const useButtonStyles = makeStyles(theme => ({
    smallButton: {
        maxHeight: "20px",
        textTransform: 'none',
        [theme.breakpoints.down('sm')]: {
            fontSize: 10,
        },
        fontSize: 12,
    },
    iconButton: {
        height: "30px",
        width: "30px",
    },
    standardButton: {
        textTransform: 'none',
        [theme.breakpoints.only('xs')]: {
            fontSize: 10,
        },
        [theme.breakpoints.only('sm')]: {
            fontSize: 12,
        },
        fontSize: 14,
    },
    dropDownButton: {
        backgroundColor: `${alpha(theme.palette.primary.main, 0.10)} `
    },
    stepperButton: {
        textTransform: 'none',
        [theme.breakpoints.down('sm')]: {
            fontSize: 10,
        },
        fontSize: 12,
    },
    primaryBackgroundHoverButton: {
        "&:hover": {
            backgroundColor: alpha(theme.palette.primary.main, 0.15)
        }
    },
    algorithmActivateButton: {
        textTransform: 'none',
        fontWeight: theme.typography.fontWeightRegular,
        [theme.breakpoints.only('xs')]: {
            fontSize: 12,
        },
        [theme.breakpoints.up('sm')]: {
            fontSize: 15,
        },
        color: theme.palette.success.main
    },
    algorithmDeactivateButton: {
        textTransform: 'none',
        fontWeight: theme.typography.fontWeightRegular,
        [theme.breakpoints.only('xs')]: {
            fontSize: 12,
        },
        [theme.breakpoints.up('sm')]: {
            fontSize: 15,
        },
        color: theme.palette.warning.main
    },
    textButton: {
        textTransform: 'none',
    },
    textButtonPrimary: {
        textTransform: 'none',
        color: theme.palette.primary.main,
        "&:hover": {
            backgroundColor: alpha(theme.palette.primary.main, 0.2)
        }
    },
    textButtonSecondary: {
        textTransform: 'none',
        color: theme.palette.secondary.main,
        "&:hover": {
            backgroundColor: alpha(theme.palette.secondary.main, 0.2)
        }
    },
    sideNavPrimaryClosedButton: {
        borderRadius: 10,
        backgroundColor: theme.palette.primary.main,
        color: theme.palette.white,
        // width: "45px",
        marginLeft: "10px",
        transition: theme.transitions.create(['width', 'margin'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
        }),
    },
    sideNavPrimaryButton: {
        borderRadius: 10,
        backgroundColor: theme.palette.primary.main,
        color: theme.palette.white,
        marginLeft: "10px",
        marginRight: "10px",
    },
    sideNavButtonClosedButton: {
        maxWidth: "45px",
        minWidth: "45px",
        transition: theme.transitions.create(['width', 'margin'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
        }),
    },
    defaultSideNavBackgroundColorButton: {
        maxWidth: "45px",
        minWidth: "45px",
        backgroundColor: theme.palette.background.default,
        transition: theme.transitions.create(['width', 'margin'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
        }),
    },
    backgroundColorSecondaryButton: {
        backgroundColor: `${theme.palette.secondary.main} `
    },
    backgroundColorPrimaryButton: {
        backgroundColor: `${theme.palette.primary.main} `
    },
    activePrimaryButton: {
        color: `${theme.palette.primary.main} `
    },
    activeSecondaryButton: {
        color: `${theme.palette.secondary.main} `
    },
    primaryButton: {
        textTransform: 'none',
        fontWeight: theme.typography.fontWeightRegular,
        [theme.breakpoints.only('xs')]: {
            fontSize: 12,
        },
        [theme.breakpoints.up('sm')]: {
            fontSize: 15,
        },
        backgroundColor: `${theme.palette.primary.main} `,
        color: `${theme.palette.white} `,
        '&:hover': {
            backgroundColor: `${theme.palette.primary.light} `,
        },
    },
    dangerButton: {
        textTransform: 'none',
        fontWeight: theme.typography.fontWeightRegular,
        [theme.breakpoints.only('xs')]: {
            fontSize: 12,
        },
        [theme.breakpoints.up('sm')]: {
            fontSize: 15,
        },
        backgroundColor: `${theme.palette.error.main} `,
        color: `${theme.palette.white} `
    },
    successButton: {
        textTransform: 'none',
        fontWeight: theme.typography.fontWeightRegular,
        [theme.breakpoints.only('xs')]: {
            fontSize: 12,
        },
        [theme.breakpoints.up('sm')]: {
            fontSize: 15,
        },
        backgroundColor: `${theme.palette.success.main} `,
        color: `${theme.palette.white} `,
        '&:hover': {
            backgroundColor: `${theme.palette.success.light} `,
        },
    },
    successButtonText: {
        textTransform: 'none',
        fontWeight: theme.typography.fontWeightRegular,
        [theme.breakpoints.only('xs')]: {
            fontSize: 12,
        },
        [theme.breakpoints.up('sm')]: {
            fontSize: 15,
        },
        color: `${theme.palette.success.main} `
    },
    successButtonTextSmall: {
        maxHeight: "20px",
        textTransform: 'none',
        fontWeight: theme.typography.fontWeightRegular,
        [theme.breakpoints.only('xs')]: {
            fontSize: 10,
        },
        [theme.breakpoints.up('sm')]: {
            fontSize: 12,
        },
        color: `${theme.palette.success.main} `
    },
    warningButton: {
        textTransform: 'none',
        fontWeight: theme.typography.fontWeightRegular,
        [theme.breakpoints.only('xs')]: {
            fontSize: 12,
        },
        [theme.breakpoints.up('sm')]: {
            fontSize: 15,
        },
        backgroundColor: `${theme.palette.warning.main} `,
        color: `${theme.palette.white} `
    },
    warningButtonText: {
        textTransform: 'none',
        fontWeight: theme.typography.fontWeightRegular,
        [theme.breakpoints.only('xs')]: {
            fontSize: 12,
        },
        [theme.breakpoints.up('sm')]: {
            fontSize: 15,
        },
        color: `${theme.palette.warning.main} `
    },
    primaryTextButton: {
        textTransform: 'none',
        color: `${theme.palette.primary.main} `,
        '&:hover': {
            backgroundColor: `${alpha(theme.palette.primary.light, 0.2)} `,
        },
    },
    primaryTextButtonActive: {
        textTransform: 'none',
        backgroundColor: `${alpha(theme.palette.primary.light, 0.2)} `,
        color: `${theme.palette.primary.main} `,
        '&:hover': {
            backgroundColor: `${alpha(theme.palette.primary.light, 0.2)} `,
        },
    }
}),  { index: 2 });