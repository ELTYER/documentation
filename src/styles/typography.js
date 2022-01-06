import {makeStyles} from "@mui/styles";

export const useTypographyStyles = makeStyles((theme) => ({
    pageHeader: {
        fontSize: 28,
        color: theme.palette.textPrimary,
        [theme.breakpoints.only('xs')]: {
            fontSize: 20,
        },
        [theme.breakpoints.up('sm')]: {
            fontSize: 24,
        },
        [theme.breakpoints.up('lg')]: {
            fontSize: 28,
        },
    },
    pageHeaderSuccess: {
        fontSize: 28,
        color: theme.palette.success.main,
        [theme.breakpoints.only('xs')]: {
            fontSize: 20,
        },
        [theme.breakpoints.up('sm')]: {
            fontSize: 24,
        },
        [theme.breakpoints.up('lg')]: {
            fontSize: 28,
        },
    },
    sectionHeader: {
        fontSize: 24,
        color: theme.palette.textPrimary,
        [theme.breakpoints.only('md')]: {
            fontSize: 20,
        },
        [theme.breakpoints.only('sm')]: {
            fontSize: 16,
        },
        [theme.breakpoints.only('xs')]: {
            fontSize: 14,
        },
    },
    sectionHeaderSecond: {
        fontSize: 24,
        color: '#222222'
    },
    sectionHeaderThird: {
        fontSize: 22,
        color: '#222222'
    },
    sectionHeaderFourth: {
        fontSize: 20,
        color: '#222222'
    },
    sectionHeaderFifth: {
        fontSize: 18,
        color: '#222222'
    },
    sectionHeaderWhite: {
        fontSize: 18,
        color: '#FFFFFF'
    },
    appBarLogo: {
        fontFamily: 'Lexend Giga',
        [theme.breakpoints.only('xs')]: {
            fontSize: 13,
        },
        [theme.breakpoints.up('sm')]: {
            fontSize: 16,
        },
        [theme.breakpoints.up('lg')]: {
            fontSize: 24,
        }
    },
    appBarLogoSecondary: {
        [theme.breakpoints.only('xs')]: {
            fontSize: 13,
        },
        [theme.breakpoints.up('sm')]: {
            fontSize: 16,
        },
        [theme.breakpoints.up('lg')]: {
            fontSize: 24,
        },
        color: theme.palette.textSecondary
    },
    sectionHeaderPrimary: {
        fontSize: 24,
        color: theme.palette.primary.main,
        [theme.breakpoints.down('sm')]: {
            fontSize: 20,
        },
        [theme.breakpoints.down('sm')]: {
            fontSize: 14,
        },
    },
    sectionHeaderSecondary: {
        fontSize: 24,
        color: theme.palette.secondary.main,
        [theme.breakpoints.down('sm')]: {
            fontSize: 20,
        },
        [theme.breakpoints.down('sm')]: {
            fontSize: 14,
        },
    },
    sectionHeaderWarning: {
        fontSize: 24,
        color: theme.palette.warning.main,
        [theme.breakpoints.down('sm')]: {
            fontSize: 20,
        },
        [theme.breakpoints.down('sm')]: {
            fontSize: 14,
        },
    },
    sectionHeaderDanger: {
        fontSize: 24,
        color: theme.palette.error.main,
        [theme.breakpoints.down('sm')]: {
            fontSize: 20,
        },
        [theme.breakpoints.down('sm')]: {
            fontSize: 14,
        },
    },
    sectionHeaderSuccess: {
        fontSize: 24,
        color: theme.palette.success.main,
        [theme.breakpoints.down('sm')]: {
            fontSize: 20,
        },
        [theme.breakpoints.down('sm')]: {
            fontSize: 14,
        },
    },
    sectionHeaderRed: {
        fontSize: 24,
        color: theme.palette.error.main,
        [theme.breakpoints.down('sm')]: {
            fontSize: 20,
        },
        [theme.breakpoints.down('sm')]: {
            fontSize: 14,
        },
    },
    sectionHeaderTwo: {
        fontSize: 22,
        color: theme.palette.textPrimary,
        [theme.breakpoints.down('sm')]: {
            fontSize: 18,
        },
        [theme.breakpoints.down('sm')]: {
            fontSize: 12,
        },
    },
    sectionHeaderTwoPrimary: {
        fontSize: 22,
        color: theme.palette.primary.main,
        [theme.breakpoints.down('sm')]: {
            fontSize: 18,
        },
        [theme.breakpoints.down('sm')]: {
            fontSize: 12,
        },
    },
    sectionHeaderTwoSuccess: {
        fontSize: 22,
        color: theme.palette.success.main,
        [theme.breakpoints.down('sm')]: {
            fontSize: 18,
        },
        [theme.breakpoints.down('sm')]: {
            fontSize: 12,
        },
    },
    sectionHeaderTwoWarning: {
        fontSize: 22,
        color: theme.palette.warning.main,
        [theme.breakpoints.down('sm')]: {
            fontSize: 18,
        },
        [theme.breakpoints.down('sm')]: {
            fontSize: 12,
        },
    },
    sectionHeaderTwoWhite: {
        fontSize: 22,
        color: theme.palette.white,
        [theme.breakpoints.down('sm')]: {
            fontSize: 18,
        },
        [theme.breakpoints.down('sm')]: {
            fontSize: 12,
        },
    },
    sectionHeaderTwoDanger: {
        fontSize: 22,
        color: theme.palette.error.main,
        [theme.breakpoints.down('sm')]: {
            fontSize: 18,
        },
        [theme.breakpoints.down('sm')]: {
            fontSize: 12,
        },
    },
    headerBody: {
        fontSize: 20,
        [theme.breakpoints.down('sm')]: {
            fontSize: 16,
        },
        [theme.breakpoints.down('xs')]: {
            fontSize: 11,
        },
        color: theme.palette.textPrimary
    },
    headerBodyPrimary: {
        fontSize: 20,
        [theme.breakpoints.down('sm')]: {
            fontSize: 16,
        },
        [theme.breakpoints.down('xs')]: {
            fontSize: 11,
        },
        color: theme.palette.primary.main
    },
    headerBodyTwo: {
        fontSize: 18,
        [theme.breakpoints.down('sm')]: {
            fontSize: 16,
        },
        [theme.breakpoints.down('xs')]: {
            fontSize: 11,
        },
        color: theme.palette.textPrimary
    },
    body: {
        [theme.breakpoints.down('lg')]: {
            fontSize: 13,
        },
        [theme.breakpoints.down('xs')]: {
            fontSize: 10,
        },
        fontSize: 15,
        color: theme.palette.textPrimary
    },
    bodyWhite: {
        [theme.breakpoints.down('lg')]: {
            fontSize: 13,
        },
        [theme.breakpoints.down('xs')]: {
            fontSize: 10,
        },
        fontSize: 15,
        color: `${theme.palette.backgroundWhite.main}`
    },
    bodySecondary: {
        [theme.breakpoints.down('lg')]: {
            fontSize: 13,
        },
        [theme.breakpoints.down('xs')]: {
            fontSize: 10,
        },
        fontSize: 15,
        color: theme.palette.secondary.main
    },
    bodySecondaryText: {
        [theme.breakpoints.down('lg')]: {
            fontSize: 13,
        },
        [theme.breakpoints.down('xs')]: {
            fontSize: 10,
        },
        fontSize: 15,
        color: theme.palette.text.secondary
    },
    bodyPrimary: {
        [theme.breakpoints.down('lg')]: {
            fontSize: 13,
        },
        [theme.breakpoints.down('xs')]: {
            fontSize: 10,
        },
        fontSize: 15,
        color: theme.palette.primary.main
    },
    bodyDanger: {
        [theme.breakpoints.down('lg')]: {
            fontSize: 13,
        },
        [theme.breakpoints.down('xs')]: {
            fontSize: 10,
        },
        fontSize: 15,
        color: theme.palette.error.main
    },
    bodySuccess: {
        [theme.breakpoints.down('lg')]: {
            fontSize: 13,
        },
        [theme.breakpoints.down('xs')]: {
            fontSize: 10,
        },
        fontSize: 15,
        color: theme.palette.success.main
    },
    bodyDisabled: {
        [theme.breakpoints.down('lg')]: {
            fontSize: 13,
        },
        [theme.breakpoints.down('xs')]: {
            fontSize: 10,
        },
        fontSize: 15,
        color: theme.palette.text.disabled
    },
    bodyError: {
        [theme.breakpoints.down('lg')]: {
            fontSize: 13,
        },
        [theme.breakpoints.down('xs')]: {
            fontSize: 10,
        },
        fontSize: 15,
        color: theme.palette.error.main
    },
    bodyWarning: {
        [theme.breakpoints.down('lg')]: {
            fontSize: 13,
        },
        [theme.breakpoints.down('xs')]: {
            fontSize: 10,
        },
        fontSize: 15,
        color: theme.palette.warning.main
    },
    boldBody: {
        [theme.breakpoints.down('lg')]: {
            fontSize: 13,
        },
        [theme.breakpoints.down('xs')]: {
            fontSize: 10,
        },
        fontSize: 15,
        fontWeight: "bold",
        color: theme.palette.textPrimary
    },
    boldBodySecondary: {
        [theme.breakpoints.down('lg')]: {
            fontSize: 13,
        },
        [theme.breakpoints.down('xs')]: {
            fontSize: 10,
        },
        fontSize: 15,
        fontWeight: "bold",
        color: theme.palette.textSecondary
    },
    largeBoldBodyPrimary: {
        [theme.breakpoints.only('md')]: {
            fontSize: 18,
        },
        [theme.breakpoints.only('xs')]: {
            fontSize: 16,
        },
        fontSize: 20,
        fontWeight: "bold",
        color: theme.palette.primary.main
    },
    largeBody: {
        [theme.breakpoints.only('md')]: {
            fontSize: 18,
        },
        [theme.breakpoints.only('sm')]: {
            fontSize: 16,
        },
        [theme.breakpoints.only('xs')]: {
            fontSize: 14,
        },
        fontSize: 20,
        color: theme.palette.textPrimary
    },
    largeBodyBold: {
        [theme.breakpoints.only('md')]: {
            fontSize: 18,
        },
        [theme.breakpoints.only('sm')]: {
            fontSize: 16,
        },
        [theme.breakpoints.only('xs')]: {
            fontSize: 14,
        },
        fontSize: 20,
        color: theme.palette.textPrimary,
        fontWeight: "bold",
    },
    largeBodySecondary: {
        [theme.breakpoints.only('md')]: {
            fontSize: 18,
        },
        [theme.breakpoints.only('sm')]: {
            fontSize: 16,
        },
        [theme.breakpoints.only('xs')]: {
            fontSize: 14,
        },
        fontSize: 20,
        color: theme.palette.textSecondary
    },
    largeBodyPrimary: {
        [theme.breakpoints.only('md')]: {
            fontSize: 18,
        },
        [theme.breakpoints.only('sm')]: {
            fontSize: 16,
        },
        [theme.breakpoints.only('xs')]: {
            fontSize: 14,
        },
        fontSize: 20,
        color: theme.palette.primary.main
    },
    largeBodyWhite: {
        [theme.breakpoints.only('md')]: {
            fontSize: 18,
        },
        [theme.breakpoints.only('sm')]: {
            fontSize: 16,
        },
        [theme.breakpoints.only('xs')]: {
            fontSize: 14,
        },
        fontSize: 20,
        color: theme.palette.white
    },
    largeBodyError: {
        [theme.breakpoints.only('md')]: {
            fontSize: 18,
        },
        [theme.breakpoints.only('sm')]: {
            fontSize: 16,
        },
        [theme.breakpoints.only('xs')]: {
            fontSize: 14,
        },
        fontSize: 20,
        color: theme.palette.error.main
    },
    largeBodySuccess: {
        [theme.breakpoints.only('md')]: {
            fontSize: 18,
        },
        [theme.breakpoints.only('sm')]: {
            fontSize: 16,
        },
        [theme.breakpoints.only('xs')]: {
            fontSize: 14,
        },
        fontSize: 20,
        color: theme.palette.success.main
    },
    largeBodyDisabled: {
        [theme.breakpoints.only('md')]: {
            fontSize: 18,
        },
        [theme.breakpoints.only('xs')]: {
            fontSize: 16,
        },
        fontSize: 20,
        color: theme.palette.success.main
    },
    largeBodyWarning: {
        [theme.breakpoints.only('md')]: {
            fontSize: 18,
        },
        [theme.breakpoints.only('xs')]: {
            fontSize: 16,
        },
        fontSize: 20,
        color: theme.palette.warning.main
    },
    organizationDropdownHelpText: {
        fontSize: 14
    },
    organizationDropdownSelected: {
        fontSize: 14,
        color: theme.palette.primary.main
    },
    organizationDropdownUnSelected: {
        fontSize: 12,
    },
    listItemText: {
        fontSize: 14,
        transition: theme.transitions.create(['width', 'margin'], {
            easing: theme.transitions.easing.easeIn,
            duration: 200,
        }),
    },
    listHeaderItemText: {
        fontSize: 12,
        color: theme.palette.textPrimary
    },
    listItemActiveText: {
        fontSize: 14,
        color: "#ffffff",
        "&:hover": {
            color: theme.palette.primary.main,
        },
    },
    sideNavItemText: {
        color: theme.palette.textPrimary,
        fontSize: 14,
    },
    sideNavItemActiveText: {
        color: theme.palette.primary.main,
        fontSize: 14,
    },
    sideNavIcon: {
        color: theme.palette.textPrimary
    },
    sideNavActiveIcon: {
        color: theme.palette.primary.main,
    },
    underlineText: {
        color: theme.palette.primary.main,
        fontSize: 10
    },
    greenChange: {
        fontSize: 16,
        color: theme.palette.success.main
    },
    smallBody: {
        fontSize: 12,
        color: theme.palette.textPrimary,
        [theme.breakpoints.only('md')]: {
            fontSize: 10,
        },
        [theme.breakpoints.down('sm')]: {
            fontSize: 8,
        },
    },
    smallBodyWhite: {
        fontSize: 12,
        color: '#FFFFFF',
        [theme.breakpoints.only('md')]: {
            fontSize: 10,
        },
        [theme.breakpoints.down('sm')]: {
            fontSize: 8,
        },
    },
    smallBodySecondaryText: {
        fontSize: 12,
        color: theme.palette.textSecondary,
        [theme.breakpoints.only('md')]: {
            fontSize: 10,
        },
        [theme.breakpoints.down('sm')]: {
            fontSize: 8,
        },
    },
    smallBodySuccess: {
        fontSize: 12,
        color: theme.palette.success.main,
        [theme.breakpoints.only('md')]: {
            fontSize: 10,
        },
        [theme.breakpoints.down('sm')]: {
            fontSize: 8,
        },
    },
    smallBodyWarning: {
        fontSize: 12,
        color: theme.palette.warning.main,
        [theme.breakpoints.only('md')]: {
            fontSize: 10,
        },
        [theme.breakpoints.down('sm')]: {
            fontSize: 8,
        },
    },
    smallBodyError: {
        fontSize: 12,
        color: theme.palette.error.main,
        [theme.breakpoints.only('md')]: {
            fontSize: 10,
        },
        [theme.breakpoints.down('sm')]: {
            fontSize: 8,
        },
    },
    smallBodyPrimary: {
        fontSize: 10,
        color: theme.palette.primary.main,
        [theme.breakpoints.only('md')]: {
            fontSize: 10,
        },
        [theme.breakpoints.down('sm')]: {
            fontSize: 8,
        },
    },
    smallBodySecondary: {
        fontSize: 12,
        color: theme.palette.secondary.main,
        [theme.breakpoints.only('md')]: {
            fontSize: 10,
        },
        [theme.breakpoints.down('sm')]: {
            fontSize: 8,
        },
    },
    sectionHeaderMargin: {
        marginBottom: theme.spacing(1)
    },
}), {name: "MuiCustomStyleTypography"});