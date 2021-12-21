import {makeStyles} from "@mui/styles";

export const useLogoStyles = makeStyles((theme) => ({
    pageLogo: {
        [theme.breakpoints.only('xs')]: {
            height: "30px",
            width: "30px",
        },
        [theme.breakpoints.up('sm')]: {
            height: "40px",
            width: "40px",
        },
        [theme.breakpoints.up('md')]: {
            height: "50px",
            width: "50px",
        },
        height: "75px",
        width: "75px",
    },
    logoSmall: {
        height: "12px",
        width: "12px",
    },
    logoMedium: {
        height: "25px",
        width: "25px",
    },
    logoLarge: {
        height: "60px",
        width: "60px",
    },
    appLogoSmall: {
        height: "35px",
        width: "35px",
    },
    appLogoMedium: {
        height: "45px",
        width: "45px",
    },
    appLogoLarge: {
        height: "60px",
        width: "60px",
    },
    appTextSmall: {
        height: "20px",
    },
    appTextMedium: {
        height: "25px",
    },
    appTextLarge: {
        height: "30px",
    }
}), { index: 1 });