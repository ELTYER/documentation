import make
export const useTypographyStyles = makeStyles((theme) => ({
    pageHeader: {
        fontSize: 28,
        color: '#222222'
    },
    sectionHeader: {
        fontSize: 26,
        color: '#222222'
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
    installText: {
        fontSize: 36,
        lineHeight: 1.7,
        '&:message': {
            '&:cursor': {
                show: false,
                blink: true,
                element: '|',
                hideWhenDone: false,
                hideWhenDoneDelay: 1000,
            }
        }
    },
    largeBody: {
        fontSize: 16,
        color: '#a4a4a4'
    },
    headerBody: {
        fontSize: 14,
        color: '#222222'
    },
    body: {
        fontSize: 14,
        color: '#494949'
    },
    boldBody: {
        fontSize: 14,
        fontWeight: "bold",
        color: '#757575'
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
    listItemHeaderText: {
        fontSize: 14,
    },
    listItemText: {
        fontSize: 12,
    },
    listItemActiveText: {
        fontSize: 14,
        color: "#ffffff",
        "&:hover": {
            color: theme.palette.primary.main,
        },
    },
    codingKittiesHeader: {
        fontSize: 40,
    }
}));